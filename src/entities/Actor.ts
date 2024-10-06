import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

@Entity("actors")
export class Actor {
    @PrimaryGeneratedColumn()
    actorid!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Column({nullable: true})
    @IsString()
    @IsOptional()
    nationality!: string;

    @Column({type: 'date', nullable: true})
    dob!: Date;
}