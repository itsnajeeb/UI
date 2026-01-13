import React, { useState } from 'react'
import { FaCamera, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerImage from '/image/footerImage.png'
import logo from '/image/logo.png'
const Footer = () => {
    // const [isHover, setHover] = useState(false)
    return (
        <>
            <div className='flex justify-between mt-20 h-full '>
                <div className='w-full mx-10 grid  grid-cols-[1fr_1fr_1fr]  border-t border-b h-[250px] '>

                    <div className='flex gap-2  justify-center items-center border-r h-full w-full'>
                        <img src={logo} alt="" className='w-12 h-12 ' />
                        <h1 className='text-4xl font-semibold self-center'>Nexocube</h1>
                    </div>
                    <div className=' flex justify-center flex-col border-r items-center '>
                        <h1 className='text-base mb-2 font-semibold uppercase'>Subscribe to our news letter</h1>
                        <div className='relative   w-full sm:max-w-95'>

                            <input type="text" placeholder='Enter Your Email'
                                className='border-2 border-gray-400/70  w-full outline-none px-4 py-2 rounded-full placeholder:text-gray-400 lg:px-6 lg:py-3 ' />

                            <button className='absolute font-semibold btnGradient px-4 right-0 py-2.5 cursor-pointer rounded-full text-gray-600/90 lg:py-3.5 lg:px-6'>Get Started</button>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center items-center '>
                        <HoverIcon IconComponent={FaFacebookF} defaultColor="#8d29f1" hoverColor="#fff" />

                        <HoverIcon IconComponent={FaTwitter} defaultColor="#8d29f1" hoverColor="#fff" />

                        <HoverIcon IconComponent={FaLinkedin} defaultColor="#8d29f1" hoverColor="#fff" />

                        <HoverIcon IconComponent={FaCamera} defaultColor="#8d29f1" hoverColor="#fff" />

                    </div>



                </div>

            </div >
            <div className='my-4 text-dark-green font-medium text-sm lg:text-base text-center'>
                Copyright&copy; 2025 Nexocube. All rights reserved.
            </div>

        </>


    )
}

export default Footer

const HoverIcon = ({ IconComponent, defaultColor, hoverColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span className='bg-gray-400/20 p-4 h-fit rounded-lg cursor-pointer  hover:bg-(--bg-color-3) transition-all duration-300 text-black'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IconComponent
                size={20}
                color={isHovered ? hoverColor : defaultColor}
                style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            />
        </span>
    );
};