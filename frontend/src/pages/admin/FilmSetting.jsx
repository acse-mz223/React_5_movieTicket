import Titilebar from '@/components/Titilebar'
import { Button } from '@/components/ui/button'
import { ORG_IMG_URL, W185_IMG_URL } from '@/utils/constants'
import axios from 'axios'
import { PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

function FilmSetting() {
  // set 
  const [filmShowing, setFilmShwoing] = useState()
  const [showtime, setShowtime] = useState()
  const [screenNumber,setScreenNumber] = useState()
  // nav
  const navigator = useNavigate()
  // fetch 
  useEffect(() => {
    async function fetchShowing() {
        try{
            const result = await axios.get("/api/backend/allmovies")
            setFilmShwoing(result.data.content)
            console.log("fetch all film successfully!")
        } catch(error) {
            console.log("fetchShowing error:", error)
        }
    }
    fetchShowing()
  },[])
  // submit showtime
  async function submitShowtime(filmId) {
    try{
      const result = await axios.post("/api/backend/addshowtime", { // the content sent back for add new showtime
        filmId,
        showtime,
        screenNumber
      })
      console.log("show time add successfully")
    } catch(error) {
      console.log("show time add failed:", error)
    }
  }
  return (
    <div className='w-full'>
        <div className='pb-2'><Titilebar /></div>
        <div className='font-medium text-xl pb-4'>ALL FILMS</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
                filmShowing?.map((film) => {
                    return (
                        <div className='flex flex-col md:flex-row gap-4 justify-between p-2'>
                            {/* post */}
                            <div className='w-[150px] h-[225px] bg-white'>
                                <img className='object-cover' src={ORG_IMG_URL + film.poster_path}></img>
                            </div>
                            {/* info */}
                            <div className='relative flex flex-col flex-1/4'>
                                <div className='text-2xl pb-2 wrap-normal'>{film.title.toUpperCase()}</div>
                                <div className='flex flex-col'>
                                    <div>Release:</div>
                                    <div className='text-gray-400  wrap-normal'>{film.release_date}</div>
                                    <div>Intro:</div>
                                    <div className='text-gray-400  wrap-normal'>{film.overview.slice(0,300)}{film.overview.length>300? "...": null}</div>
                                </div>
                                <Dialog>
                                  <DialogTrigger>
                                    <Button className='group absolute top-2 right-2 rounded-full py-5 cursor-pointer transition-all'>
                                        <PlusIcon className='size-5'></PlusIcon>
                                        <div className=''>ADD</div>
                                    </Button>
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
                                      <Separator className='my-4'/>
                                      <div>timetable</div>
                                      {/* set new time  */}
                                      <Separator className='my-4'/>
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
                                      <Button onClick={submitShowtime(film.id)} className='mt-4'>ADD SHOWTIME</Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                            </div>
                        </div> 
                    )
                })
            }
        </div>

    </div>
  )
}

export default FilmSetting