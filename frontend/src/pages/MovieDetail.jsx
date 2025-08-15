import Timetable from '@/components/Timetable'
import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
  // get the id of the film
  const {id} = useParams()
  console.log("movieDetail_id:", id)
  // post get info of the film
    let film = {post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre",
      dates: {
          "2025-08-13": [
            { time: "13:30", screen: 1 },
            { time: "15:45", screen: 2 },
            { time: "18:00", screen: 3 },
            { time: "21:15", screen: 1 }
          ],
          "2025-08-14": [
            { time: "11:00", screen: 1 },
            { time: "14:15", screen: 2 },
            { time: "17:30", screen: 2 },
            { time: "20:45", screen: 3 }
          ]
        }}
  // return 
  return (
    <div className='w-full pt-30 px-5 md:px-40 flex flex-col md:flex-row gap-8 md:gap-12 justify-center'>
        {/* post */}
        <img src={film.smallpost} className='w-35 h-50 object-cover object-center'></img>
        {/* info */}
        <div className='flex flex-col items-start gap-3 w-full'>
            {/* basic info */}
            <div className='text-2xl'>{film.title}</div>
            <div className='font-light text-md'>{film.intro}</div>
            <div className='grid grid-cols-1 md:grid-cols-[150px_auto]'>
                <div>Release Date</div>
                <div className='text-gray-400 font-light'>{film.date}</div>
                <div>Director</div>
                <div className='text-gray-400 font-light'>{film.director}</div>
                <div>Starring</div>
                <div className='text-gray-400 font-light'>{film.starring}</div>
                <div>Runtime</div>
                <div className='text-gray-400 font-light'>{film.duration}</div>
            </div>
            {/* time table */}
            <Timetable film={film} today={false} />
        </div>    
    </div>
  )
}

export default MovieDetail