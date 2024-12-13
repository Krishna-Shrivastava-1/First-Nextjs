"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isscrolled, setisscrolled] = useState(true)

    useEffect(() => {
        const windscroller = () => {
            if (window.scrollY > 0) {
                setisscrolled(false)
            } else {
                setisscrolled(true)
            }
        }
        window.addEventListener('scroll', windscroller)
        return () => window.removeEventListener('scroll', windscroller)
    }, [])

    return (
      
            <div className={`flex items-center justify-around p-2 sticky top-0 z-50 w-full  bg-opacity-30 backdrop-blur-md ${isscrolled ? 'bg-transparent' : 'bg-black'}`} >
                <div className='cursor-pointer' ><h1 className='text-xl font-semibold select-none ' >BlackBlog</h1></div>
                <div className='flex items-center justify-around gap-x-6' >

                    <div className='cursor-pointer mx-2' >
                        <h1 className='text-lg font-semibold select-none '>Services</h1>
                    </div>
                    <div className='cursor-pointer mx-2' >
                        <h1 className='text-lg font-semibold select-none '>About Us</h1>
                    </div>
                </div>

            </div>
      
    )
}

export default Navbar
