import React from 'react'

const InfoBox = ({ title, value }) => {
    return (
        <div className='bg-gray-800 mx-8 text-white flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
            <p className='text-sm font-semibold'>{title}</p>
            <p className='text-sm font-semibold'>{value}</p>
        </div>
    )
}

export default InfoBox