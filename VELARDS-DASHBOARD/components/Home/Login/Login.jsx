import React, { useState } from 'react'
import './style.css'
import buttonBg from '/websiteimg/buttonBg.png'
import logo from '/websiteimg/logo.png'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [hidePassword, setHidePassword] = useState(false)
    return (
        <div className='login-container'>
            <div className="login-content">
                <div className='header-section'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='header-description'>
                        <h1>Hey There, Capy Friend!</h1>
                        <p>Sign up with your email and password to stay connected.</p>
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
                        <div className='forgot-label'>
                            <label htmlFor="">Password</label>
                            <label htmlFor=""><Link to={'/forgot-password'} className='forgot-text'>Forgot Password</Link></label>
                        </div>
                        <input type="password" placeholder='Wallet Address' />
                    </div>

                    <div className='bottom-section'>
                        <div className="btn-content">
                            <img src={buttonBg} alt="" />
                            <button className='btn-title'>Access Platform</button>
                        </div>

                        <div className='login-section'>
                            <p>Don't have an account? <Link className='link' to={'/signup'}>Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login


