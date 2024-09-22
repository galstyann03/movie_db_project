import {NextFunction, Request, Response} from "express";
import {
    getAllMovieGenresService,
    createMovieGenreService,
    deleteMovieGenreService
} from "../services/movieGenresService";
import MovieGenre from "../models/movieGenreModel";

export async function getAllMovieGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const movieGenres: MovieGenre[] = await getAllMovieGenresService();
        res.json(movieGenres);
    } catch (err) {
        next(err);
    }
}

export async function createMovieGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const {movieId, genreId} = req.body;
        const result = await createMovieGenreService(movieId, genreId);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function deleteMovieGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const {movieId, genreId} = req.params;
        const result = await deleteMovieGenreService(parseInt(movieId), parseInt(genreId));
        if (result) res.json(result);
        else res.status(404).json({error: 'MovieGenre not found'});
    } catch (err) {
        next(err);
    }
}