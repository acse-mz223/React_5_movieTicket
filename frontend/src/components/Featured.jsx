import React from 'react'
import FeaturedOne from './FeaturedOne'
import { Separator } from "@/components/ui/separator"

function Featured() {
  // todo: get featured films info
 let info = [{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./movies2.jpg' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"},{post:'./hero.png' , title: 'call me by your name', duration: '120', 'intro': "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.", director: "sefafserf sdfd", smallpost: "all_of_us_strangers_poster_small.webp", cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre"}]  
  // return 
  return (
    <div className='pt-5 md:pt-10 px-5 md:px-40 w-full'>
        <div className='font-medium text-xl'>WHAT'S NEW</div>
        <div className='flex flex-col'>
            {info.map((film) => {
                return (
                    <>
                        <Separator className='opacity-30 my-5' />
                        <FeaturedOne film={film}/>
                    </>
                )
            })}
        </div>
        
    </div>
  )
}

export default Featured