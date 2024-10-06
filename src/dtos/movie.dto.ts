import { IsString, IsNotEmpty, IsOptional, IsInt } from "class-validator";

export class MovieDTO {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsInt()
    @IsOptional()
    releaseyear?: number;

    @IsInt()
    @IsNotEmpty()
    directorid!: number;
}