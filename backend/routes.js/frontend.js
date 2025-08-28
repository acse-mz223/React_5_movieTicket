import express from 'express'
import {FetchHistoryByUserId, FetchRandomFilm, FetchScreenByScreenNumber, FetchShowtimeByShowtimeId, FetchTrailerById, UpdateTicketStatus } from '../controllers.js/frontend.js'

const frontendRouter = express.Router()

frontendRouter.get("/randomMovie/:number", FetchRandomFilm)
frontendRouter.get("/showtime/:id", FetchShowtimeByShowtimeId)
frontendRouter.get("/screen/:number", FetchScreenByScreenNumber)
frontendRouter.get("/trailer/:id", FetchTrailerById)
frontendRouter.post("/ticketupdate", UpdateTicketStatus)
frontendRouter.get("/history", FetchHistoryByUserId)


export default frontendRouter