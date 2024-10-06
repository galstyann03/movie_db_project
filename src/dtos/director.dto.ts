import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDirectorDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    nationality?: string;

    @IsDate()
    @IsOptional()
    dob?: Date;
}

export class UpdateDirectorDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    nationality?: string;

    @IsDate()
    @IsOptional()
    dob?: Date;
}
