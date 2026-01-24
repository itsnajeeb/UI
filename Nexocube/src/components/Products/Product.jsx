import { Grid2X2 } from 'lucide-react'
import React from 'react'
import SmartUnderstandingCard from './SmartUnderstandingCard'
import HighFidelityCard from './HighFidelityCard'
import AutomatedExecution from './AutomatedExecution'
import InstantCreation from './InstantCreation'
import './style.css'

const Product = () => {
  return (
    <div className='product-section'>

      {/* Header */}
      <div className='product-header'>
        <div className='badge-container'>
          <Grid2X2 size={18} />
          <h1 className='badge-text'>
            Product Features
          </h1>
        </div>

        <h1 className='product-main-title'>
          Features Crafted for Intelligence
        </h1>

        <p className='product-subtitle'>
          Each feature enhances a different part of your workflow together forming a seamless, powerful AI Experience.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className='product-grid-container'>

        {/* LEFT SECTION */}
        <div className='left-column'>
          {/* Top cards */}
          <div className='top-row'>
            <SmartUnderstandingCard />
            <HighFidelityCard />
          </div>

          {/* Bottom card */}
          <div className='bottom-execution-area'>
            <AutomatedExecution />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='right-column'>
          <InstantCreation />
        </div>
      </div>

    </div>
  )
}

export default Product;