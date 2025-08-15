import React, { useRef } from 'react'
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

// in order to use shanc dialog, I need to mix TrailerDialog and TrailerOne
function TrailerOne({film}) {
    // to do: the video resource -》 use reactplayer to play video
    return (
        <Dialog >
            <DialogTrigger>
                <div className='flex flex-col gap-2 w-[280px] flex-shrink-0 cursor-pointer relative group items-start'>
                    <div className='absolute text-left w-[280px] h-[160px] rounded-2xl group-hover:translate-y-[110%] transition-all duration-400 -z-10 px-2'>
                        <div>{film.title}</div>
                        <div className='text-gray-400 pt-1'>{film.intro}</div>
                    </div>
                    <img src={film.post} className='w-[280px] h-[160px] object-contain rounded-2xl bg-gray-900 top-1/2 left-1/2 group-hover:scale-120 transition-all duration-300 shadow-lg group-hover:z-30 z-0'/>
                    <div className='pt-2 text-md font-light -z-20 transition-opacity opacity-100 duration-1000 group-hover:opacity-0 group-hover:duration-0'>{film.title}</div>            
                </div>
            </DialogTrigger>
                <DialogContent className="bg-gray-900 p-0 pt-4 border-0 max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div>
                        <img src={film.post} ></img>
                    </div>
                    <div className='py-2 md:py-6 px-4 md:px-10 flex flex-col gap-4 md:gap-5'>
                        <div className='text-2xl font-bold'>{film.title}</div>
                        <Separator />
                        <div className='text-gray-400'>{film.intro}</div>
                        <div className='font-extralight text-md grid grid-cols-[150px_auto] max-md:flex max-md:flex-col max-md:gap-1'>
                            <div>Release date</div> 
                            <div className='text-gray-400'>{film.date}</div>
                            <div>Director</div>
                            <div className='text-gray-400'>{film.director}</div>
                            <div>Cast</div>
                            <div className='text-gray-400'>{film.cast}</div>
                        </div>
                    </div>
                </DialogContent>            
        </Dialog>

    )
}

function Trailer() {
  // info todo
  let info = [{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"}]  
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
        <div className='px-5 md:px-40 font-semibold text-xl pb-2 md:pb-4'>FEATURED TRAILERS</div>
        <div className='px-5 md:px-20 pt-5 pb-30 flex flex-row gap-4 md:gap-6 overflow-x-scroll w-full items-center' ref={slideRef}>
            {/* sliders */}
            {info.map((item) => {
                return (
                    <TrailerOne film={item}/>
                )
            })}          
        </div>
        {/* slide button */}
        <Button className='z-50 absolute bottom-[200px] left-[50px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollLeft}><ArrowLeft className='size-8'></ArrowLeft></Button>  
        <Button className='z-50 absolute bottom-[200px] right-[50px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollRight}><ArrowRight className='size-8'></ArrowRight></Button>  
        {/* gradient bg */}
        <div className='w-5 md:w-20 absolute top-0 bottom-0 left-0 content-[""] bg-gradient-to-r from-[#09090B] via-[#09090B]/60 to-[#09090B]/0'></div>
        <div className='w-5 md:w-20 absolute top-0 bottom-0 right-0 content-[""] bg-gradient-to-l from-[#09090B] via-[#09090B]/60 to-[#09090B]/0'></div>
    </div>
  )
}

export default Trailer