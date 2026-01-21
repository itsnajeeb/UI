import React from 'react'
import image from '/public/image/loginImg.png'
import './style.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='flex justify-between px-20 items-center  h-screen'>
            <div className='h-[650px] w-[50%] '>
                <img src={image} alt="Login Image" className='h-full w-full' />
            </div>

            <div className='w-[50%] px-10 signup-content'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-5xl'>Welcome </h1>
                    {/* <h2 className='font-bold text-5xl text-gray-400'>Design Systems</h2> */}
                    <p className='text-lg font-medium text-gray-500'>Sign up with your email and password to stay connected.</p>
                </div>

                <div className='mt-8 input-container flex flex-col gap-7'>


                    <div className='signup-info'>
                        <div className='input-box '>
                            <label htmlFor="">Sponsor Id </label>
                            <input type="text" placeholder='Your Sponsor Id' />
                        </div>


                        <div className='input-box'>
                            <label htmlFor="">User Name </label>
                            <input type="text" placeholder='Your Username' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="">Yor Address </label>
                            <input type="text" placeholder='Your Address (BEP-20)' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="">Enter Mobile No </label>
                            <input type="text" placeholder='Your Mobile No' />
                        </div>


                        <div className='input-box'>
                            <label htmlFor="">Enter Your Email</label>
                            <input type="text" placeholder='Your Email Address' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="">OTP</label>
                            <input type="text" placeholder='Your OTP' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='Your Password' />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" placeholder='Your Confirm Password' />
                        </div>
                    </div>



                    <div className='button'>
                        <button>Continue </button>
                        <p>Already have an account? <Link className='login-link' to={'/login'}>Login here</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup