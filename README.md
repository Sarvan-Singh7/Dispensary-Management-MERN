<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&pause=1000&color=00D9FF&center=true&vCenter=true&width=700&lines=🏥+College+Dispensary+Management+System;MERN+Stack+%7C+JWT+Auth+%7C+Role-Based+Access" alt="Typing SVG" />

<br/>

<p>
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow?style=for-the-badge&logo=github"/>
  <img src="https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
</p>

<p>
  <a href="https://github.com/Sarvan-Singh7/Dispensary-Management-MERN/stargazers">
    <img src="https://img.shields.io/github/stars/Sarvan-Singh7/Dispensary-Management-MERN?style=social"/>
  </a>
  <a href="https://github.com/Sarvan-Singh7/Dispensary-Management-MERN/forks">
    <img src="https://img.shields.io/github/forks/Sarvan-Singh7/Dispensary-Management-MERN?style=social"/>
  </a>
</p>

> **A full-stack healthcare management platform built to digitize college dispensary operations — replacing paper-based systems with a secure, role-based digital solution.**

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Role-Based Access](#-role-based-access)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributors](#-contributors)

---

## 🔍 Overview

The **College Dispensary Management System** is a MERN stack web application that streamlines the entire dispensary workflow — from student appointment booking to medicine inventory management.

Built with **three separate role-based portals** for Admin, Staff, and Students, each with unique access levels and capabilities. Authentication is handled via **JSON Web Tokens (JWT)** with OTP-based password reset for enhanced security.

### 🎯 Problem It Solves

| Before (Manual) | After (This System) |
|---|---|
| Paper-based prescription records | Digital health records per student |
| No visibility into medicine stock | Real-time inventory tracking |
| Manual appointment scheduling | Online appointment booking |
| No audit trail | Complete activity logs |
| Password reset via admin only | OTP-based self-service reset |

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based stateless authentication
- Role-based access control (Admin / Staff / Student)
- OTP-based password reset via email
- Protected API routes with middleware
- HTTP-only cookie sessions

### 👨‍💼 Admin Portal
- Dashboard with system-wide analytics
- Manage staff accounts (create, update, deactivate)
- View all student health records
- Full medicine inventory control (add, edit, delete)
- Generate reports and activity logs

### 👩‍⚕️ Staff Portal
- View and manage daily appointments
- Issue medicines to students
- Update student health records
- Track medicine stock levels
- Mark appointments as completed

### 🎓 Student Portal
- Book appointments with dispensary
- View personal health records & prescriptions
- Track appointment history
- OTP-based password reset
- Profile management

---

## 🛠️ Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
</p>

### Security & Tools
<p>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=letsencrypt&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=gmail&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
</p>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT (React + Vite)               │
│                                                         │
│   ┌──────────┐   ┌──────────┐   ┌──────────────────┐   │
│   │  Admin   │   │  Staff   │   │     Student      │   │
│   │  Portal  │   │  Portal  │   │      Portal      │   │
│   └────┬─────┘   └────┬─────┘   └────────┬─────────┘   │
└────────┼──────────────┼──────────────────┼─────────────┘
         │              │                  │
         └──────────────▼──────────────────┘
                        │  REST API (Axios)
                        │
┌───────────────────────▼─────────────────────────────────┐
│                  SERVER (Node.js + Express)              │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │              JWT Auth Middleware                │   │
│   │         (verifies token + role check)           │   │
│   └──────────────────────┬──────────────────────────┘   │
│                          │                              │
│   ┌──────────┐  ┌────────┴──────┐  ┌────────────────┐  │
│   │   User   │  │  Appointment  │  │    Medicine    │  │
│   │  Routes  │  │    Routes     │  │    Routes      │  │
│   └────┬─────┘  └───────┬───────┘  └───────┬────────┘  │
└────────┼────────────────┼──────────────────┼────────────┘
         │                │                  │
┌────────▼────────────────▼──────────────────▼────────────┐
│                   MongoDB Atlas                          │
│                                                         │
│   Users    Appointments    Medicines    HealthRecords   │
└─────────────────────────────────────────────────────────┘
```

---

## 🔐 Role-Based Access

| Feature | Admin | Staff | Student |
|---|:---:|:---:|:---:|
| View All Students | ✅ | ✅ | ❌ |
| Manage Staff Accounts | ✅ | ❌ | ❌ |
| Medicine Inventory (Full) | ✅ | ❌ | ❌ |
| Medicine Inventory (View) | ✅ | ✅ | ❌ |
| Book Appointment | ❌ | ❌ | ✅ |
| Issue Medicine to Student | ❌ | ✅ | ❌ |
| View Own Health Records | ✅ | ✅ | ✅ |
| View Activity Logs | ✅ | ❌ | ❌ |
| OTP Password Reset | ✅ | ✅ | ✅ |

---


### Auth Routes — `/api/auth`
```
POST   /register          → Register new user
POST   /login             → Login & receive JWT
POST   /logout            → Clear session token
POST   /forgot-password   → Send OTP to email
POST   /verify-otp        → Verify OTP code
POST   /reset-password    → Set new password
```

### Student Routes — `/api/student`
```
GET    /profile           → Get student profile
PUT    /profile           → Update profile info
GET    /appointments      → Get appointment history
POST   /appointments      → Book new appointment
GET    /health-records    → Get personal health records
```

### Staff Routes — `/api/staff`
```
GET    /appointments      → View all appointments
PUT    /appointments/:id  → Update appointment status
POST   /prescriptions     → Issue medicine to student
GET    /inventory         → View medicine inventory
```

### Admin Routes — `/api/admin`
```
GET    /users             → Get all registered users
POST   /staff             → Create new staff account
DELETE /staff/:id         → Deactivate staff account
GET    /inventory         → Full inventory access
POST   /inventory         → Add new medicine
PUT    /inventory/:id     → Update medicine details
DELETE /inventory/:id     → Remove medicine from stock
GET    /logs              → View full activity logs
```

---


```
Dispensary-Management-MERN/
│
├── 📁 client/                      # React Frontend (Vite)
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 Admin/           # Admin portal components
│   │   │   ├── 📁 Staff/           # Staff portal components
│   │   │   └── 📁 Student/         # Student portal components
│   │   ├── 📁 pages/               # Route-level page components
│   │   ├── 📁 context/             # React context (AuthContext)
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   ├── 📁 utils/               # Axios config, helper functions
│   │   └── App.jsx
│   └── package.json
│
├── 📁 server/                      # Node.js + Express Backend
│   ├── 📁 controllers/             # Business logic layer
│   │   ├── authController.js
│   │   ├── studentController.js
│   │   ├── staffController.js
│   │   └── adminController.js
│   ├── 📁 models/                  # Mongoose schemas
│   │   ├── User.js
│   │   ├── Appointment.js
│   │   ├── Medicine.js
│   │   └── HealthRecord.js
│   ├── 📁 routes/                  # Express route definitions
│   ├── 📁 middleware/              # Custom middleware
│   │   ├── authMiddleware.js       # JWT token verification
│   │   └── roleMiddleware.js       # Role-based access guard
│   ├── 📁 utils/                   # OTP generator, email sender
│   ├── .env.example
│   └── server.js
│
└── README.md
```

---


### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or above
- [MongoDB Atlas](https://cloud.mongodb.com/) account (free tier works)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Sarvan-Singh7/Dispensary-Management-MERN.git
cd Dispensary-Management-MERN
```

### 2. Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Setup Environment Variables

```bash
# In the /server directory
cp .env.example .env
# Open .env and fill in your values
```

### 4. Run the Application

```bash
# Terminal 1 — Start backend (from /server)
npm run dev

# Terminal 2 — Start frontend (from /client)
npm run dev
```

| Service | URL |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend API | `http://localhost:5000` |

---


Create a `.env` file inside the `/server` folder:

```env
# Server Config
PORT=5000
NODE_ENV=development

# MongoDB Atlas
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dispensary

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Nodemailer (for OTP emails)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# OTP Config
OTP_EXPIRE_MINUTES=10
```

> ⚠️ Never push your `.env` file to GitHub. It is already listed in `.gitignore`.

---

## 📸 Screenshots

> 🚧 UI screenshots will be added upon completion of frontend.

| Admin Dashboard | Staff Portal | Student Portal |
|:---:|:---:|:---:|
| *Coming Soon* | *Coming Soon* | *Coming Soon* |

---

## 🗺️ Roadmap

- [x] Project setup with MERN stack + Vite
- [x] JWT Authentication (login / register / logout)
- [x] Role-based routing — Admin, Staff, Student
- [x] Student registration & profile management
- [x] Appointment booking system
- [x] Medicine inventory module
- [x] OTP-based password reset via email
- [ ] Student health records module
- [ ] Admin analytics dashboard
- [ ] Email notifications for appointment updates
- [ ] Fully responsive mobile UI
- [ ] Deployment — Backend on Render, Frontend on Netlify
- [ ] Docker containerization

---

## 👥 Contributors

<div align="center">

Thanks to these amazing people who built this project together 🙌

<a href="https://github.com/Sarvan-Singh7">
  <img src="https://github.com/Sarvan-Singh7.png" width="80px" style="border-radius:50%"/><br/>
  <sub><b>Sarvan Singh</b></sub>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Dishu1871">
  <img src="https://github.com/Dishu1871.png" width="80px" style="border-radius:50%"/><br/>
  <sub><b>Deepanshu</b></sub>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Upandergarg">
  <img src="https://github.com/Upandergarg.png" width="80px" style="border-radius:50%"/><br/>
  <sub><b>Upander Garg</b></sub>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/Death-Raider-2829">
  <img src="https://github.com/Death-Raider-2829.png" width="80px" style="border-radius:50%"/><br/>
  <sub><b>Simar Singh</b></sub>
</a>

<br/><br/>

*Want to contribute? Feel free to open a PR!*

</div>

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

<div align="center">
  <sub>Built with ❤️ by the Dispensary Management Team</sub>
</div>