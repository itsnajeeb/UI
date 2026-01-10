import React from 'react'
import hero from "/image/hero.png"
import icon from "/image/icon/icon-4.png"
const Hero = () => {
  return (
    <div className='relative top-0 flex min-h-screen space-x-14'>
        <div className='h-screen  '>
            <img src={hero} alt="Hero bg" className='h-full object-bottom object-cover w-full' />
        </div>

        <div className='flex justify-center gap-4 flex-col w-[40%] pr-10  '>
            <div className='w-7 h-7'>
                <img src={icon} alt="" />
            </div>
            <div className=''>
                <h1 className='text-7xl font-semibold heroTextHeading'>Precision AI,
                    Designed to 
                    Elevate Your
                    Workflow
                </h1>
            </div>
            <div>
                <p className='font-medium text-lg text-color-gray'>
                    A refined system of intelligent components that analyze, organize, and automate your work faster, clearer and effortuseully
                </p>
            </div>
            <div>
                <button className='btnGradient rounded-full px-6 py-3 cursor-pointer font-semibold text-base'>Experience the Platform</button>
            </div>
        </div>
    </div>
  )
}

export default Hero