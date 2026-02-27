🏥 College Dispensary Management System
A full-stack web application built with the MERN Stack to digitize and streamline college dispensary operations. The system supports three role-based portals — Admin, Staff, and Student — each with dedicated functionality for managing medicines, student health records, and dispensary resources.

🚧 Status: In Progress — Frontend UI complete. Backend integration ongoing.


📸 Overview
The College Dispensary Management System allows college dispensaries to:

Manage medicine inventory with real-time stock tracking
Register students and maintain their health records
Control staff access with role-based authentication
Allow students to view their own medicine history


✨ Features
🔐 Authentication & Security

Secure login with JWT (JSON Web Tokens)
Password encryption for all users
OTP-based password reset via NodeMailer
Role-based access control (Admin / Staff / Student)

🛡️ Admin Portal

Add, edit, and delete staff members
Staff credentials automatically sent to registered email
Full control over all dispensary data
View and filter student records by month and year

👨‍⚕️ Staff Portal

Register new students into the system
Search students by roll number
Record medicine dispensed to students
Manage medicine inventory (Add / Edit / Delete)
Manage facilities, nearby hospitals, events, and gallery

🎓 Student Portal

View personal medicine history
Self-registration with email and roll number
OTP-based forgot password support

📦 Medicine & Stock Management

Real-time stock quantity tracking
Stock auto-decrements when medicine is dispensed
Prevents dispensing more than available quantity
Search medicines by name

📋 Records & History

Filter student records by month and year
View per-student medicine history grouped by date
Search records by roll number


🛠️ Tech Stack
LayerTechnologyFrontendReact.js, CSSBackendNode.js, Express.jsDatabaseMongoDB (Mongoose)AuthenticationJWT, BcryptEmail ServiceNodeMailerImage StorageCloudinaryBuild ToolVite

📁 Project Structure
Dispensary-Management-MERN/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── assets/           # Images and static files
│   └── App.jsx           # Main app with routing
├── index.html
├── package.json
└── vite.config.js

🚀 Getting Started
Prerequisites

Node.js installed
MongoDB (local or Atlas)
Git

Installation
bash# Clone the repository
git clone https://github.com/Sarvan-Singh7/Dispensary-Management-MERN.git

# Navigate to project directory
cd Dispensary-Management-MERN

# Install dependencies
npm install

# Start the development server
npm run dev

Backend setup instructions will be added once backend integration is complete.


👤 Portals & Access
RoleAccessAdminFull access including staff managementStaffAll features except managing other staffStudentView personal medicine history only
