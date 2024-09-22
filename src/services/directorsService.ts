import pool from '../config/dbConfig';
import Director from "../models/directorModel";

export const getAllDirectorsService = async (): Promise<Director[]> => {
    const result = await pool.query("SELECT * FROM directors");
    return result.rows;
}

export const getDirectorByIdService = async (directorId: number): Promise<Director | null> => {
    const result = await pool.query("SELECT * FROM directors WHERE directorId = $1", [directorId]);
    return result.rows[0] || null;
}

export const createDirectorService = async (name: string, nationality: string, dob: Date): Promise<Director> => {
    const result = await pool.query(
        "INSERT INTO directors(name, nationality, dob) VALUES($1,$2,$3) RETURNING *",
        [name, nationality, dob]
    );
    return result.rows[0];
}

export const updateDirectorService = async (directorId: number, name: string, nationality: string, dob: Date): Promise<Director | null> => {
    const result = await pool.query(
      "UPDATE directors SET name = $1, nationality = $2, dob = $3 WHERE directorId = $4 RETURNING *",
      [name, nationality, dob, directorId]
    );
    return result.rows[0] || null;
}

export const deleteDirectorService = async (directorId: number): Promise<Director | null> => {
    const result = await pool.query("DELETE FROM directors WHERE directorId = $1 RETURNING *", [directorId]);
    return result.rows[0] || null;
}