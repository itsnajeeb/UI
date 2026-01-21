import React from 'react'
import hero from "/image/heroBg.png"
import icon from "/image/icon/icon-4.png"
import './style.css'
const Hero = () => {
    return (
        <div className='relative top-0 flex  w-full flex-col h-full lg:flex-row  lg:gap-6   '>

            <div className=' w-full lg:w-[60%] h-[60vh] lg:h-screen  '>
                <img src={hero} alt="Hero bg" className='h-full   w-full' />
            </div>



            <div className=' lg:h-screen lg:w-[40%]  px-10 text-section w-fit flex justify-center flex-col gap-3  lg:items-start lg:gap-8 lg:justify-end lg:pb-10'>
                <img src={icon} alt="icon" className='w-8 h-8' />
                <h1 className='lg:text-6xl text-4xl w-fit hero  text-center font-semibold  leading-10 sm:leading-12 md:leading-15 lg:leading-16 lg:text-left  '>Building Wealth Through  Community & Performance
                </h1>
                <p className='lg:text-left text-center'>A refined system of intelligent components that analyze, organize, and automate your work faster, clearer, and effortlessly.</p>
                <button className='btnGradient px-12 py-5 font-medium rounded-full mx-auto lg:mx-0 text-base cursor-pointer transition-all duration-300 hover:scale-110'>Explore the Platform</button>
            </div>

        </div>
    )
}

export default Hero