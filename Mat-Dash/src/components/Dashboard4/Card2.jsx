import React from 'react'
import image from '/Images/image-10.png';
const Card2 = () => {
    return (
        <div className='bg-white boxShadow flex flex-col max-w-250 mx-auto rounded-xl px-5 py-7 gap-5 md:flex-row md:gap-10'>

                <div className='h-[300px] rounded-xl overflow-hidden md:h-[200px] md:w-[30%] lg:h-[250px] '>
                    <img src={image} alt="" className='w-full h-full object-fill object-center md:object-cover object-fit' />
                </div>

            <div className='   flex flex-col gap-5 pr-5 md:w-[60%] m'>

                <div className='flex justify-between items-center flex-col md:flex-row  '>
                    <h1 className='lg:text-[40px] font-bold leading-12 text-gray-900/80 text-[35px]'>Let's be frank </h1>
                    <p className=' font-semibold text-gray-600/80 text-sm md:text-base'>Fornite Channel</p>
                </div>

                <h1 className='lg:text-[27px] font-semibold text-gray-500/80 leading-8 lg:w-[80%] text-lg mb-3 md:text-xl'>Check Out the Gramble Gang Set in the item shop now!</h1>

                <div className='flex  justify-between items-end  lg:mt-auto '>
                    <button className='font-medium text-primary-text'>READ</button>
                    <span className='text-gray-600/80 text-sm font-medium'>2 hours ago</span>
                </div>

            </div>
        </div>
    )
}

export default Card2