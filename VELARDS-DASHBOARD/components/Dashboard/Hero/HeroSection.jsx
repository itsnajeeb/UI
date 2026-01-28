import React from 'react';
import image from '/dashboardimg/dashboard-img-01.png';
import border from '/dashboardimg/dashboard-img-03.png'
import button from '/dashboardimg/buttonBg.png'
import './hero.css'
import { DatabaseZap } from 'lucide-react';
export const HeroSection = () => {
    return (
        <div className='dashboard-section '>
            <div className='left-section'>
                <div className='heading-section'>
                    <h1 className='outline-border'>3.1 - 3.35 <span className='percentage'>%</span></h1>
                    <p className='profit-title'>Profit Per day</p>
                </div>
                <div className='subtitle-section'>
                    <div>
                        <div className='box-arrow'>
                            <img src={border} alt="" />
                            <h2 >Principal return at any time!</h2>
                        </div>

                        <div className='btn-section'>
                            <img src={button} alt="" />
                            <p className='btn-title'>Create Deposit <span className='icon'><DatabaseZap size={18} /></span></p>
                        </div>
                    </div>
                    <div className='description-section'>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Daily accurals <br />for 30 days</p>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Instant <br />withdrawals</p>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Free tokens <br /> every day</p>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <img src={image} alt="" />
                <h1>Your Statistics</h1>
            </div>
        </div>
    );
}; 

export default HeroSection;
