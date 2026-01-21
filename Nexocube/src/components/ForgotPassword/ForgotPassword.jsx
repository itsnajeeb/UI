import React from 'react'
import image from '/public/image/loginImg.png'
import './style.css'
import { Link } from 'react-router-dom'
import { BiLeftArrow } from 'react-icons/bi'
const Login = () => {
    return (
        <div className='flex justify-between px-20 items-center  h-screen'>
            <div className='h-[650px] w-[50%] '>
                <img src={image} alt="Login Image" className='h-full w-full' />
            </div>

            <div className='w-[50%] px-10 login-content'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-5xl'>Forgot Your Password</h1>
                    <p className='text-lg font-medium text-gray-500'>To continue, please log in with your registered credentials </p>                </div>

                <div className='mt-8 input-container flex flex-col gap-7'>


                    <div className='input-box'>
                        <label htmlFor="">Email </label>
                        <input type="text" placeholder='Your Email Address' />
                    </div>


                    <div className='button'>
                        <button>Send Link</button>
                        <p>Don't have an account? <Link className='signup-link' to={'/login'}>Login</Link></p>
                        <p>Go to home <Link className='signup-link' to={'/'}>Home</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login