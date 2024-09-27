INSERT INTO Directors (Name, Nationality, DOB)
VALUES
    ('Steven Spielberg', 'USA', '1946-12-18'),
    ('Christopher Nolan', 'UK', '1970-07-30'),
    ('Martin Scorsese', 'USA', '1942-11-17'),
    ('Quentin Tarantino', 'USA', '1963-03-27'),
    ('James Cameron', 'Canada', '1954-08-16');

INSERT INTO Actors (Name, Nationality, DOB)
VALUES
    ('Leonardo DiCaprio', 'USA', '1974-11-11'),
    ('Robert Downey Jr.', 'USA', '1965-04-04'),
    ('Scarlett Johansson', 'USA', '1984-11-22'),
    ('Morgan Freeman', 'USA', '1937-06-01'),
    ('Kate Winslet', 'UK', '1975-10-05');

INSERT INTO Genres (GenreName)
VALUES
    ('Action'),
    ('Drama'),
    ('Sci-Fi'),
    ('Thriller'),
    ('Adventure');

INSERT INTO Movies (Title, ReleaseYear, DirectorID)
VALUES
    ('Inception', 2010, 2),
    ('Titanic', 1997, 5),
    ('Pulp Fiction', 1994, 4),
    ('The Dark Knight', 2008, 2),
    ('Jurassic Park', 1993, 1);

INSERT INTO Ratings (MovieID, Rating)
VALUES
    (1, 8.8),
    (2, 7.8),
    (3, 8.9),
    (4, 9.0),
    (5, 8.1);

INSERT INTO MovieGenres (MovieID, GenreID)
VALUES
    (1, 3),
    (1, 4),
    (2, 2),
    (2, 5),
    (3, 4),
    (4, 1),
    (4, 4),
    (5, 1),
    (5, 5);