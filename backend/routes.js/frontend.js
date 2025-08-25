import express from 'express'
import { FetchRandomFilm } from '../controllers.js/frontend.js'

const frontendRouter = express.Router()

frontendRouter.get("/randomMovie/:number", FetchRandomFilm)


export default frontendRouter