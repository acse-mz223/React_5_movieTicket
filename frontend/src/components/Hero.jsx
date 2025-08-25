import { ORG_IMG_URL } from '@/utils/constants'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// todo: connect background info to here 
function Hero({film}) {
  let filmdetail = film? film[0]: null
  let navigate = useNavigate()
  return (
    <div className={`w-full h-screen bg-cover bg-center relative `} >
        <img className='absolute top-0 left-0 w-full h-full object-cover object-center' src={ORG_IMG_URL+ filmdetail?.horizontalPostURL}></img>
        <div className='content-[""] absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/55 to-black/20'></div>
        <div className='absolute px-2 md:px-40 h-full w-full flex flex-col gap-5 items-center md:items-start justify-end pb-5 md:pb-30 '>
            {/* name */}
            <div className='font-bold text-4xl md:text-5xl w-full md:w-2/5  max-md:text-center'>{filmdetail?.title}</div>
            {/* info */}
            <div className='text-gray-300'>
              <p className='inline'>{filmdetail?.genres.map(item => item.name).join("|")}</p>
              <p className='inline'> * {filmdetail?.release}</p>
              <p className='inline'> * {filmdetail?.duration}</p>
            </div>
            {/* intro */}
            <div className='w-2/3 md:w-1/2 text-gray-300 max-md:text-center'>{filmdetail?.intro}</div>
            {/* button */}
            <button onClick={() => {navigate(`/movie/${filmdetail?.filmid}`); scrollTo(0,0)}} className='text-sm font-medium bg-primary hover:bg-primary-dull rounded-full px-4 py-2 sm:px-7 sm:py-4 flex md:gap-2 gap-1 items-center justify-center transition cursor-pointer'>
                Explore More
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
            </button>
        </div>
    </div>
  )
}

export default Hero