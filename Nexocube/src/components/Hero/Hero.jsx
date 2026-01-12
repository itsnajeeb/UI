import React from 'react'
import hero from "/image/9057765.jpg"
import icon from "/image/icon/icon-4.png"
const Hero = () => {
  return (
    <div className='relative top-0 flex min-h-screen space-x-14 flex-col lg:flex-row'>

        <div className='h-[70vh] lg:h-screen w-full lg:w-[60%] '>
            <img src={hero} alt="Hero bg" className='h-full object-bottom object-cover w-full' />
        </div>

        <div className='flex justify-center  gap-4 flex-col w-full  lg:w-[40%]  items-center lg:items-start '>
            <div className='w-7 h-7'>
                <img src={icon} alt="" />
            </div>
            <div className='self-center '>
                <h1 className='text-6xl text-center font-semibold heroTextHeading md:text-7xl lg:text-left'>Precision AI,
                    Designed to 
                    Elevate Your
                    Workflow
                </h1>
            </div>
            <div className=''>
                <p className='font-medium text-base  text-center lg:text-left text-(--text-gray-1)'>
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