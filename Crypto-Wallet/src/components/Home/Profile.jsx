import React from 'react'
import profile from '/image/profile.png'
import icon from '/image/icon.png'

const Profile = () => {
  return (
    <div className='pt-9 flex justify-center'>
      <div className='bg-linear-to-r from-blue-500 to-purple-600 p-1.5 w-fit rounded-lg relative'>
        <img src={profile} alt="" className='w-10 h-10 bg-gray-400 rounded-lg ' />
        <img src={icon} className='absolute w-5 h-5 -right-1 -bottom-1'  />
      </div>
    </div>
  )
}

export default Profile