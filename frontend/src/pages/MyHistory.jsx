import Titilebar from '@/components/Titilebar'
import { formatDateShort, getWeekday } from '@/utils/dateConvert'
import { DotIcon } from 'lucide-react'
import React from 'react'

function MyHistory() {
  // todo: data
  let historys = [
    {ticket_id:123456, showtime_id:1234, title: "the end of the fucking world", smallpost:"/all_of_us_strangers_poster_small.webp", date:"2025-8-16", screen:5, time:"20:55", seats:["H5","H6"], price: 12.99 },
    {ticket_id:123456, showtime_id:1234, title: "the end of the fucking world", smallpost:"/all_of_us_strangers_poster_small.webp", date:"2025-8-16", screen:5, time:"20:55", seats:["H5","H6"], price: 12.99 },
    {ticket_id:123456, showtime_id:1234, title: "the end of the fucking world", smallpost:"/all_of_us_strangers_poster_small.webp", date:"2025-8-16", screen:5, time:"20:55", seats:["H5","H6"], price: 12.99 }
    ]
  return (
    <div className='w-full pt-30 px-5 md:px-10 lg:px-40'>
        <div className='pb-2'><Titilebar /></div>
        <div className='font-medium text-xl pb-4'>My History</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-x-10 gap-y-10'>
            {historys.map((history)=>{
                return (
                    <div className='relative w-full max-w-[700px] min-w-[400px] h-[200px] flex flex-row border-dashed border-1 gap-5 justify-between'>
                        <img className='h-full aspect-[1/1.5] object-cover object-center' src={history.smallpost}></img>
                        <div className='flex flex-col gap-2 pt-2'>
                            <div className='font-extrabold text-2xl wrap-break-word'>{history.title.toUpperCase()}</div>
                            <div>{getWeekday(history.date)} {formatDateShort(history.date)}</div>
                            <div>{history.time}</div>
                        </div>
                        <div className='w-1/4 text-end pr-5 pb-2 flex flex-col justify-end'>
                            <div>Screen {history.screen}</div>
                            <div>{history.seats.join(", ")}</div>
                            <div>{history.price}</div>
                        </div>
                        <div className='absolute right-2 top-2 size-5 bg-white rounded-full '></div>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default MyHistory