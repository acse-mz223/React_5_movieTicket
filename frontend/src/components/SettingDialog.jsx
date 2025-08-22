import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'
import TimetableBackend from '@/components/TimetableBackend'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { ORG_IMG_URL, W185_IMG_URL } from '@/utils/constants'
import Titilebar from './Titilebar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { calcEndTime, formatDateShort, getWeekday } from '@/utils/dateConvert'




function SettingDialog({film}) {
    // def
    console.log("filmid:", film.id)
    const [showtime, setShowtime] = useState()
    const [screenNumber,setScreenNumber] = useState()
    console.log("showtime:", showtime, "screenNumber", screenNumber)
    const [submitLoading, setSubmitLoading] = useState(false)
    // submit showtime
    async function submitShowtime(filmId) {
        // critiria
        if (!showtime || !screenNumber) {
            toast.error("Please choose showtime and screen number!")
            return 
        }
        try{
            setSubmitLoading(true)
            const result = await axios.post("/api/backend/addshowtime", { // the content sent back for add new showtime
                filmId,
                showtime,
                screenNumber
            })
            console.log("show time add successfully")
            setSubmitLoading(false)
            setScreenNumber(null)
            setShowtime("")
        } catch(error) {
            console.log("show time add failed:", error)
            // toast.error(error)
            setSubmitLoading(false)
        }
    }   
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
    
    // return   
    return (
        <Dialog>
            <DialogTrigger className='group absolute top-2 right-2 rounded-full py-2 px-4 cursor-pointer transition-all flex items-center gap-2 bg-primary hover:bg-primary-dull'>
                    <PlusIcon className='size-5'></PlusIcon>
                    <div className=''>ADD</div>
            </DialogTrigger>
            <DialogContent className='bg-black min-w-[800px] w-[2/3]'>
            <div className='flex flex-col p-4'>
                {/* basic info */}
                <div className='flex flex-row gap-4'>
                    <div className='w-[150px] h-[225px] bg-white'>
                        <img className='object-cover' src={ORG_IMG_URL + film.poster_path}></img>
                    </div>  
                    <div className='flex flex-col flex-1/4'>                                    
                        <div className='text-2xl pb-2 wrap-normal'>{film.title.toUpperCase()}</div>
                        <div className='flex flex-col'>
                            <div>Release:</div>
                            <div className='text-gray-400  wrap-normal'>{film.release_date}</div>
                            <div>Intro:</div>
                            <div className='text-gray-400  wrap-normal'>{film.overview.slice(0,300)}{film.overview.length>300? "...": null}</div>
                        </div>   
                    </div>                                       
                </div>
                {/* display the setted showtime  */}
                <div className='pb-2 pt-4'><Titilebar /></div>
                <div className='font-medium text-xl pb-4'>TIME TABLE</div>
                <TimetableBackend filmid={film.id}/>
                {/* set new time  */}
                <div className='pb-2 pt-6'><Titilebar /></div>
                <div className='font-medium text-xl pb-4'>ADD NEW SHOWTIME</div>
                <div className='grid grid-cols-[100px_auto] gap-y-4 items-center'>
                    <div>Time:</div>
                    <input className="font-extralight text-sm w-[180px] p-2 border-1 rounded-lg" type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} />
                    <div>Screen:</div>
                    <Select onValueChange={(val) => setScreenNumber(val)} value={screenNumber}>
                        <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="1">Number 1</SelectItem>
                        <SelectItem value="2">Number 2</SelectItem>
                        <SelectItem value="3">Number 3</SelectItem>
                        <SelectItem value="4">Number 4</SelectItem>
                        <SelectItem value="5">Number 5</SelectItem>
                        <SelectItem value="6">Number 6</SelectItem>
                        </SelectContent>
                    </Select>                                        
                </div>
                <Button disabled={submitLoading} onClick={() => submitShowtime(film.id)} className='mt-4'>ADD SHOWTIME</Button>
            </div>
            </DialogContent>
        </Dialog>
  )
}

export default SettingDialog