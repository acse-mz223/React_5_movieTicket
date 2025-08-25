import React from 'react'
import { Separator } from "@/components/ui/separator"
import { calcEndTime, formatDateShort, getWeekday } from '@/utils/dateConvert'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from 'lucide-react'

// get film info and show days
function Timetable({film, today=false}) {
  // nav
  let navigate = useNavigate()  
  // today?
    const todayDate = new Date();
    const formattedToday = todayDate.toISOString().split('T')[0]
  // return 
  return (
    <div className='relative'>
        <Separator />
        {/* timetable */}
        <div className='flex flex-col gap-2 md:gap-5'>
            {/* iterate date first  */}
            {Object.keys(film?.date).map((date) => {
                if (today && date!=formattedToday ) return  
                return (
                    <div>
                        <div className='py-4 text-primary font-extrabold'>{getWeekday(date)}, {formatDateShort(date)}</div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                            {
                                // iterate time 
                                film.dates[date].map((slot) => {
                                    return (
                                        <div onClick={() => {navigate(`/seat/${film.id}/${date}`) ;scrollTo(0,0)}} className='w-[150px] h-[120px] border-1 border-gray-400 hover:border-white p-2 flex flex-col justify-between cursor-pointer transition-all rounded-sm'>
                                            <div className='flex flex-col gap-1'>
                                                <div>{slot.time}-<p className='text-gray-500 font-extralight text-sm inline'>{calcEndTime(slot['time'], film.duration)}</p></div>
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
        {/* button */}
        {today?
            <Button onClick={() => {navigate(`/movie/${film.filmid}`); scrollTo(0,0)}} className='absolute top-5 right-0 rounded-full cursor-pointer'>SEE All <ChevronRightIcon /></Button>
            : null
        }
    </div>
  )
}

export default Timetable