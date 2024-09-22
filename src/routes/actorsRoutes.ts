import {Router} from 'express';
import {createActor, deleteActor, getActorById, getAllActors, updateActor} from '../controllers/actorsController';

const actorRouter = Router();

actorRouter.get('/', getAllActors);
actorRouter.get('/:id', getActorById);
actorRouter.post('/', createActor);
actorRouter.put('/:id', updateActor);
actorRouter.delete('/:id', deleteActor);

export default actorRouter;