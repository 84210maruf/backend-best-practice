// components/Navbar.js

'use client'; // This directive indicates that this component should be rendered on the client side.

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';



const Navbar = () => {

  return (
    <nav className='p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}><div className="text-2xl">NextBlog</div></Link>
        <div className='hidden md:flex flex-row gap-4 items-center'>
          <Link href="/" className="hover:scale-110 transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:scale-110 transition-transform duration-300">About</Link>
          <Link href="/blogs" className="hover:scale-110 transition-transform duration-300">Blog</Link>
          <Link href="/contact" className="hover:scale-110 transition-transform duration-300">Contact</Link>
          <div className='space-x-1 flex justify-center '>
            <Button className='text-xs' variant="outline"><p className='hover:scale-110 transition-transform duration-300'>Login</p></Button>
            <Button className='text-xs' variant="outline"><p className='hover:scale-110 transition-transform duration-300'>Signup</p></Button>
            <ModeToggle />
          </div>
        </div>


        <div className='md:hidden'>
          <Sheet>
          <div className='flex items-center'>

          <span className='mx-4'><ModeToggle /></span>
            <SheetTrigger className='font-extralight text-2xl'>☰</SheetTrigger>
          </div>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold">NextBlog</SheetTitle>
                <SheetDescription>
                  <div className='flex flex-col gap-4 font-semibold'>
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/blogs" className="hover:text-gray-400">Blog</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                    <div className='space-x-1 flex justify-center '>
                      <Button className='text-xs' variant="outline">Login</Button>
                      <Button className='text-xs' variant="outline">Signup</Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
