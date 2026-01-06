import React from 'react'
import DataBox from '../CommonComponents/DataBox'
import Footer from '../CommonComponents/Footer'
import BackArrow from '../CommonComponents/BackArrow'
import { withdrawalHistoryData } from '../../data/data'

const WithdrawaHistory = () => {
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden text-white">

            {/* APP SHELL */}
            <div className="relative w-full text-white max-w-97.5 sm:h-screen h-[93vh]  bg-[#050816] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>

                <div className='px-10 mt-18 mb-5'>
                    <h1 className='text-xl font-semibold mb-1'>Withdrawal History</h1>
                    <p className='text-sm font-normal'>Your previous Withdrawa are shown below.</p>
                </div>
                <div className='flex flex-col gap-5  custom-scroll'>
                    {
                        withdrawalHistoryData.map((data, idx) => (
                            <DataBox item={data} key={idx} />
                        ))
                    }
                </div>
                <div className='w-full px-3 mb-1 absolute bottom-0 z-999'>
                    <div className="bg-secondary  text-white py-2 rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawaHistory