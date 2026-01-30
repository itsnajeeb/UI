import React from 'react'
import icon1 from '/icons/icon-23.png'
import icon2 from '/icons/icon-24.png'
import box from '/dashboardimg/dashboard-img-04.png'
import '../tabs.css'
const Team = ({ title, amount, currency }) => {
    return (
        <div className="stats-grid">

            <div className='stats-card'>
                <div className='stats-img'>
                    <img src={icon1} alt="" />
                </div>
                <div className="stats-box">
                    <div className='payment-section'>
                        <img src={box} alt="" />
                        <div className='content-section'>
                            <h1>Total Team</h1>
                            <p className='amount'>1343</p>
                            {/* <p className='badge'>BTC</p> */}
                        </div>
                    </div>

                    <div className='payment-section'>
                        <img src={box} alt="" />
                        <div className='content-section'>
                            <h1>Active Team</h1>
                            <p className='leftRight'>Left / Right</p>
                            <p className='amount'>292/302</p>
                        </div>
                    </div>
                </div>
                <div className='stats-img'>
                    <img src={icon2} alt="" />
                </div>
            </div>



            <div className='stats-card'>
                <div className='stats-img'>
                    <img src={icon1} alt="" />
                </div>
                <div className="stats-box">
                    <div className='payment-section'>
                        <img src={box} alt="" />
                        <div className='content-section'>
                            <h1>Inactive Team</h1>
                            <p>Left / Right</p>
                            <p className='amount'>464/285</p>
                        </div>
                    </div>

                </div>
                <div className='stats-img'>
                    <img src={icon2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Team