import AppDataSource from "../configs/data-source";
import {Movie} from "../entities/Movie";
import {Genre} from "../entities/Genre";
import {In} from "typeorm";
import {MovieGenresDTO} from "../dtos/movieGenres.dto";

export const getAllMovieGenresService = async (): Promise<Movie[]> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    return await movieRepository.find({relations: ["genres"]});
}

export const createMovieWithGenresService = async (movieGenresDTO: MovieGenresDTO): Promise<Movie> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    const genreRepository = AppDataSource.getRepository(Genre);

    const { title, releaseyear, genreIDs } = movieGenresDTO;

    const genres = await genreRepository.findBy({genreid: In(genreIDs)});
    const movie = movieRepository.create({title, releaseyear, genres});

    return await movieRepository.save(movie);
}

export const updateMovieGenresService = async (movieid: number, genreIds: number[]): Promise<Movie | null> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    const genreRepository = AppDataSource.getRepository(Genre);

    const movie = await movieRepository.findOneBy({movieid});
    if (!movie) return null;

    movie.genres = await genreRepository.findBy({genreid: In(genreIds)});
    return await movieRepository.save(movie);
}
