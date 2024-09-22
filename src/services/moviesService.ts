import pool from '../config/dbConfig';
import Movie from "../models/movieModel";

export const getAllMoviesService = async (): Promise<Movie[]> => {
    const result = await pool.query("SELECT * FROM movies");
    return result.rows;
}

export const getMovieByIdService = async (movieId: number): Promise<Movie | null> => {
    const result = await pool.query("SELECT * FROM movies WHERE movieId = $1", [movieId]);
    return result.rows[0] || null;
}

export const createMovieService = async (title: string, releaseYear: number, directorId: number): Promise<Movie> => {
    const result = await pool.query(
        "INSERT INTO movies(title, releaseYear, directorId) VALUES($1, $2, $3) RETURNING *",
        [title, releaseYear, directorId]
    );
    return result.rows[0];
}

export const updateMovieService = async (movieId: number, title: string, releaseYear: number, directorId: number): Promise<Movie | null> => {
    const result = await pool.query(
        "UPDATE movies SET title = $1, releaseYear = $2, directorId = $3 WHERE movieId = $4 RETURNING *",
        [title, releaseYear, directorId, movieId]
    );
    return result.rows[0] || null;
}

export const deleteMovieService = async (movieId: number): Promise<Movie | null> => {
        const result = await pool.query("DELETE FROM movies WHERE movieId = $1 RETURNING *", [movieId]);
        return result.rows[0] || null;
}