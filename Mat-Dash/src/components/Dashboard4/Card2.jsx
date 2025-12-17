import React from 'react'
import image from '/Images/image-10.png';
const Card2 = () => {
    return (
        <div className='bg-white boxShadow flex min-w-225 max-w-250 mx-auto rounded-xl px-5 py-7 gap-5'>
            <div className=' w-[30%] '>
                <div className='h-56 w-[80%] rounded-xl overflow-hidden'>
                    <img src={image} alt="" className='w-full h-full object-cover object-fit' />
                </div>
            </div>
            <div className='  w-[70%] flex flex-col gap-5 pr-5 '>

                <div className='flex justify-between  '>
                    <h1 className='text-[40px] font-bold leading-12 text-gray-900/80'>Let's be frank </h1>
                    <p className='self-end font-semibold text-gray-600/80 text-sm'>Fornite Channel</p>
                </div>

                <h1 className='text-[27px] font-semibold text-gray-500/80 leading-8 w-[80%]'>Check Out the Gramble Gang Set in the item shop now!</h1>

                <div className='flex  justify-between items-end  mt-auto '>
                    <button className='font-medium text-primary-text'>READ</button>
                    <span className='text-gray-600/80 text-sm font-medium'>2 hours ago</span>
                </div>

            </div>
        </div>
    )
}

export default Card2