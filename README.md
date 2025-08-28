# JWT Auth App (Express + MongoDB)

This is a minimal example demonstrating signup/login and protecting routes using JWT tokens.

## Features
- Signup (hashes password with bcrypt)
- Login (returns JWT)
- Protected route `/api/protected/profile` requiring `Authorization: Bearer <token>`

## Quick setup (local)

1. Install Node.js (v16+ recommended) and npm.
2. Unzip the project and open a terminal in the project folder.
3. Run `npm install` to install dependencies.
4. Copy `.env.example` to `.env` and set values. If you have MongoDB locally, the default `MONGO_URI` should work.
5. Start the server:
   - For development: `npm run dev` (requires nodemon)
   - For production: `npm start`
6. The API will run on `http://localhost:5000` (or the port you set).

## Endpoints

- `POST /api/auth/signup`
  - Body (JSON): `{ "name": "Your Name", "email": "you@example.com", "password": "secret" }`
  - Response: `{ "token": "...", "user": { "id", "name", "email" } }`

- `POST /api/auth/login`
  - Body (JSON): `{ "email": "you@example.com", "password": "secret" }`
  - Response: `{ "token": "...", "user": { "id", "name", "email" } }`

- `GET /api/protected/profile`
  - Header: `Authorization: Bearer <token>`
  - Response: `{ "user": { "id", "name", "email", "createdAt" } }`

## Example curl commands

1) Signup:

curl -X POST http://localhost:5000/api/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{ "name":"Test User", "email":"test@example.com", "password":"123456" }'

2) Login:

curl -X POST http://localhost:5000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{ "email":"test@example.com", "password":"123456" }'

3) Access protected route (replace <token> with the token you received):

curl http://localhost:5000/api/protected/profile \\
  -H "Authorization: Bearer <token>"

## Notes & Troubleshooting
- If using MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string and allow your IP in security settings.
- If you get `E11000 duplicate key error`, either drop the database or use a different email when signing up.
