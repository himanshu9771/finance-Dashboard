# 💎 Finova Pro — Full-Stack Personal Finance Platform & AI Engine

**Finova Pro** is a full-stack, real-time Personal Finance Dashboard & AI Analytics Platform built with a Node.js Express REST API backend, JWT authentication, persistent database store, time-series AI cashflow forecasting, and a modern Cyber-Emerald web UI.

---

## 🌟 Full-Stack Architecture

### 🚀 1. Real-Time Node.js Express Backend (`server.js`)
- **Port**: `http://localhost:5000`
- **Authentication API**: Password hashing & JWT Token generation (`/api/auth/login`, `/api/auth/register`, `/api/auth/me`).
- **REST Workspace API**: Real-time CRUD endpoints for `/api/transactions`, `/api/goals`, `/api/budgets`, and `/api/subscriptions`.
- **🤖 Real-Time AI Predictions API (`/api/predictions`)**: Time-series spending velocity algorithm forecasting next month expenses, net savings buffer, budget risk factors, and health score (0–100).
- **⚡ Master Admin API (`/api/admin`)**: Global system volume aggregation, user account management, role promotion/demotion, and system audit logs.

### 🎨 2. Cyber-Emerald Frontend UI
- **Cyber-Emerald & Pearl Themes**: Sleek dark mode & light mode toggles with glassmorphic cards and micro-animations.
- **Interactive Chart.js Engine**: Balance growth trend line chart (3M/6M/12M), category expense doughnut chart, and cashflow bar charts.

---

## 🏁 Quick Start Guide

### 1. Install & Run Express Backend API
```bash
# Navigate to project directory
cd finance-Dashboard-main

# Install dependencies (express, cors, jsonwebtoken, bcryptjs)
npm install

# Start Express Real-Time Server (Runs on http://localhost:5000)
npm start
```

### 2. Launch Web Application
Open `index.html` in any browser or launch with Live Server.

---

Made with ❤️ for real-time financial empowerment.