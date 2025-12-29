import React from 'react'
import Header from '../components/Deposit/Header'
import Footer from '../components/CommonComponents/Footer'
import { MoveLeft } from 'lucide-react'
import BackArrow from '../components/CommonComponents/BackArrow'

const Deposit = () => {
    return (
        <div className="h-screen relative bg-[#0c0c0cc8] flex justify-center overflow-hidden">
            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 h-full bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

            <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                <BackArrow/>
            </div>
                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll">
                    <Header />
                </div>
                <Footer />
            </div>
        </div>
        )
}
export default Deposit

