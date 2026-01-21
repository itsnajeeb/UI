import { Grid2X2 } from 'lucide-react'
import React from 'react'

import SmartUnderstandingCard from './SmartUnderstandingCard'
import HighFidelityCard from './HighFidelityCard'
import AutomatedExecution from './AutomatedExecution'
import InstantCreation from './InstantCreation'
import './style.css'

const Product = () => {
  return (
    <div className='flex justify-center mt-10 mx-auto items-center flex-col gap-10 px-4 md:px-10 max-w-7xl'>

      {/* Header */}
      <div className='flex items-center flex-col gap-3 text-center'>
        <div className='px-6 rounded-full flex py-2 items-center gap-2
          bg-[linear-gradient(174deg,rgb(255,255,255)_0%,rgb(216,216,216)_100%)]
          w-fit border border-gray-200'>
          <Grid2X2 size={18} />
          <h1 className='text-sm md:text-base font-medium text-dark-green'>
            Product Features
          </h1>
        </div>

        <h1 className='textGredient py-2 text-3xl md:text-5xl font-medium'>
          Features Crafted for Intelligence
        </h1>

        <p className='text-base md:text-lg text-color-gray font-normal max-w-2xl'>
          Each feature enhances a different part of your workflow together forming a seamless, powerful AI Experience.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className='flex flex-col lg:flex-row border border-gray-300/80 rounded-md overflow-hidden w-full'>

        {/* LEFT SECTION */}
        <div className='flex flex-col w-full lg:w-[65%]'>

          {/* Top cards */}
          <div className='flex flex-col md:flex-row'>
            <SmartUnderstandingCard />
            <HighFidelityCard />
          </div>

          {/* Bottom card */}
          <div className='border-t border-gray-300/80'>
            <AutomatedExecution />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-gray-300/80'>
          <InstantCreation />
        </div>
      </div>

    </div>
  )
}

export default Product
