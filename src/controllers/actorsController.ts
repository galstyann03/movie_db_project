import {NextFunction, Request, Response} from "express";
import {
    getAllActorsService,
    getActorByIdService,
    createActorService,
    updateActorService,
    deleteActorService
} from "../services/actorsService";
import {CreateActorDto, UpdateActorDto} from "../dtos/actor.dto";

export async function getAllActors(req: Request, res: Response, next: NextFunction) {
    try {
        const actors = await getAllActorsService();
        if (!actors || actors.length === 0)
            return res.status(404).json({error: 'No actors found'});
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
        const actor = await createActorService(actorDto);
        if (!actor)
            return res.status(400).json({error: 'Invalid actor data'});
        res.status(201).json(actor);
    } catch (err) {
        next(err);
    }
}

export async function updateActor(req: Request, res: Response, next: NextFunction) {
    try {
        const actorDto = Object.assign(new UpdateActorDto(), req.body);
        const actor = await updateActorService(parseInt(req.params.id), actorDto);
        if (actor) res.json(actor);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteActor(req: Request, res: Response, next: NextFunction) {
    try {
        const actor = await deleteActorService(parseInt(req.params.id));
        if (actor) res.json(actor);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}
