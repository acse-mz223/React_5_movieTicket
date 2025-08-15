import React from 'react'
import { Link } from 'react-router-dom'
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
  // user
  let user = useUser()
  // sheet
  const [open, setOpen] = React.useState(false)
  return (
    <div className='flex w-full items-center justify-between px-6 md:px-16 lg:px-36 py-5 gap-5 fixed left-0 right-0 top-5 z-100'>
      {/* logo */}
      <Link to="/" className=''>
        <img src='./donuts-white.svg' className='w-12 h-12 min-w-12 min-h-12'></img>
      </Link>
      {/* menu */}
      <div className='max-md:hidden font-medium flex md:justify-between md:gap-6 lg:gap-8 md:items-center md:px-6 lg:px-8 md:py-2 md:rounded-full md:border-1 md:border-white/50 bg-white/20 backdrop-blur'>
        <Link to="/" className='hover:text-primary transition'>Home</Link>
        <Link to="/Movies" className='hover:text-primary transition'>Movies</Link>
        <Link to="/Theaters" className='hover:text-primary transition'>Theaters</Link>
        <Link to="/Releases" className='hover:text-primary transition'>Releases</Link>
        <Link to="/Favourtie" className='hover:text-primary transition'>Favourite</Link>
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
            <Link to="/" className='w-full' onClick={() => setOpen(false)}><Button className="font-bold hover:text-primary hover:bg-black w-full bg-transparent transition rounded-none py-6">Home</Button></Link> 
            <Link to="/Movies" className='w-full' onClick={() => setOpen(false)}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Movies</Button></Link> 
            <Link to="/Theaters" className='w-full' onClick={() => setOpen(false)}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Theaters</Button></Link> 
            <Link to="/Releases" className='w-full' onClick={() => setOpen(false)}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Releases</Button></Link> 
            <Link to="/Favourtie" className='w-full' onClick={() => setOpen(false)}><Button className="font-bold hover:text-primary hover:bg-black w-full  bg-transparent transition rounded-none py-6">Favourite</Button></Link> 
          </SheetContent>
        </Sheet>
        
      </div>
    </div>
  )
}

export default Navbar