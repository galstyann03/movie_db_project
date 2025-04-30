import {Router} from 'express';
import {
    createRating,
    deleteRating,
    getAllRatings,
    getRatingByMovieId,
    updateRating
} from '../controllers/ratingsController';

const ratingRouter = Router();

ratingRouter.get('/', getAllRatings);
ratingRouter.get('/:id', getRatingByMovieId);
ratingRouter.post('/', createRating);
ratingRouter.put('/:id', updateRating);
ratingRouter.delete('/:id', deleteRating);

export default ratingRouter;
