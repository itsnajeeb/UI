import React from 'react'
const HeroAvailableTab = ({item}) => {
  return (
    <div className='partnerTab flex justify-center items-center px-14  py-2 gap-1 rounded-md'>
        <img src={item.img} alt="" className='w-8 h-8' />
        <h1 className='font-bold text-lg  '>{item.name}</h1>
    </div>
  )
}

export default HeroAvailableTab