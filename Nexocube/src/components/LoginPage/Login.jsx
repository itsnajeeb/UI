import React from 'react'
import image from '/public/image/loginImg.png'
import './style.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='flex justify-between px-20 items-center  h-screen'>
            <div className='h-[650px] w-[50%] '>
                <img src={image} alt="Login Image" className='h-full w-full' />
            </div>

            <div className='w-[50%] px-10 login-content'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-5xl'>Master Figma</h1>
                    <h2 className='font-bold text-5xl text-gray-400'>Design Systems</h2>
                    <p className='text-lg font-medium text-gray-500'>To continue, please log in with your registered credentials </p>                </div>

                <div className='mt-8 input-container flex flex-col gap-7'>


                    <div className='input-box'>
                        <label htmlFor="">Email </label>
                        <input type="text" placeholder='Your Email Address' />
                    </div>


                    <div className='input-box'>
                        <div className='flex justify-between '>
                            <label htmlFor="">Password </label>
                            <label htmlFor="" className='forgotPassword text-blue-700 text-xs cursor-pointer'><Link to={'/forgotpassword'}>Forget Password?</Link> </label>
                        </div>
                        <input type="password" placeholder='Your Password' />
                    </div>

                    <div className='button'>
                        <button>Login Now</button>
                        <p>Don't have an account? <Link className='signup-link' to={'/signup'}>Singup</Link></p>
                        <p>Go to home <Link className='signup-link' to={'/'}>Home</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login