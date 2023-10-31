import React from 'react'
import logo from "../assets/logo.png"

export default function sidebar() {
  return (
    <div className='md:h-screen flex flex-col justify-between items-center  bg-bgcol1 w-fit px-10 lg:px-16 text-zinc-400'>
        <img className='py-3' src={logo} alt="" />
        <div className='py-10 flex gap-3 flex-col'>
            <h1 className='font-bold hover:text-white '> <span className='text-cyan-300'>--</span> Vue meetup</h1>
            <h1 className='font-bold hover:text-white '><span className='text-cyan-300'>--</span> Angular meetup</h1>
            <h1 className='font-bold  hover:text-white '><span className='text-cyan-300'>--</span> React meetup</h1>
        </div>
    </div>
  )
}
