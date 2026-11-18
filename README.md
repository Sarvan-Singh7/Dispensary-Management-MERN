# Chitkara University Medico

A MERN web application for sharing Chitkara University Health Center information and managing dispensary operations. The application includes public health-center information, medicine stock search, and role-based dashboards for administrators, staff, and students.

**Live site:** [dispensary-frontend.onrender.com](https://dispensary-frontend.onrender.com/)

**Repository:** [Sarvan-Singh7/Dispensary-Management-MERN](https://github.com/Sarvan-Singh7/Dispensary-Management-MERN)

## Features

- **Public information:** Browse health-center details, staff, facilities, nearby hospitals, gallery images, and event announcements.
- **Medicine stock:** Search the medicine inventory by name.
- **Student accounts:** Register and sign in; students can view their health-record history.
- **Admin and staff dashboards:** Register students and manage records, medicine inventory, facilities, nearby hospitals, gallery content, and events.
- **Administrator tools:** Manage staff accounts.
- **Account recovery:** Request a one-time password (OTP) by email to reset a password.

## Technology

- **Frontend:** React, Vite, React Router, Material UI
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication and email:** JSON Web Tokens (JWT), Nodemailer
- **Local containers:** Docker Compose

## Project structure

```text
.
├── backend/                 # Express API, MongoDB models, authentication
├── frontendDispensary/      # React application
└── docker-compose.yml        # Local frontend and backend services
```

## Run locally

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm
- A MongoDB database
- Email credentials for OTP password recovery

### 1. Configure the backend

Create `backend/.env`:

```dotenv
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
EMAIL=<email-address>
EMAIL_PASSWORD=<email-provider-password>
JWT_SECRET=<long-random-secret>
```

Use your own database and email-provider credentials. Keep `.env` files and secrets out of source control.

### 2. Start the API

From the repository root:

```bash
cd backend
npm install
npm run dev
```

The API listens on `http://localhost:4000` when `PORT=4000`. Its root endpoint (`/`) returns a welcome message.

### 3. Start the frontend

In a second terminal:

```bash
cd frontendDispensary
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). During development, the frontend uses `http://localhost:4000` as its default API URL. To use another backend, set `VITE_API_URL` in `frontendDispensary/.env.local`.

## Docker Compose

The Compose file starts the Vite development server and the Express API. Create a repository-root `.env` with the backend values above, then run:

```bash
docker compose up --build
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:4000](http://localhost:4000)

Stop the services with `Ctrl+C`; run `docker compose down` to remove the containers.

## API areas

| Prefix | Purpose |
| --- | --- |
| `/api/auth` | Registration, login, logout, OTP password recovery, student and staff account operations |
| `/api/medicine` | Medicine inventory and name search |
| `/api/history` | Student health-record history and administrative history views |
| `/api/facility` | Health-center facilities |
| `/api/hospital` | Nearby hospitals |
| `/api/gallary` | Gallery images |
| `/api/notification` | Event announcements |

Most management operations require an authenticated administrator or staff account. Student history is restricted to authenticated students.

## Build and lint

Run frontend checks from `frontendDispensary/`:

```bash
npm run build
npm run lint
```

The backend package does not currently have an automated test suite.

## Deployment notes

- Set `VITE_API_URL` to the deployed backend URL when building the frontend for production.
- The backend currently allows requests from `http://localhost:5173` and `https://dispensary-frontend.onrender.com`. Update the CORS allowlist in `backend/index.js` if deploying the frontend to another origin.
- Set `PORT`, `MONGODB_URI`, `EMAIL`, `EMAIL_PASSWORD`, and `JWT_SECRET` in the backend hosting provider's environment settings.
- Use synthetic data for evaluation. Before using real health information, review the application's security, privacy, and regulatory requirements.

## Contributors

<div align="center">

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

</div>
