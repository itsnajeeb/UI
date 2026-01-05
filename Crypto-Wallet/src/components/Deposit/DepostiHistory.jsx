import React from 'react'
import DataBox from '../CommonComponents/DataBox'
import BackArrow from '../CommonComponents/BackArrow';
import Footer from '../CommonComponents/Footer';
const DepostiHistory = () => {

    return (
        // <div className='w-full overflow-hidden rounded-xl  ' >
        //     <div className='bg-white shadow-xl rounded-xl overflow-hidden px-2 py-4'>
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden text-white">

            {/* APP SHELL */}
            <div className="relative w-full text-white max-w-97.5 sm:h-screen h-[93vh]  bg-[#050816] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>

                <div className='px-10 mt-18 mb-5'>
                    <h1 className='text-xl font-semibold mb-1'>Deposite History</h1>
                    <p className='text-sm font-normal'>Your previous Deposit are shown below.</p>
                </div>

                <DataBox

                />
                <div className='w-full px-3 mb-1 absolute bottom-0 z-999'>
                    <div className="bg-secondary  text-white py-2 rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DepostiHistory