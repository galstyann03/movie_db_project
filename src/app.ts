import express from "express";
import actorRouter from "./routes/actorsRoutes";
import directorRouter from "./routes/directorsRoutes";
import genreRouter from "./routes/genreRoutes";
import movieGenresRouter from "./routes/movieGenresRoutes";
import movieRouter from "./routes/movieRoutes";
import ratingRouter from "./routes/ratingsRoutes";
import {errorHandler} from "./middlewares/errorHandler";
import loggerMiddleware from "./middlewares/logger.middleware";

const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api/actors', actorRouter);
app.use('/api/directors', directorRouter);
app.use('/api/genres', genreRouter);
app.use('/api/movieGenres', movieGenresRouter);
app.use('/api/movies', movieRouter);
app.use('/api/ratings', ratingRouter);
app.use(errorHandler);

export default app;