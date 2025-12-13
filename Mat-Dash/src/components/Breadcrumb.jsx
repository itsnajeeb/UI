import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ title, fontStyle="capitalize" }) => {
    return (
        <div className='bg-white h-16 flex justify-between items-center px-7 rounded-xl '>
            <h1 className='manrope-fontFamliy font-bold text-lg text-[#29343d] -tracking-normal' style={{textTransform:fontStyle}}> {title}</h1>
            <div className='flex justify-center items-center gap-2'>
                <h1><Link to={'/'} className='hover:text-indigo-600 transition-all'>Dashboard</Link></h1>
                <div className='w-2 h-2 bg-black rounded-full'></div>
                <p className='bg-[#E8E7FF] px-3 rounded-full text-[#635BFF] text-xs py-1'>{title}</p>
            </div>
        </div>
    )
}

export default Breadcrumb