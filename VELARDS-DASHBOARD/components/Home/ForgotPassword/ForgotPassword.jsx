import React from 'react'
import buttonBg from '/websiteimg/buttonBg.png'
import logo from '/websiteimg/logo.png'
import { Link } from 'react-router-dom'
import './style.css'

export const ForgotPassword = () => {
    return (
        <div className='forgot-container'>
            <div className='forgot-content'>
                <div className='header-section'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='header-description'>
                        <h1>Reset Your Password!</h1>
                        <p>To continue, please log in with your username.</p>
                    </div>
                </div>

                <div className='input-box'>
                    <label htmlFor="Username">Your User Id</label>
                    <input type="text" placeholder='Your User Id' />
                </div>

                <div className='bottom-section'>
                    <div className="btn-content">
                        <img src={buttonBg} alt="" />
                        <button className='btn-title'>Access Platform</button>
                    </div>

                    <div className='login-section'>
                        <p>Remembered your password ? <Link className='link' to={'/login'}>Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword