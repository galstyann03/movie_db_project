import AppDataSource from "../configs/data-source";
import {Actor} from "../entities/Actor";
import {CreateActorDto, UpdateActorDto} from "../dtos/actor.dto";

export const getAllActorsService = async (): Promise<Actor[]> => {
    const actorRepository = AppDataSource.getRepository(Actor);
    return await actorRepository.find();
}

export const getActorByIdService = async (actorid: number): Promise<Actor | null> => {
    const actorRepository = AppDataSource.getRepository(Actor);
    return await actorRepository.findOneBy({actorid});
}

export const createActorService = async (createActorDto: CreateActorDto): Promise<Actor> => {
    const actorRepository = AppDataSource.getRepository(Actor);
    const actor = actorRepository.create(createActorDto);
    return await actorRepository.save(actor);
}

export const updateActorService = async (actorid: number, updateActorDto: UpdateActorDto): Promise<Actor | null> => {
    const actorRepository = AppDataSource.getRepository(Actor);
    const actor = await actorRepository.findOneBy({actorid});

    if (!actor) return null;
    if (updateActorDto.name !== undefined) actor.name = updateActorDto.name;
    if (updateActorDto.nationality !== undefined) actor.nationality = updateActorDto.nationality;
    if (updateActorDto.dob !== undefined) actor.dob = updateActorDto.dob;
    return await actorRepository.save(actor);
}

export const deleteActorService = async (actorid: number): Promise<Actor | null> => {
    const actorRepository = AppDataSource.getRepository(Actor);
    const actor = await actorRepository.findOneBy({actorid});

    if (!actor) return null;
    return actorRepository.remove(actor);
}
