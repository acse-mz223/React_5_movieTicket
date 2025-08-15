import React from 'react'
import FeaturedOne from './FeaturedOne'
import { Separator } from "@/components/ui/separator"

function Featured() {
  // todo: get featured films info
  let film = {
  post: './hero.png',
  title: 'call me by your name',
  duration: '120',
  intro: "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new mystery/ thriller: Weapons.",
  director: "sefafserf sdfd",
  smallpost: "all_of_us_strangers_poster_small.webp",
  cast: "dfs dfdsv sfrd, gftg wrw, hgfds ytre",
  dates: {
    "2025-08-14": [
      { time: "13:30", screen: 1 },
      { time: "15:45", screen: 2 },
      { time: "18:00", screen: 3 },
      { time: "21:15", screen: 1 }
    ],
    "2025-08-15": [
      { time: "11:00", screen: 1 },
      { time: "14:15", screen: 2 },
      { time: "17:30", screen: 2 },
      { time: "20:45", screen: 3 }
    ]
  }
};
let info = Array.from({ length: 6 }, () => JSON.parse(JSON.stringify(film)));
  // return 
  return (
    <div className='pt-5 md:pt-10 px-5 md:px-40 w-full'>
        <div className='font-medium text-xl'>WHAT'S NEW</div>
        <div className='flex flex-col gap-5 md:gap-10'>
            {info.map((film) => {
                return (
                    <>
                        <Separator className='opacity-30 my-5' />
                        <FeaturedOne film={film} />
                    </>
                )
            })}
        </div>
        
    </div>
  )
}

export default Featured