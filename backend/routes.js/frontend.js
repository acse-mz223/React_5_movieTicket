import express from 'express'
import {FetchRandomFilm, FetchShowtimeByShowtimeId } from '../controllers.js/frontend.js'

const frontendRouter = express.Router()

frontendRouter.get("/randomMovie/:number", FetchRandomFilm)
frontendRouter.get("/showtime/:id", FetchShowtimeByShowtimeId)


export default frontendRouter