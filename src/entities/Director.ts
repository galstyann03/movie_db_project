import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {Movie} from "./Movie";

@Entity("directors")
export class Director {
    @PrimaryGeneratedColumn()
    directorid!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Column({nullable: true})
    @IsString()
    @IsOptional()
    nationality!: string;

    @Column({type: 'date', nullable: true})
    dob!: Date;

    @OneToMany(() => Movie, (movie) => movie.director)
    movies!: Movie[];
}