import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {IsDecimal, IsInt, IsOptional} from "class-validator";
import {Movie} from "./Movie";

@Entity("ratings")
export class Rating {
    @PrimaryColumn()
    @IsInt()
    movieid!: number;

    @Column({type: 'decimal', precision: 3, scale: 2, nullable: true})
    @IsDecimal()
    @IsOptional()
    rating!: number;

    @OneToOne(() => Movie, (movie) => movie.rating)
    @JoinColumn({name: 'movieid'})
    movie!: Movie;
}
