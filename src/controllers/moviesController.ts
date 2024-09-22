import {NextFunction, Request, Response} from "express";
import {
    getAllMoviesService,
    getMovieByIdService,
    createMovieService,
    updateMovieService,
    deleteMovieService,
} from "../services/moviesService";
import Movie from "../models/movieModel";

export async function getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const movies: Movie[] = await getAllMoviesService();
        res.json(movies);
    } catch (err) {
        next(err);
    }
}

export async function getMovieById(req: Request, res: Response, next: NextFunction) {
    try {
        const movie: Movie | null= await getMovieByIdService(parseInt(req.params.id));
        if (movie) res.json(movie);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}

export async function createMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const {title, releaseYear, directorId} = req.body;
        const result = await createMovieService(title, releaseYear, directorId);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const {title, releaseYear, directorId} = req.body;
        const result = await updateMovieService(parseInt(req.params.id), title, releaseYear, directorId);
        if (result) res.json(result);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await deleteMovieService(parseInt(req.params.id));
        if (result) res.json(result);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}