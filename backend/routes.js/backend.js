import express from 'express'
import { addShowtime, fetchAllmovies, fetchMovieDetailById, fetchMovieDetailfromtmdb } from '../controllers.js/backend.js'

const backendRouter = express.Router()

backendRouter.get("/allmovies",fetchAllmovies)
backendRouter.get("/movieDetailfromtmdb",fetchMovieDetailfromtmdb)
backendRouter.post("/addshowtime", addShowtime)
backendRouter.get("/movieDetail/:id", fetchMovieDetailById)

export default backendRouter