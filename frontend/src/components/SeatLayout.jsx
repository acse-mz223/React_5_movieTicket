import React from 'react'

function SeatLayout({seatmap}) {
  console.log("SeatLayot_seatmap:", seatmap)  
  // color  
  let bgColor = {
    "super_saver": "bg-[#ff0008]",
    "saver": "bg-[#007e33]",
    "regular": "bg-blue-600",
    "vip": "bg-[#f84565]"
  }
  // return     
  if (!seatmap) return <div></div>
  return (
    <div className='flex flex-col items-center p-2 md:p-6 gap-4 bg-white rounded-lg scale-100'  >
        <img className='min-w-[300px]' src='/screenImage.svg'></img>
        <div className={`grid min-w-[350px] gap-1`}
            style={{
            gridTemplateColumns: `repeat(${seatmap?.col}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${seatmap?.row}, minmax(0, 1fr))`,
            }}          
        >
        {
            seatmap?.seatmap.map((seat) => {
            return (
                <div key={seat.row + seat.number} 
                    className={`size-3 lg:size-4 rounded-b-lg ${seat.status === "none"? 'invisible':null} ${bgColor[seat.type]} `} >
                </div>
            )
            })
        }
        </div>
    </div>
  )
}

export default SeatLayout