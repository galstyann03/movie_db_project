import {Router} from 'express';
import {createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie} from '../controllers/moviesController';

const movieRouter = Router();

movieRouter.get('/', getAllMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.post('/', createMovie);
movieRouter.put('/:id', updateMovie);
movieRouter.delete('/:id', deleteMovie);

export default movieRouter;