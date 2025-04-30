import AppDataSource from "../configs/data-source";
import {Director} from "../entities/Director";
import {CreateDirectorDto, UpdateDirectorDto} from "../dtos/director.dto";

export const getAllDirectorsService = async (): Promise<Director[]> => {
    const directorRepository = AppDataSource.getRepository(Director);
    return await directorRepository.find();
}

export const getDirectorByIdService = async (directorid: number): Promise<Director | null> => {
    const directorRepository = AppDataSource.getRepository(Director);
    return await directorRepository.findOneBy({directorid});
}

export const createDirectorService = async (createDirectorDto: CreateDirectorDto): Promise<Director> => {
    const directorRepository = AppDataSource.getRepository(Director);
    const director = directorRepository.create(createDirectorDto);
    return await directorRepository.save(director);
}

export const updateDirectorService = async (directorid: number, updateDirectorDto: UpdateDirectorDto): Promise<Director | null> => {
    const directorRepository = AppDataSource.getRepository(Director);
    const director = await directorRepository.findOneBy({directorid});

    if (!director) return null;

    if (updateDirectorDto.name !== undefined) director.name = updateDirectorDto.name;
    if (updateDirectorDto.nationality !== undefined) director.nationality = updateDirectorDto.nationality;
    if (updateDirectorDto.dob !== undefined) director.dob = updateDirectorDto.dob;

    return await directorRepository.save(director);
}

export const deleteDirectorService = async (directorid: number): Promise<Director | null> => {
    const directorRepository = AppDataSource.getRepository(Director);
    const director = await directorRepository.findOneBy({directorid});

    if (!director) return null;

    return await directorRepository.remove(director);
}
