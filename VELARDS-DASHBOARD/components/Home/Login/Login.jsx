import React from 'react'
import './style.css'
import buttonBg from '/websiteimg/buttonBg.png'
const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-content">
                <div className='header-tab'>
                    <div className='login'>
                        <h5>Login</h5>
                    </div>
                    <div className='signup'>
                        <h5>Singup</h5>
                    </div>
                </div>

                <div className='input-container'>
                    <div className='input-box'>
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder='Your Email' />
                    </div>

                    <div className='input-box'>
                        <div className='forgot'>
                            <label htmlFor="">Password</label>
                            <label htmlFor="" className='forgot-lable'>Forgot Password</label>
                        </div>
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

export default Login