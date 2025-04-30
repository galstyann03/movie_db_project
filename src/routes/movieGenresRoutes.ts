import {Router} from 'express';
import {updateMovieGenre, createMovieWithGenres, getAllMovieGenres} from '../controllers/movieGenresController';

const movieGenresRouter = Router();

movieGenresRouter.get('/', getAllMovieGenres);
movieGenresRouter.post('/', createMovieWithGenres);
movieGenresRouter.put('/:movieId', updateMovieGenre);

export default movieGenresRouter;
