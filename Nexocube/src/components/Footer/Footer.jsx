import React from 'react'
import { FaCamera, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerImage from '/image/footerImage.png'
import logo from '/image/logo.png'
const Footer = () => {
    return (
        <div className='flex justify-between  mt-20 '>
            <div className='w-[75%] px-20  flex flex-col justify-between'>
                <div className='flex justify-between  w-full '>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-2'>
                            <img src={logo} alt="logo" className='w-8 h-8 self-center' />
                            <h1 className='text-4xl text-dark-green font-semibold self-start'>Nexocube</h1>
                        </div>
                        <div className='relative max-w-sm'>
                            <input type="text" placeholder='Enter Your Email' 
                            className='border-2 border-gray-400/70 min-w-85 outline-none px-6 py-3 rounded-full placeholder:text-gray-400' />
                            <button className='absolute font-semibold btnGradient px-6 right-0 py-3.5 cursor-pointer rounded-full text-gray-600/90'>Get Started</button>
                        </div>

                        <div className='flex gap-4'>
                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaFacebookF color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaTwitter color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaLinkedin color='#3d8201' size={15} /></span>

                            <span className='bg-gray-400/20 p-3 rounded-lg cursor-pointer hover:bg-gray-400/40 transition-all duration-300'><FaCamera color='#3d8201' size={15} /></span>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl text-dark-green font-semibold'>Solutions</h2>
                        <ul className='flex flex-col gap-3 mt-4'>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Operations Teams</li>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Business Analysts</li>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Creators & Writers</li>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Project Manager</li>
                        </ul>
                    </div>
                    <div className='pr-20'>
                        <h2>Product</h2>
                        <ul className='flex flex-col gap-3 mt-4'>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Overview</li>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>How it Work</li>
                            <li className='text-base text-gray-500/90 font-medium cursor-pointer'>Pricing</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between border-t-2 border-gray-400 '>
                    <div className='flex gap-10 mt-4 text-dark-green text-base font-medium'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className='mt-4 text-dark-green font-medium text-base'>
                        &copy; 2025 Nexocube. All rights reserved.
                    </div>

                </div>

            </div>

            <div className='w-[25%] h-full '>
                <div className='w-full h-full'>
                    <img src={footerImage} alt="" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Footer