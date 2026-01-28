import React from 'react'
import hero from '/websiteimg/hero.png'
import buttonBg from '/websiteimg/buttonBg.png'
import badge from '/websiteimg/heroBoxImg.png'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-wrapper'>

            {/* LEFT CONTENT */}
            <div className='hero-left'>

                {/* Subtitle */}
                <div className='subtitle-container'>
                    <p className='webSubTitle'>
                        Lorem ipsum is Simply Dummy text of the printing and typesetting
                    </p>
                </div>

                {/* Headings */}
                <div className='hero-headings'>
                    <h1 className='main-heading gredientText'>Extra</h1>
                    <h3 className='sub-heading gredientText'>Investment power</h3>
                </div>

                {/* Profit Section */}
                <div className='profit-row'>
                    <div className='profit-main'>
                        <p className='from-text'>From</p>
                        <div className='profit-value-group'>
                            <h1 className='profit-number outlineBorder colorGredientText'>3.2</h1>
                            <div className='profit-unit-box'>
                                <span className='percent-symbol outlineBorder colorGredientText'>%</span>
                                <p className='profit-label'>Daily Profit</p>
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className='badge'>
                        <div className='badge-image'>
                            <img src={badge} alt="" />
                            <span className='icon'><i className='bi bi-clock-history'></i></span>
                            <div className='badge-content'>
                                <span>For</span>
                                <strong className='days-count'>14–17</strong>
                                <span className='days-label'>Business days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className='cta-container'>
                    <div className='cta-wrap'>
                        <div className='cta-tag'>Principal return at any time!</div>
                        <div className='cta-button-inner'>
                            <img src={buttonBg} alt='' className='cta-bg-image' />
                            <div className='cta-text-overlay'>
                                <h1 className='cta-btn-title'>Get Started</h1>
                                <span className='cta-btn-icon'><i className='bi bi-fingerprint'></i></span>
                            </div>
                        </div>
                    </div>

                    {/* Info List */}
                    <div className='getStartedInfo'>
                        <p><i className='bi bi-caret-right-fill'></i> Daily accruals for 30 days</p>
                        <p><i className='bi bi-caret-right-fill'></i> Instant Withdrawals</p>
                        <p><i className='bi bi-caret-right-fill'></i> Free token every day</p>
                    </div>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className='hero-right'>
                <img src={hero} alt='hero-illustration' className='hero-img' />
            </div>
        </section>
    )
}

export default Hero