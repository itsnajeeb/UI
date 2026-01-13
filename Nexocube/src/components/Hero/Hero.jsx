import React from 'react'
// import hero from "/image/9057765.jpg"
import hero from "/image/hero.png"
// import hero from "/image/hero.jpg"
import '../../styles/Hero.css'
const Hero = () => {
    return (
        <div className='relative top-0 flex  w-full flex-col h-full  '>

            <div className=' w-[80%] mt-30  mx-auto'>
                <img src={hero} alt="Hero bg" className='h-full  object-cover w-full' />
            </div>

            <div className=' heroRightContent w-fit flex justify-center flex-col gap-5'>
                <h1 className='lg:text-6xl text-4xl w-fit hero text-black text-center font-semibold  leading-20  '>Building Wealth Through  Community & Performance
                </h1>
                <button className='btnGradient px-12 py-3 font-medium rounded-full mx-auto text-lg cursor-pointer transition-all duration-300 hover:scale-110'>Login</button>
            </div>

        </div>
    )
}

export default Hero