import Film from "../models/film.model.js"
import Screen from "../models/screen.model.js"
import Showtime from "../models/showtime.model.js"
import tmdbFetchFunc from "../service/tmdb.service.js"

export async function FetchRandomFilm(req, res) {
    try{
        // params
        let number = req.params.number
        console.log("Random Number:", number)
        // fetch 
        const result = await Film.aggregate([
            { $sample: { size: Number(number)} }
        ])
        // return 
        console.log("fetch random film without showtime successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch random film without showtime failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchRandomFilm error"})  
    }
}

export async function FetchShowtimeByShowtimeId(req, res) {
    try{
        // get params
        const id = req.params.id
        // fetch
        const result = await Showtime.findById(id).populate("filmid", "title verticalPostURL duration")
        // return 
        console.log("fetch showtime by showtime id successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch showtime by showtime id failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchShowtimeByShowtimeId error"})  
    }
}

export async function FetchScreenByScreenNumber(req, res) {
    try{
        // get params
        const number = req.params.number
        // fetch
        const result = await Screen.findOne({screen: number}).populate("seatmap")
        // return 
        console.log("fetch screen by screen number successfully!")
        res.status(201).json({success: true, content:result}) 
    }catch(error){
        console.log("fetch screen by screen number failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchScreenByScreenNumber error"})  
    }
}

export async function FetchTrailerById(req, res) {  // return 5 trailer at most 
    try{
        // get params
        const filmid = req.params.id
        // fetch
        const result = await tmdbFetchFunc(`https://api.themoviedb.org/3/movie/${filmid}/videos`)
        // return 
        console.log("fetch trailer by id successfully!")
        res.status(201).json({success: true, content:result.results.filter((item) => item.type = "Trailer").slice(0,5)}) 
    }catch(error){
        console.log("fetch trailer by id failed:", error)
        res.status(500).json({success:false, message:"Internal server: FetchTrailerById error"})  
    }
}