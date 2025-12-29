import React from 'react'
import Home from '../components/Withrawal/Home'
import Footer from '../components/CommonComponents/Footer'
import BackArrow from '../components/CommonComponents/BackArrow'

const Withdrawal = () => {
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 h-full bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>
                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll">
                    <Home />
                </div>
                <Footer />
            </div>
        </div>)
}
export default Withdrawal

