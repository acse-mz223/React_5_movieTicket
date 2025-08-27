import express from 'express'
import { addNewScreen, addShowtime, fetchAllmovies, fetchAllScreen, fetchAllSeatmap, fetchAllShowingMovieFromDB, fetchMovieDetailById, fetchMovieDetailfromtmdb, heroSetting } from '../controllers.js/backend.js'

const backendRouter = express.Router()

backendRouter.get("/allmovies",fetchAllmovies)
backendRouter.get("/movieDetailfromtmdb",fetchMovieDetailfromtmdb)
backendRouter.post("/addshowtime", addShowtime)
backendRouter.get("/movieDetail/:id", fetchMovieDetailById)
backendRouter.get("/allshowingmoviefromdb", fetchAllShowingMovieFromDB)
backendRouter.post("/herosetting", heroSetting)
backendRouter.get("/screen", fetchAllScreen)
backendRouter.get("/seatmap", fetchAllSeatmap)
backendRouter.post("/addnewscreen", addNewScreen)

export default backendRouter