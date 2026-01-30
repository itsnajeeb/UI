import React from 'react'
import icon1 from '/icons/icon-23.png'
import icon2 from '/icons/icon-24.png'
import box from '/dashboardimg/dashboard-img-04.png'
import '../tabs.css'
const Business = ({ title, amount, currency }) => {
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
                            <h1>Current Month</h1>
                            <p>Left Business</p>
                            <p className='amount'>140950</p>
                        </div>
                    </div>

                    <div className='payment-section'>
                        <img src={box} alt="" />
                        <div className='content-section'>
                            <h1>Current Month</h1>
                            <p>Right Business</p>
                            <p className='amount'>0</p>
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
                            <h1>Total </h1>
                            <p>Left Business</p>
                            <p className='amount'>652500</p>
                        </div>
                    </div>

                    <div className='payment-section'>
                        <img src={box} alt="" />
                        <div className='content-section'>
                            <h1>Total </h1>
                            <p>Right Business</p>
                            <p className='amount'>0</p>
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

export default Business