import {NextFunction, Request, Response} from "express";
import {
    getAllActorsService,
    getActorByIdService,
    createActorService,
    updateActorService,
    deleteActorService
} from "../services/actorsService";
import {CreateActorDto, UpdateActorDto} from "../dtos/actor.dto";
import {validate} from "class-validator";

export async function getAllActors(req: Request, res: Response, next: NextFunction) {
    try {
        const actors = await getAllActorsService();
        res.json(actors);
    } catch (err) {
        next(err);
    }
}

export async function getActorById(req: Request, res: Response, next: NextFunction) {
    try {
        const actor = await getActorByIdService(parseInt(req.params.id));
        if (actor) res.json(actor);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}

export async function createActor(req: Request, res: Response, next: NextFunction) {
    try {
        const actorDto = Object.assign(new CreateActorDto(), req.body);
        const result = await createActorService(actorDto);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateActor(req: Request, res: Response, next: NextFunction) {
    try {
        const actorDto = Object.assign(new UpdateActorDto(), req.body);
        const result = await updateActorService(parseInt(req.params.id), actorDto);
        if (result) res.json(result);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteActor(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await deleteActorService(parseInt(req.params.id));
        if (result) res.json(result);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}