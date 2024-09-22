import {NextFunction, Request, Response} from "express";
import {
    getAllActorsService,
    getActorByIdService,
    createActorService,
    updateActorService,
    deleteActorService
} from "../services/actorsService";
import Actor from "../models/actorModel";

export async function getAllActors(req: Request, res: Response, next: NextFunction) {
    try {
        const actors: Actor[] = await getAllActorsService();
        res.json(actors);
    } catch (err) {
        next(err);
    }
}

export async function getActorById(req: Request, res: Response, next: NextFunction) {
    try {
        const actor: Actor | null= await getActorByIdService(parseInt(req.params.id));
        if (actor) res.json(actor);
        else res.status(404).json({error: 'Actor not found'});
    } catch (err) {
        next(err);
    }
}

export async function createActor(req: Request, res: Response, next: NextFunction) {
    try {
        const {name, nationality, dob} = req.body;
        const result = await createActorService(name, nationality, dob);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateActor(req: Request, res: Response, next: NextFunction) {
    try {
        const {name, nationality, dob} = req.body;
        const result = await updateActorService(parseInt(req.params.id), name, nationality, dob);
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
        else res.status(404).json({error: 'Director not found'});
    } catch (err) {
        next(err);
    }
}