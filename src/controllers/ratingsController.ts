import {NextFunction, Request, Response} from "express";
import {
    getAllRatingsService,
    getRatingByMovieIdService,
    createRatingService,
    updateRatingService,
    deleteRatingService
} from "../services/ratingsService";
import Rating from "../models/ratingModel";

export async function getAllRatings(req: Request, res: Response, next: NextFunction) {
    try {
        const ratings: Rating[] = await getAllRatingsService();
        res.json(ratings);
    } catch (err) {
        next(err);
    }
}

export async function getRatingByMovieId(req: Request, res: Response, next: NextFunction) {
    try {
        const rating: Rating | null= await getRatingByMovieIdService(parseInt(req.params.id));
        if (rating) res.json(rating);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}

export async function createRating(req: Request, res: Response, next: NextFunction) {
    try {
        const {movieId, rating} = req.body;
        const result = await createRatingService(movieId, rating);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateRating(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await updateRatingService(parseInt(req.params.id), req.body.rating);
        if (result) res.json(result);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteRating(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await deleteRatingService(parseInt(req.params.id));
        if (result) res.json(result);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}