import { IsNotEmpty, IsString } from "class-validator";

export class GenreDTO {
    @IsString()
    @IsNotEmpty()
    genrename!: string;
}