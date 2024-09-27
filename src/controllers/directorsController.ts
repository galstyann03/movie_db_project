import {NextFunction, Request, Response} from "express";
import {
    getAllDirectorsService,
    getDirectorByIdService,
    createDirectorService,
    updateDirectorService,
    deleteDirectorService
} from "../services/directorsService";
import Director from "../models/directorModel";

export async function getAllDirectors(req: Request, res: Response, next: NextFunction) {
    try {
        const directors: Director[] = await getAllDirectorsService();
        res.json(directors);
    } catch (err) {
        next(err);
    }
}

export async function getDirectorById(req: Request, res: Response, next: NextFunction) {
    try {
        const director: Director | null= await getDirectorByIdService(parseInt(req.params.id));
        if (director) res.json(director);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}

export async function createDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const {name, nationality, dob} = req.body;
        const result = await createDirectorService(name, nationality, dob);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const {name, nationality, dob} = req.body;
        const result = await updateDirectorService(parseInt(req.params.id), name, nationality, dob);
        if (result) res.json(result);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await deleteDirectorService(parseInt(req.params.id));
        if (result) res.json(result);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}