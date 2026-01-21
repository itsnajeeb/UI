import React from 'react';
import bgImage from '/public/image/unlockBg.png';
import './style.css'
const UnlockSmart = () => {
  return (
    <div className='unlockContainer mt-20 relative flex justify-center h-screen '>
        <div className='flex flex-col mt-10 text-section max-w-5xl  gap-8 lg:mt-30'>
            <h1 className='text font-semibold text-3xl text-center lg:text-7xl'>Unlock a Smarter Way to Work</h1>
            <p className='desc text-base  font-semibold mx-auto text-center lg:text-lg'>Experience a refined AI platform built for clarity. Intelligence, and exceptional performance</p>
        </div>

        <div className='absolute flex justify-center items-center h-full gap-8 flex-col lg:flex-row lg:mt-20'>
            <button className='gradientBtn px-8 py-4 rounded-full cursor-pointer'>Get Started</button>
            <button className='bg-gray-200 py-4 px-8 rounded-full cursor-pointer'>Book a Demo</button>
        </div>

    </div>
  )
}

export default UnlockSmart