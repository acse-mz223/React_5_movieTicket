import express from 'express'
import {FetchRandomFilm, FetchScreenByScreenNumber, FetchShowtimeByShowtimeId, FetchTrailerById } from '../controllers.js/frontend.js'

const frontendRouter = express.Router()

frontendRouter.get("/randomMovie/:number", FetchRandomFilm)
frontendRouter.get("/showtime/:id", FetchShowtimeByShowtimeId)
frontendRouter.get("/screen/:number", FetchScreenByScreenNumber)
frontendRouter.get("/trailer/:id", FetchTrailerById)


export default frontendRouter