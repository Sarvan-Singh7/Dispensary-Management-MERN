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
- Protected routes with auth middleware
- HTTP-only cookie sessions

### 👨‍💼 Admin Portal
- Dashboard with system-wide analytics
- Manage staff accounts (create, update, deactivate)
- View all student health records
- Full medicine inventory control (add, edit, delete)
- Activity logs & reports

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
│                  CLIENT (React + Vite)                  │
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
│               SERVER (Node.js + Express)                │
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
│                     MongoDB Atlas                        │
│                                                         │
│    Users   Appointments   Medicines   HealthRecords     │
└─────────────────────────────────────────────────────────┘
```

---

## 🔐 Role-Based Access

| Feature | Admin | Staff | Student |
|---|:---:|:---:|:---:|
| View All Students | ✅ | ✅ | ❌ |
| Manage Staff Accounts | ✅ | ❌ | ❌ |
| Medicine Inventory (Full Control) | ✅ | ❌ | ❌ |
| Medicine Inventory (View Only) | ✅ | ✅ | ❌ |
| Book Appointment | ❌ | ❌ | ✅ |
| Issue Medicine to Student | ❌ | ✅ | ❌ |
| View Own Health Records | ✅ | ✅ | ✅ |
| View Activity Logs | ✅ | ❌ | ❌ |
| OTP Password Reset | ✅ | ✅ | ✅ |

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Project setup — React + Vite
- [x] Role-based UI routing — Admin, Staff, Student portals
- [x] Authentication pages — Login, Register, Forgot Password

- [x] Student appointment booking (UI)
- [x] Medicine inventory module (UI)
- [x] Student profile management (UI)
- [x] Backend — Node.js + Express server setup
- [x] MongoDB Atlas integration with Mongoose
- [x] JWT authentication implementation
- [x] Public API for global college events & notifications
- [x] Authentication middleware fixes for unauthenticated requests
- [X] REST API — Student, Staff, Admin routes
- [X] Student health records module
- [X] Admin analytics dashboard
- [X] Email notifications for appointment updates

### 🔄 In Progress
- [ ] Deployment — Backend on Render, Frontend on Netlify
- [ ] Docker containerization

---

## 👥 Contributors

<div align="center">

Thanks to these amazing people who built this project together 🙌

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/Sarvan-Singh7">
        <img src="https://github.com/Sarvan-Singh7.png" width="80px" alt="Sarvan Singh"/><br/>
        <sub><b>Sarvan Singh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Dishu1871">
        <img src="https://github.com/Dishu1871.png" width="80px" alt="Deepanshu"/><br/>
        <sub><b>Deepanshu</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Upandergarg">
        <img src="https://github.com/Upandergarg.png" width="80px" alt="Upander Garg"/><br/>
        <sub><b>Upander Garg</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Death-Raider-2829">
        <img src="https://github.com/Death-Raider-2829.png" width="80px" alt="Simar Singh"/><br/>
        <sub><b>Simar Singh</b></sub>
      </a>
    </td>
  </tr>
</table>

*Want to contribute? Feel free to open a PR!*

</div>

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

<div align="center">
  <sub>Built with ❤️ by the Dispensary Management Team</sub>
</div>