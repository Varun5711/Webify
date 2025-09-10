# Webify 🎶💬

A microservices-based web application with **user management** and **real-time chat**, built using Node.js, Express, MongoDB, React, and Nginx as an API Gateway.  
This project demonstrates a clean **microservices architecture** with containerized deployment using **Docker Compose**.

---

## 🚀 Tech Stack

- **Frontend** → React/Next.js
- **Backend Services**:
  - **User Service** → Authentication, user profile (Express + MongoDB)
  - **Chat Service** → Chat messages & channels (Express + MongoDB + Stream Chat)
- **Gateway** → Nginx reverse proxy (routes requests to microservices)
- **Database** → MongoDB
- **Containerization** → Docker & Docker Compose

---

## 🏗️ Architecture

```text
                       ┌────────────┐
   Client (Browser) →  │  Frontend  │
                       └─────┬──────┘
                             │
                             ▼
                      ┌────────────┐
                      │  Gateway   │  (Nginx, port 5001)
                      └─────┬──────┘
            ┌───────────────┼────────────────┐
            │                               │
            ▼                               ▼
   ┌───────────────┐                 ┌───────────────┐
   │ User Service  │                 │ Chat Service  │
   │ (port 3001)   │                 │ (port 3002)   │
   └───────┬───────┘                 └───────┬───────┘
           │                               │
           ▼                               ▼
   ┌───────────────┐                 ┌───────────────┐
   │ MongoDB       │                 │ MongoDB       │
   └───────────────┘                 └───────────────┘

	•	Gateway exposes a single entrypoint at http://localhost:5001/api/*
	•	Routes:
	•	/api/user/* → User Service
	•	/api/auth/* → User Service
	•	/api/chat/* → Chat Service

⸻

📂 Folder Structure

webify/
├── frontend/                # React/Next.js frontend
├── gateway/                 # API Gateway (Nginx)
│   ├── Dockerfile
│   └── nginx.conf
├── services/
│   ├── user-service/        # User & Auth service
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   └── index.js
│   │   └── package.json
│   ├── chat-service/        # Chat service
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   └── index.js
│   │   └── package.json
├── docker-compose.yml       # Orchestrates services locally
├── package.json             # Root package.json (helper scripts)
└── README.md


⸻

⚙️ Getting Started

1. Clone the repo

git clone https://github.com/your-username/webify.git
cd webify

2. Environment variables

Create .env files for each service based on the .env.example inside their folder:

services/user-service/.env

PORT=3001
MONGO_URL=mongodb://mongo:27017/userdb
JWT_SECRET=supersecret

services/chat-service/.env

PORT=3002
MONGO_URL=mongodb://mongo:27017/chatdb

3. Run with Docker Compose

docker-compose up --build

	•	API Gateway: http://localhost:5001/api
	•	User Service: http://localhost:3001
	•	Chat Service: http://localhost:3002
	•	Frontend: http://localhost:5173

4. Shut down

docker-compose down


⸻

📜 NPM Scripts (root)

npm run dev       # Run all services via docker-compose
npm run down      # Stop all services
npm run logs      # Follow logs
npm run frontend:build  # Build frontend manually
npm run frontend:start  # Start frontend locally (without docker)


⸻

✅ Features
	•	User authentication (JWT, token blacklist with TTL)
	•	Secure login/logout
	•	Profile management
	•	Real-time chat
	•	Microservices architecture with independent scaling
	•	API Gateway with Nginx
	•	MongoDB for persistence
	•	Docker Compose for orchestration

⸻

🤝 Contributing
	1.	Fork the repo
	2.	Create a feature branch (git checkout -b feature/new-feature)
	3.	Commit your changes (git commit -m 'Add new feature')
	4.	Push to branch (git push origin feature/new-feature)
	5.	Open a Pull Request

⸻

📄 License

This project is licensed under the MIT License.

---

