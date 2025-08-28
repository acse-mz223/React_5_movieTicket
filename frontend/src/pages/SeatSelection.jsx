import { Button } from '@/components/ui/button'
import { ORG_IMG_URL } from '@/utils/constants'
import { calcEndTime, formatDateShort, getWeekday } from '@/utils/dateConvert'
import { seats } from '@/utils/theatre_seat_map'
import { useClerk, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'


function SeatSelection() {
  // def -> seat
  const [selectedseat, setselectedSeat] = useState([])   // array of [id, type, price]
  const [seatNumber, setSeatNumber] = useState(1) // ticket number
  const [showtimeInfo, setShowtimeInfo] = useState() // showtime info
  const [screenInfo, setScreenInfo] = useState() // seatmap info
  const [price, setPrice] = useState()
  // def -> user
  const user = useUser()
  const clerk = useClerk()
  // params
  const {showtimeid} = useParams()
  // fetch 
  useEffect(() =>{
    // showtime
    async function fetchShowtimeByShowtimeIdAndScreenByScreenNumber() {
      try{
        const showtimeResult = await axios.get(`/api/frontend/showtime/${showtimeid}`)
        setShowtimeInfo(showtimeResult.data.content)
        const screenResult = await axios.get(`/api/frontend/screen/${showtimeResult.data.content.screen}`)
        setScreenInfo(screenResult.data.content)
      } catch(error){
        console.log("fetch showtime by showtime id + screen by screen number failed:", error)
      }
    }  
    fetchShowtimeByShowtimeIdAndScreenByScreenNumber()
  },[])
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
    // calculate amount 
    setPrice(Math.round(selectedseat.reduce((sum, item) => sum+item[2], 0)*100)/100)    

  }
  // check out function
  async function checkout() {
    try{
      // log in 
      if (!user.isSignedIn) {
        console.log("sign up first!")
        clerk.openSignIn()
      }
      else {
        // payment -> here simulating a payment loading process for 5s
        setTimeout(() => {
          console.log("5 seconds later");
        }, 5000);        
        toast.success('Payment Successful!')
        // save the book info into showtime + user
        const ticketUploadResult = await axios.post("/api/frontend/ticketupdate", {showtimeid: showtimeInfo._id ,tickets: selectedseat, price:price})
        console.log("booked seat update + user update into db successfully!")
        console.log("checkout all procedure successfully!")
      }
    }catch(error){
      console.log("checkout failed:",error)
    }
  }
  // return 
  return (
    <div className='w-full pt-30'>
      {/* film info */}
      <div className='relative px-5 md:px-20 lg:px-40 py-4 lg:py-10 flex flex-col md:flex-row md:justify-between gap-5 before:absolute before:content-[""] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-black before:via-white/8 before:to-black before:-z-10'>
        {/* film info */}
        <div className='flex flex-col md:flex-row gap-5'>
          <img src={ORG_IMG_URL + showtimeInfo?.filmid.verticalPostURL} className='w-[100px] aspect-[1/1.5]'></img>
          <div className='flex flex-col items-start '>
              <div className='text-xl font-bold'>{showtimeInfo?.filmid.title.toUpperCase()}</div>
              <div className='text-gray-400'>Screen {showtimeInfo?.screen}</div>
              <div className='text-gray-400'>{getWeekday(showtimeInfo?.date)}, {formatDateShort(showtimeInfo?.date)} {showtimeInfo?.time}-{calcEndTime(showtimeInfo?.time, showtimeInfo?.filmid.duration)}</div>
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
          <div className='text-black font-extrabold'>Screen {showtimeInfo?.screen}</div>
          <div className={`grid min-w-[500px] w-1/3 gap-2`}
              style={{
                gridTemplateColumns: `repeat(${screenInfo?.seatmap.col}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${screenInfo?.seatmap.row}, minmax(0, 1fr))`,
              }}          
          >
            {
              screenInfo?.seatmap.seatmap.map((seat) => {
                return (
                  <div key={seat.row + seat.number} 
                      className={`size-4 border-1 ${borderColor[seat.type]} rounded-b-lg ${seat.status === "none"? 'invisible':null}  ${showtimeInfo?.bookedseat?.flatMap(cur => cur.seat).includes(seat.row + seat.number)? `${BookedColor[seat.type]} pointer-events-none cursor-not-allowed`:`cursor-pointer ${hoverColor[seat.type]}`} ${selectedseat.some((item) => item[0] === seat.row + seat.number)? selectedColor[seat.type]:null}`}
                      onClick={() => toggleSeat(seat.row + seat.number, seat.type, seat.price)} >
                  </div>
                )
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
                <div className='pl-4 md:pl-8 flex flex-row gap-4 md:gap-6' key={item[0]}>
                  <div>Number: {item[0]}</div>
                  <div>Type: {item[1]}</div>
                  <div>Price: {item[2]}</div>
                </div>
              )
            })}
          </div>
          <div className='w-full h-1 pt-3 border-b-1'></div>
          <div className='font-bold text-xl py-2 text-end'>Total amount: {price}</div>
          <Button 
            onClick={checkout}
            disabled={Math.round(selectedseat.reduce((sum, item) => sum+item[2], 0)*100)/100 === 0} 
            className='ml-auto font-bold text-xl py-2 w-35 h-10 cursor-pointer'
          >CHECK OUT</Button>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection