import pool from '../config/dbConfig';
import MovieGenre from "../models/movieGenreModel";

export const getAllMovieGenresService = async (): Promise<MovieGenre[]> => {
        const result = await pool.query("SELECT * FROM movieGenres");
        return result.rows;
}

export const createMovieGenreService = async (movieId: number, genreId: number): Promise<MovieGenre> => {
        const result = await pool.query(
            "INSERT INTO movieGenres(movieId, genreId) VALUES($1, $2) RETURNING *",
            [movieId, genreId]
        );
        return result.rows[0];
}

export const deleteMovieGenreService = async (movieId: number, genreId: number): Promise<MovieGenre | null> => {
        const result = await pool.query(
            "DELETE FROM movieGenres WHERE movieId = $1 AND genreId = $2 RETURNING *",
            [movieId, genreId]
        );
        return result.rows[0] || null;
}