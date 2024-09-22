import pool from '../config/dbConfig';
import Actor from "../models/actorModel";

export const getAllActorsService = async (): Promise<Actor[]> => {
    const result = await pool.query("SELECT * FROM actors");
    return result.rows;
}

export const getActorByIdService = async (actorId: number): Promise<Actor | null> => {
        const result = await pool.query("SELECT * FROM actors WHERE actorId = $1", [actorId]);
        return result.rows[0] || null;
}

export const createActorService = async (name: string, nationality: string, dob: Date): Promise<Actor> => {
        const result = await pool.query(
            "INSERT INTO actors(name, nationality, dob) VALUES($1, $2, $3) RETURNING *",
            [name, nationality, dob]
        );
        return result.rows[0];
}

export const updateActorService = async (actorId: number, name: string, nationality: string, dob: Date): Promise<Actor | null> => {
        const result = await pool.query(
            "UPDATE actors SET name = $1, nationality = $2, dob = $3 WHERE actorId = $4 RETURNING *",
            [name, nationality, dob, actorId]
        );
        return result.rows[0] || null;
}

export const deleteActorService = async (actorId: number): Promise<Actor | null> => {
        const result = await pool.query("DELETE FROM actors WHERE actorId = $1 RETURNING *", [actorId]);
        return result.rows[0] || null;
}