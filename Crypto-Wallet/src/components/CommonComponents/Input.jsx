import React from 'react'

const Input = ({placeholder}) => {
  return (
    <div className='flex relative flex-col w-full mt-5'>
        <input type="text" className='peer border-2 border-gray-400/80 w-full py-3 px-4 rounded-lg outline-0 placeholder-transparent focus:border-[#8ac9ff] transition-all duration-300' />
        <label htmlFor="" className='absolute bg-[#111116] px-1 left-3 translate-y-3.5 text-sm transition-all duration-300
        peer-placeholder-shown:text-sm peer-focus:-translate-y-3 text-gray-200/80 peer-focus:text-gray-100/80 
        '>{placeholder}</label>
    </div>

  )
}

export default Input