import React from 'react'
import icon1 from '/websiteimg/icon-1.png';
import icon2 from '/websiteimg/icon-2.png';
import icon3 from '/icons/icon-1.png'
import icon4 from '/icons/icon-2.png'
import icon5 from '/icons/icon-3.png'
import icon6 from '/icons/icon-4.png'
import icon7 from '/icons/icon-5.png'
import icon8 from '/icons/icon-6.png'
import icon9 from '/icons/icon-7.png'
import icon10 from '/icons/icon-8.png'
import icon11 from '/icons/icon-9.png'
import dollerIcon from '/icons/icon-10.png'
import rightBoxImg from '/icons/icon-11.png'
import downArrow from '/icons/downArrow.png'
import './Investment.css'
const Investment = () => {
    return (
        <div className='investmentContainer py-10'>
            <div className='header'>
                <p>Calculator Profit</p>
                <h1>Investment</h1>
            </div>

            <div className='flex gap-0  justify-around'>
                <div class="button mt-3 cursor-pointer">

                    <svg class="button-border cursor-pointer" viewBox="0 0 260 90" preserveAspectRatio="none">

                        <defs>
                            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#7e7e7e" />
                                <stop offset="50%" stopColor="#7e7e7e" />
                                <stop offset="100%" stopColor="#7e7e7e" />
                            </linearGradient>
                        </defs>

                        <g transform="translate(250,0) scale(-1,1)">
                            <path
                                d="M12 12 H175 L195 45 L175 78 H12 Q8 78 8 74 V16 Q8 12 12 12 Z"
                                fill="rgb(30,30,30)"
                                stroke="url(#g)"
                                strokeWidth="1"
                            />
                        </g>
                    </svg>

                    <span className='icon'><i class="bi bi-clock-history"></i></span>
                    <div class="button-content">
                        <span>Standard Plan</span>

                    </div>
                </div>

                <div class="button mt-3">

                    <svg class="button-border" viewBox="0 0 260 90" preserveAspectRatio="none">

                        <defs>
                            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#7e7e7e" />
                                <stop offset="50%" stopColor="#7e7e7e" />
                                <stop offset="100%" stopColor="#7e7e7e" />
                            </linearGradient>
                        </defs>

                        <g transform="translate(210,0) scale(-1,1)">
                            <path
                                d="M12 12 H175 L195 45 L175 78 H12 Q8 78 8 74 V16 Q8 12 12 12 Z"
                                fill="rgb(30,30,30)"
                                stroke="url(#g)"
                                strokeWidth="1"
                            />
                        </g>
                    </svg>

                    <span className='icon'><i class="bi bi-clock-history"></i></span>
                    <div class="button-content">
                        <p > <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown-icon lucide-crown"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" /><path d="M5 21h14" /></svg>
                        </span>

                            VIP Plan</p>

                    </div>
                </div>

            </div>


            <div className='profitbar'>
                <p className='profitLeft'>Profit Per day</p>
                <h1 className='text-[4rem] font-bold leading-26 font-geom colorGredientText tracking-tight outlineBorder'>3.1 - 3.55 <sup>%</sup></h1>

                <div className='profitRight'>
                    <div className='iconDiv'>
                        <span className='icon'><i class="bi bi-check"></i></span>
                    </div>
                    The percentage is determined randomly</div>
            </div>


            <div className='investmentCardContainer pt-10'>
                {/* 1st card  */}
                <div className='card'>
                    <p className='title text-xs'><span className='icon text-(--primary-text-color)'><i class="bi bi-star-fill"></i></span> Investment Conditions</p>
                    <div className=' flex mt-6 gap-4'>
                        <div className='cardImg w-20 h-20'>
                            <img src={icon2} alt="Icon1" />
                        </div>
                        <div className='textBox flex flex-col'>
                            <p className='textBoxTitle'>PERIOD</p>
                            <h1 className='cardHeading'>14-16
                            </h1>
                            <h2 className='text-sm text-(--primary-text-color) font-semibold font-geom'>Business days</h2>
                        </div>
                    </div>

                    <div className="divider my-6"></div>
                    <div className='cardSection flex gap-4 '>
                        <div className='textBox'>
                            <p className='textBoxTitle'>PRINCIAPL RETURN</p>
                            <h1 className='cardHeading '>14-16 <sup><i class="bi bi-info-circle"></i></sup></h1>
                            <h2 className='text-sm text-(--primary-text-color) font-semibold font-geom'>With 15% free </h2>
                        </div>
                        <div className='cardImg w-21 h-18 self-center'>
                            <img src={icon1} alt="Icon1" className='w-full h-full rotate-8 ' />
                        </div>

                    </div>
                </div>

                {/* 2nd card */}
                <div className='paymentCard card'>
                    <p className='title text-xs '><span className='icon text-(--primary-text-color)'><i class="bi bi-star-fill"></i></span> Payment Status</p>


                    <div className='cardSection   mt-6 gap-4 flex flex-wrap justify-between h-full px-3 items-end '>
                        <div className='icon '>
                            <img src={icon3} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon4} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon5} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon6} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon7} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon8} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon9} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon10} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>

                        <div className='icon '>
                            <img src={icon11} alt="Icon-1" className='w-full h-full object-cover' />
                        </div>


                    </div>

                </div>

                {/* 3rd card  */}
                <div className='card depositeCard   border '>
                    <p className='title text-xs'><span className='icon text-(--primary-text-color)'><i class="bi bi-star-fill"></i></span> Deposit Amount limit</p>
                    <div className=' flex mt-3 '>
                        <h2 className='text-xs text-center  w-full text-(--primary-text-color) font-semibold font-geom'>0.001232-0.023432 BTC</h2>
                    </div>

                    <div className="divider my-4"></div>
                    <div className='cardSection   h-full flex flex-col   justify-between'>
                        <div className='inputBox relative '>
                            <p className='textBox w-full text-center uppercase font-medium text-sm  mb-3'>Enter amount</p>
                            <input type="text" placeholder='Enter USDT' className='bg-black relative w-full' />
                            <label htmlFor="" className='absolute right-3 bottom-0 pb-3  text-xs text-(--primary-text-color) font-medium' >USDT</label>
                        </div>

                        <button class="deposit-btn self-center  py-4 px-6 border-none cursor-pointer flex items-center gap-3 font-bold text-base">
                            Create Deposit
                            <span class="icon"><img src={dollerIcon} alt="" className=' w-7 ' /></span>
                        </button>
                    </div>
                </div>

                {/* 4th card  */}
                <div className='card'>
                    <p className='title text-xs'><span className='icon text-(--primary-text-color)'><i class="bi bi-star-fill"></i></span> You will receive </p>

                    <div className='cardSection flex   flex-col  h-full justify-between'>
                        <div className=' flex flex-col gap-1.5 mt-4'>
                            <p className='title  text-xs font-semibold m'>Daily Profit</p>
                            <h2 className='text-sm title text-center  w-full font-semibold font-geom'>0.001232-0.023432 </h2>
                            <p className='text-(--primary-text-color) text-center font-medium '>BTC</p>
                        </div>

                        <div className="divider mb-2 "></div>
                        <div className='flex gap-6 '>
                            <div className=' w-25 flex'>
                                <img src={rightBoxImg} alt="Icon1" className='w-20 self-end rotate-8 ' />
                            </div>

                            <div className='text-gray-500 text-[13px] w-full  font-medium self-end'>
                                <p>Exactly total income and interest rate will determine after creating deposit
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
                <img src={downArrow} alt="" className='w-8 absolute bottom-5' />
        </div>
    )
}

export default Investment