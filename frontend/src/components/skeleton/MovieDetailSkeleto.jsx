import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

function MovieDetailSkeleton() {
  return (
    <div className="relative w-full pt-30">
      {/* Background */}
      <div className="absolute -z-20 top-0 right-0 left-0 h-[100vh] overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="absolute -z-10 top-0 right-0 left-0 h-[100vh] bg-gradient-to-l from-black/30 via-black/95 to-black"></div>
      <div className="absolute -z-10 top-0 right-0 left-0 h-[100vh] bg-gradient-to-b from-black/0 via-black/0 to-black/100"></div>

      {/* Booking section */}
      <div className="px-5 md:px-20 lg:px-40 flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
        {/* Poster */}
        <Skeleton className="w-[140px] h-[200px] rounded-md" />

        {/* Info */}
        <div className="flex flex-col items-start gap-3 w-full">
          <Skeleton className="h-6 w-48" /> {/* Title */}
          <Skeleton className="h-4 w-2/3" /> {/* Intro */}

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-[150px_auto] gap-2 w-full">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Timetable placeholder */}
          <div className="w-full mt-4 flex flex-col gap-4">
            {/* Date header */}
            <Skeleton className="h-5 w-40" />
            {/* Showtime cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-[120px] w-[150px] rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="pt-5 md:pt-10 px-5 md:px-20 lg:px-40 w-full">
        <div className="pb-2">
          <Skeleton className="h-6 w-40" />
        </div>
        <Skeleton className="h-5 w-56 mb-4" />
        <div className="px-10 md:px-40 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="h-[250px] w-[160px] rounded-md shadow-[0_0_50px_black]" />
              <Skeleton className="h-5 w-28" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailSkeleton
