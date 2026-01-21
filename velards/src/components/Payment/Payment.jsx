import React from 'react'
import './Payment.css'
import icon12 from '/public/icons/icon-12.png'
import icon13 from '/public/icons/icon-13.png'
import icon14 from '/public/icons/icon-14.png'
import icon15 from '/public/icons/icon-15.png'
import icon16 from '/public/icons/icon-16.png'
import icon17 from '/public/icons/icon-17.png'
const Payment = () => {
    return (
        <div className='paymentContainer mt-40'>
            <div className='content px-36 py-10 flex   '>
                <div className='leftSideContent w-[30%] space-y-4  self-center h-full'>
                    <p className='subtitle font-medium pl-1 text-2xl'>WE WORK WITH</p>
                    <h1 className='heading text-6xl font-bold pb-2'>Payment <br /> Services</h1>
                    <div className='descriptionDiv  flex  h-22 gap-3 justify-center items-center '>
                        <div />
                        <p className='descGradient font-semibold pr-10'>Our is Officially registered in the registery of companies of the united Kingdom, as evidenced</p>
                    </div>
                </div>

                <div className=' w-[70%]  flex justify-center  items-center'>
                    <div className='flex  flex-wrap  justify-center gap-5'>
                        <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3'>
                                <div className='w-10 h-10  rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon12} alt="" className='  rotate-10 h-full w-full' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>bitcoin</h1>
                            </div>
                        </div>

                        <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon13} alt="" className=' w-full h-full ' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>Tron</h1>
                            </div>
                        </div>

                         <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon14} alt="" className=' w-full h-full ' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>Tether</h1>
                            </div>
                        </div>

                         <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3 cursor-pointer'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon15} alt="" className=' w-full h-full ' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>litecoin</h1>
                            </div>
                        </div>

                         <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon16} alt="" className=' w-full h-full ' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>Ripple</h1>
                            </div>
                        </div>

                         <div className='paymentBoxCard  w-full relative flex justify-center items-center cursor-pointer'>
                            {/* <img src={paymentBox} alt="" className='w-50' /> */}
                            <div className='paymentBoxItem flex absolute justify-center items-center gap-3'>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center p-2 '>
                                    <img src={icon17} alt="" className=' w-full h-full ' />
                                </div>
                                <h1 className='font-bold text-3xl  leading-0 italic '>Dash</h1>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment