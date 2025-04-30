import {NextFunction, Request, Response} from "express";
import {
    getAllMovieGenresService,
    createMovieWithGenresService,
    updateMovieGenresService
} from "../services/movieGenresService";
import {MovieGenresDTO} from "../dtos/movieGenres.dto";

export async function getAllMovieGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const movieGenres = await getAllMovieGenresService();
        if (!movieGenres || movieGenres.length === 0)
            return res.status(404).json({error: 'No movies found'});
        res.json(movieGenres);
    } catch (err) {
        next(err);
    }
}

export async function createMovieWithGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const movieGenresDTO = Object.assign(new MovieGenresDTO(), req.body);
        const movieGenre = await createMovieWithGenresService(movieGenresDTO);
        if (!movieGenre)
            return res.status(400).json({error: 'Invalid movie data'});
        res.status(201).json(movieGenre);
    } catch (err) {
        next(err);
    }
}

export async function updateMovieGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const {movieId} = req.params;
        const movieGenresDTO = Object.assign(new MovieGenresDTO(), req.body);
        const movieGenre = await updateMovieGenresService(parseInt(movieId), movieGenresDTO.genreIDs);
        if (movieGenre) res.json(movieGenre);
        else res.status(404).json({error: 'MovieGenre not found'});
    } catch (err) {
        next(err);
    }
}
