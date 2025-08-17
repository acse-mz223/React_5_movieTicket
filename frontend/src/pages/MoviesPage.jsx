import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { ArrowLeft, ArrowLeftCircleIcon, ArrowRight } from 'lucide-react'
import Question from '@/components/Question'
import Titilebar from '@/components/Titilebar'
import { useNavigate } from 'react-router-dom'

function MoviesPage() {
  // nav
  let navigate = useNavigate()
  // todo: film info 
  let info = [{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./movies2.jpg' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"}]  
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
  // auto slider -> 10s
  // setInterval(scrollRight, 10000)
  // return  
  return (
    <div className='w-full pt-30'>
        {/* hero */}
        <div className='w-full px-2 md:px-20 relative before:content-[""] before:absolute before:w-full before:top-0 before:left-0 before:right-0 before:aspect-[8/1] before:bg-gradient-to-b before:from-[#f84565]/40 before:to-black/0 before:-z-10'>
            {/* slider */}
            <div className='w-full pt-4 md:pt-8 flex flex-row overflow-x-scroll' ref={slideRef}>
                {info.map((film) => {
                    return (
                        <div className='w-full flex flex-col flex-shrink-0 px-2'>
                            <img src={film.post} className='w-full aspect-[2.5/1] object-cover object-center rounded-xl'></img>
                            <div className='pt-2 md:pt-4 px-2 md:px-40 flex flex-col md:flex-row justify-between items-center gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl max-md:text-center'> {film.title.toUpperCase()}</div>
                                    <div className='text-gray-400 max-md:text-center'>Now Showing At Your Local Theater</div>
                                </div>
                                <Button onClick={() => {navigate(`/movie/${film.id}`); scrollTo(0,0)}} className="md:px-6 md:py-6 rounded-full md:text-xl flex items-center justify-center">BOOK NOW</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* button */}
            <Button className='z-50 absolute top-2/5 left-[12px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollLeft}><ArrowLeft className='size-8'></ArrowLeft></Button>  
            <Button className='z-50 absolute top-2/5 right-[12px] rounded-full px-2 py-7 bg-primary/40 hover:bg-primary/80' onClick={scrollRight}><ArrowRight className='size-8'></ArrowRight></Button>  
        </div>
        {/* films */}
        <div className='pt-5 md:pt-10 px-5 md:px-40 w-full'>
            <div className='pb-2'><Titilebar /></div>
            <div className='font-medium text-xl pb-4'>ALL MOVIES NOW</div>
            <div className='group grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-shrink-0 gap-y-4'>
                {info.map((film) => {
                    return (
                        <div onClick={() => {navigate(`/movie/${film.id}`); scrollTo(0,0) }} className='group/one px-2 py-2 flex flex-col items-center cursor-pointer group-hover:opacity-30 hover:opacity-100 transition-all duration-500'>
                            <img className='h-[250px] w-[160px] object-cover object-center group-hover/one:scale-104 transition-all duration-500' src={film.smallpost}></img>
                            <div className='pt-4 font-semibold text-md text-center'>{film.title.toUpperCase()}</div>
                        </div>
                    )
                })}
            </div>
        </div>    
        {/* question*/}
        <div className='pt-5 md:pt-15 px-5 md:px-40 w-full'>
            <div className='pb-2'><Titilebar /></div>
            <Question />
        </div>
    </div>
  )
}

export default MoviesPage