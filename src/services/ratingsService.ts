import pool from '../config/dbConfig';
import Rating from "../models/ratingModel";

export const getAllRatingsService = async (): Promise<Rating[]> => {
        const result = await pool.query("SELECT * FROM ratings");
        return result.rows;
}

export const getRatingByMovieIdService = async (movieId: number): Promise<Rating | null> => {
        const result = await pool.query("SELECT * FROM ratings WHERE movieId = $1", [movieId]);
        return result.rows[0] || null;
}

export const createRatingService = async (movieId: number, rating: number): Promise<Rating> => {
        const result = await pool.query(
            "INSERT INTO ratings(movieId, rating) VALUES($1, $2) RETURNING *",
            [movieId, rating]
        );
        return result.rows[0];
}

export const updateRatingService = async (movieId: number, rating: number): Promise<Rating | null> => {
        const result = await pool.query(
            "UPDATE ratings SET rating = $1 WHERE movieId = $2 RETURNING *",
            [rating, movieId]
        );
        return result.rows[0] || null;
}

export const deleteRatingService = async (movieId: number): Promise<Rating | null> => {
        const result = await pool.query("DELETE FROM ratings WHERE movieId = $1 RETURNING *", [movieId]);
        return result.rows[0] || null;
}