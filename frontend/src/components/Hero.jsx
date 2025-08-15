import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

// todo: connect background info to here 
function Hero() {
  return (
    <div className='w-full h-screen bg-[url(./hero.png)] bg-cover bg-center relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-black/55 before:to-black/20'>
        <div className='absolute px-2 md:px-40 h-full w-full flex flex-col gap-5 items-center md:items-start justify-end pb-5 md:pb-30 '>
            {/* name */}
            <div className='font-bold text-4xl md:text-5xl w-full md:w-2/5  max-md:text-center'>Call me by your name</div>
            {/* info */}
            <div className='text-gray-300'>Action|Adventure|Sci-fi * 2018 * 2h18m</div>
            {/* intro */}
            <div className='w-2/3 md:w-1/2 text-gray-300 max-md:text-center'>ou are given a 2D integer array intervals, where intervals[i] = [li, ri, weighti]. Interval i starts at position li and ends at ri, and has a weight of weighti. You can choose up to 4 non-overlapping intervals. The score of the chosen intervals is defined as the total sum of their weights.</div>
            {/* button */}
            <Link to={`/movie/${1234}`} >
                <button className='text-sm font-medium bg-primary hover:bg-primary-dull rounded-full px-4 py-2 sm:px-7 sm:py-4 flex md:gap-2 gap-1 items-center justify-center transition cursor-pointer'>
                    Explore More
                    <ArrowRightIcon className='size-5'></ArrowRightIcon>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Hero