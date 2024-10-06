import {NextFunction, Request, Response} from "express";
import {
    getAllGenresService,
    getGenreByIdService,
    createGenreService,
    updateGenreService,
    deleteGenreService
} from "../services/genresService";
import {GenreDTO} from "../dtos/genre.dto";

export async function getAllGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const genres = await getAllGenresService();
        res.json(genres);
    } catch (err) {
        next(err);
    }
}

export async function getGenreById(req: Request, res: Response, next: NextFunction) {
    try {
        const genre= await getGenreByIdService(parseInt(req.params.id));
        if (genre) res.json(genre);
        else res.status(404).json({error: 'Genre not found'});
    } catch (err) {
        next(err);
    }
}

export async function createGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const genreDto: GenreDTO = req.body;
        const result = await createGenreService(genreDto);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function updateGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const genreDto: GenreDTO = req.body;
        const result = await updateGenreService(parseInt(req.params.id), genreDto);
        if (result) res.json(result);
        else res.status(404).json({error: 'Genre not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await deleteGenreService(parseInt(req.params.id));
        if (result) res.json(result);
        else res.status(404).json({error: 'Genre not found'});
    } catch (err) {
        next(err);
    }
}