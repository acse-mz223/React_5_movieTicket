import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Link to="/" className='px-6 md:px-16 lg:px-36 py-5 w-full flex justify-center border-b-1 cursor-pointer'><img className='w-12 h-12 min-w-12 min-h-12' src='/donuts-white.svg'></img></Link>
        <div className='pt-5 w-full px-5 md:px-10 flex flex-row gap-5'>
            {/* menu */}
            <div className='w-[200px] h-[250px] border-1 rounded-sm py-4 flex flex-col items-center gap-5'>
                <UserButton/>
                <div className='w-full flex flex-col items-center gap-2'>
                    <NavLink className={({isActive}) => isActive? "py-2 bg-primary w-full text-center cursor-pointer" :'py-2 hover:bg-primary w-full text-center cursor-pointer'} to="/admin/showing">Film showing</NavLink>
                    <NavLink className={({isActive}) => isActive? "py-2 bg-primary w-full text-center cursor-pointer" :'py-2 hover:bg-primary w-full text-center cursor-pointer'} to="/admin/filmsetting">Film set up</NavLink>
                    <NavLink className={({isActive}) => isActive? "py-2 bg-primary w-full text-center cursor-pointer" :'py-2 hover:bg-primary w-full text-center cursor-pointer'} to="/admin/dataanalysis">Data</NavLink>
                </div>
            </div>
            {/* childpage */}
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard