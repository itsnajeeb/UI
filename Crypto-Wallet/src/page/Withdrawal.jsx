import React from 'react'
import Home from '../components/Withrawal/Home'
import Footer from '../components/CommonComponents/Footer'
import BackArrow from '../components/CommonComponents/BackArrow'

const Withdrawal = () => {
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 sm:h-screen h-[93vh]  bg-[#161616] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>
                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll">
                    <Home />
                </div>
                <div className='w-full px-3 mb-1 absolute bottom-0 z-999'>
                    <div className="bg-secondary  text-white py-2 rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>)
}
export default Withdrawal

