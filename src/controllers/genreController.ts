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
        if (!genres || genres.length === 0)
            return res.status(404).json({error: 'No genres found'});
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
        const genreDto = Object.assign(new GenreDTO(), req.body);
        const genre = await createGenreService(genreDto);
        if (!genre)
            return res.status(400).json({error: 'Invalid genre data'});
        res.status(201).json(genre);
    } catch (err) {
        next(err);
    }
}

export async function updateGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const genreDto: GenreDTO = req.body;
        const genre = await updateGenreService(parseInt(req.params.id), genreDto);
        if (genre) res.json(genre);
        else res.status(404).json({error: 'Genre not found'});
    } catch (err) {
        next(err);
    }
}

export async function deleteGenre(req: Request, res: Response, next: NextFunction) {
    try {
        const genre = await deleteGenreService(parseInt(req.params.id));
        if (genre) res.json(genre);
        else res.status(404).json({error: 'Genre not found'});
    } catch (err) {
        next(err);
    }
}
