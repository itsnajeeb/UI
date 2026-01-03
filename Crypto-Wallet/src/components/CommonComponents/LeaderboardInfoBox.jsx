import React from 'react'

import rupee from '/image/rupee.png'
const LeaderboardInfoBox = ({data}) => {
    return (
        <div className='text-white mx-8 px-3 bg-secondary py-1.5 flex  justify-between rounded-lg border-2 border-gray-300/40'>
            <div className='flex space-x-2'>
                <div className='w-14 h-14  flex justify-center items-center'>
                    <img src={data.img}  alt="User Image" className='w-[80%] h-[80%] rounded-xl object-cover object-center ' />
                </div>
                <div className='space-y-1 self-center'>
                    <h1 className='text-[15px]'>{data.name}</h1>
                    <p className='text-xs text-gray-500'>Level {data.level} . Battles {data.battles}</p>
                </div>
            </div>
            <div className='flex space-x-2 self-center justify-center items-center'>
                <img src={rupee} alt="Rupee symbol" className='w-5 h-5' />
                <h2 className='text-[#f6c26d] font-semibold'>{data.rupeee}</h2>
            </div>
        </div>
    )
}

export default LeaderboardInfoBox