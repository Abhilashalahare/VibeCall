# 📞 VibeCall — Real-time Video Calling Web App

VibeCall is a basic yet functional **real-time video call web application** built from scratch using modern web technologies.  
This project uses **WebRTC** for peer-to-peer media streaming and **Socket.IO** for real-time signaling and room management.


## 🚀 Live Demo

🔗 [Click here to try VibeCall live](https://vibecall-frontend.onrender.com)


## 📌 Features

- 🎥 **One-on-one Video Calling** using WebRTC.
- 🌐 **Real-time Communication & Room Joining** via Socket.IO.
- 🎛️ **Dynamic Meeting Code Generation** and joining system.
- 📡 **Secure Webcam & Microphone Access** using Navigator MediaDevices API.
- 📝 **Meeting History** — track meetings a user has attended with date and code.
- 🔐 **Simple Authentication System** — sign up, login and session management using crypto-generated tokens.
- 📦 **Clean, Responsive UI** built with Material UI (MUI).
- 📄 **React Router Navigation** between Home, Call Room, History, and Authentication screens.


## 🛠️ Tech Stack

**Frontend:**
- React.js
- WebRTC
- Socket.IO Client
- React Router DOM
- Material UI

**Backend:**
- Node.js
- Express.js
- Socket.IO Server
- MongoDB (with Mongoose)
- bcrypt (for password hashing)
- crypto (for token generation)


For both /frontend and /backendd directories:

-bash
npm install

cd frontend 
npm run dev

cd backendd
node server.js

