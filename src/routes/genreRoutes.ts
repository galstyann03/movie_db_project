import {Router} from 'express';
import {createGenre, deleteGenre, getAllGenres, getGenreById, updateGenre} from '../controllers/genreController';

const genreRouter = Router();

genreRouter.get('/', getAllGenres);
genreRouter.get('/:id', getGenreById);
genreRouter.post('/', createGenre);
genreRouter.put('/:id', updateGenre);
genreRouter.delete('/:id', deleteGenre);

export default genreRouter;
