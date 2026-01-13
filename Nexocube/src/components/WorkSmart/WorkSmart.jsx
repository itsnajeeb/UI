import React from 'react'
import '../../styles/WorkSmart.css'
import { Sparkles } from 'lucide-react'

const Services = () => {
  return (
    <section className='relative mt-20 min-h-[80vh] lg:h-[90vh] w-full overflow-hidden flex items-center justify-center'>
      
      <div 
        className='absolute inset-0 bg-no-repeat bg-center bg-cover'
        style={{
            backgroundImage: "url('/image/hero.gif')",
            backgroundColor: 'rgba(255,255,255,0.1)' 
        }}
      />

      {/* Content Layer */}
      <div className='relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center py-20'>
        
        {/* Badge */}
        <div className='flex flex-col justify-center items-center gap-4 md:gap-6'>
            <p className='subTittle px-6 md:px-8 py-2 rounded-full text-(--text-color-1) font-medium flex items-center gap-2 text-sm md:text-base bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm'> 
                <span className='self-center'><Sparkles size={16} /></span>
                Intelligent Work Starts Here
            </p>
            
            {/* Heading - Responsive text sizes */}
            <h1 className=' pb-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl leading-tight'>
              Unlock a Smarter Way to Work
            </h1>
            
            {/* Description */}
            <p className='text-base md:text-lg lg:text-xl text-dark-green font-medium max-w-xl md:max-w-2xl opacity-90 text-white'>
              Experience a refined AI Platform built for clarity, intelligence, and exceptional performance.
            </p>
        </div>

        {/* Buttons - Stack on mobile, side-by-side on desktop */}
        <div className='mt-10 flex flex-col sm:flex-row gap-4 lg:gap-8 w-full sm:w-auto px-4 sm:px-0'>
            <button className='active text-lg px-10 py-4 cursor-pointer rounded-full font-medium text-(--text-white) transition-transform hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap btnGradient'>
                Get Started 
            </button>  
            <button className='text-lg px-10 py-4 cursor-pointer rounded-full text-white bg-white/40 border border-gray-400/30 backdrop-blur-md transition-all hover:bg-white/60 whitespace-nowrap'>
                Book a Demo 
            </button>
        </div>

      </div>
    </section>
  )
}

export default Services