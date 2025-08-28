import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeft, ArrowLeftCircleIcon, ArrowRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import Titilebar from './Titilebar'
import { ORG_IMG_URL } from '@/utils/constants'
import axios from 'axios'
import ReactPlayer from 'react-player'

// in order to use shanc dialog, I need to mix TrailerDialog and TrailerOne
function TrailerOne({film}) {
    // def
    const [trailer, setTrailer] = useState()
    console.log("trailer:",trailer)
    // fetch video
    useEffect(() => {
        async function fetchTrailerById() {
            try{
                const result = await axios.get(`/api/frontend/trailer/${film.filmid}`)
                setTrailer(result.data.content)
                console.log("fetch trailer by id successfully!")
            }catch(error){
                console.log("fetch trailer by id failed:", error)
            }            
        }
        fetchTrailerById()
    },[])
    // return 
    return (
        <Dialog >
            <DialogTrigger>
                <div className='flex flex-col gap-2 w-[280px] flex-shrink-0 cursor-pointer relative group items-start'>
                    <div className='absolute text-left w-[280px] h-[160px] rounded-2xl group-hover:translate-y-[110%] transition-all duration-400 -z-10 px-1 left-0 right-0'>
                        <div>{film?.title.toUpperCase()}</div>
                        <div className='text-gray-400 pt-1 tracking-tighter leading-5'>{film?.intro.slice(0,140)}{film?.intro.length>140? "...":null}</div>
                    </div>
                    <img src={ORG_IMG_URL + film?.horizontalPostURL} className='w-[280px] h-[160px] object-contain rounded-2xl bg-gray-900 top-1/2 left-1/2 group-hover:scale-120 transition-all duration-300 shadow-lg group-hover:z-30 z-0'/>
                    <div className='pt-2 text-md font-light -z-20 transition-opacity opacity-100 duration-1000 group-hover:opacity-0 group-hover:duration-0'>{film?.title.toUpperCase()}</div>            
                </div>
            </DialogTrigger>
                <DialogContent className="bg-gray-900 p-0 pt-4 border-0 max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div>
                        { trailer?
                        <ReactPlayer width='auto' height='400px' src={"https://www.youtube.com/watch?v=" + trailer[0].key} />:
                        <div className='w-full flex justify-center items-center text-gray-400 text-2xl'>No resources</div>
                        }
                    </div>
                    <div className='py-2 md:py-6 px-4 md:px-10 flex flex-col gap-4 md:gap-5'>
                        <div className='text-2xl font-bold'>{film?.title}</div>
                        <Separator />
                        <div className='text-gray-400'>{film?.intro}</div>
                        <div className='font-extralight text-md grid grid-cols-[150px_auto] max-md:flex max-md:flex-col max-md:gap-1'>
                            <div>Release date</div> 
                            <div className='text-gray-400'>{film?.release}</div>
                            <div>Director</div>
                            <div className='text-gray-400'>{film?.director}</div>
                            <div>Cast</div>
                            <div className='text-gray-400'>{film?.cast}</div>
                        </div>
                    </div>
                </DialogContent>            
        </Dialog>

    )
}

function Trailer({films}) {

  // click slide button 
  let slideRef = useRef()
  let scrollLeft = () =>{
    slideRef.current.scrollBy({
        left: -slideRef.current.offsetWidth,
        behavior: 'smooth'
    })
  }
  let scrollRight = () =>{
    slideRef.current.scrollBy({
        left: slideRef.current.offsetWidth,
        behavior: 'smooth'
    })
  }
  // reutrn 
  return (
    <div className='relative pt-5 md:pt-15 w-full'>
        <div className='px-5 md:px-40 pb-2'><Titilebar /></div>
        <div className='px-5 md:px-40 font-semibold text-xl pb-2 md:pb-4'>FEATURED TRAILERS</div>
        <div className='px-5 md:px-20 pt-5 pb-30 flex flex-row gap-4 md:gap-6 overflow-x-scroll w-full items-center h-[400px]' ref={slideRef}>
            {/* sliders */}
            {films?.map((item) => {
                return (
                    <TrailerOne film={item}/>
                )
            })}          
        </div>
        {/* slide button */}
        <Button className='z-50 absolute bottom-[220px] left-[50px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollLeft}><ArrowLeft className='size-8'></ArrowLeft></Button>  
        <Button className='z-50 absolute bottom-[220px] right-[50px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollRight}><ArrowRight className='size-8'></ArrowRight></Button>  
        {/* gradient bg */}
        <div className='w-5 md:w-20 absolute top-0 bottom-0 left-0 content-[""] bg-gradient-to-r from-[#09090B] via-[#09090B]/60 to-[#09090B]/0'></div>
        <div className='w-5 md:w-20 absolute top-0 bottom-0 right-0 content-[""] bg-gradient-to-l from-[#09090B] via-[#09090B]/60 to-[#09090B]/0'></div>
    </div>
  )
}

export default Trailer