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
        if (!directors || directors.length === 0)
            return res.status(404).json({error: 'No directors found'});
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
        const directorDto = Object.assign(new CreateDirectorDto(), req.body);
        const director = await createDirectorService(directorDto);
        res.status(201).json(director);
    } catch (err) {
        next(err);
    }
}

export async function updateDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const directorDto = Object.assign(new UpdateDirectorDto(), req.body);
        const director = await updateDirectorService(parseInt(req.params.id), directorDto);
        if (director) res.json(director);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteDirector(req: Request, res: Response, next: NextFunction) {
    try {
        const director = await deleteDirectorService(parseInt(req.params.id));
        if (director) res.json(director);
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}
