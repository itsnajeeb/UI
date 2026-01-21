import React, { useState } from 'react'
import './Navbar.css'
import button from '/public/websiteimg/button.png'
import middleImage from '/public/websiteimg/navMiddle.png'
import bottomLogo from '/public/websiteimg/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)



    return (
        <div className='bg-black px-4 lg:px-10 pt-5 relative'>

            {/* TOP BAR */}
            <div className='flex items-center justify-between md:grid md:grid-cols-3'>

                {/* LEFT SIDE (DESKTOP) */}
                <div className='hidden md:flex gap-5'>
                    <NavButton label="News" />
                    <NavButton label="Group" />
                    <NavButton label="Support" />
                </div>

                {/* CENTER LOGO */}
                <div className='flex justify-center relative'>

                    <div className=' flex-col items-center z-10 flex '>
                        <img src={middleImage} alt="" className='absolute h-24 hidden lg:block' />
                        <img src={bottomLogo} alt="" className='w-10 ' />
                        <h1 className='font-bold text-base text-white'>VELARDS</h1>
                    </div>
                </div>

                {/* RIGHT SIDE (DESKTOP) */}
                <div className='hidden md:flex gap-5 justify-end '>
                    <NavButton label="EN" />
                    <NavButton label="Sign In" />
                    <NavButton label="Sign Up" />
                </div>

                {/* HAMBURGER (MOBILE) */}
                <button
                    className='md:hidden text-white text-2xl'
                    onClick={() => setOpen(!open)}
                >
                    <i className={`bi ${open ? 'bi-x' : 'bi-list'}`}></i>
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className='md:hidden mt-6 flex flex-col gap-4 items-center pb-5'>
                    <NavButton label="News" />
                    <NavButton label="Group" />
                    <NavButton label="Support" />
                    <NavButton label="EN" />
                    <NavButton label="Sign In" />
                    <NavButton label="Sign Up" />
                </div>
            )}
        </div>
    )
}

const NavButton = ({ label }) => (
    <div className='navbar-box'>
        <div className='navbar-box-content cursor-pointer'>
            <div className='relative flex justify-center items-center navItem'>
                <img src={button} alt="" className='absolute w-28' />
                <p className='text-sm text-white'>
                    {label}
                    <span className='text-xs ml-1'>
                        <i className="bi bi-send"></i>
                    </span>
                </p>
            </div>
        </div>
    </div>
)

export default Navbar
