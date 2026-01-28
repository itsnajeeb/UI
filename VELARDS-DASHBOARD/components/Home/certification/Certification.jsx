import React from 'react'
import dollerIcon from '/icons/icon-10.png'
import centerBox from '/websiteimg/centerImage.png'
import icon3 from '/websiteimg/icon-3.png'
import A4 from '/websiteimg/A4.png'
import buttonBg from '/websiteimg/buttonBg.png'
import './certification.css'

const Certification = () => {
    return (
        <div className='certification-section'>
            <div className='certification-content'>
                
                {/* Left Side: Text and Intro */}
                <div className='company-info'>
                    <h2 className='sub-heading whiteGredient'>Few words about</h2>
                    <h1 className='main-heading whiteGredient'>Company</h1>

                    <div className='highlight-para'>
                        <div className='accent-border'/>
                        <p>Our Company is officially registered in the registry of companies of the United Kingdom, as evidenced</p>
                    </div>
                    
                    <div className='detailed-description'>
                        <p>Our Company is officially registered in the registry of companies of the United Kingdom, as evidenced by the relevant records and available certificate, which guarantees the officiality.</p>
                    </div>

                    <button className=" registration-btn">
                        <img src={buttonBg} alt="" />
                        <div className='btn-content'>
                            Registration
                        <span className="registration-icon"><img src={dollerIcon} alt="icon" /></span>
                        </div>
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
                                <h1>ID 14058056</h1>
                                <p>Official registered <br /> company</p>
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
                            <h1 className='feature-title'>Official Register</h1>
                            <p className='feature-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className='feature-box'>
                            <div className='diamond-container'>
                                <div className='diamond-shape'></div>
                            </div>
                            <h1 className='feature-title'>Ddos protection</h1>
                            <p className='feature-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className='feature-box'>
                            <div className='diamond-container'>
                                <div className='diamond-shape'></div>
                            </div>
                            <h1 className='feature-title'>SSL protection</h1>
                            <p className='feature-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta tempore nisi hic.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className='bottom-action'>
                    <button className='show-cert-btn'>
                        Show Certification 
                        <span className='icon'><i className="bi bi-arrow-right-short"></i></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Certification