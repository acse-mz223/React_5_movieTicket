import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function HomepageSkeleton() {
  return (
    <div className="w-full h-[110vh] relative">
      {/* Background image placeholder */}
      <Skeleton className="absolute top-0 left-0 w-full h-full" />

      {/* Dark gradient overlays (keep static divs, not skeletons) */}
      <div className='content-[""] absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/55 to-black/20'></div>
      <div className='content-[""] absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-[#09090B]/10 to-[#09090B]/100'></div>

      {/* Content area */}
      <div className="absolute px-2 md:px-40 h-full w-full flex flex-col gap-5 items-center md:items-start justify-end pb-5 md:pb-40">
        {/* Title */}
        <Skeleton className="h-10 w-3/5 md:w-2/5 rounded-md" />
        
        {/* Info row (genres, release, duration) */}
        <div className="flex gap-2 text-gray-300">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-14" />
        </div>
        
        {/* Intro */}
        <Skeleton className="h-20 w-2/3 md:w-1/2 rounded-md" />

        {/* Button */}
        <Skeleton className="h-12 w-40 rounded-full" />
      </div>
    </div>
  )
}

export default HomepageSkeleton