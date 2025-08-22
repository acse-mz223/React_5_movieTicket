import Titilebar from '@/components/Titilebar'
import { Button } from '@/components/ui/button'
import { ORG_IMG_URL, W185_IMG_URL } from '@/utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import SettingDialog from '@/components/SettingDialog'

function FilmSetting() {
  // set 
  const [filmShowing, setFilmShwoing] = useState()

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
  return (
    <div className='w-full'>
        <div className='pb-2'><Titilebar /></div>
        <div className='font-medium text-xl pb-4'>ALL FILMS</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
                filmShowing?.map((film) => {
                    return (
                        <div className='relative flex flex-col md:flex-row gap-4 justify-between p-2' key={film.id}>
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
                            </div>                              
                            {/* dialog */}
                            <SettingDialog film={film}/>
                        </div> 
                    )
                })
            }
        </div>

    </div>
  )
}

export default FilmSetting