import { UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TopTab = () => {
    return (
        <div className='bg-white px-4 py-4 flex justify-between items-center rounded-xl manrope-fontFamliy 
        lg:px-8'>
            <h1 className='font-semibold text-base lg:text-lg'>Main Stream </h1>
            <button
                className="group relative overflow-hidden
                        transition-all duration-300 font-medium
                        border-2 border-gray-400/60
                         rounded-lg px-5 py-2.5
                        text-base flex gap-2 items-center"  >
                <Link className='flex gap-1 justify-center items-center text-base'>
                    <span className='text-primary-color'><UserRoundPlus size={17} /></span>
                    <span className='text-primary-color text-xs lg:text-sm'>Add Friends</span>
                </Link>

                <div className="border-anim pointer-events-none">
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                </div>
            </button>


        </div>
    )
}

export default TopTab