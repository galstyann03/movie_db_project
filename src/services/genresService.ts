import AppDataSource from "../configs/data-source";
import {Genre} from '../entities/Genre';
import {GenreDTO} from "../dtos/genre.dto";

export const getAllGenresService = async (): Promise<Genre[]> => {
    const genreRepository = AppDataSource.getRepository(Genre);
    return await genreRepository.find();
}

export const getGenreByIdService = async (genreid: number): Promise<Genre | null> => {
    const genreRepository = AppDataSource.getRepository(Genre);
    return await genreRepository.findOneBy({genreid});
}

export const createGenreService = async (genreDto: GenreDTO): Promise<Genre> => {
    const genreRepository = AppDataSource.getRepository(Genre);
    const genre = genreRepository.create(genreDto);
    return await genreRepository.save(genre);
}

export const updateGenreService = async (genreid: number, genreDto: GenreDTO): Promise<Genre | null> => {
    const genreRepository = AppDataSource.getRepository(Genre);
    const genre = await genreRepository.findOneBy({genreid});

    if (!genre) return null;

    if (genreDto.genrename !== undefined) genre.genrename = genreDto.genrename;
    return await genreRepository.save(genre);
}

export const deleteGenreService = async (genreid: number): Promise<Genre | null> => {
    const genreRepository = AppDataSource.getRepository(Genre);
    const genre = await genreRepository.findOneBy({genreid});

    if (!genre) return null;

    return genreRepository.remove(genre);
}
