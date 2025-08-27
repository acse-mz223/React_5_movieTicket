import Titilebar from '@/components/Titilebar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import toast from 'react-hot-toast'
import SeatLayout from '@/components/SeatLayout'

function SeatSetting() {
  // def
  const [screen, setScreen] = useState()
  const [seatmap, setSeatmap] = useState()
  console.log("seatmap:", seatmap)
  const [newScreen, setNewScreen] = useState(0)
  const [newSeatmap, setNewSeatmap] = useState()  // seatmap._id
  console.log("newScreen:", newScreen)
  console.log("newSeatmap:", newSeatmap)
  const [seatmapShowing, setSeatmapShowing] = useState()
  const [loading, setLoading] = useState(false)
  // fecth
  useEffect(() =>{
    async function fetchScreenAndSeatmap(){
      try{
          const screenResult = await axios.get("/api/backend/screen")
          const seatmapResult = await axios.get("/api/backend/seatmap")
          setScreen(screenResult.data.content)
          setSeatmap(seatmapResult.data.content)
          console.log("fetchScreenAndSeatmap successfully!")
      }catch(error){
        console.log("fetchScreenAndSeatmap failed:", error)
      }
    }
    fetchScreenAndSeatmap()
  },[loading])
  // add screen function
  async function addNewScreen() {
    try{
        // critiria
        if (Number(newScreen)===0 || !newSeatmap) {
          toast.error("Screen or Seatmap unvalid")
        }
        else {      
          // add
          setLoading(true)
          const result = await axios.post("/api/backend/addnewscreen", {screen: newScreen, seatmap: newSeatmap})
          console.log("add new screen successfully!")
          setLoading(false)
      }
    } catch(error){
      console.log("add new screen failed:", error)
      setLoading(false)
    }
  }
  // return 
  return (
    <div className='w-full'>
            <div className='pb-2'><Titilebar /></div>
            <div className='font-medium text-xl pb-4'>Screen Management</div>
            <div className='flex flex-row lg:gap-10 gap-5'>
              <div className='flex flex-col gap-5'>
                {/* screen add */}
                <div className='flex flex-col gap-2 w-[300px] border-1 border-white rounded-lg p-4 '>
                  <div className='pb-1'><Titilebar /></div>
                  <div className='font-medium text-xl'>Add New Screen</div>
                  <div className='felx flex-col'>
                    <div className='flex flex-col gap-4'>
                      <div className='flex flex-col gap-2'>
                        <div>Screen Number</div>
                        <input type='number' min="0" step="1" className='text-white border-white border-1 rounded-md py-1 px-2' value={String(newScreen)} onChange={(e) => setNewScreen(e.target.value)}/>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div>SeatMap Number</div>
                        <Select onValueChange={(val) => setNewSeatmap(val)} value={newSeatmap}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                              {
                                seatmap?.map((seatmap) => {
                                  return (
                                    <SelectItem value={seatmap._id}>{seatmap.number}</SelectItem>
                                  )
                                })
                              }
                            </SelectContent>
                        </Select>                       
                      </div>                  
                    </div>
                    <Button className="w-full mt-6" onClick={addNewScreen} disabled={loading}>ADD SCREEN</Button>
                  </div>
                </div>
                {/* setted screen */}
                <div className='flex flex-col gap-2 w-[300px] border-1 border-white rounded-lg p-4 '>
                  <div className='pb-1'><Titilebar /></div>
                  <div className='font-medium text-xl'>Setted Screen</div>                
                  <Table >
                      <TableCaption></TableCaption>
                      <TableHeader >
                          <TableRow>
                              <TableHead className="text-white text-center">Screen</TableHead>
                              <TableHead  className="text-white text-center">Seatmap</TableHead>
                          </TableRow>
                      </TableHeader>
                    <TableBody>
                      {
                          screen?.map((screen) => {
                            return (
                                <TableRow>
                                    <TableCell className="text-center">{screen.screen}</TableCell>
                                    <TableCell className="text-center">{screen.seatmap.number}</TableCell>
                                </TableRow>                                                        
                            )
                          })
                      }
                    </TableBody>
                  </Table> 
                </div>
              </div>
              {/* seatmap */}
              <div className='w-full'>
                <div className='pb-1'><Titilebar /></div>
                <div className='font-medium text-xl pb-4'>Seatmap Layout</div>
                <div className='flex flex-col justify-between gap-4'>
                  {/* seat layout img */}
                  <SeatLayout seatmap={seatmapShowing} />
                  {/* all seatmap */}
                  <div>
                    <div className='font-bold text-lg pb-4'>All Seatmap</div>
                    <div className='flex flex-row w-full overflow-scroll'>
                      {seatmap?.map((map) =>{
                        return (
                          <div onClick={() => setSeatmapShowing(map)} className={`group border-1 border-white rounded-lg p-3 hover:bg-primary hover:border-primary transition-all cursor-pointer ${map.number === seatmapShowing.number? "bg-primary-dull border-none border-primary-dull ": null}`}>
                            <div>MapLayout {map.number}</div>
                            <div className={`text-xs text-gray-400 text-right group-hover:text-white ${map.number === seatmapShowing.number? "text-white": null}`}>Capacity {map.capacity}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>       
  )
}

export default SeatSetting