import {Router} from 'express';
import { getAllDirectors, getDirectorById, createDirector, updateDirector, deleteDirector } from '../controllers/directorsController';

const directorRouter = Router();

directorRouter.get('/', getAllDirectors);
directorRouter.get('/:id', getDirectorById);
directorRouter.post('/', createDirector);
directorRouter.put('/:id', updateDirector);
directorRouter.delete('/:id', deleteDirector);

export default directorRouter;