# Real-Time Polling App

A real-time web application that allows users to vote for their favorite programming languages with live updates and persistent results.

## ✨ Features

- 🗳️ Real-time voting for different language options
- 📊 Dynamic updates of voting results using Socket.IO
- 💾 Persistent voting results stored in Redis
- 📈 Real-time chart updates using Chart.js

## 🚀 Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **Socket.IO**: Real-time bidirectional event-based communication
- **Redis**: In-memory data structure store
- **Chart.js**: Interactive charting library

## 📋 Prerequisites

- Node.js (v14 or later)
- Redis server

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/real-time-polling-app.git
cd real-time-polling-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Redis

Ensure Redis is installed and running on your machine. 
- For macOS (using Homebrew): `brew install redis`
- For Windows: Download from [Redis Official Website](https://redis.io/download)
- For Linux: `sudo apt-get install redis-server`

Start the Redis server:
```bash
redis-server
```

### 4. Start the Application

```bash
node server.js
```

The server will start on `http://localhost:8080`

### 5. Open the App

Navigate to `http://localhost:8080` in your web browser to use the real-time polling app.
