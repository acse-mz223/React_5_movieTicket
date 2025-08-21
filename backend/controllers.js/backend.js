import tmdbFetchFunc from "../service/tmdb.service.js";

export async function fetchAllmovies(req, res) {
    try{
        // fetch all playging moveis 
        const result = await tmdbFetchFunc('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
        console.log("fetch all playing films successfully")
        res.status(201).json({success: true, content: result.results})
    } catch(error){
        console.log("fatch all playing films failed")
        res.status(500).json({success:false, message:"Internal server : fetch all movies error"})
    }
}

export async function addShowtime(req, res) {
    try{
        // chack is this film already in db
        // if not : add film
        // check is showtime overlap?
        // if not: add showtime
    } catch(error){
        console.log("add new film showtime failed")
        res.status(500).json({success:false, message:"Internal server : add new showtime error"})
    }
}

export async function fetchMovieDetail(){

}