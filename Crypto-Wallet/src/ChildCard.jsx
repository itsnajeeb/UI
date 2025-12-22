import React from 'react'
const ChildCard = ({ data }) => {

    return (
        <div className='bg-[#1e1e1e]   relative flex justify-between w-full px-4 rounded-xl py-3 border-2 border-gray-400/30 '>
            <div className='w-4 h-4 absolute right-3 top-3 rotate-230 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </div>
            <div className='flex text-white flex-col'>
                <div className='w-5 h-5 p-0.5 mb-2 bg-white rounded text-black flex justify-center items-center' >
                        {data.icon}
                </div>
                <h1 className='text-white font-light text-sm'>{data.title}</h1>
                <p className=' text-xs font-noraml text-gray-300/80'>{data.description} </p>
            </div>

        </div>
    )
}

export default ChildCard