import React from 'react'
import dollerIcon from '/icons/icon-10.png'
import centerBox from '/websiteimg/centerImage.png'
import icon3 from '/websiteimg/icon-3.png'
import A4 from '/websiteimg/A4.png'
import buttonBg from '/websiteimg/buttonBg.png'
import './Cert-temp.css'
import { Link } from 'react-router-dom'

export const CertiTemp = () => {
    return (
        <div className='certification-section'>
            <div className='certification-content'>

                {/* Left Side: Text and Intro */}
                <div className='company-info'>
                    <h2 className='sub-heading whiteGredient'>Few words about</h2>
                    <h1 className='main-heading whiteGredient'>Company</h1>

                    <div className='highlight-para'>
                        <div className='accent-border' />
                        <p>We live and breathe the markets. Since 2001, we've educated traders to help them learn about the markets</p>
                    </div>

                    <div className='detailed-description'>
                        <p>We have over 20 years of experience in providing innovative products and helping traders around the world achieve their goals.</p>
                    </div>

                    <button className=" registration-btn">
                        <Link to={'/login'}>
                            <img src={buttonBg} alt="" />
                            <div className='btn-content'>
                                Start Trading
                                <span className="registration-icon">
                                    <img src={dollerIcon} alt="icon" />
                                </span>
                            </div>
                        </Link>
                    </button>
                </div>

                {/* Center: Certificate Illustration */}
                <div className='certificate-visual'>
                    <div className='visual-stack'>
                        <img src={A4} alt="Certificate" className='certificate-img' />
                        <img src={icon3} alt="Badge" className='badge-icon' />
                        <div className='id-box-container'>
                            <img src={centerBox} alt="Box" className='box-base' />
                            <div className='id-text-overlay'>
                                <h1>Global Market Leader</h1>
                                <p>We have over 20 years of experience in providing innovative products</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Features List */}
                <div className="features-list">
                    <div className="feature-item">
                        <div className='feature-box'>
                            <div className='diamond-container'>
                                <div className='diamond-shape'></div>
                            </div>
                            <h1 className='feature-title'>Meta Trader</h1>
                            <p className='feature-desc'>Trade over 500 markets including equities, indices, FX and commoditieson the new and improved MT5.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className='feature-box'>
                            <div className='diamond-container'>
                                <div className='diamond-shape'></div>
                            </div>
                            <h1 className='feature-title'>Competitive Pricing</h1>
                            <p className='feature-desc'>Maximize your potential with straightforward pricing choices to suit your trading style.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className='feature-box'>
                            <div className='diamond-container'>
                                <div className='diamond-shape'></div>
                            </div>
                            <h1 className='feature-title'>Active Trader</h1>
                            <p className='feature-desc'>Earn rebates and one-on-one professional support when you qualify for our Active Trader program.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className='bottom-action'>
                    <Link to={'/signup'}>
                        <button className='show-cert-btn'>
                            Register Now
                            <span className='icon'><i className="bi bi-arrow-right-short"></i></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CertiTemp