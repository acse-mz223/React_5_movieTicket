import React from 'react'
import FeaturedOne from './FeaturedOne'
import { Separator } from "@/components/ui/separator"
import Titilebar from './Titilebar'

function Featured({films}) {
  // return 
  return (
    <div className='pt-5 md:pt-10 px-5 md:px-40 w-full'>
        <div className='pb-3'><Titilebar /></div>
        <div className='font-medium text-xl'>WHAT'S TODAY</div>
        <div className='flex flex-col gap-5 md:gap-10'>
            {films?.map((film) => {
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