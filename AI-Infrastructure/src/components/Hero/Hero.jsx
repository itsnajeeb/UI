import React from 'react'
import hero from '/image/hero.png'
import '../../styles/button.css'
import '../../styles/Hero.css'
import { ArrowDown } from 'lucide-react';
import HeroTab from './HeroTab';

const Hero = () => {
    return (
        <div className='flex justify-between  px-15 mt-10 relative '>
            <div class="heroLeftSideBorder" />
            <div className=' w-1/2 flex flex-col gap-8'>
                <div className='font-bold text-[80px] leading-22 '>
                    <h2 className='ml-8'>AI</h2>
                    <h2 className='ml-18'>Infrastructure</h2>
                    <h2 className='ml-8'>DePIN</h2>
                </div>

                <div className=''>
                    <h1 className='font-semibold text-xl leading-7'>
                        <span className='text-primary font-bold pr-2'>#1</span>
                        Secure <span className='text-[#1a9e6d]'>AI Infrastructure Layer </span>
                        build on <br />
                        Decentralized Physical <br />
                        Infrastructure Network
                    </h1>
                </div>

                <div className='relative  '>
                    <div className='explore-btn w-fit flex justify-between'>
                        <button className='flex justify-between '>Explore <span className='ml-5 self-center'><ArrowDown color='#1a9e6d'/></span></button>
                    </div>
                    <div className='explore-border'>

                    </div>
                </div>
            </div>

            <div className='flex w-1/2 justify-center '>
                <img src={hero} alt="image" className='self-center w-[70%] ' />
            </div>

            <div className='absolute -bottom-15 '>
                <HeroTab/>
            </div>
        </div>
    )
}

export default Hero