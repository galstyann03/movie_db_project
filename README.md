# Movie Database API

This is a TypeScript Node.js application that provides a RESTful API for managing a movie database. The database consists of tables for directors, actors, genres, movies, and ratings.

## Database Diagram

Below is the database diagram illustrating the relationships between the tables:

![db](https://github.com/user-attachments/assets/2c1063aa-86e5-4361-9d91-445bd3003979)

## Features

- CRUD operations for directors, actors, genres, movies, and ratings.
- Many-to-many relationship management between movies and genres.
- Database migrations using TypeScript.

## Scripts

The following scripts are available in the project:

- **install**: Install dependencies.
  ```bash
  npm install

- **start**: Runs the application.
  ```bash
  npm start

- **dev**: Runs the application in watch mode.
  ```bash
  npm run dev

# Run using Docker (optional)
- **run**: Runs the application in watch mode.
  ```bash
  docker-compose up
