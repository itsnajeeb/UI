import React from 'react'
import './Footer.css'
import footerBg from '/public/websiteimg/footerCenterBg.png'
import footerLeft from '/public/websiteimg/footerLeftSideImg.png'
import button from '/public/websiteimg/button.png'

const Footer = () => {
    return (
        <footer className='footer-container'>
            {/* Top Section with Background Graphics */}
            <div className='footer-banner'>
                <img src={footerBg} alt="background" className='bg-graphic' />

                <div className='footer-grid'>
                    {/* Left: ID Image Section */}
                    <div className='footer-id-column'>
                        <div className='id-wrapper'>
                            <img src={footerLeft} alt="ID card" className='id-img' />
                            <h1 className='id-text'>ID 1918228181</h1>
                        </div>
                    </div>

                    {/* Middle: Join Section */}
                    <div className='footer-join-column'>
                        <h1 className='footer-main-heading'>Join to building the future</h1>
                        <div className='footer-btn-group'>
                            <div className='custom-footer-btn'>
                                <img src={button} alt="btn" />
                                <p>News <span className='icon'><i class="bi bi-send"></i></span></p>
                            </div>
                            <div className='custom-footer-btn'>
                                <img src={button} alt="btn" />
                                <p>Group <span className='icon'><i class="bi bi-send"></i></span></p>
                            </div>
                            <div className='custom-footer-btn'>
                                <img src={button} alt="btn" />
                                <p>Support <span className='icon'><i class="bi bi-send"></i></span></p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Description */}
                    <div className='footer-desc-column'>
                        <p className='footer-desc-text'>Our Company is officially registered in the registry of companies of the United Kingdom. as evidenced</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Legal and Links */}
            <div className='footer-bottom-bar'>
                <div className='bottom-links'>
                    <a href="#" className='legal-link'>Terms and Partnership agreement</a>
                    <span className='copyright'>Copyright @2025 All Right Reserved</span>
                </div>

                <div className='bottom-btn-group'>
                    <div className='custom-footer-btn small-btn'>
                        <img src={button} alt="btn" />
                        <p>Eng <span className='icon'><i class="bi bi-send"></i></span></p>
                    </div>
                    <div className='custom-footer-btn small-btn'>
                        <img src={button} alt="btn" />
                        <p>Sign in <span className='icon'><i class="bi bi-send"></i></span></p>
                    </div>
                    <div className='custom-footer-btn small-btn'>
                        <img src={button} alt="btn" />
                        <p>Sign up <span className='icon'><i class="bi bi-send"></i></span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer