import React from 'react'
import Chart from './Chart'
import system from '/image/system.png'
import '../../styles/Product.css'
const AutomatedExecution = () => {
    return (
        <div className='flex  justify-between px-4 py-8 relative'>
            <div className='w-[300px]'>
                <Chart />
            </div>
            <div className=' flex flex-col relative justify-center  '>
                <div>
                    <h1 className='text-4xl font-semibold textGredient'>Automated Execution</h1>
                    <h5 className='text-xl font-medium text-color-gray '>Handles tasks automatically.</h5>
                </div>
                <div className='w-45 self-end my-auto '>
                    <img src={system} alt="" />
                </div>
            </div>
            <div className='absolute flex flex-col followContainer gap-2 h-full w-full top-7 items-center justify-center  left-15 '>
                <span className='block follow1 w-fit py-1 px-2 rounded-full text-[10px] font-medium'>Follow 1</span>
                <span className='block follow2 w-fit py-1 px-2 rounded-full text-[10px] font-medium'>Follow 2</span>
            </div>

        </div>
    )
}

export default AutomatedExecution