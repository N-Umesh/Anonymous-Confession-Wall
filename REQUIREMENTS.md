# Confession Wall Requirements

## System Requirements

- Node.js 18 or later
- npm 9 or later
- MongoDB Community Server running locally
- Git

## Backend Requirements

Location: `backend/`

Core packages:

- `express`
- `mongoose`
- `cors`
- `nodemon`

Backend expects MongoDB at:

`mongodb://127.0.0.1:27017/confessionDB`

## Frontend Requirements

Location: `frontend/`

Core packages:

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `eslint`

## Run Requirements

1. Install backend dependencies with `npm install` inside `backend/`
2. Install frontend dependencies with `npm install` inside `frontend/`
3. Start MongoDB locally
4. Run the backend server on port `5000`
5. Run the frontend development server from `frontend/`

## Notes

- The frontend fetches data from `http://localhost:5000/confessions`
- If you change the backend port, update the frontend fetch URLs too
