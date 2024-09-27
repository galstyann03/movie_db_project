# Movie Database API

This is a TypeScript Node.js application that provides a RESTful API for managing a movie database. The database consists of tables for directors, actors, genres, movies, and ratings.

## Database Diagram

Below is the database diagram illustrating the relationships between the tables:

![db](https://github.com/user-attachments/assets/2c1063aa-86e5-4361-9d91-445bd3003979)

Summary of Relationships:
One-to-One: Each record in Movies corresponds to exactly one record in Ratings.
One-to-Many: A record in Directors can have multiple corresponding records in Movies, but a record in Movies can correspond to only one record in Directors.
Many-to-Many: Records in Movies can be associated with multiple records in Genres, and vice versa. This requires a bridge table MovieGenres.

## Features

- CRUD operations for directors, actors, genres, movies, and ratings.
- Many-to-many relationship management between movies and genres.

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


## Database Setup

To set up, populate, and clean up the PostgreSQL database for this project, follow these steps:

1. Create Tables

Run the following command to create the necessary tables:

-- Navigate to the `database` folder, then run the schema.sql script to create tables
```bash
\i database/schema.sql

This will create the Directors, Actors, Genres, Movies, Ratings, and MovieGenres tables with the appropriate relationships.

# 2. Populate Tables with Data

After creating the tables, populate them with sample data by running:

-- Run the data.sql script to insert sample data into the tables
```bash
\i database/data.sql

This script will insert 5 records into each of the tables (Directors, Actors, Genres, Movies, and Ratings) and establish the relationships.

# 3. Delete Tables (Cleanup)

If you want to clean up the database by removing all the tables, use the delete.sql file. Run the following command:

-- Run the delete.sql script to drop all tables
```bash
\i database/delete.sql

This will remove all tables from the database, including handling any foreign key dependencies with the CASCADE option.


## Database Setup Using CLI

To set up, populate, and clean up the PostgreSQL database using the command line, follow the instructions below:

### 1. Create Tables

To create the necessary tables, follow these steps:

1. Open your terminal and navigate to the project directory where the `database` folder is located:
   ```bash
   cd /movie-db-project

2. Connect to your PostgreSQL database:
   ```bash
   psql -U postgres -d movies_db
   
3. Run the schema script to create the tables:
   ```bash
    \i database/schema.sql

4. Populate Tables with Data
   ```bash
    \i database/data.sql
   
5. Delete Tables (Cleanup)
   ```bash
    \i database/delete.sql
