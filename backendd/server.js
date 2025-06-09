import express from 'express'
import { createServer } from "node:http"
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import { connectToScoket } from './controllers/socketManager.js'
import cors from 'cors'
import router from './routes/users.routes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const server = createServer(app)

// Socket.io
const io = connectToScoket(server)

// CORS Config
const allowedOrigins = ['https://vibecall-frontend.onrender.com']

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if using cookies or auth headers
}))

// Allow preflight requests for all routes
app.options('*', cors())

// Middleware
app.use(express.json({ limit: "40kb" }))
app.use(express.urlencoded({ limit: "40kb", extended: true }))

// Routes
app.use("/api/v1/users", router)

// DB and Server Start
const start = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo connected DB host: ${connectionDB.connection.host}`)

    server.listen(process.env.PORT, () => {
      console.log("Listening on Port", process.env.PORT)
    })
  } catch (err) {
    console.error("Error connecting to DB:", err)
    process.exit(1)
  }
}

start()
