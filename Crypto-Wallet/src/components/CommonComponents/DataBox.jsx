import React from 'react'
import doller from '/image/doller.png'
const DataBox = ({item}) => {
  return (
    <div className=' text-white px-6 rounded-lg '>
      <div className=' flex justify-between px-4 py-3 bg-secondary overflow-hidden rounded-lg'>
        <div className='flex  flex-col gap-2'>
          <h1 className='text-gray-400/90'>{item.userId}</h1>
          <div className='flex text-sm gap-2'>
            <h2 className={`${item.status === 'pending' ? 'text-yellow-500' : item.status ==='success' ? 'text-green-500' : 'text-red-500'} font-normal capitalize`}>{item.status}</h2>
            <p className='text-gray-300/80 text-xs self-end'>{item.date}</p>
          </div>
        </div>
        <div className='self-center flex justify-center items-center'>
          <img src={doller} alt="Doller" srcset="" className='w-5 h-5' />
          <p className={`${item.status === 'pending' ? 'text-yellow-500' : item.status ==='success' ? 'text-green-500' : 'text-red-500'} font-normal capitalize`}>{item.amount}</p>
        </div>
      </div>
    </div>
  )
}

export default DataBox