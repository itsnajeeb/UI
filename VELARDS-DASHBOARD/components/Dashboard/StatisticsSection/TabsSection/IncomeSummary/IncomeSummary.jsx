import React from 'react'
import icon1 from '/icons/icon-23.png'
import icon2 from '/icons/icon-24.png'
import icon3 from '/icons/icon-26.png'
import icon4 from '/icons/icon-25.png'
import box from '/dashboardimg/dashboard-img-04.png'
import '../tabs.css'
const IncomeSummary = ({ title, amount, currency }) => {

    const incomeSummay = [
        {
            title: 'Referral Income',
            amount: 50,
            currency: 'BTC',
        },
        {
            title: 'Referral Live Income',
            amount: 25,
            currency: 'BTC',
        },
        {
            title: 'ROI Income',
            amount: 688.3235,
            currency: 'BTC',
        },
        {
            title: 'Level Income',
            amount: 199.985,
            currency: 'BTC',
        },
        {
            title: 'Rank Income Weekly',
            amount: 0,
            currency: 'BTC',
        },
        {
            title: 'IB Income',
            amount: 0,
            currency: 'BTC',
        },
        {
            title: 'Club Income',
            amount: 0,
            currency: 'BTC',
        },
        {
            title: 'Matching Reward',
            amount: 0,
            currency: 'BTC',
        },


    ]
    
    return (

        <>
            <div className="stats-grid">
                <div className="stats-card">

                    <div className='stats-img'> 
                        <img src={icon1} alt="" />
                    </div>
                    <div className="stats-box">
                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Referral Income</h1>
                                <p className='amount'>50</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Referral Level Income</h1>
                                <p className='amount'>25</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>
                    </div>
                    <div className='stats-img'>
                        <img src={icon2} alt="" />
                    </div>
                </div>

                <div className="stats-card">

                    <div className='stats-img'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className="stats-box">

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>ROI Income</h1>
                                <p className='amount'>688.3235</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Level Income</h1>
                                <p className='amount'>199.1955</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>
                    </div>
                    <div className='stats-img'>
                        <img src={icon2} alt="" />
                    </div>
                </div>

                <div className="stats-card">

                    <div className='stats-img'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className="stats-box">

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Rank Income Weekly</h1>
                                <p className='amount'>0</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>IB Income</h1>
                                <p className='amount'>0</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>
                    </div>
                    <div className='stats-img'>
                        <img src={icon2} alt="" />
                    </div>
                </div>

                <div className="stats-card">

                    <div className='stats-img'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className="stats-box">

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Club Income</h1>
                                <p className='amount'>0</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>

                        <div className='payment-section'>
                            <img src={box} alt="" />
                            <div className='content-section'>
                                <h1>Matching Reward</h1>
                                <p className='amount'>0</p>
                                <p className='badge'>USDT</p>
                            </div>
                        </div>
                    </div>
                    <div className='stats-img'>
                        <img src={icon2} alt="" />
                    </div>
                </div>
            </div>
        </>


    )
}

export default IncomeSummary