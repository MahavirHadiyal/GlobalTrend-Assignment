# Global Trend – Task Management Web Application

This is a **Full Stack Task Management Web Application** built as part of the **Global Trend Full Stack Development Internship – Skill Assessment**.

The application allows users to **register, login, and manage tasks** with full CRUD functionality using a modern MERN stack.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

### Task Management
- Create new tasks
- View all tasks
- Update task title, description, and status
- Delete tasks
- Each user can manage only their own tasks

### Frontend
- Built with **React**
- Simple & responsive UI using **Tailwind CSS**
- Uses **fetch API** for backend communication
- Client-side routing with **React Router**

### Backend
- **Node.js + Express**
- RESTful API
- JWT authentication
- Secure password hashing using **bcrypt**
- MongoDB database with **Mongoose**
- Deployed on **Vercel (Serverless)**

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- cors

---

## 📂 Project Structure

### Backend
backend/
├── config/
│ └── db.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── authRoutes.js
│ └── taskRoutes.js
├── server.js
├── vercel.json
└── package.json


### Frontend

frontend/
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ ├── App.jsx
│ └── main.jsx


---

## 🌐 Deployed Backend URL

https://global-trend-assignment.vercel.app

## 🌐 Deployed Frontend URL

https://global-frontend-zeta.vercel.app

## 🔑 API Endpoints
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);
