import {Rating} from "../entities/Rating";
import AppDataSource from "../configs/data-source";
import {Movie} from "../entities/Movie";
import {RatingDTO} from "../dtos/rating.dto";

export const getAllRatingsService = async (): Promise<Rating[]> => {
    const ratingRepository = AppDataSource.getRepository(Rating);
    return ratingRepository.find();
}

export const getRatingByMovieIdService = async (movieid: number): Promise<Rating | null> => {
    const ratingRepository = AppDataSource.getRepository(Rating);
    return await ratingRepository.findOne({where: {movie: {movieid}}});
}

export const createRatingService = async (ratingDTO: RatingDTO): Promise<Rating> => {
    const ratingRepository = AppDataSource.getRepository(Rating);
    const movieRepository = AppDataSource.getRepository(Movie);

    const { movieid, rating: ratingValue } = ratingDTO;

    const movie = await movieRepository.findOne({where: {movieid}});
    if (!movie) throw new Error("Movie not found");

    const rating = ratingRepository.create({movie, rating: ratingValue});
    return await ratingRepository.save(rating);
}

export const updateRatingService = async (movieid: number, ratingValue: number): Promise<Rating | null> => {
    const ratingRepository = AppDataSource.getRepository(Rating);

    const rating = await ratingRepository.findOne({where: {movie: {movieid}}});
    if (!rating) return null;

    rating.rating = ratingValue;
    return await ratingRepository.save(rating);
}

export const deleteRatingService = async (movieid: number): Promise<Rating | null> => {
    const ratingRepository = AppDataSource.getRepository(Rating);

    const rating = await ratingRepository.findOne({
        where: {movie: {movieid}},
    });

    if (!rating) return null;
    return await ratingRepository.remove(rating);
}
