import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty, IsString} from "class-validator";
import {Movie} from "./Movie";

@Entity("genres")
export class Genre {
    @PrimaryGeneratedColumn()
    genreid!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    genrename!: string;

    @ManyToMany(() => Movie, (movie) => movie.genres)
    movies!: Movie[];
}