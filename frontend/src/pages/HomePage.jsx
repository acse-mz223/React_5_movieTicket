import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import Trailer from '@/components/Trailer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HomePage() {
  // def
  const [showing, setShowing] = useState()
  const [hero, setHero] = useState()  
  console.log("showing:",showing)
  console.log("hero:",hero)
  // fetch all info 
  useEffect(() =>{
    async function fetchAllMovieFromDB() {
        try{
            // get film info 
            let result = await axios.get("/api/backend/allshowingmoviefromdb")
            let heroid = result.data.hero[0].value
            setShowing(result.data.content)
            setHero(result.data.content.filter(item => item.filmid === heroid))
            console.log("fetch all showing film successfully!")
        } catch(error){
            console.log("fetch all showing film failed:", error)
        }
    }
    fetchAllMovieFromDB()    
  },[])
  // return 
  return (
    <div>
      <Hero film={hero}></Hero>
      <Featured films={showing}></Featured>
      <Trailer films={showing}></Trailer>
    </div>
  )
}

export default HomePage