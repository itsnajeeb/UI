import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import quotes from '/image/icon/quotes.png'
import doubleQuotes from '/image/icon/doubleQuotes.png'
import user1 from '/image/user-1.jpg'
import user2 from '/image/user-2.jpg'
import '../../styles/Feedback.css'
export const Feedback = () => {
    return (

        <div className='flex  py-20 px-20 ' >
            <div className='w-[40%] flex flex-col gap-5  '>
                <div className='subTittle w-fit flex gap-3 px-7 py-2 rounded-full '>
                    <img src={doubleQuotes} alt="" className='self-center w-5' />
                    <h3 className='text-dark-green text-base self-start font-semibold'>
                        User Stories</h3>
                </div>
                <h1 className='text-5xl textGredient font-semibold pb-3 pr-10 mb-14'>What Teams Are Saying</h1>

                <div className='flex gap-8'>
                    <button className='bg-gray-400/30 p-4 rounded-xl cursor-pointer'><ArrowLeft /></button>
                    <button className='bg-gray-400/30 p-4 rounded-xl cursor-pointer'><ArrowRight /></button>
                </div>
            </div>

            <div className='w-[60%] flex gap-10'>
                <div className=''>
                    <img src={quotes} alt="" className='w-10 ' />
                    <div className='mt-2'>
                        <p className='text-gray-500/80 text-lg text-justify'>As a business analyst, I deal with messy data every single day and cleaning it is used to take up half my time. Now, the platform reads thorough datasets, highlights patterns, and even explains anomalies in a way I've never seen</p>
                    </div>
                    <div className=' mt-5 flex gap-2'>
                        <img src={user1} alt="" className='w-13 h-13 rounded-full' />
                         <div className='flex flex-col'>
                            <h2 className='text-dark-green font-medium text-base'>Daniel Rhicard</h2>
                            <p className='text-gray-400/90 text-sm'>Senior Business Analyst</p>
                        </div>
                    </div>


                </div>

                <div>
                    <img src={quotes} alt="" className='w-10' />
                    <div className='mt-2'>
                        <p className='text-gray-500/80 text-lg text-justify'>As a business analyst, I deal with messy data every single day and cleaning it is used to take up half my time. Now, the platform reads thorough datasets, highlights patterns, and even explains anomalies in a way I've never seen</p>
                    </div>
                    <div className=' mt-5 flex gap-2'>
                        <img src={user2} alt="" className='w-13 h-13 rounded-full' />
                        <div className='flex flex-col'>
                            <h2 className='text-dark-green font-medium text-base'>Daniel Rhicard</h2>
                            <p className='text-gray-400/90 text-sm'>Senior Business Analyst</p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}
