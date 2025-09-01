import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

function MoviesPageSkeleton() {
  return (
    <div className="w-full pt-30">
      {/* Hero / Slider skeleton */}
      <div className='w-full px-2 md:px-20 relative'>
        {/* Slider items (simulate 1–2 slides) */}
        <div className='w-full pt-4 md:pt-8 flex flex-row overflow-hidden gap-4'>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-full flex flex-col flex-shrink-0 px-2">
              <Skeleton className="w-full aspect-[2.5/1] rounded-xl" />
              <div className="pt-2 md:pt-4 px-2 md:px-40 flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <Skeleton className="h-12 w-32 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right buttons */}
        <Skeleton className="z-50 absolute top-2/5 left-[12px] h-16 w-10 rounded-full" />
        <Skeleton className="z-50 absolute top-2/5 right-[12px] h-16 w-10 rounded-full" />
      </div>

      {/* Films grid */}
      <div className="pt-5 md:pt-10 px-5 md:px-40 w-full">
        <div className="pb-2">
          <Skeleton className="h-6 w-40" />
        </div>
        <Skeleton className="h-5 w-56 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="px-2 py-2 flex flex-col items-center">
              <Skeleton className="h-[250px] w-[160px] rounded-md" />
              <Skeleton className="h-5 w-28 mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Question section skeleton */}
      <div className="pt-5 md:pt-15 px-5 md:px-40 w-full">
        <div className="pb-2">
          <Skeleton className="h-6 w-40" />
        </div>
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
    </div>
  )
}

export default MoviesPageSkeleton
