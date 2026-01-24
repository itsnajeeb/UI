import React from 'react'
import hero from "/image/heroBg.png"
import icon from "/image/icon/icon-4.png"
import './style.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* Image Section */}
            <div className='hero-image-wrapper'>
                <img src={hero} alt="Hero bg" className='hero-bg-img' />
            </div>

            {/* Content Section */}
            <div className='hero-text-section'>
                <img src={icon} alt="icon" className='hero-icon' />
                <h1 className='hero-title'>
                    Building Wealth Through Community & Performance
                </h1>
                <p className='hero-description'>
                    A refined system of intelligent components that analyze, organize, and automate your work faster, clearer, and effortlessly.
                </p>
                <button className='btnGradient hero-btn'>
                    Explore the Platform
                </button>
            </div>
        </div>
    )
}

export default Hero;