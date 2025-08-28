import Timetable from '@/components/Timetable'
import Titilebar from '@/components/Titilebar'
import { ORG_IMG_URL } from '@/utils/constants'
import { minsToHoursAndMins } from '@/utils/dateConvert'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MovieDetail() {
  // def
  const [film, setFilm] = useState()
  const [recommand, setRecommand] = useState()
  console.log("filmDtail:",film)
  // nav
  let navigate = useNavigate()
  // get the id of the film
  const {id} = useParams()
  console.log("movieDetail_id:", id)
  // fetch
  useEffect(() =>{
    async function fetchFilmDetailById() {
      try{
        let result = await axios.get(`/api/backend/movieDetail/${id}`)
        setFilm(result.data.content)
        console.log("fetch film detail by id successfully!")
      }catch(error){
        console.log("fetch film detail by id failed:", error)
      }
    }
    async function fetchRandom4Film(param) {
      try{
        let result = await axios.get(`/api/frontend/randomMovie/${4}`)
        setRecommand(result.data.content)
        console.log("fetch 4 random film successfully!")
      }catch(error){
        console.log("fetch 4 random film failed:", error)
      }      
    }
    fetchFilmDetailById()
    fetchRandom4Film()
  },[id])
  // return 
  return (
    <div className='w-full pt-30 '>
      {/* booking */}
      <div className='px-5 md:px-20 lg:px-40 flex flex-col md:flex-row gap-8 md:gap-12 justify-center'>
          {/* post */}
          <img src={ORG_IMG_URL + film?.verticalPostURL} className='w-35 h-50 object-cover object-center'></img>
          {/* info */}
          <div className='flex flex-col items-start gap-3 w-full'>
              {/* basic info */}
              <div className='text-2xl'>{film?.title.toUpperCase()}</div>
              <div className='font-light text-md'>{film?.intro}</div>
              <div className='grid grid-cols-1 md:grid-cols-[150px_auto]'>
                  <div>Release Date</div>
                  <div className='text-gray-400 font-light'>{film?.release}</div>
                  <div>Director</div>
                  <div className='text-gray-400 font-light'>{film?.director}</div>
                  <div>Starring</div>
                  <div className='text-gray-400 font-light'>{film?.starring}</div>
                  <div>Runtime</div>
                  <div className='text-gray-400 font-light'>{minsToHoursAndMins(film?.duration)}</div>
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
              {recommand?.map((film) => {
                return (
                    <div onClick={() => {navigate(`/movie/${film.filmid}`); scrollTo(0,0) }} className='group/one px-2 py-2 flex flex-col items-center cursor-pointer transition-all duration-500'>
                        <img className='max-h-[250px] max-w-[160px] object-cover object-center group-hover/one:scale-104 transition-all duration-500' src={ORG_IMG_URL + film.verticalPostURL}></img>
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