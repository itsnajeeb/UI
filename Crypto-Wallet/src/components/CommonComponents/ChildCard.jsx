import React from 'react'
import { Link } from 'react-router-dom'
const ChildCard = ({ data }) => {

    return (
        <Link to='leaderboard'>
            <div className='bg-secondary cursor-pointer relative flex justify-between w-full px-4 rounded-xl py-3 border-2 border-gray-400/30 '>
                <div className='w-4 h-4 absolute right-2 top-2 rotate-230 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </div>

                <div className='flex text-white flex-col gap-3'>
                    <div className=' mb-2 space-x-3 rounded text-black flex justify-center items-center' >
                        <img src={data.icon} alt="icon" className='w-9 h-9 overflow-visible object-cover object-center' />
                        <h1 className='text-white font-light text-sm'>{data.title}</h1>
                    </div>

                    <p className=' text-sm font-noraml text-gray-300/80'>100 USDT </p>
                </div>

            </div>
        </Link>
    )
}

export default ChildCard