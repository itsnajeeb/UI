import React from 'react'
import profile from '/image/profile.png'
import icon from '/image/icon.png'

const Profile = () => {
  return (
    <div className='pt-10 flex justify-center'>
      <div className='bg-gray-200/20 px-1.5  py-1.5 w-fit rounded-xl relative'>
        <img src={profile} alt="" className='w-10 h-10 bg-gray-400 rounded-xl ' />
        <img src={icon} className='absolute w-5 h-5 -right-1 -bottom-1'  />
      </div>
    </div>
  )
}

export default Profile