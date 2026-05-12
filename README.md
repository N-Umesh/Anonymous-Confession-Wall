# Anonymous Confession Wall

Anonymous Confession Wall is a simple MERN-style project where users can post confessions anonymously and see them appear on a shared wall.

## Project Structure

- `frontend/` - React + Vite user interface
- `backend/` - Express + MongoDB server

## Requirements

Make sure these are installed on your system:

- Node.js
- npm
- MongoDB

## How to Run the Project

### 1. Install Dependencies

Open a terminal in the backend folder:

```bash
cd backend
npm install
```

Then open another terminal in the frontend folder:

```bash
cd frontend
npm install
```

### 2. Create the Environment File

Create a `.env` file in the project root by copying the values from `.env.example`.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/confessionDB
```

### 3. Start MongoDB

Make sure your local MongoDB server is running.

### 4. Run the Backend

Open a terminal and go to the backend folder:

```bash
cd backend
node server.js
```

The backend will run on:

`http://localhost:5000`

### 5. Run the Frontend

Open another terminal and go to the frontend folder:

```bash
cd frontend
npm run dev
```

The frontend will usually run on:

`http://localhost:5173`

## How It Works

- The frontend sends confession data to the backend
- The backend stores confessions in MongoDB
- The frontend fetches and displays all saved confessions

## Notes

- Keep both backend and frontend running at the same time
- If the backend port changes, update the fetch URLs in `frontend/src/App.jsx`
- If `dotenv` is missing, run `npm install` inside `backend`
- Do not upload `node_modules` to GitHub
