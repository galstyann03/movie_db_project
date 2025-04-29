# Movie Database Project

## Description
A movie database application built with Node.js, TypeScript, PostgreSQL, and TypeORM. This application allows users to manage movie information, including directors, actors, genres, and ratings.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime
- **TypeScript**: JavaScript with static types
- **PostgreSQL**: Relational database management system
- **TypeORM**: ORM for TypeScript and JavaScript
- **Express**: Web framework for Node.js
- **Winston**: Logger for Node.js

## Database Diagram

Below is the database diagram illustrating the relationships between the tables:

![db](https://github.com/user-attachments/assets/2c1063aa-86e5-4361-9d91-445bd3003979)

Summary of Relationships:
One-to-One: Each record in Movies corresponds to exactly one record in Ratings.
One-to-Many: A record in Directors can have multiple corresponding records in Movies, but a record in Movies can correspond to only one record in Directors.
Many-to-Many: Records in Movies can be associated with multiple records in Genres, and vice versa. This requires a bridge table MovieGenres.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/galstyann03/movie_db_project.git
   or
   git clone git@github.com:galstyann03/movie_db_project.git
   cd movie-db-project

2. Install dependencies:

npm install

3. Set up your environment variables in a .env file:

DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

4. Compile TypeScript to JavaScript:

Compile TypeScript to JavaScript:

npm run build

5. Run database migrations:

npm run migration:run

6. Start the server:

npm start

7. To revert the migrations:

npm run migration:revert


## Usage
Access the API via http://localhost:3000.
Use Postman or any API client to interact with the endpoints.
API Endpoints

License
This project is licensed under the MIT License. See the LICENSE file for details.
