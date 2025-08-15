import React from 'react'
import { Separator } from "@/components/ui/separator"
import { formatDateShort, getWeekday } from '@/utils/dateConvert'

// get film info and show days
function Timetable({film, today=false}) {

  return (
    <div>
        <Separator />
        {Object.keys(film?.dates).map((date) => {
            return (
                <div>
                    <div>{getWeekday(date)}, {formatDateShort(date)}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Timetable