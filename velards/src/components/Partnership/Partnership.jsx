import React from 'react'
import './Partnership.css'
import button from '/public/websiteimg/button.png';
import icon1 from '/public/icons/icon-18.png';
import icon2 from '/public/icons/icon-19.png';
import diary from '/public/websiteimg/diary.png';
import boxImage from '/public/websiteimg/centerImage.png';
import buttonBg from '/public/websiteimg/buttonBg.png';
import logo from '/public/websiteimg/bottomLogo.png';
const Partnership = () => {
    return (
        <div className='partnershipContainer flex items-center mt-20 flex-col gap-10 '>
            <div className='flex  flex-col min-w-[1100px]  '>
                <div className='header text-center'>
                    <h4 className='text-2xl uppercase'>Affiliate Program</h4>
                    <h1 className=''>Partnership</h1>
                </div>

                <div className='flex justify-between w-full mt-10  '>
                    <div className='flex flex-col gap-3  '>

                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 1</p>
                        </div>


                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 2</p>
                        </div>


                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 3</p>
                        </div>



                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 4</p>
                        </div>



                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 5</p>
                        </div>



                        <div className='w-34 h-11  relative flex justify-center items-center cursor-pointer '>
                            <img src={button} alt="" className='' />
                            <p className='absolute text-lg font-semibold text-yellow-600'>Rank 6</p>
                        </div>


                    </div>
                    <div className='flex flex-row gap-10 relative '>

                        <div className=' flex flex-col'>
                            <div className='ActiveTrunoverDiv relative flex justify-center items-center'>
                                <img src={icon1} alt="" className='absolute w-22 h-23 -top-3 -left-12' />

                                <div className='text-black absolute text-center'>
                                    <h1 className='text-gray-500 font-semibold text-lg uppercase'>Active Turnover</h1>
                                    <p className='text-gray-600 font-bold text-xl'>1000 - 20 000 USD</p>
                                </div>

                                <img src={icon2} alt="" className='  w-22 h-23 absolute right-3 skew-6  ' />

                            </div>
                            <div className='middleRankContainer w-full '>
                                <div className='middleRankArc'>
                                    <h2>Your Income <br /><span>at Rank 1</span></h2>

                                </div>

                                <div className="levels">
                                    <div className="level">
                                        <div className="line"></div>
                                        <div className="circle">
                                            <strong>10%</strong>
                                            <small>Level 1</small>
                                        </div>
                                    </div><div className="level">
                                        <div className="line"></div>
                                        <div className="circle">
                                            <strong>6%</strong>
                                            <small>Level 2</small>
                                        </div>
                                    </div><div className="level">
                                        <div className="line"></div>
                                        <div className="circle">
                                            <strong>3%</strong>
                                            <small>Level 3</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='absolute skew-12 right-0'>
                            <img src={diary} alt="" className='w-90' />
                        </div> */}


                        <div className=' relative    h-fit flex justify-center items-center flex-col  '>
                            <div className='relative h-fit flex justify-center items-center'>
                                <img src={boxImage} alt="" className='w-[350px] h-[250px] ' />
                                <p className='text-black left-0 z-99 absolute px-10  text-center font-medium'>Our company is officially registered in the registery of companies of the united kingdom, as evidenced by the relevent records and available certificate, which guara ntees the officiality of all activities of worldhourly of the united kingdom</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl my-5'>We are welcome new partners!</h1>
                                <div className='relative flex justify-center items-center cursor-pointer '>
                                    <img src={buttonBg} alt="" className='w-55' />
                                    <h1 className='absolute  text-black font-semibold text-xl '>Become a partner</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='flex mt-10 gap-15 bottomContainer'>
                    <div className='flex flex-col  justify-center items-center logoSection'>
                        <img src={logo} alt="" className='w-20' />
                        <h1 className='font-semibold text-3xl '>CASTALT</h1>
                    </div>

                    <div className='navLink flex  w-full justify-between items-center px-10'>
                        <li className='navLinkItem'>
                            Main
                        </li>
                        <div className='text-[10px] text-gray-200/90'>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        
                         <li>
                            About us
                        </li>
                        <div className='text-[10px] text-gray-200/90'>
                            <i class="bi bi-star-fill"></i>
                        </div>


                         <li>
                            Investments
                        </li>
                        <div className='text-[10px] text-gray-200/90'>
                            <i class="bi bi-star-fill"></i>
                        </div>


                         <li>
                            For partners
                        </li>
                        <div className='text-[10px] text-gray-200/90'>
                            <i class="bi bi-star-fill"></i>
                        </div>


                         <li>
                            FAQ
                        </li>
                        <div className='text-[10px] text-gray-200/90'>
                            <i class="bi bi-star-fill"></i>
                        </div>


                         <li>
                            Support
                        </li>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership