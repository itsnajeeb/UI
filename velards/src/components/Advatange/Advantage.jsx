import React from 'react'
import './advantage.css'
import advantagesImage from '/public/websiteimg/advantagesImage.png'
import image01 from '/public/websiteimg/img1.png'
import image02 from '/public/websiteimg/img2.png'
import image03 from '/public/websiteimg/img3.png'
import image04 from '/public/websiteimg/img4.png'
import buttonBg from '/public/websiteimg/buttonBg.png'
const Advantage = () => {
    return (
        <div className='advantageContainer flex flex-col  my-30'>
            <div className='header'>
                <p className='paraGradient'>Benifits of investing</p>
                <h1 className='headingGradient  text-center leading-none pb-4 text-[65px] capitalize'>Advantages</h1>
            </div>

            <div className="content  flex justify-center gap-20 pt-10">
                {/* Left side boxes */}
                <div className='flex flex-col gap-10 relative'>
                    <div className=' flex flex-col justify-center items-center w-62 '>
                        <div className='leftSideBox relative flex justify-center'>
                            <div className=' absolute -top-5 '>
                                <img src={image01} alt="" className='w-40 top-10' />
                            </div>
                            <h4 className=' absolute bottom-2 -right-3 text-4xl font-bold whiteBgGradient'>01</h4>
                        </div>
                        <div className='  text-center'>
                            <h1 className='whiteBgGradient font-semibold text-xl uppercase'>Trusted and Insured</h1>
                            <p className='text-gray-500/80 text-sm px-3 font-medium descriptionGradient'>Our Company is officially registered in the registery of companies of the United</p>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center w-62   absolute bottom-0 left-25 '>

                        <div className='leftSideBox relative flex justify-center'>
                            <div className=' absolute -top-5 '>
                                <img src={image03} alt="" className='w-40 top-10' />
                            </div>
                            <h4 className=' absolute bottom-2 -left-3 text-4xl font-bold whiteBgGradient'>03</h4>
                        </div>

                        <div className='  text-center'>
                            <h1 className='whiteBgGradient font-semibold text-xl uppercase'>Trusted and Insured</h1>
                            <p className='text-gray-500/80 text-sm px-3 font-medium descriptionGradient'>Our Company is officially registered in the registery of companies of the United</p>
                        </div>
                    </div>
                </div>

                {/* Center Image  */}
                <div className='flex flex-col justify-center items-center  gap-10'>
                    <img src={advantagesImage} alt="advatage Image "  className=' z-99'/>
                    <button className='w-45 relative flex justify-center items-center '>
                        <img src={buttonBg} alt="button" className='cursor-pointer ' />
                        <h1 className='absolute  font-bold text-lg bottom-3  self-center cursor-pointer w-full text-black'>Get Started <span className='text-2xl '><i class="bi bi-fingerprint"></i></span> </h1>
                    </button>
                </div>

                {/* Right side boxes */}
                <div className='flex flex-col gap-20 relative'>
                    <div className=' flex flex-col justify-center items-center w-62'>

                        <div className='leftSideBox relative flex justify-center'>
                            <div className=' absolute -top-5 '>
                                <img src={image02} alt="" className='w-40 top-10' />
                            </div>
                            <h4 className=' absolute bottom-2 -left-3 text-4xl font-bold whiteBgGradient'>02</h4>
                        </div>

                        <div className='  text-center'>
                            <h1 className='whiteBgGradient font-semibold text-xl uppercase'>Trusted and Insured</h1>
                            <p className='text-gray-500/80 text-sm px-3 font-medium descriptionGradient'>Our Company is officially registered in the registery of companies of the United</p>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center w-62 absolute bottom-0 right-25 '>
                        <div className='leftSideBox relative flex justify-center'>
                            <div className=' absolute -top-5 '>
                                <img src={image04} alt="" className='w-40 top-10' />
                            </div>
                            <h4 className=' absolute bottom-2 -right-3 text-4xl font-bold whiteBgGradient'>04</h4>
                        </div>

                        <div className='  text-center'>
                            <h1 className='whiteBgGradient font-semibold text-xl uppercase'>Trusted and Insured</h1>
                            <p className='text-gray-500/80 text-sm px-3 font-medium descriptionGradient'>Our Company is officially registered in the registery of companies of the United</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Advantage