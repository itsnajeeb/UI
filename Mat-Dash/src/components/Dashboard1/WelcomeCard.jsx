import React from 'react'
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { IoIosTrendingUp } from "react-icons/io";

const WelcomeCard = () => {
  return (
    <div className='bg-[#635BFF] px-7 pt-7 rounded-xl flex flex-col 
    sm:grid sm:grid-cols-2
    '>
      <div className='md:flex md:flex-col md:justify-between md:pb-7'>
        <div className='md:flex gap-5'>
          <div className='bg-[#FFFFFF] w-fit p-3 rounded-lg mb-4'>
            <IoIosTrendingUp fontSize={23} />
          </div>

          <h1 className='font-semibold manrope-fontFamliy text-white text-lg leading-6'>Welcome Back <br /> David</h1>

        </div>
        <div className='flex text-white gap-2 lg:gap-6
        md:items-end
        '>
          <div className='manrope-fontFamliy mt-2 '>
            <p className='text-sm text-gray-200/90 '>Budget</p>
            <h1 className='text-2xl font-bold'>$98,450</h1>
          </div>

          <div className='border-l  mt-2 '>
            <p className='text-sm text-gray-200/90 ml-2 lg:ml-5'>Expense</p>
            <h1 className='text-2xl font-bold ml-2 lg:ml-5'>$2,440</h1>
          </div>

        </div>
      </div>

      <div className='mt-7 flex justify-center'>
        <img
          src="https://matdash-angular-stylish.netlify.app/assets/images/backgrounds/welcome-bg.png"
          className='max-w-[180px] w-full h-auto 
          sm:max-w-[200px] xl:max-w-[150px]'
          alt=""
        />
      </div>


    </div>
  )
}

export default WelcomeCard