import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateActorDto {
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

export class UpdateActorDto {
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