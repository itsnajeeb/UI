import React from 'react'
import './style.css'
import buttonBg from '/websiteimg/buttonBg.png'
const Singup = () => {
    return (
        <div className='signup-container'>
            <div className="signup-content">
                <div className='header-tab'>
                    <div className='signup'>
                        <h5>Login</h5>
                    </div>
                    <div className='signup'>
                        <h5>Singup</h5>
                    </div>
                </div>

                <div className='input-container'>
                    <div className='input-box'>
                        <label htmlFor="Username">Your Name</label>
                        <input type="text" placeholder='Your Name' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Email</label>
                        <input type="password" placeholder='Wallet Address' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Wallet Address' />
                    </div>

                    <div className='btn-content'>
                        <img src={buttonBg} alt="" />
                        <button>Access Platform</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Singup