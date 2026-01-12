import { Grid2X2 } from 'lucide-react'
import React from 'react'
import SmartUnderstandingCard from './SmartUnderstandingCard'
import HighFidelityCard from './HighFidelityCard'
import InstantCreation from './InstantCreation'
import AutomatedExecution from './AutomatedExecution'
import '../../styles/Product.css'

const Product = () => {
  return (
    <div className='flex justify-center mt-10 md:mt-20 mx-auto items-center flex-col gap-10 px-4 md:px-10 max-w-7xl'>
      {/* Header */}
      <div className='flex items-center flex-col gap-3 text-center'>
        <div className='px-6 rounded-full flex py-2 items-center gap-2 bg-[linear-gradient(174deg,rgb(255,255,255)_0%,rgb(216,216,216)_100%)] w-fit border border-gray-200'>
          <Grid2X2 size={18} />
          <h1 className='text-sm md:text-base font-medium text-dark-green'>Product Features</h1>
        </div>
        <h1 className='textGredient py-2 text-3xl md:text-5xl font-medium'>Features Crafted for Intelligence</h1>
        <p className='text-base md:text-lg text-color-gray font-normal max-w-2xl'>
          Each feature enhances a different part of your workflow together forming a seamless, powerful AI Experience.
        </p>
      </div>
 
      {/* Bento Grid Container */}
      <div className='w-full border border-gray-300/80 mb-20 grid grid-cols-1 lg:grid-cols-3 overflow-hidden bg-gray-50/30'>
        
        {/* Left Column (Spans 2 columns on Desktop) */}
        <div className='lg:col-span-2 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-300/80 '>
          <div className='grid grid-cols-1 md:grid-cols-2 border-b border-gray-300/80'>
            <SmartUnderstandingCard />
            <HighFidelityCard />
          </div>
          <AutomatedExecution />
        </div>

        {/* Right Column (Sidebar on Desktop) */}
        <div className='lg:col-span-1 h-full'>
          <InstantCreation />
        </div>
        
      </div>
    </div>
  )
}

export default Product