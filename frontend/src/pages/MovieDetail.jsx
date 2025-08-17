import Timetable from '@/components/Timetable'
import Titilebar from '@/components/Titilebar'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MovieDetail() {
  // nav
  let navigate = useNavigate()
  // get the id of the film
  const {id} = useParams()
  console.log("movieDetail_id:", id)
  // todo: post get info of the film
  let film = {id:1234, post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "/all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre",
    dates: {
        "2025-08-15": [
          { time: "13:30", screen: 1 },
          { time: "15:45", screen: 2 },
          { time: "18:00", screen: 3 },
          { time: "21:15", screen: 1 }
        ],
        "2025-08-16": [
          { time: "11:00", screen: 1 },
          { time: "14:15", screen: 2 },
          { time: "17:30", screen: 2 },
          { time: "20:45", screen: 3 }
        ]
      }}
  // todo: also some random recommand
  let recommand = [{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "/all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/movies2.jpg' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "/all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"}] 
  // return 
  return (
    <div className='w-full pt-30 '>
      {/* booking */}
      <div className='px-5 md:px-20 lg:px-40 flex flex-col md:flex-row gap-8 md:gap-12 justify-center'>
          {/* post */}
          <img src={film?.smallpost} className='w-35 h-50 object-cover object-center'></img>
          {/* info */}
          <div className='flex flex-col items-start gap-3 w-full'>
              {/* basic info */}
              <div className='text-2xl'>{film.title.toUpperCase()}</div>
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
      {/* recommend */}
      <div className='pt-5 md:pt-10 px-5 md:px-20 lg:px-40 w-full'>
            <div className='pb-2'><Titilebar /></div>
            <div className='font-medium text-xl pb-4'>RECOMMAND FOR YOU</div>
            <div className='px-10 md:px-40 grid grid-cols-2 lg:grid-cols-4 gap-5'>
              {recommand.slice(0,4).map((film) => {
                return (
                    <div onClick={() => {navigate(`/movie/${film.id}`); scrollTo(0,0) }} className='group/one px-2 py-2 flex flex-col items-center cursor-pointer transition-all duration-500'>
                        <img className='max-h-[250px] max-w-[160px] object-cover object-center group-hover/one:scale-104 transition-all duration-500' src={film.smallpost}></img>
                        <div className='pt-4 font-semibold text-md text-center'>{film.title.toUpperCase()}</div>
                    </div>              
                )                
              })

              }
            </div>
      </div>
    </div>
  )
}

export default MovieDetail