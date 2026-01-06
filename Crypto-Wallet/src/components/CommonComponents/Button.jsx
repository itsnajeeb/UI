import React from 'react'

const Button = ({ btnText, changePasswordHandler }) => {
  return (
    <button
      onClick={changePasswordHandler}
      className={`
    relative px-5 mt-7 py-3 rounded-xl text-base font-medium
    bg-gray-700 text-white
    overflow-hidden
    transition-all duration-300
    active:scale-95
    group cursor-pointer
    hover:text-white
  `}
    >
      <span
        className="
      absolute inset-0
      bg-[#2D8CFF]
      scale-0
      group-hover:scale-100
      transition-transform duration-500
      rounded-xl 
    "
      ></span>

      <span className="relative z-10">
        {btnText}
      </span>
    </button>
    // <button className='text-base border-2 border-gray-400/80 px-4 py-2 rounded-xl cursor-pointer scale-100 hover:scale-95 transition-all duration-300 hover:bg-[#8ac9ff] hover:text-black outline-none'>{btnText }</button>
  )
}

export default Button