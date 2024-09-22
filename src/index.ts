import express from "express";
import dotenv from "dotenv";
import pool from "./config/dbConfig";
import actorRouter from "./routes/actorsRoutes";
import directorRouter from "./routes/directorsRoutes";
import genreRouter from "./routes/genreRoutes";
import movieGenresRouter from "./routes/movieGenresRoutes";
import movieRouter from "./routes/movieRoutes";
import ratingRouter from "./routes/ratingsRoutes";
import {errorHandler} from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/actors', actorRouter);
app.use('/api/directors', directorRouter);
app.use('/api/genres', genreRouter);
app.use('/api/movieGenres', movieGenresRouter);
app.use('/api/movies', movieRouter);
app.use('/api/ratings', ratingRouter);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

pool.connect()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error("Database connection error: ",err));