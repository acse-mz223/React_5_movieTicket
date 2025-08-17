import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOutIcon, MenuIcon, SearchIcon, TicketIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react'

function Navbar() {
  // nav
  let navigate = useNavigate()
  // user
  let user = useUser()
  // sheet
  const [open, setOpen] = React.useState(false)
  return (
    <div className='flex w-full items-center justify-between px-6 md:px-16 lg:px-36 py-5 gap-5 fixed left-0 right-0 top-5 z-100'>
      {/* logo */}
      <img onClick={() => {navigate(`/`); scrollTo(0,0)}} src='./donuts-white.svg' className='w-12 h-12 min-w-12 min-h-12'></img>
      {/* menu */}
      <div className='max-md:hidden font-medium flex md:justify-between md:gap-6 lg:gap-8 md:items-center md:px-6 lg:px-8 md:py-2 md:rounded-full md:border-1 md:border-white/50 bg-white/20 backdrop-blur'>
        <div onClick={() => {navigate(`/`); scrollTo(0,0)}} className='hover:text-primary transition'>Home</div>
        <div onClick={() => {navigate(`/Movies`); scrollTo(0,0)}} className='hover:text-primary transition'>Movies</div>
        <div onClick={() => {navigate(`/Theaters`); scrollTo(0,0)}} className='hover:text-primary transition'>Theaters</div>
        <div onClick={() => {navigate(`/Releases`); scrollTo(0,0)}} className='hover:text-primary transition'>Releases</div>
        <div onClick={() => {navigate(`/Favourite`); scrollTo(0,0)}} className='hover:text-primary transition'>Favourite</div>
      </div>
      {/* search + login */}
      <div className='flex flex-around items-center gap-5'>
        <SearchIcon className='size-6 hover:text-gray-400 cursor-pointer' />
        {user.isSignedIn ? 
          (<UserButton className="size-12">
            <UserButton.MenuItems>
              <UserButton.Link
                label="my tickets"
                labelIcon={<TicketIcon className='size-4'/>}
                href="/history"
              />
            </UserButton.MenuItems>            
          </UserButton>) :
          (<SignInButton>
            <button className='px-4 py-1 sm:px-7 sm:py-2 font-medium bg-primary hover:bg-primary-dull rounded-full cursor-pointer transition'>LogIn</button>
          </SignInButton>)
        }
        {/* sheet menu */}
        <Sheet className="border-none" open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <MenuIcon className='md:hidden size-6 hover:text-gray-400 cursor-pointer'/>
          </SheetTrigger>
          <SheetContent className="w-full h-full flex flex-col bg-white/20 backdrop-blur items-center justify-center gap-1">
            <div className='w-full' onClick={() => {setOpen(false); navigate(`/`); scrollTo(0,0)}}><Button className="font-bold hover:text-primary hover:bg-black w-full bg-transparent transition rounded-none py-6">Home</Button></div> 
            <div className='w-full' onClick={() => {setOpen(false); navigate(`/Movies`); scrollTo(0,0)}}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Movies</Button></div> 
            <div className='w-full' onClick={() => {setOpen(false); navigate(`/Theaters`); scrollTo(0,0)}}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Theaters</Button></div> 
            <div className='w-full' onClick={() => {setOpen(false); navigate(`/Releases`); scrollTo(0,0)}}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Releases</Button></div> 
            <div className='w-full' onClick={() => {setOpen(false); navigate(`/Favourite`); scrollTo(0,0)}}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Favourite</Button></div> 
          </SheetContent>
        </Sheet>
        
      </div>
    </div>
  )
}

export default Navbar