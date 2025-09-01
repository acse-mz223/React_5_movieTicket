import axios from "axios";
import { TMDB_API_KEY } from "../config/envVars.js";

async function tmdbFetchFunc(url) {
    // set
    const options = {
        method: 'GET',
        url: url,
        params: {
            language: 'en-US'
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };    
    // fetch
    try{
        const res = await axios.request(options)
        console.log("tmdbfetchFunc successful!")
        return res.data
    } catch(error){
        throw new error("failed to fetch data from TMDB" + result.statusText)
    }
    
    
}

export default tmdbFetchFunc