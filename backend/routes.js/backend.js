import express from 'express'
import { addShowtime, fetchAllmovies, fetchAllShowingMovieFromDB, fetchMovieDetailById, fetchMovieDetailfromtmdb, heroSetting } from '../controllers.js/backend.js'

const backendRouter = express.Router()

backendRouter.get("/allmovies",fetchAllmovies)
backendRouter.get("/movieDetailfromtmdb",fetchMovieDetailfromtmdb)
backendRouter.post("/addshowtime", addShowtime)
backendRouter.get("/movieDetail/:id", fetchMovieDetailById)
backendRouter.get("/allshowingmoviefromdb", fetchAllShowingMovieFromDB)
backendRouter.post("/herosetting", heroSetting)

export default backendRouter