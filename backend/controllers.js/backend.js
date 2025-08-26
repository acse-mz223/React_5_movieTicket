import Film from "../models/film.model.js";
import Global from "../models/global.model.js";
import Showtime from "../models/showtime.model.js";
import tmdbFetchFunc from "../service/tmdb.service.js";
import { shwotimetodatetime } from "../utils/showtimetodatetime.js";

export async function fetchAllmovies(req, res) {
    try{
        // fetch all playging moveis 
        const result = await tmdbFetchFunc('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
        console.log("fetch all playing films from tmdb successfully")
        res.status(201).json({success: true, content: result.results})
    } catch(error){
        console.log("fatch all playing films failed")
        res.status(500).json({success:false, message:"Internal server : fetch all movies error"})
    }
}

export async function addShowtime(req, res) {
    try{
        console.log("add new showtime starting....")
        // get basic film info 
        const {filmId, showtime, screenNumber} = req.body
        const {date, time} = shwotimetodatetime(showtime)  // showtime: 34534-04-23T05:44
        console.log("data post:",filmId,date,time,screenNumber)
        // chack is this film already in db
        let filmresult = await Film.findOne({filmid: filmId})
        // if not : add film
        if (!filmresult) {
            // get detail + img
            const filmdetail = await tmdbFetchFunc(`https://api.themoviedb.org/3/movie/${filmId}?language=en-US`)
            const filmImg = await tmdbFetchFunc(`https://api.themoviedb.org/3/movie/${filmId}/images?include_image_language=en`)
            // save  -> filmImg.backdrops[0].file_path
            filmresult = new Film({
                filmid: filmId,
                title: filmdetail.title,
                intro: filmdetail.overview,
                release: filmdetail.release_date,
                genres: filmdetail.genres,
                horizontalPostURL: filmImg.backdrops[0]?.file_path || filmdetail.poster_path,
                verticalPostURL: filmdetail.poster_path,
                duration: filmdetail.runtime,
            })
            await filmresult.save()
        }
        // check is showtime exist?
        const showtimeResult = await Showtime.findOne({
            filmid: filmresult._id,
            screen: screenNumber,
            date: date,
            time: time
        })
        if (showtimeResult) res.status(500).json({success:false, message:"Internal server : the showtime all ready exist"})
        // if not: add showtime
        const newshowtime = new Showtime({
            filmid: filmresult._id,
            screen: screenNumber,
            date: date,
            time: time
        })
        newshowtime.save()
        // add new time to film
        let targetDate = filmresult.date.find(d => d.date === date)
        if (!targetDate) {
            targetDate = { date: date, showtime: [newshowtime._id] }
            filmresult.date.push(targetDate)
        }
        else  targetDate.showtime.push(newshowtime._id) 
        await filmresult.save()
        console.log("add new film showtime successfully")
        res.status(201).json({success: true})

    } catch(error){
        console.log("add new film showtime failed:", error)
        res.status(500).json({success:false, message:"Internal server : add new showtime error"})
    }
}

export async function fetchMovieDetailById(req, res) {
    try{
        // id
        const filmid = req.params.id
        // fetch
        let result = await Film.findOne({
            filmid: filmid 
        }).populate("date.showtime")
        // return 
        console.log("fetchMovieDetailById successfully")
        res.status(201).json({success: true, content: result})
    } catch(error){
        console.log("fetch film detail from db failed:", error)
        res.status(500).json({success:false, message:"Internal server: fetchMovieDetailById error"})
    }
}

export async function fetchAllShowingMovieFromDB(req, res){
    try{
        // fetch film info
        const result = await Film.find().populate("date.showtime")
        console.log("fetchAllShowingMovieFromDB successfully")
        // fetch hero db
        const hero = await Global.find({key: "hero"})
        console.log("fetch global hero successfully!")
        // return 
        res.status(201).json({success: true, content: result, hero: hero})        
    }catch(error){
        console.log("fetch all film from db failed:", error)
        res.status(500).json({success:false, message:"Internal server: fetchAllShowingMovieFromDB error"})        
    }
}

export async function heroSetting(req, res) {
    try{
        // get params
        const {filmid} = req.body
        // post to db
        const result = await Global.updateOne({key: "hero"}, {value: filmid}, { upsert: true })
        // return 
        console.log("update global hero successfully!")
        res.status(201).json({success: true}) 
    }catch(error){
        console.log("update hero failed:", error)
        res.status(500).json({success:false, message:"Internal server: heroSetting error"})        
    }
}

export async function fetchMovieDetailfromtmdb(){

}