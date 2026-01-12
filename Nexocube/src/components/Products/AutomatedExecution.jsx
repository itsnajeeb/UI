import React from 'react'
import Chart from './Chart'
import system from '/image/system.png'

const AutomatedExecution = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-6 py-10 relative bg-white gap-8 cardContainer'>
            <div className='w-full md:w-1/2 max-w-75'>
                <Chart />
            </div>

            <div className='flex flex-col  md:text-left z-10  '>
                <div className=''>
                    <h1 className='text-3xl md:text-4xl font-semibold textGredient'>Automated Execution</h1>
                    <h5 className='text-lg font-medium text-color-gray'>Handles tasks automatically.</h5>
                </div>

                <div className='w-40 md:w-45 mt-4 mx-auto md:ml-0 self-end'>
                    <img src={system} alt="system" className="w-full h-auto" />
                </div>
            </div>

            {/* Chips Container */}
            <div className='hidden md:flex absolute flex-col gap-2 top-10 right-10'>
                {/* <span className='bg-lime-100 text-lime-700 py-1 px-3 rounded-full text-[10px] font-bold shadow-sm'>Workflow Alpha</span>
                <span className='bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-[10px] font-bold shadow-sm'>Automation Beta</span> */}
            </div>
        </div>
    )
}

export default AutomatedExecution;