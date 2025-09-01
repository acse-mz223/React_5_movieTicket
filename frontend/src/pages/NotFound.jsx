import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  // navigator
  const navigator = useNavigate()  
  // return  
  return (
    <div className='relative w-full h-[100vh] flex justify-center items-center'>
        <img className='absolute inset-0 -z-10 w-full h-full object-contain object-center' src='/NotFound-bg.jpg'></img>
        <div className='absolute inset-0 -z-10 bg-black/60 radial-bg'></div>
        <div className='p-5 flex flex-col gap-5'>
            <div className='text-4xl'>PAGE NOT FOUND</div>
            <Button onClick={() => navigator("/")} className="cursor-pointer">BACK TO HOME</Button>
        </div>
    </div>
  )
}

export default NotFound