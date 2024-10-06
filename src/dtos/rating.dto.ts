import { IsInt, IsDecimal } from 'class-validator';

export class RatingDTO {
    @IsInt()
    movieid!: number;

    @IsDecimal()
    rating!: number;
}
