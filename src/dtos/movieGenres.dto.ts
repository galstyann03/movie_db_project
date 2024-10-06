import { IsString, IsInt, IsOptional, IsArray } from 'class-validator';

export class MovieGenresDTO {
    @IsString()
    title!: string;

    @IsInt()
    @IsOptional()
    releaseyear?: number;

    @IsArray()
    genreIDs!: number[];
}