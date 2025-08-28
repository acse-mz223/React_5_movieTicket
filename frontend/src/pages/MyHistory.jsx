import Titilebar from '@/components/Titilebar'
import { ORG_IMG_URL } from '@/utils/constants'
import { formatDateShort, getWeekday } from '@/utils/dateConvert'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { DotIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function MyHistory() {
  // def
  const [history, setHistory] = useState()
  console.log("history:", history)
  // fetch the history 
  useEffect(() => {
    async function fetchUserHistory() {
        try{
            const result = await axios.get(`/api/frontend/history`)
            setHistory(result.data.content)
            console.log("fetch user history successfully!")
        }catch(error){
            console.log("fetch user history failed:", error)
        }
    }
    fetchUserHistory()
  }, [])
  return (
    <div className='w-full pt-30 px-5 md:px-10 lg:px-40'>
        <div className='pb-2'><Titilebar /></div>
        <div className='font-medium text-xl pb-4'>My History</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-x-10 gap-y-10'>
            {history?.ticket.map((ticket)=>{
                return (
                    <div className='relative w-full max-w-[700px] min-w-[400px] h-[200px] flex flex-row border-dashed border-1 gap-5 justify-between'>
                        <img className='h-full aspect-[1/1.4] object-cover object-center' src={ORG_IMG_URL + ticket.showtime.filmid.verticalPostURL}></img>
                        <div className='flex flex-col gap-2 pt-2'>
                            <div className='font-extrabold text-2xl wrap-break-word'>{ticket.showtime.filmid.title.toUpperCase()}</div>
                            <div>{getWeekday(ticket.showtime.date)} {formatDateShort(ticket.showtime.date)}</div>
                            <div>{ticket.showtime.time}</div>
                        </div>
                        <div className='w-2/5 text-end pr-5 pb-2 flex flex-col justify-end'>
                            <div>Screen {ticket.showtime.screen}</div>
                            <div>{ticket.seat.join(", ")}</div>
                            <div>{ticket.price}</div>
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