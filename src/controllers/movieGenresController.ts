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
        res.json(movieGenres);
    } catch (err) {
        next(err);
    }
}

export async function createMovieWithGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const movieGenresDTO: MovieGenresDTO = req.body;
        const result = await createMovieWithGenresService(movieGenresDTO);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateMovieGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const {movieId} = req.params;
        const movieGenresDTO: MovieGenresDTO = req.body;
        const result = await updateMovieGenresService(parseInt(movieId), movieGenresDTO.genreIDs);
        if (result) res.json(result);
        else res.status(404).json({error: 'MovieGenre not found'});
    } catch (err) {
        next(err);
    }
}