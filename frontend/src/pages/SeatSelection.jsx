import { Button } from '@/components/ui/button'
import { calcEndTime, formatDateShort, getWeekday } from '@/utils/dateConvert'
import { seats } from '@/utils/theatre_seat_map'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function SeatSelection() {
  // def
  const [selectedseat, setselectedSeat] = useState([])   // [id, type, price]
  const [seatNumber, setSeatNumber] = useState(1)
  // params
  const {id, date} = useParams()
  // get 
  let film = {id:1234, post:'/hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "/all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"}
  let seatMap = seats
  // seat color map
  let BookedColor = {
    "super_saver": "bg-[#e96366]/70 border-none",
    "saver": "bg-[#007e33]/70 border-none",
    "regular": "bg-blue-500/70 border-none",
    "vip": "bg-[#f84565]/70 border-none"
  }
  let hoverColor = {
    "super_saver": "hover:bg-[#ff0008]",
    "saver": "hover:bg-[#007e33]",
    "regular": "hover:bg-blue-600",
    "vip": "hover:bg-[#f84565]"
  }
  let borderColor = {
    "super_saver": "border-[#ff0008]",   
    "saver": "border-[#007e33]",
    "regular": "border-blue-500",
    "vip": "border-[#f84565]"
  }
  let selectedColor = {
    "super_saver": "bg-[#ff0008]",
    "saver": "bg-[#007e33]",
    "regular": "bg-blue-600",
    "vip": "bg-[#f84565]"
  }  
  // toggle seat button
  let toggleSeat = (id, type, price) => {
    // selected
    if (selectedseat.some((item) => item[0] === id)) {
      setselectedSeat((pre) => pre.filter((item) => item[0] != id))
    } 
    // havent selected
    else {
      // exceed the limite
      if (selectedseat.length >= seatNumber) {
        setselectedSeat((pre) => [...pre.slice(1), [id, type, price]])
      }
      // within limitation -> and new seat to the rear
      else setselectedSeat((pre) => [...pre, [id, type, price]])
    }

  }
  // return 
  return (
    <div className='w-full pt-30'>
      {/* film info */}
      <div className='relative px-5 md:px-20 lg:px-40 py-4 lg:py-10 flex flex-col md:flex-row md:justify-between gap-5 before:absolute before:content-[""] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-black before:via-white/8 before:to-black before:-z-10'>
        {/* film info */}
        <div className='flex flex-col md:flex-row gap-5'>
          <img src={film.smallpost} className='w-[100px] aspect-[1/1.5]'></img>
          <div className='flex flex-col items-start '>
              <div className='text-xl font-bold'>{film.title.toUpperCase()}</div>
              <div className='text-gray-400'>Screen {seatMap.screen}</div>
              <div className='text-gray-400'>{getWeekday(date)}, {formatDateShort(date)} {seatMap.time}-{calcEndTime(seatMap.time, film.duration)}</div>
          </div>
        </div>
        {/* ticket number */}
        <div className='flex flex-row items-center gap-5'>
          <div className='pr-5'>Tickets Number</div>
          <Button disabled={seatNumber === 1} onClick={() => {if(selectedseat.length === seatNumber) {setselectedSeat((pre) => [...pre.slice(1)])};setSeatNumber((pre)=> pre-1);}} className='rounded-full size-10 cursor-pointer'><MinusIcon className='size-7'></MinusIcon></Button>
          <div className='text-9xl'>{seatNumber}</div>
           <Button disabled={seatNumber === 10} onClick={() => {setSeatNumber((pre)=> pre+1)}} className='rounded-full size-10 cursor-pointer'><PlusIcon className='size-7'></PlusIcon></Button>
        </div>
      </div>
      {/* book board */}
      <div className='py-10 px-5 md:px-20 lg:px-40 flex md:flex-row flex-col gap-10 lg:gap-30'>
        {/* seat map */}
        <div className='flex flex-col items-center p-2 md:p-6 gap-4 bg-white shadow-[0_0_40px_white] rounded-lg'  >
          <img className='min-w-[500px]' src='/screenImage.svg'></img>
          <div className='text-black font-extrabold'>Screen {seatMap.screen}</div>
          <div className={`grid grid-cols-${seatMap.col} grid-rows-${seatMap.row} min-w-[500px] w-1/3 gap-2` }>
            {
              Object.keys(seatMap.seat).map((row) => {
                return seatMap.seat[row].map((seat) => {
                  return (
                    <div key={seat.id} 
                        className={`size-4 border-1 ${borderColor[seat.type]} rounded-b-lg ${seat.status ==="none"? 'invisible':null}  ${seat.status === "booked"? `${BookedColor[seat.type]} pointer-events-none cursor-not-allowed`:`cursor-pointer ${hoverColor[seat.type]}`} ${selectedseat.some((item) => item[0] === seat.id)? selectedColor[seat.type]:null}`}
                        onClick={() => toggleSeat(seat.id, seat.type, seat.price)} >
                    </div>
                  )
                })
              })
            }
          </div>
        </div>
        {/* ticket collection */}
        <div className='flex flex-col w-full'>
          <div className='font-bold text-xl pb-4'>Selected Seat:</div>
          <div className='flex flex-col gap-4 overflow-y-scroll'>
            {selectedseat.map((item) => {
              return (
                <div className='pl-4 md:pl-8 flex flex-row gap-4 md:gap-6'>
                  <div>Number: {item[0]}</div>
                  <div>Type: {item[1]}</div>
                  <div>Price: {item[2]}</div>
                </div>
              )
            })}
          </div>
          <div className='w-full h-1 pt-3 border-b-1'></div>
          <div className='font-bold text-xl py-2 text-end'>Total amount: {Math.round(selectedseat.reduce((sum, item) => sum+item[2], 0)*100)/100}</div>
          <Button disabled={Math.round(selectedseat.reduce((sum, item) => sum+item[2], 0)*100)/100 === 0} className='ml-auto font-bold text-xl py-2 w-35 h-10 cursor-pointer'>CHECK OUT</Button>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection