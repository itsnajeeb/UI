import React, { useState } from 'react'
import './Navbar.css'
import button from '/public/websiteimg/button.png'
import middleImage from '/public/websiteimg/navMiddle.png'
import bottomLogo from '/public/websiteimg/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='nav-container-main'>
            <div className='nav-top-bar'>

                {/* LEFT SIDE (DESKTOP) */}
                <div className='nav-desktop-group left-group'>
                    <NavButton label="News" />
                    <NavButton label="Group" />
                    <NavButton label="Support" />
                </div>

                {/* CENTER LOGO */}
                <div className='nav-logo-center'>
                    <div className='logo-stack'>
                        <img src={middleImage} alt="" className='bg-glow-img' />
                        <img src={bottomLogo} alt="" className='main-logo-icon' />
                    </div>
                </div>

                {/* RIGHT SIDE (DESKTOP) */}
                <div className='nav-desktop-group right-group'>
                    <Link to='/signup' className='link'> <NavButton label="Sign Up" /></Link>
                    <Link to='/login' className='link'>  <NavButton label="Login" /></Link>

                </div>

                {/* HAMBURGER (MOBILE) */}
                <button className='mobile-toggle' onClick={() => setOpen(!open)}>
                    <i className={`bi ${open ? 'bi-x' : 'bi-list'}`}></i>
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className={`mobile-menu-overlay ${open ? 'navbar-open' :'navbar-close'}`}>
                    <NavButton label="News" />
                    <NavButton label="Group" />
                    <NavButton label="Support" />
                    <NavButton label="EN" />
                    <Link to='/login' className='link'><NavButton label="Sign In" /></Link>
                    <Link to='/signup' className='link'><NavButton label="Sign Up" /></Link>
                </div>
            )}
        </nav>
    )
}

const NavButton = ({ label }) => (
    <div className='navbar-box'>
        <div className='navbar-box-content'>
            <div className='navItem-wrapper'>
                <img src={button} alt="" className='btn-bg-img' />
                <p className='btn-label'>
                    {label}
                    <span className='btn-icon'>
                        <i className="bi bi-send"></i>
                    </span>
                </p>
            </div>
        </div>
    </div>
)

export default Navbar