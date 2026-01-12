import React from 'react'
import { FaCamera, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerImage from '/image/footerImage.png'
import logo from '/image/logo.png'
const Footer = () => {
    return (
        <div className='flex justify-between mt-20 h-full '>
            <div className='w-full px-0  flex flex-col justify-between'>
                <div className='grid px-5 md:px-10 sm:grid-cols-2 gap-10  md:flex  '>
                    <div className='flex flex-col gap-5 mb-5 w-full  items-center sm:items-start  md:max-w-100 '>
                        <div className='flex gap-2 self-start'>
                            <img src={logo} alt="logo" className='w-7 h-7 self-center lg:w-7 lg:h-7' />
                            <h1 className='text-3xl text-dark-green font-semibold self-start lg:text-4xl'>Nexocube</h1>
                        </div>
                        <div className='relative   w-full sm:max-w-95'>

                            <input type="text" placeholder='Enter Your Email'
                                className='border-2 border-gray-400/70  w-full outline-none px-4 py-2 rounded-full placeholder:text-gray-400 lg:px-6 lg:py-3 ' />

                            <button className='absolute font-semibold btnGradient px-4 right-0 py-2.5 cursor-pointer rounded-full text-gray-600/90 lg:py-3.5 lg:px-6'>Get Started</button>
                        </div>

                        <div className='flex gap-4'>
                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaFacebookF color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaTwitter color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaLinkedin color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaCamera color='#3d8201' size={15} /></span>
                        </div>

                    </div>

                    <div className='flex flex-wrap  justify-between w-full md:justify-around '>
                        <div className='mb-5 lg:mb-0 mr-1  '>
                            <h2 className='text-xl text-dark-green font-semibold'>Solutions</h2>
                            <ul className='flex flex-col gap-1 mt-2 lg:mt-4 lg:gap-3'>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Operations Teams</li>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Business Analysts</li>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Creators & Writers</li>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Project Manager</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className='text-xl text-dark-green font-semibold '>Product</h2>
                            <ul className='flex flex-col gap-1 mt-2 lg:gap-3 lg:mt-4'>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Overview</li>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>How it Work</li>
                                <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between border-t-2  py-2  border-gray-400  flex-col sm:flex-row  lg:px-10'>
                    <div className='flex px-5 gap-10 mt-2 text-dark-green lg:text-base font-medium text-sm justify-between'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className='mt-3 text-dark-green font-medium text-sm lg:text-base text-center'>
                        &copy; 2025 Nexocube. All rights reserved.
                    </div>

                </div>

            </div>

            <div className='hidden lg:block w-[25%] h-full '>
                <div className='w-full h-full'>
                    <img src={footerImage} alt="" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Footer