import express from 'express'
import {createServer} from "node:http"

import { Server } from 'socket.io'

import mongoose from 'mongoose'
import { connectToScoket } from './controllers/socketManager.js'

import cors from 'cors'
import router from './routes/users.routes.js'


const app = express()
const server = createServer(app)
// const io = new Server(server)  fro this make socketManager to manage it and pass the server variable
const io = connectToScoket(server)

app.set('port', (process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit: "40kb", extended: true}))

app.use("/api/v1/users", router)

const start = async()=>{
    const connectionDB = await mongoose.connect("mongodb+srv://abhilasha:himawari12@callix.gfzgjbc.mongodb.net/")

    console.log(`Mongo connected DB host: ${connectionDB.connection.host} `);
    
    server.listen(app.get('port'), ()=>{   //app.get('port) or 8000
        console.log("Listening on Port", app.get('port'));
        
    })
}


start()