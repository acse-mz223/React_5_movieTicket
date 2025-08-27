import express from 'express'
import {FetchRandomFilm, FetchScreenByScreenNumber, FetchShowtimeByShowtimeId } from '../controllers.js/frontend.js'

const frontendRouter = express.Router()

frontendRouter.get("/randomMovie/:number", FetchRandomFilm)
frontendRouter.get("/showtime/:id", FetchShowtimeByShowtimeId)
frontendRouter.get("/screen/:number", FetchScreenByScreenNumber)


export default frontendRouter