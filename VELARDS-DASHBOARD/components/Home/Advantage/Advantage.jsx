import React from 'react'
import './advantage.css'
import advantagesImage from '/public/websiteimg/advantagesImage.png'
import image01 from '/public/websiteimg/img1.png'
import image02 from '/public/websiteimg/img2.png'
import image03 from '/public/websiteimg/img3.png'
import image04 from '/public/websiteimg/img4.png'
import buttonBg from '/public/websiteimg/buttonBg.png'

export const Advantage = () => {
    return (
        <div className='advantageContainer'>
            <div className='advantage-header'>
                <p className='paraGradient'>Benefits of investing</p>
                <h1 className='headingGradient'>Advantages</h1>
            </div>

            <div className="advantage-content">
                {/* Left Side Group */}
                <div className='side-column left-column'>
                    <div className='advantage-item item-01'>
                        <div className='advantage-box-visual'>
                            <img src={image01} alt="Icon" className='floating-icon' />
                            <h4 className='step-number number-right'>01</h4>
                        </div>
                        <div className='advantage-text'>
                            <h1 className='whiteBgGradient'>Trusted and Insured</h1>
                            <p className='descriptionGradient'>Our Company is officially registered in the registry of companies of the United</p>
                        </div>
                    </div>

                    <div className='advantage-item item-03 staggered-left'>
                        <div className='advantage-box-visual'>
                            <img src={image03} alt="Icon" className='floating-icon' />
                            <h4 className='step-number number-left'>03</h4>
                        </div>
                        <div className='advantage-text'>
                            <h1 className='whiteBgGradient'>Trusted and Insured</h1>
                            <p className='descriptionGradient'>Our Company is officially registered in the registry of companies of the United</p>
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className='center-visual'>
                    <img src={advantagesImage} alt="Main Advantage" className='main-gfx'/>
                    <button className='get-started-btn'>
                        <img src={buttonBg} alt="button" className='btn-bg' />
                        <span className='btn-text'>Get Started <i className="bi bi-fingerprint"></i></span>
                    </button>
                </div>

                {/* Right Side Group */}
                <div className='side-column right-column'>
                    <div className='advantage-item item-02'>
                        <div className='advantage-box-visual'>
                            <img src={image02} alt="Icon" className='floating-icon' />
                            <h4 className='step-number number-left'>02</h4>
                        </div>
                        <div className='advantage-text'>
                            <h1 className='whiteBgGradient'>Trusted and Insured</h1>
                            <p className='descriptionGradient'>Our Company is officially registered in the registry of companies of the United</p>
                        </div>
                    </div>

                    <div className='advantage-item item-04 staggered-right'>
                        <div className='advantage-box-visual'>
                            <img src={image04} alt="Icon" className='floating-icon' />
                            <h4 className='step-number number-right'>04</h4>
                        </div>
                        <div className='advantage-text'>
                            <h1 className='whiteBgGradient'>Trusted and Insured</h1>
                            <p className='descriptionGradient'>Our Company is officially registered in the registry of companies of the United</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage