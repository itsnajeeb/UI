import { Grid2X2, MoveRight } from 'lucide-react'
import React from 'react'
import icon1 from '/image/icon/icon-10.png'
import icon2 from '/image/icon/icon-11.png'
import icon3 from '/image/icon/icon-12.png'
import icon4 from '/image/icon/icon-13.png'
import '../../styles/Product.css'

const Roadmap = () => {
  return (
    <div className='flex justify-center mt-10  mx-auto items-center flex-col gap-10 px-4 md:px-10 max-w-7xl'>
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
      <div className='flex flex-row flex-wrap  justify-between px-15'>
        <div className='flex gap-6 max-w-[450px] my-5 '>
          <div className='w-30 h-30 '>
            <img src={icon1} alt="" className='rounded-full object-cover' />
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-(--text-color-1)'>Expert Service</h1>
            <p className='leading-6 text-(--text-dark)'>Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.</p>
            <div className='flex flex-row '>
              <a href="" className='hover:text-(--text-color-1) transition-all duration-300 uppercase text-sm font-medium flex gap-2 justify-center items-center text-(--color-text-3)'>Learn More
                <span className=' self-center'><MoveRight size={14}/></span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex gap-6 max-w-[450px] my-5 '>
          <div className='w-30 h-30 '>
            <img src={icon2} alt="" className='rounded-full object-cover' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-(--text-color-1)'>Trusted and credible</h1>
            <p className='leading-6 text-(--text-dark)'>Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.</p>
            <div className='flex flex-row '>
              <a href="" className='hover:text-(--text-color-1) transition-all duration-300 uppercase text-sm font-medium flex gap-2 justify-center items-center text-(--color-text-3)'>Learn More
                <span className=' self-center'><MoveRight size={14}/></span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex gap-6 max-w-[450px] my-5 '>
          <div className='w-30 h-30 '>
            <img src={icon3} alt="" className='rounded-full object-cover' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-(--text-color-1)'>Financial strength</h1>
            <p className='leading-6 text-(--text-dark)'>Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.</p>
            <div className='flex flex-row '>
              <a href="" className='hover:text-(--text-color-1) transition-all duration-300 uppercase text-sm font-medium flex gap-2 justify-center items-center text-(--color-text-3)'>Learn More
                <span className=' self-center'><MoveRight size={14}/></span>
              </a>
            </div>
          </div>
        </div>


        <div className='flex gap-6 max-w-[450px] my-5 '>
          <div className='w-30 h-30 '>
            <img src={icon4} alt="" className='rounded-full object-cover' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-(--text-color-1)'>Integrated support</h1>
            <p className='leading-6 text-(--text-dark)'>Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil molestiae consequatur.</p>
            <div className='flex flex-row '>
              <a href="" className='hover:text-(--text-color-1) transition-all duration-300 uppercase text-sm font-medium flex gap-2 justify-center items-center text-(--color-text-3)'>Learn More
                <span className=' self-center'><MoveRight size={14}/></span>
              </a>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Roadmap