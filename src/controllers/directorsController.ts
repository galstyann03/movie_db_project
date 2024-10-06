import {NextFunction, Request, Response} from "express";
import {
    getAllDirectorsService,
    getDirectorByIdService,
    createDirectorService,
    updateDirectorService,
    deleteDirectorService
} from "../services/directorsService";
import {CreateDirectorDto, UpdateDirectorDto} from "../dtos/director.dto";

export async function getAllDirectors(req: Request, res: Response, next: NextFunction) {
    try {
        const directors = await getAllDirectorsService();
        res.json(directors);
    } catch (err) {
        next(err);
    }
}

export async function getDirectorById(req: Request, res: Response, next: NextFunction) {
    try {
        const director= await getDirectorByIdService(parseInt(req.params.id));
        if (director) res.json(director);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}

export async function createDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const createDirectorDto: CreateDirectorDto = req.body;
        const result = await createDirectorService(createDirectorDto);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const updateDirectorDto: UpdateDirectorDto = req.body;
        const result = await updateDirectorService(parseInt(req.params.id), updateDirectorDto);
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