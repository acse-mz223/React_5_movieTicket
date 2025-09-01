import express from 'express'
import { connectToDb } from './config/db.js'
import { NODE_ENV, PORT } from './config/envVars.js'
import cookieParser from 'cookie-parser'
import backendRouter from './routes.js/backend.js'
import frontendRouter from './routes.js/frontend.js'
import { insertSeatmap } from './config/insertSeatmap.js'
import { clerkMiddleware } from '@clerk/express'
import path from "path";
import { fileURLToPath } from 'url';

const app = express()

app.use(express.json())  // parse body first -> can get the info in req.body
app.use(cookieParser()) // parse cookie -> can get the info in req.cookies
app.use(clerkMiddleware())  // using clerk for user authetification


app.use("/api/backend", backendRouter)
app.use("/api/frontend", frontendRouter)

// deployment
const __filename = fileURLToPath(import.meta.url) // convert file url to path
const __dirname = path.dirname(path.dirname(__filename)); // from file path go up two level to project path
if (NODE_ENV === "production"){
    // add front end into back end
    app.use(express.static(path.join(__dirname, "frontend/dist"))) // add builded frontend to backend
    // return index
    app.get("/{*splat}", (req, res)=>{
        res.sendFile(path.resolve("frontend", "dist", "index.html"))
    })
}

// listen
app.listen(PORT, () => {
    console.log(`server start to liston on port ${PORT}`)
    // connect to db
    connectToDb()
    // insert seatmap
    //insertSeatmap() // run it when you first time run in your device to upload the seatlayout to db
})