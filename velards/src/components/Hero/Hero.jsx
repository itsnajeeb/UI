import React from 'react'
import hero from '/websiteimg/hero.png'
import buttonBg from '/websiteimg/buttonBg.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row px-4 sm:px-8 lg:px-10 mt-10 lg:mt-20 gap-10'>

            {/* LEFT CONTENT */}
            <div className='w-full lg:w-1/2  flex flex-col'>

                {/* Subtitle */}
                <div className='mt-5 lg:mt-20'>
                    <p className='tracking-[2px] text-center uppercase text-sm sm:text-base lg:text-lg font-normal webSubTitle ml-0 lg:ml-3'>
                        Lorem ipsum is Simply Dummy text of the printing and typesetting
                    </p>
                </div>

                {/* Headings */}
                <div className='mt-3 text-center'>
                    <h1 className='text-5xl  sm:text-7xl lg:text-[9.2rem] tracking-[4px] lg:tracking-[10px] leading-none font-bold uppercase font-robo gredientText'>
                        Extra
                    </h1>
                    <h3 className='text-xl sm:text-2xl lg:text-[3.2rem] leading-tight uppercase font-semibold font-robo gredientText lg:ml-1.5'>
                        Investment power
                    </h3>
                </div>

                {/* Profit Section */}
                <div className='mt-8 lg:mt-10 flex flex-col justify-center items-center  sm:flex-row  sm:items-center  '>

                    <div>
                        <p className='font-manrope text-xl lg:text-xl ml-2'>
                            From
                        </p>

                        <div className='flex items-center gap-2'>
                            <h1 className='text-7xl sm:text-8xl lg:text-[8rem] font-bold font-geom outlineBorder colorGredientText'>
                                3.2
                            </h1>

                            <div className='flex flex-col max-w-12 '>
                                <span className='text-3xl lg:text-[3.5rem] font-bold font-geom outlineBorder colorGredientText'>
                                    %
                                </span>
                                <p className='font-semibold text-xs lg:text-sm text-center font-judson'>
                                    Daily Profit
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className='badge mt-2 lg:mt-3 scale-90 lg:scale-100 flex justify-center items-center  text-center'>
                        <svg className='badge-border ' viewBox='0 0 260 90' preserveAspectRatio='none'>
                            <defs>
                                <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                                    <stop offset='0%' stopColor='#7e7e7e' />
                                    <stop offset='50%' stopColor='#7e7e7e' />
                                    <stop offset='100%' stopColor='#7e7e7e' />
                                </linearGradient>
                            </defs>
                            <path
                                d='M12 12 H175 L195 45 L175 78 H12 Q8 78 8 74 V16 Q8 12 12 12 Z'
                                fill='rgb(30,30,30)'
                                stroke='url(#g)'
                                strokeWidth='1'
                            />
                        </svg>

                        <span className='icon'><i className='bi bi-clock-history'></i></span>
                        <div className='badge-content '>
                            <span>For</span>
                            <strong className='font-judson'>14–17</strong>
                            <span className='font-judson text-sm lg:text-lg font-medium'>
                                Business days
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className='flex flex-col justify-center sm:flex-row gap-6 lg:gap-8 mt-6'>

                    <div className='cta-wrap'>
                        <div className='cta-tag -rotate-4'>
                            Principal return at any time!
                        </div>

                        <div className='flex relative justify-center items-center cursor-pointer'>
                            <img src={buttonBg} alt='' className='w-44 sm:w-52' />
                            <div className='absolute flex items-center gap-2'>
                                <h1 className='font-bold text-base sm:text-xl text-black'>
                                    Get Started
                                </h1>
                                <span className='text-xl sm:text-2xl text-black'>
                                    <i className='bi bi-fingerprint'></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className='getStartedInfo space-y-1 flex flex-col items-center'>
                        <p className='text-sm'><i className='bi bi-caret-right-fill'></i> Daily accurals for 30 days</p>
                        <p className='text-sm'><i className='bi bi-caret-right-fill'></i> Instant Withdrawals</p>
                        <p className='text-sm'><i className='bi bi-caret-right-fill'></i> Free token every day</p>
                    </div>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={hero} alt='' className='w-full max-w-md lg:max-w-full' />
            </div>
        </div>
    )
}

export default Hero
