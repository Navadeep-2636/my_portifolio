# MERN Stack Portfolio for Veluru Navadeep Reddy

A modern, responsive, and aesthetically pleasing personal portfolio website built with the MERN stack.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion, Vite
- **Backend:** Node.js, Express, Supabase (PostgreSQL)

## Features
- Fully responsive design (mobile, tablet, desktop)
- Dark/Light mode support with persistence
- Smooth animations (fade-in, slide-up, cursor typing effects)
- Fully functional contact form integrated with Express backend
- Glassmorphism UI elements

## Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- Supabase Account and Project (with a `contacts` table created)

### 1. Setup Backend
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update environment variables. A `.env` file should be present inside the `backend` folder with:
   ```env
   PORT=5000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   *Note: Create a table named `contacts` in your Supabase project with `name` (text), `email` (text), and `message` (text) columns.*
4. Start the backend DEV server:
   ```bash
   npm run dev
   ```
   *(If nodemon is installed, otherwise `node server.js`)*

### 2. Setup Frontend
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the backend URL. Create a `.env` file in the `frontend` folder if needed:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment Instructions

### Deploying Frontend (Vercel)
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Set the Root Directory to `frontend`.
5. Set the Build Command to `npm run build` and Output Directory to `dist`.
6. Add the environment variable `VITE_API_URL` pointing to your deployed backend URL.
7. Click **Deploy**.

### Deploying Backend (Render / Railway)
1. Ensure your backend code is in the root of the repository or configure the root directory on your platform (e.g., Render).
2. Create a new Web Service on [Render](https://render.com/) or a New Project on [Railway](https://railway.app/).
3. Connect your GitHub repository.
4. Add the following Environment Variables in the platform dashboard:
   - `SUPABASE_URL`: Your Supabase URL.
   - `SUPABASE_ANON_KEY`: Your Supabase anon key.
   - `PORT`: 5000 (Or the platform's default).
5. Deploy the application.
6. Once deployed, copy the backend URL and update your Vercel frontend environment variable (`VITE_API_URL`).
