import React from 'react'
import './Payment.css'
import icon12 from '/public/icons/icon-12.png'
import icon13 from '/public/icons/icon-13.png'
import icon14 from '/public/icons/icon-14.png'
import icon15 from '/public/icons/icon-15.png'
import icon16 from '/public/icons/icon-16.png'
import icon17 from '/public/icons/icon-17.png'

export const Payment = () => {
    // Array to map through items (cleaner than repeating divs)
    const paymentMethods = [
        { name: 'bitcoin', icon: icon12, rotate: true },
        { name: 'Tron', icon: icon13 },
        { name: 'Tether', icon: icon14 },
        { name: 'litecoin', icon: icon15 },
        { name: 'Ripple', icon: icon16 },
        { name: 'Dash', icon: icon17 },
    ];

    return (
        <div className='paymentContainer'>
            <div className='payment-content'>
                
                {/* Left Side: Headings */}
                <div className='leftSideContent'>
                    <p className='subtitle'>WE WORK WITH</p>
                    <h1 className='heading'>Payment <br /> Services</h1>
                    <div className='description-wrapper'>
                        <div className='accent-line' />
                        <p className='descGradient'>
                            We live and breathe the markets. Since 2001, we've educated traders to help them learn about the markets
                        </p>
                    </div>
                </div>

                {/* Right Side: Grid of Cards */}
                <div className='rightSideGrid'>
                    <div className='cards-wrapper'>
                        {paymentMethods.map((item, index) => (
                            <div key={index} className='paymentBoxCard'>
                                <div className='paymentBoxItem'>
                                    <div className='icon-circle'>
                                        <img src={item.icon} alt={item.name} className={item.rotate ? 'rotate-10' : ''} />
                                    </div>
                                    <h1 className='payment-name'>{item.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment