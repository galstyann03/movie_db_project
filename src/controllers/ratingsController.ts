import {NextFunction, Request, Response} from "express";
import {
    getAllRatingsService,
    getRatingByMovieIdService,
    createRatingService,
    updateRatingService,
    deleteRatingService
} from "../services/ratingsService";
import {RatingDTO} from "../dtos/rating.dto";

export async function getAllRatings(req: Request, res: Response, next: NextFunction) {
    try {
        const ratings = await getAllRatingsService();
        if (ratings.length === 0)
            return res.status(404).json({error: 'No ratings found'});
        res.json(ratings);
    } catch (err) {
        next(err);
    }
}

export async function getRatingByMovieId(req: Request, res: Response, next: NextFunction) {
    try {
        const rating = await getRatingByMovieIdService(parseInt(req.params.id));
        if (rating) res.json(rating);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}

export async function createRating(req: Request, res: Response, next: NextFunction) {
    try {
        const ratingDTO = Object.assign(new RatingDTO(), req.body);
        const rating = await createRatingService(ratingDTO);
        if (!rating)
            return res.status(400).json({error: 'Invalid rating data'});
        res.status(201).json(rating);
    } catch (err) {
        next(err);
    }
}

export async function updateRating(req: Request, res: Response, next: NextFunction) {
    try {
        const ratingDTO = Object.assign(new RatingDTO(), req.body);
        const rating = await updateRatingService(parseInt(req.params.id), ratingDTO.rating);
        if (rating) res.json(rating);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteRating(req: Request, res: Response, next: NextFunction) {
    try {
        const rating = await deleteRatingService(parseInt(req.params.id));
        if (rating) res.json(rating);
        else res.status(404).json({error: 'Rating not found'});
    } catch (err) {
        next(err);
    }
}
