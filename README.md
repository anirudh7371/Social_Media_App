# Social Media Platform Backend

## Overview

This is a full-stack social media platform backend built with Node.js, Express, and MongoDB. The application provides a comprehensive set of features for user interaction, including posts, comments, likes, and follows.

## Features

### User Management
- User registration and authentication
- Profile updates
- Follow/Unfollow functionality
- Random user discovery

### Post Management
- Create, read, update, and delete posts
- Like and unlike posts
- Retrieve user's liked posts
- Pagination and sorting of posts

### Comment System
- Add comments to posts
- Nested comment support
- Edit and delete comments
- Comment cooldown to prevent spam

### Real-time Messaging
- Socket.io powered messaging
- User-to-user direct messaging

## Tech Stack

- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Authentication: JWT (JSON Web Tokens)
- Real-time Communication: Socket.io
- Password Hashing: bcrypt

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install backend dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=4000
```

4. Start the server
```bash
npm run server
```

## API Endpoints

### Authentication
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: User login

### Posts
- `GET /api/posts`: Retrieve posts
- `POST /api/posts`: Create a new post
- `GET /api/posts/:id`: Get a specific post
- `PATCH /api/posts/:id`: Update a post
- `DELETE /api/posts/:id`: Delete a post
- `POST /api/posts/like/:id`: Like a post
- `DELETE /api/posts/like/:id`: Unlike a post

### Comments
- `POST /api/comments/:id`: Add a comment to a post
- `GET /api/comments/post/:id`: Get comments for a post
- `PATCH /api/comments/:id`: Update a comment
- `DELETE /api/comments/:id`: Delete a comment

### Users
- `GET /api/users/:username`: Get user profile
- `GET /api/users/random`: Get random users
- `POST /api/users/follow/:id`: Follow a user
- `DELETE /api/users/unfollow/:id`: Unfollow a user

## Authentication

The API uses JWT for authentication. Include the token in the `x-access-token` header for protected routes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
