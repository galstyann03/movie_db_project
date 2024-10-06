import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1728231265437 implements MigrationInterface {
    name = 'InitialSchema1728231265437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE Directors
            (
                DirectorID  SERIAL PRIMARY KEY,
                Name        VARCHAR(255) NOT NULL,
                Nationality VARCHAR(255),
                DOB         DATE
            );

            CREATE TABLE Actors
            (
                ActorID     SERIAL PRIMARY KEY,
                Name        VARCHAR(255) NOT NULL,
                Nationality VARCHAR(255),
                DOB         DATE
            );

            CREATE TABLE Genres
            (
                GenreID   SERIAL PRIMARY KEY,
                GenreName VARCHAR(255) NOT NULL
            );

            CREATE TABLE Movies
            (
                MovieID     SERIAL PRIMARY KEY,
                Title       VARCHAR(255) NOT NULL,
                ReleaseYear INT,
                DirectorID  INT REFERENCES Directors (DirectorID) ON DELETE CASCADE,
                UNIQUE (MovieID)
            );

            CREATE TABLE Ratings
            (
                MovieID INT PRIMARY KEY REFERENCES Movies (MovieID) ON DELETE CASCADE,
                Rating  DECIMAL(3, 2)
            );

            CREATE TABLE MovieGenres
            (
                MovieID INT REFERENCES Movies (MovieID) ON DELETE CASCADE,
                GenreID INT REFERENCES Genres (GenreID) ON DELETE CASCADE,
                PRIMARY KEY (MovieID, GenreID)
            );
        `);

        await queryRunner.query(`
            INSERT INTO Directors (Name, Nationality, DOB)
            VALUES ('Steven Spielberg', 'USA', '1946-12-18'),
                   ('Christopher Nolan', 'UK', '1970-07-30'),
                   ('Martin Scorsese', 'USA', '1942-11-17'),
                   ('Quentin Tarantino', 'USA', '1963-03-27'),
                   ('James Cameron', 'Canada', '1954-08-16');

            INSERT INTO Actors (Name, Nationality, DOB)
            VALUES ('Leonardo DiCaprio', 'USA', '1974-11-11'),
                   ('Robert Downey Jr.', 'USA', '1965-04-04'),
                   ('Scarlett Johansson', 'USA', '1984-11-22'),
                   ('Morgan Freeman', 'USA', '1937-06-01'),
                   ('Kate Winslet', 'UK', '1975-10-05');

            INSERT INTO Genres (GenreName)
            VALUES ('Action'),
                   ('Drama'),
                   ('Sci-Fi'),
                   ('Thriller'),
                   ('Adventure');

            INSERT INTO Movies (Title, ReleaseYear, DirectorID)
            VALUES ('Inception', 2010, 2),
                   ('Titanic', 1997, 5),
                   ('Pulp Fiction', 1994, 4),
                   ('The Dark Knight', 2008, 2),
                   ('Jurassic Park', 1993, 1);

            INSERT INTO Ratings (MovieID, Rating)
            VALUES (1, 8.8),
                   (2, 7.8),
                   (3, 8.9),
                   (4, 9.0),
                   (5, 8.1);

            INSERT INTO MovieGenres (MovieID, GenreID)
            VALUES (1, 3),
                   (1, 4),
                   (2, 2),
                   (2, 5),
                   (3, 4),
                   (4, 1),
                   (4, 4),
                   (5, 1),
                   (5, 5);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
           DROP TABLE IF EXISTS MovieGenres CASCADE;
           DROP TABLE IF EXISTS Ratings CASCADE;
           DROP TABLE IF EXISTS Movies CASCADE;
           DROP TABLE IF EXISTS Genres CASCADE;
           DROP TABLE IF EXISTS Actors CASCADE;
           DROP TABLE IF EXISTS Directors CASCADE;
       `);
    }
}