import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToOne, JoinColumn} from "typeorm";
import {IsString, IsNotEmpty, IsInt, IsOptional} from "class-validator";
import {Director} from "./Director";
import {Genre} from "./Genre";
import {Rating} from "./Rating";

@Entity("movies")
export class Movie {
    @PrimaryGeneratedColumn()
    movieid!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    title!: string;

    @Column({nullable: true})
    @IsInt()
    @IsOptional()
    releaseyear!: number;

    @Column({ nullable: true })
    @IsOptional()
    duration!: number;

    @ManyToOne(() => Director, (director) => director.movies, {cascade: true})
    @JoinColumn({name: 'directorid'})
    director!: Director;

    @OneToOne(() => Rating, (rating) => rating.movie, {cascade: true})
    @JoinColumn({name: 'movieid'})
    rating!: Rating;

    @ManyToMany(() => Genre, (genre) => genre.movies, { cascade: true })
    @JoinTable({
        name: 'moviegenres',
        joinColumn: {
            name: 'movieid',
            referencedColumnName: 'movieid',
        },
        inverseJoinColumn: {
            name: 'genreid',
            referencedColumnName: 'genreid',
        },
    })
    genres!: Genre[];
}