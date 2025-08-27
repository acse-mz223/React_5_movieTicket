import express from 'express'
import { connectToDb } from './config/db.js'
import { PORT } from './config/envVars.js'
import cookieParser from 'cookie-parser'
import backendRouter from './routes.js/backend.js'
import frontendRouter from './routes.js/frontend.js'
import { insertSeatmap } from './config/insertSeatmap.js'

const app = express()

app.use(express.json())  // parse body first -> can get the info in req.body
app.use(cookieParser()) // parse cookie -> can get the info in req.cookies

// app.use("/api/frontend", )
app.use("/api/backend", backendRouter)
app.use("/api/frontend", frontendRouter)


// listen
app.listen(PORT, () => {
    console.log(`server start to liston on port ${PORT}`)
    // connect to db
    connectToDb()
    // insert seatmap
    //insertSeatmap()
})