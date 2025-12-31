import React from 'react'

const InfoBox = ({ title, value }) => {
    return (
        <div className='bg-secondary  mx-8 flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
            <p className='text-sm font-semibold text-[#a3a3a3]'>{title}</p>
            <p className='text-sm font-semibold text-[#F9FAFB]'>{value}</p>
        </div>
    )
}

export default InfoBox