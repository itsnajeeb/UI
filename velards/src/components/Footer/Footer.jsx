import React from 'react'
import './Footer.css'
import footerBg from '/public/websiteimg/footerCenterBg.png'
import footerLeft from '/public/websiteimg/footerLeftSideImg.png'
import button from '/public/websiteimg/button.png'
const Footer = () => {
    return (
        <div className='footerContainer mb-5'>
            <div className='footerContent flex justify-center relative  w-fit mx-auto h-[250px] '>
                <img src={footerBg} alt="" />

                <div className='contentSection absolute w-full grid grid-cols-3  h-full  gap-10 '>
                    <div className=' relative  flex justify-end items-center pr-5'>
                        <img src={footerLeft} alt="" className='w-62' />
                        <h1 className='absolute bottom-12 left-5 text-center w-full text-black font-semibold text-xl  '>ID 1918228181</h1>
                    </div>

                    <div className='middleSection h-full  relative pt-8 '>
                        <h1 className='heading text-[40px] font-bold  h-full '>Join to building the future</h1>
                        <div className='flex gap-5  absolute bottom-10  '>
                            <div className='relative  w-fit flex cursor-pointer'>
                                <img src={button} alt="" className='w-25 ' />
                                <p className='absolute  text-center w-full self-center font-medium text-xs'>News</p>
                            </div>
                            <div className='relative  w-fit flex cursor-pointer'>
                                <img src={button} alt="" className='w-25 ' />
                                <p className='absolute  text-center w-full self-center font-medium text-xs'>Group</p>
                            </div>
                            <div className='relative  w-fit flex cursor-pointer'>
                                <img src={button} alt="" className='w-25 ' />
                                <p className='absolute  text-center w-full self-center font-medium text-xs'>Support</p>
                            </div>

                        </div>
                    </div>

                    <div className='  h-full flex justify-center items-center rightSideDesc'>
                        <p>Our Company is officially registered in the registery of companies of the United Kingdom. as evidenced</p>
                    </div>
                </div>
            </div>

            <div className='  flex w-[1100px] px-8 mx-auto pt-8 pb-5 justify-between'>
                <p className='text-gray-400/50 text-sm'><a href="#" className='underline'>Terms and Partnership agreement</a></p>
                <p className='text-gray-400/50 text-sm'>Copyright @2025 All Right Reserved</p>
                <div className='flex gap-5'>
                    <div className='relative  w-fit flex cursor-pointer'>
                        <img src={button} alt="" className='w-25 ' />
                        <p className='absolute  text-center w-full self-center font-medium text-xs'>Eng</p>
                    </div>
                    <div className='relative  w-fit flex cursor-pointer'>
                        <img src={button} alt="" className='w-25 ' />
                        <p className='absolute  text-center w-full self-center font-medium text-xs'>Sign in</p>
                    </div>
                    <div className='relative  w-fit flex cursor-pointer'>
                        <img src={button} alt="" className='w-25 ' />
                        <p className='absolute  text-center w-full self-center font-medium text-xs'>Sign up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer