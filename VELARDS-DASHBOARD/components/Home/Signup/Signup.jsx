
import React from 'react'
import buttonBg from '/websiteimg/buttonBg.png'
import logo from '/websiteimg/logo.png'
import { Link } from 'react-router-dom'
import './style.css'
export const Signup = () => {
    return (
        <div className='signup-container'>
            <div className="signup-content">
                <div className='header-section'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='header-description'>
                        <h1>Hey There, Capy Friend!</h1>
                        <p>To continue, please log in with your email and password</p>
                    </div>
                </div>


                <div className='input-container'>

                    <div className='input-box'>
                        <label htmlFor="sponsor-id">Sponsor Id</label>
                        <input type="text" placeholder='Your Sponsor Id' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="sponsor-name">Sponsor Name</label>
                        <input type="text" placeholder='Your Sponsor Name' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="sponsor-name">Select Country</label>
                        <select name="" id="">
                            <option value="India">India</option>
                            <option value="India">Pakistan</option>
                            <option value="India">Sri Lanka</option>
                            <option value="India">Bangaladesh</option>
                            <option value="India">Nepal</option>
                            <option value="India">Afganistan</option>
                            <option value="India">Iran</option>
                        </select>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Select Position</label>
                        <select name="" id="">
                            <option value="Left">Left</option>
                            <option value="Right">Right</option>
                        </select>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='Your Username' />
                    </div>

                    <div className='input-box mobile-no-div'>
                        <label htmlFor="">Mobile No</label>
                        <div className='mobile-no'>
                            <label htmlFor="" className='country-code'>+91</label>
                            <input type="text" placeholder='Your Mobile No' />
                        </div>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Mobile</label>
                        <input type="text" placeholder='Your Mobile No' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                    </div>

                    <div className='bottom-section'>
                        <div className="btn-content">
                            <img src={buttonBg} alt="" />
                            <button className='btn-title'>Access Platform</button>
                        </div>

                        <div className='login-section'>
                            <p>Already have an account? <Link className='link' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
            </div>
        </div >
    )
}

export default Signup