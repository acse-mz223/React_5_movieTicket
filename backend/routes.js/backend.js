import express from 'express'
import { addShowtime, fetchAllmovies, fetchMovieDetail } from '../controllers.js/backend.js'

const backendRouter = express.Router()

backendRouter.get("/allmovies",fetchAllmovies)
backendRouter.get("/movieDetail",fetchMovieDetail)
backendRouter.get("/addshowtime", addShowtime)

export default backendRouter