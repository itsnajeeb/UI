import React from 'react'

const BottomDesigned = () => {
  return (
    <div className='md:px-0 grid mt-20 lg:grid-cols-[1fr_2fr_1fr] place-items-center gap-3 '>

      <div className='place-items-center  h-full w-full lg:pt-5 '>
        <p className='  bg-[linear-gradient(174deg,rgb(255,255,255)_0%,rgb(216,216,216)_100%)] h-fit w-fit px-8 rounded-full py-2  '>Workflow Solutions</p>
      </div>

      <div>
        <h1 className='text-5xl md:text-6xl lg:leading-16 leading-14 font-medium textGredient text-center lg:text-start'>Designed for Every Workflow Across Every Team</h1>
      </div>

      <div className=' w-full h-full lg:self-start'>
        <p className='  text-base md:text-lg font-medium text-color-gray text-center lg:text-start'>Whether you're analyzing data, creating content or automating operations the platform adapts efforlessly.</p>
      </div>
    </div>
  )
}

export default BottomDesigned