import {NextFunction, Request, Response} from "express";
import {
    getAllMoviesService,
    getMovieByIdService,
    createMovieService,
    updateMovieService,
    deleteMovieService,
} from "../services/moviesService";
import {MovieDTO} from "../dtos/movie.dto";

export async function getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const movies = await getAllMoviesService();
        if (movies.length === 0)
            return res.status(404).json({error: 'No movies found'});
        res.json(movies);
    } catch (err) {
        next(err);
    }
}

export async function getMovieById(req: Request, res: Response, next: NextFunction) {
    try {
        const movie= await getMovieByIdService(parseInt(req.params.id));
        if (movie) res.json(movie);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}

export async function createMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const movieDto = Object.assign(new MovieDTO(), req.body);
        const movie = await createMovieService(movieDto);
        if (!movie)
            return res.status(400).json({error: 'Invalid movie data'});
        res.status(201).json(movie);
    } catch (err) {
        next(err);
    }
}

export async function updateMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const movieDto = Object.assign(new MovieDTO(), req.body);
        const movie = await updateMovieService(parseInt(req.params.id), movieDto);
        if (movie) res.json(movie);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteMovie(req: Request, res: Response, next: NextFunction) {
    try {
        const movie = await deleteMovieService(parseInt(req.params.id));
        if (movie) res.json(movie);
        else res.status(404).json({error: 'Movie not found'});
    } catch (err) {
        next(err);
    }
}
