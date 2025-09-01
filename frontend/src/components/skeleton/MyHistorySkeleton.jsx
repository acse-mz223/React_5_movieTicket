import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

function MyHistorySkeleton() {
  return (
    <div className="w-full pt-30 px-5 md:px-10 lg:px-40">
      {/* Titlebar */}
      <div className="pb-2">
        <Skeleton className="h-6 w-40" />
      </div>
      <Skeleton className="h-5 w-32 mb-4" />

      {/* History tickets grid */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-x-10 gap-y-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative w-full max-w-[700px] min-w-[400px] h-[200px] flex flex-row border-dashed border gap-5 justify-between p-2"
          >
            {/* Poster */}
            <Skeleton className="h-full aspect-[1/1.4] rounded-md" />

            {/* Film info */}
            <div className="flex flex-col gap-2 pt-2 flex-1">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>

            {/* Ticket details */}
            <div className="w-2/5 text-end pr-5 pb-2 flex flex-col justify-end gap-2">
              <Skeleton className="h-4 w-24 ml-auto" />
              <Skeleton className="h-4 w-28 ml-auto" />
              <Skeleton className="h-4 w-16 ml-auto" />
            </div>

            {/* Corner cutout */}
            <div className="absolute right-2 top-2">
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyHistorySkeleton
