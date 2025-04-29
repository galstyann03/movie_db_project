import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMovieDuration1745947736814 implements MigrationInterface {
    name = 'AddMovieDuration1745947736814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE Movies ADD "duration" integer`);

        await queryRunner.query(`
            UPDATE Movies SET "duration" = CASE
                WHEN "title" = 'Inception' THEN 148
                WHEN "title" = 'Titanic' THEN 194
                WHEN "title" = 'Pulp Fiction' THEN 154
                WHEN "title" = 'The Dark Knight' THEN 152
                WHEN "title" = 'Jurassic Park' THEN 127
                ELSE 120 -- default duration for any other movies
            END
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE Movies DROP COLUMN "Duration"`);
    }
}
