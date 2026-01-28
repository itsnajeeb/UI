import React from 'react'
import icon1 from '/websiteimg/icon-1.png';
import icon2 from '/websiteimg/icon-2.png';
import icon3 from '/icons/icon-1.png'
import icon4 from '/icons/icon-2.png'
import icon5 from '/icons/icon-3.png'
import icon6 from '/icons/icon-4.png'
import icon7 from '/icons/icon-5.png'
import icon8 from '/icons/icon-6.png'
import icon9 from '/icons/icon-7.png'
import icon10 from '/icons/icon-8.png'
import icon11 from '/icons/icon-9.png'
import dollerIcon from '/icons/icon-10.png'
import rightBoxImg from '/icons/icon-11.png'
import downArrow from '/icons/downArrow.png'
import investmentArrow from '/websiteimg/investmentArrow.png'
import vipIcon from '/icons/icon-21.png'
import buttonBg from '/websiteimg/buttonBg.png'
import './Investment.css'

export const Investment = () => {
    return (
        <div className='investmentContainer'>
            <div className='header'>
                <p>Calculator Profit</p>
                <h1>Investment</h1>
            </div>

            <div className='plan-buttons-wrapper'>
                <div className='investment-box'>
                    <img src={investmentArrow} alt="" />
                    <div className='investment-plan-content'>
                        <h3>Standard Plan</h3>
                    </div>
                </div>

                <div className='investment-box'>
                    <img src={investmentArrow} alt="" />
                    <div className='investment-plan-content'>
                        <img src={vipIcon} alt="" />
                        <h3>VIP Plan</h3>
                    </div>
                </div>

            </div>

            <div className='profitbar'>
                <p className='profitLeft'>Profit Per day</p>
                <h1 className='profit-percentage'>3.1 - 3.55 <span className='percentage'>%</span></h1>
                <div className='profitRight'>
                    <div className='iconDiv'>
                        <span className='icon'><i className="bi bi-check"></i></span>
                    </div>
                    <p>The percentage is determined randomly</p>
                </div>
            </div>

            <div className='investmentCardContainer'>
                {/* 1st card */}
                <div className='card'>
                    <p className='card-header'><span className='star-icon'><i className="bi bi-star-fill"></i></span> Investment Conditions</p>
                    <div className='card-body-row'>
                        <div className='cardImg-main'>
                            <img src={icon2} alt="Icon1" />
                        </div>
                        <div className='textBox'>
                            <p className='textBoxTitle'>PERIOD</p>
                            <h1 className='cardHeading'>14-16</h1>
                            <h2 className='sub-heading'>Business days</h2>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='card-body-row'>
                        <div className='textBox'>
                            <p className='textBoxTitle'>PRINCIPAL RETURN</p>
                            <h1 className='cardHeading '>14-16 <sup><i className="bi bi-info-circle"></i></sup></h1>
                            <h2 className='sub-heading'>With 15% free </h2>
                        </div>
                        <div className='cardImg-side'>
                            <img src={icon1} alt="Icon1" />
                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className='paymentCard card'>
                    <p className='card-header'><span className='star-icon'><i className="bi bi-star-fill"></i></span> Payment Status</p>
                    <div className='payment-icons-grid'>
                        {[icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11].map((img, i) => (
                            <div key={i} className='payment-icon-box'>
                                <img src={img} alt="Payment Icon" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3rd card */}
                <div className='card depositeCard'>
                    <p className='card-header'><span className='star-icon'><i className="bi bi-star-fill"></i></span> Deposit Amount limit</p>
                    <h2 className='limit-text'>0.001232-0.023432 BTC</h2>
                    <div className="divider"></div>
                    <div className='deposit-form'>
                        <div className='input-group'>
                            <p className='input-label'>Enter amount</p>
                            <div className="input-wrapper">
                                <input type="text" placeholder='Enter USDT' />
                                <label>USDT</label>
                            </div>
                        </div>
                        <button className="deposit-btn">
                            <img src={buttonBg} alt="" />
                            <div className='btn-inner-content'>
                                <p className='btn-title'>Create Deposit</p>
                                <span className="btn-icon"><img src={dollerIcon} alt="" /></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* 4th card */}
                <div className='card'>
                    <p className='card-header'><span className='star-icon'><i className="bi bi-star-fill"></i></span> You will receive </p>
                    <div className='receive-content'>
                        <div className='profit-details'>
                            <p className='detail-title'>Daily Profit</p>
                            <h2 className='detail-value'>0.001232-0.023432</h2>
                            <p className='currency-label'>BTC</p>
                        </div>
                        <div className="divider"></div>
                        <div className='footer-box'>
                            <img src={rightBoxImg} alt="Box" className='box-img' />
                            <p className='footer-text'>Exactly total income and interest rate will determine after creating deposit</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={downArrow} alt="" className='scroll-down-arrow' />
        </div>
    )
}

export default Investment