import {Router} from 'express';
import {createMovieGenre, deleteMovieGenre, getAllMovieGenres} from '../controllers/movieGenresController';

const movieGenresRouter = Router();

movieGenresRouter.get('/', getAllMovieGenres);
movieGenresRouter.post('/', createMovieGenre);
movieGenresRouter.delete('/:movieId/:genreId', deleteMovieGenre);

export default movieGenresRouter;