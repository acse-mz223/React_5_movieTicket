import Titilebar from '@/components/Titilebar'
import { ORG_IMG_URL } from '@/utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Star, StarsIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

function Showing() {
    // def
    const [showing, setShowing] = useState()
    const [hero, setHero] = useState()
    console.log("showing:",showing)
    console.log("hero:", hero)
    // fetch data
    useEffect(()=>{
        // get showing info 
        async function fetchAllMovieFromDB() {
            try{
                // get film info 
                let result = await axios.get("/api/backend/allshowingmoviefromdb")
                setShowing(result.data.content)
                setHero(result.data.hero[0].value)
            } catch(error){
                console.log("fetch all showing film failed:", error)
            }
        }
        fetchAllMovieFromDB()
    },[])
    // hero toggle 
    async function herotoggle(filmid) {
        try{
            let result = await axios.post("/api/backend/herosetting", {filmid: filmid})
            setHero(filmid)
            console.log("hero toggle successfully!")
            toast.success("hero set successfully!")
        }catch(error){
            console.log("herotoggle error", error)
            toast.error("hero set failed!")
        }
    }
    return (
        <div className='w-full'>
            <div className='pb-2'><Titilebar /></div>
            <div className='font-medium text-xl pb-4'>FILM SHOWING</div>
            {/* main */}
            <div className='flex flex-col gap-4'>
                {
                    showing?.map((film) => {
                        return (
                            <div className='flex flex-row gap-4'>
                                {/* post */}
                                <div className='w-[150px] h-[225px]'>
                                    <img className='object-cover' src={ORG_IMG_URL + film.verticalPostURL}></img>                                
                                </div>
                                {/* info */}
                                <div className='w-full flex flex-col'>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-2xl'>{film.title.toUpperCase()}</div>
                                        <Star onClick={() => herotoggle(film.filmid)} className={`text-white cursor-pointer ${hero === film.filmid? "fill-primary stroke-primary": null} hover:fill-primary`}/>
                                    </div>
                                    <Table >
                                        <TableCaption></TableCaption>
                                        <TableHeader >
                                            <TableRow>
                                                <TableHead className="text-white">Date</TableHead>
                                                <TableHead className="text-white text-center">TimeShow</TableHead>
                                                <TableHead className="text-white text-center">Screen</TableHead>
                                                <TableHead  className="text-white text-center">Seat Booked</TableHead>
                                                <TableHead  className="text-white text-center">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                    <TableBody>
                                        {
                                            film.date.map((date) => {
                                                return date.showtime.map((showtime, index) =>{
                                                    return (
                                                        <TableRow>
                                                            <TableCell>{index === 0? date.date: null}</TableCell>
                                                            <TableCell className="text-center">{showtime.time}</TableCell>
                                                            <TableCell className="text-center">{showtime.screen}</TableCell>
                                                            <TableCell className="text-center">{showtime.bookedseat.length}</TableCell>
                                                            <TableCell className="text-center">showtime.amount</TableCell>
                                                        </TableRow>                                                        
                                                    )
                                                })
                                            })
                                        }
                                    </TableBody>
                                    </Table>                                 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Showing
