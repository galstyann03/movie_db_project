import {DataSource} from "typeorm";
import dotenv from "dotenv";
import {Actor} from "../entities/Actor";
import {Director} from "../entities/Director";
import {Genre} from "../entities/Genre";
import {Movie} from "../entities/Movie";
import {Rating} from "../entities/Rating";
dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Actor, Director, Genre, Movie, Rating],
    migrations: [__dirname + "/migrations/*.ts"],
    synchronize: false
});

export default AppDataSource;