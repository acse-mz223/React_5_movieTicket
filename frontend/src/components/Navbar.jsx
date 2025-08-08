import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex w-full item-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link to="/" className=''>
        <img src='./donuts-cake-svgrepo-com.svg' className='w-12 h-auto'></img>
      </Link>
      <div className='flex flex-around pt-10 pb-10'>

      </div>
      <div className='flex flex-around '>
        <img src='./search.svg' className='w-12 h-auto color-white'></img>
        <button>log in </button>
      </div>
    </div>
  )
}

export default Navbar