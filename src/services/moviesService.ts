import AppDataSource from "../configs/data-source";
import {Movie} from "../entities/Movie";
import {Director} from "../entities/Director";
import {MovieDTO} from "../dtos/movie.dto";

export const getAllMoviesService = async (): Promise<Movie[]> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    return await movieRepository.find({relations: ["genres", "director"]});
}

export const getMovieByIdService = async (movieid: number): Promise<Movie | null> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    return await movieRepository.findOne({where: {movieid}, relations: ["genres", "director"]});
}

export const createMovieService = async (movieDTO: MovieDTO): Promise<Movie> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    const directorRepository = AppDataSource.getRepository(Director);

    const director = await directorRepository.findOneBy({ directorid: movieDTO.directorid });
    if (!director) {
        throw new Error("Director not found");
    }

    const movie = movieRepository.create({ title: movieDTO.title, releaseyear: movieDTO.releaseyear, director });
    return await movieRepository.save(movie);
}

export const updateMovieService = async (movieid: number, movieDTO: MovieDTO): Promise<Movie | null> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    const directorRepository = AppDataSource.getRepository(Director);

    const movie = await movieRepository.findOneBy({movieid});
    if (!movie) return null;

    const director = await directorRepository.findOneBy({directorid: movieDTO.directorid});
    if (!director) {
        throw new Error("Director not found");
    }

    if (movieDTO.title !== undefined) movie.title = movieDTO.title;
    if (movieDTO.releaseyear !== undefined) movie.releaseyear = movieDTO.releaseyear;
    movie.director = director;

    return await movieRepository.save(movie);
}

export const deleteMovieService = async (movieid: number): Promise<Movie | null> => {
    const movieRepository = AppDataSource.getRepository(Movie);
    const movie = await movieRepository.findOneBy({movieid});

    if (!movie) return null;

    return await movieRepository.remove(movie);
}