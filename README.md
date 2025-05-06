# University Blog API

This project is a university-focused blog API built with Node.js, Fastify, Prisma, PostgreSQL, and TypeScript. It allows users to create posts similar to Twitter, manage their profiles, and authenticate securely.

## Features

- User authentication (registration and login)
- Profile management (viewing and editing user profiles)
- Creating and retrieving posts
- Publication feed for users
- Middleware for error handling and request validation

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Fastify**: Fast and low-overhead web framework for Node.js.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database for storing user and post data.
- **TypeScript**: Superset of JavaScript that adds static types.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Docker (optional, for containerized setup)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd university-blog-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Start DB with docker:
   ```
   docker compose up --build
   ```

5. Run database migrations:
   ```
   npx prisma migrate dev
   ```

6. Start the server:
   ```
   npm run start
   ```


### API Endpoints

- **Authentication**
  - `POST /account/register`: Register a new user
  - `POST /account/login`: Log in an existing user

- **Profile Management**
  - `GET /....`: Get user profile information
  - `PUT /...`: Update user profile information

- **Posts**
  - `POST /...`: Create a new post
  - `GET /...`: Retrieve all posts

## Running Tests

To run the tests, use the following command:
```
npm run test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.