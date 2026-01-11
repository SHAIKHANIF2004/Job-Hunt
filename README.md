# 🚀 Job-Hunt – Advanced Job Board Platform

[![GitHub Repo URL](https://img.shields.io/badge/GitHub-SHAIKHANIF2004%2FJob--Hunt-blue?style=flat&logo=github)](https://github.com/SHAIKHANIF2004/Job-Hunt)
[![Technology Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20Vite-brightgreen)](https://mern.io/)
[![Live Application](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://job-hunt-n7hh.onrender.com)

A comprehensive, production-ready **MERN stack** job board application that connects talented job seekers with innovative employers. Built with modern technologies, robust security, and an exceptional user experience.

---

## ✨ Key Features

This platform is designed with two core user roles:

### 🎯 For Job Seekers (Developers)

- **🔐 Secure Authentication** – JWT-based login and registration.
- **🔍 Advanced Job Search** – Real-time job search with filters (location, salary, job type, experience).
- **💼 One-Click Applications** – Apply to jobs seamlessly.
- **📊 Application Tracking** – Track applied jobs and their status.
- **👤 Profile Management** – Manage profile details with resume upload.
- **📱 Mobile-First Design** – Fully responsive across devices.

### 🏢 For Employers (Recruiters)

- **📝 Job Posting Management** – Create, update, and delete job postings.
- **👥 Applicant Dashboard** – View and manage applicants.
- **✅ Application Control** – Accept or reject applications efficiently.

---

## 🛠️ Technology Stack

| Category          | Technology                           | Description                           |
| :---------------- | :----------------------------------- | :------------------------------------ |
| **Frontend Core** | ⚛️ **React 19 (via Vite)**           | Component-based UI with Vite tooling. |
|                   | 🎯 **Redux Toolkit & Redux Persist** | State management with persistence.    |
|                   | 🧭 **React Router DOM**              | Client-side routing.                  |
| **Backend Core**  | 🚀 **Node.js & Express.js**          | RESTful API and server-side logic.    |
|                   | 🗄️ **MongoDB & Mongoose**            | NoSQL database with schema modeling.  |
| **Styling & UI**  | 🎨 **Tailwind CSS**                  | Utility-first CSS framework.          |
|                   | ♿ **Radix UI**                      | Accessible UI primitives.             |
|                   | ✨ **Framer Motion**                 | Smooth animations and transitions.    |
| **Communication** | 📡 **Axios**                         | HTTP client for API requests.         |

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js** >= 16.0.0
- **MongoDB** >= 5.0
- **npm** >= 8.0.0

---

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/SHAIKHANIF2004/Job-Hunt.git](https://github.com/SHAIKHANIF2004/Job-Hunt.git)
    cd JobHunt
    ```

2.  **Install dependencies:**
    The project uses a monorepo structure (root for backend, `client` for frontend).

    ```bash
    # Install server dependencies (in the root folder)
    npm install

    # Install client dependencies (navigate to the client folder)
    cd client && npm install && cd ..
    ```

3.  **Environment Setup**

    - Create a **`.env`** file in the root directory for **Server** variables.
    - Create a **`client/.env`** file in the `client/` directory for **Client** variables.
    - Configure the required variables (listed in the next section).

4.  **Start Development Servers**
    - Start the **backend server (Port 3000)**:
      ```bash
      npm run dev
      ```
    - In a **separate terminal**, start the **frontend (Vite, Port 5173)**:
      ```bash
      cd client && npm run dev
      ```

---

## 🌐 Live Application

The JobHunt platform is live and publicly accessible!

🚀 **Ready to revolutionize job hunting?** Visit the live application here:

**[https://job-hunt-n7hh.onrender.com]**

---

## 🔧 Environment Variables

### Server (`.env`)

| Variable                | Description                       | Example Value                           |
| :---------------------- | :-------------------------------- | :-------------------------------------- |
| `MONGO_URL`             | Your MongoDB connection string.   | `mongodb://localhost:27017/jobhunt`     |
| `SECRET_KEY`            | Secret key for JWT signing.       | `your_super_secure_jwt_secret_key_here` |
| `PORT`                  | Backend server port.              | `3000`                                  |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary name for file uploads. | `your_cloudinary_cloud_name`            |
| `CLOUDINARY_API_KEY`    | Cloudinary API Key.               | `your_cloudinary_api_key`               |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret.            | `your_cloudinary_api_secret`            |

### Client (`client/.env`)

| Variable            | Description                  | Example Value           |
| :------------------ | :--------------------------- | :---------------------- |
| `VITE_API_BASE_URL` | Base URL of the backend API. | `http://localhost:3000` |

---

## 📚 API Documentation

The RESTful API is structured into versions (`/api/v1`) and organized by resource.

- **Public Endpoints (No Auth):** Login, Register, Get Jobs.
- **Protected Endpoints (Auth Required):** Post Job, Apply for Job, Get Applications.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the platform:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch.
5.  Open a Pull Request.

---

Built with ❤️ by **Abdul Hanif Shaik**

**Hanif Shaik** - [shaikhanif2004@gmail.com]

Project Link: [https://github.com/SHAIKHANIF2004/Job-Hunt](https://github.com/SHAIKHANIF2004/Job-Hunt)
\*\*\*NOTE: The live application is now deployed. Run it locally to explore
