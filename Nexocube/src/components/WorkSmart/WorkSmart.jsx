import React from 'react'
import '../../styles/WorkSmart.css'
import { Sparkle, Sparkles } from 'lucide-react'
const WorkSmart = () => {
  return (
    <div className='relative h-[90vh]  w-full'>
     <div className='container h-full w-full absolute bg-no-repeat bg-center bg-cover
    flex flex-col py-20 items-center
    '
     style={{backgroundImage:"url('/image/bgImage.png')"}}>

        <div className='container flex flex-col justify-center items-center gap-4'>
            <p className='subTittle px-8 py-2 rounded-full text-dark-green font-medium flex items-center gap-2'> 
                <span className='self-center' ><Sparkles size={15} /></span>
                Intelligent Work Start here</p>
            <h1 className='textGredient pb-2 text-5xl font-semibold'>Unlock a Smarter Way to Work</h1>
            <p className='text-lg text-dark-green font-medium max-w-lg text-center'>Experience a refined AI Platform built for clarity, intelligence, and exceptional performance</p>
        </div>
        <div className='mt-8 flex  gap-8 btnContainer'>
            <button className='active text-lg px-11 py-4 cursor-pointer rounded-full font-medium text-dark-green'>
                Get Started 
            </button>  
             <button className=' px-11 text-lg py-4 cursor-pointer rounded-full text-gray-500 bg-gray-300/40 border-2 border-gray-400/20 opacity-100'>
                Book a Demo 
            </button>
        </div>
    </div>
    </div>
  )
}

export default WorkSmart