import React, { useEffect, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { calcEndTime, formatDateShort, getWeekday } from '@/utils/dateConvert'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from 'lucide-react'
import axios from 'axios'

// get film info and show days
function TimetableBackend({filmid}) { 
  // def
  const [film, setFilm] = useState()  
  // fetch data   
  useEffect(() =>{
    async function fetchMovieDetailById() {
        const result = await axios.get(`/api/backend/movieDetail/${filmid}`)
        setFilm(result.data.content)
    }
    fetchMovieDetailById()
  },[])
  // return -> null
  if (!film) {
    return (
        <div className='text-gray-400'>No Showtime Yet...</div>
    )
  }
  // return 
  return (
    <div className='relative'>
        {/* timetable */}
        <div className='flex flex-col gap-2 md:gap-4'>
            {/* iterate date first  */}
            {film?.date.map((date) => {
                if (!date.showtime.length) return null
                return (
                    <div>
                        <div className='py-2 text-primary font-extrabold'>{getWeekday(date.date)}, {formatDateShort(date.date)}</div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {
                                // iterate time 
                                date.showtime.map((slot) => {
                                    return (
                                        <div className='w-[150px] h-[120px] border-1 border-gray-400 hover:border-white p-2 flex flex-col justify-between cursor-pointer transition-all rounded-sm'>
                                            <div className='flex flex-col gap-1'>
                                                <div>{slot['time']}-<p className='text-gray-500 font-extralight text-sm inline'>{calcEndTime(slot.time, film.duration)}</p></div>
                                                <div className='text-gray-500 font-extralight text-xs'>Screen {slot.screen}</div>
                                            </div>
                                            <div className='text-right'><p className='text-gray-500 font-extralight text-xs inline'>From</p> #3.99</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TimetableBackend