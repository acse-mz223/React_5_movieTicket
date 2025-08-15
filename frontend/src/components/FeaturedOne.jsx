import React from 'react'
import { Link } from 'react-router-dom'
import Timetable from './Timetable'

function FeaturedOne({film}) {
  return (
    <div className='flex flex-row gap-8 md:gap-12 items-start '>
        {/* post */}
        <img src={film.smallpost} className='w-35 h-50 object-cover object-center'></img>
        {/* info */}
        <div className='flex flex-col items-start gap-3'>
            {/* basic info */}
            <Link to={`/movie/${1234}`} className='text-2xl'>{film.title}</Link>
            <div className='font-light text-md'>{film.intro}</div>
            <div className='grid grid-cols-1 md:grid-cols-[150px_auto]'>
                <div>Starring</div>
                <div className='text-gray-400 font-light'>{film.starring}</div>
                <div>Runtime</div>
                <div className='text-gray-400 font-light'>{film.duration}</div>
            </div>
            {/* time table */}
            <Timetable />
        </div>

    </div>
  )
}

export default FeaturedOne