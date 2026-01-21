import React, { useState } from 'react'
import { FaCamera, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from '/image/logo.png'
import footerImage from '/image/footerImage.png'
import './style.css'
const Footer = () => {
    // const [isHover, setHover] = useState(false)
    return (
        <div className='flex justify-between h-full'>
            <div className=' w-full  relative'>
                <div className='   footer-left flex justify-between px-10 flex-wrap '>
                    <div className='flex gap-4 flex-col  flex-1' >
                        <div className='flex gap-4  '>
                            <img src={logo} alt="" className='w-10 h-10' />
                            <h1 className='text-2xl font-bold'>Nexocube</h1>
                        </div>

                        <div className='relative  max-w-[350px]'>
                            <input type="text" className=' bg-gray-100/80 outline-none py-4 px-8 rounded-full font-medium relative w-fit' placeholder='Enter Your Email ' />
                            <button className='btnGradient px-5 py-4 rounded-full absolute right-4'>Get Started</button>
                        </div>

                        <div className='flex mt-5 gap-2 '>
                            <span className='bg-gray-400/30 p-4 rounded-xl hover:bg-gray-400/50 cursor-pointer'><FaFacebookF /></span>
                            <span className='bg-gray-400/30 p-4 rounded-xl hover:bg-gray-400/50 cursor-pointer'><FaLinkedin /></span>
                            <span className='bg-gray-400/30 p-4 rounded-xl hover:bg-gray-400/50 cursor-pointer'><FaTwitter /></span>
                            <span className='bg-gray-400/30 p-4 rounded-xl hover:bg-gray-400/50 cursor-pointer'><FaCamera /></span>
                        </div>
                    </div>
                    <div className='navLink flex-1'>
                        <h4 className='navLink-title font-medium text-lg'>Solutions</h4>
                        <ul>
                            <li>Operations Teams</li>
                            <li>Business Analysts</li>
                            <li>Creators & Writers</li>
                            <li>Project Manager</li>
                        </ul>
                    </div>

                    <div className='navLink pr-10'>
                        <h4 className='navLink-title font-medium text-lg'>Solutions</h4>
                        <ul>
                            <li>Operations Teams</li>
                            <li>Business Analysts</li>
                            <li>Creators & Writers</li>
                            <li>Project Manager</li>
                        </ul>
                    </div>

                </div>

                <div className='  absolute w-full  '>
                    <div className=' mb-1 h-px bg-gray-400/80 mx-5 lg:mx-10 mt-7'>
                    </div>

                    <div className='flex  justify-between px-5  my-2 text-dark-green  bottom-0 font-medium text-sm lg:text-base text-center flex-col gap-5 lg:px-20 lg:gap-0'>
                       
                        <div className='flex gap-10 justify-between w-full'>
                            <a href="#">Privacy plicy</a>
                            <a href="#">Terms of Use</a>
                        </div>

                         <div>
                            Copyright&copy; 2025 Nexocube. All rights reserved.
                        </div>


                    </div>
                </div>

            </div>

            <div>
                <img src={footerImage} alt="" className='w-100 hidden lg:block' />
            </div>

        </div>


    )
}

export default Footer
