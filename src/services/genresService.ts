import pool from '../config/dbConfig';
import Genre from '../models/genreModel';

export const getAllGenresService = async (): Promise<Genre[]> => {
        const result = await pool.query("SELECT * FROM genres");
        return result.rows;
}

export const getGenreByIdService = async (genreId: number): Promise<Genre | null> => {
        const result = await pool.query("SELECT * FROM genres WHERE genreId = $1", [genreId]);
        return result.rows[0] || null;
}

export const createGenreService = async (genreName: string): Promise<Genre> => {
        const result = await pool.query(
            "INSERT INTO genres(genreName) VALUES($1) RETURNING *",
            [genreName]
        );
        return result.rows[0];
}

export const updateGenreService = async (genreId: number, genreName: string): Promise<Genre | null> => {
        const result = await pool.query(
            "UPDATE genres SET genreName = $1 WHERE genreId = $2 RETURNING *",
            [genreName, genreId]
        );
        return result.rows[0] || null;
}

export const deleteGenreService = async (genreId: number): Promise<Genre | null> => {
        const result = await pool.query("DELETE FROM genres WHERE genreId = $1 RETURNING *", [genreId]);
        return result.rows[0] || null;
}
