import React from 'react'
import Sidebar from "../sidebar/sidebar"
import img1 from "../assets/twitter.png"
import img2 from "../assets/fb.png"
import img3 from "../assets/you.png"
import img4 from "../assets/m.png"
import img5 from "../assets/dev.png"
import reactimg from "../assets/react1.png"
import kent from "../assets/kent.png"
import sara from "../assets/sara.jpeg"
import uri from "../assets/uri.jpeg"

export default function body() {
  return (
    <div className='grid md:grid-cols-9 w-fit  sm:flex-row bg-bgcol2 sm:max-w-[1240px] mx-auto'>
        <div className='flex md:col-span-3 justify-center items-center mx-auto sm:mx-0'>
        <Sidebar/>
        </div>
        <div className='flex md:col-span-6 flex-col '>
            <div className='flex w-full gap-4 py-3 px-3 flex-row justify-end items-start'>
                <img className='w-6 rounded-full bg-black backdrop-blur-xl grayscale' src={img1} alt="" />
                <img className='w-6 rounded-full bg-white backdrop-blur-xl grayscale' src={img2} alt="" />
                <img className='w-6 rounded-full bg-white backdrop-blur-xl grayscale' src={img3} alt="" />
                <img className='w-6 rounded-full bg-white backdrop-blur-xl grayscale' src={img4} alt="" />
                <img className='w-6 rounded-full bg-white backdrop-blur-xl grayscale' src={img5} alt="" />

            </div>
            <div className='text-white flex flex-col md:-ml-[60px] md:flex-row flex-coljustify-center items-center sm:justify-start sm:items-center '>
                <div>
                    <img className='w-28 relative' src={reactimg} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center md:items-start'>
                <h2 className='uppercase text-[13px]'>November 19, 14:00 (est) <span className='text-red-600 text-[10px]'>online</span></h2>
                <h1 className='uppercase font-bold text-[20px] md:text-[53px]'> <span className='text-cyan-400'>react</span> meetup</h1>
                <p className='text-[10px] text-zinc-300 max-w-[300px] px-3 md:px-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolores officia error fugit tempora unde eos ea quod aliquid ipsam vitae </p>
                <button className='uppercase text-[11px] font-bold py-3'>attend now -</button>
                </div>
                </div>
            <div className='flex gap-2 md:pt-[20%] items-center justify-center md:items-start md:justify-start mx-2 flex-wrap'>
                <div className='flex flex-col justify-center   items-center p-2 bg-bgcol1 w-[150px]  text-white py-9'>
                    <img className='w-10 rounded-full' src={kent} alt="" />
                    <h1 className='fontbold pt-4'>Kent C. Dodds</h1>
                    <p className='text-zinc-600 text-[10px] py-2'>Trainer,USA</p>
                </div>
                <div className='flex flex-col justify-center   items-center p-4 bg-bgcol1 w-[150px]  text-white py-9'>
                    <img className='w-10 rounded-full' src={sara} alt="" />
                    <h1 className='fontbold pt-4'>Sara Vieira</h1>
                    <p className='text-zinc-600 text-[10px] py-2'>code sandbox, Germany</p>
                </div><div className='flex flex-col justify-center   items-center p-4 bg-bgcol1 w-[150px]  text-white py-9'>
                    <img className='w-10 rounded-full' src={uri} alt="" />
                    <h1 className='fontbold pt-4'>Uri Goldshtein</h1>
                    <p className='text-zinc-600 text-[10px] py-2'>The guild , Netherlands</p>
                </div>
            </div>
        </div>
    </div>
  )
}
