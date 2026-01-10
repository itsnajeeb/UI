import { Grid2X2 } from 'lucide-react'
import React from 'react'

const Product = () => {
  return (
    <div className='flex justify-center mt-20  mx-auto items-center'>
        <div className='flex items-center flex-col gap-3'>
            <div className='px-6 rounded-full flex py-2 items-center gap-2  bg-[linear-gradient(174deg,rgb(255,255,255)_0%,rgb(216,216,216)_100%)] w-fit'>
                <Grid2X2 size={18}/>
                <h1 className='text-base font-medium text-dark-green'>Product Features</h1>
            </div>
            <h1 className='textGredient py-2 text-5xl font-medium'>Features Crafted for Intelligent</h1>
            <p className='text-lg text-color-gray font-normal'>Each features enhance a different part of your workflow together forming a seamless, Powerfull AI Experience</p>
        </div>
    </div>
  )
}

export default Product