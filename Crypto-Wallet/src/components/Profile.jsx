import React from 'react'
import profile from '/image/profile.png'
const Profile = () => {
  return (
    <div className='pt-10'>
      <div className='bg-gray-200/20 px-1.5  py-1.5 w-fit rounded-xl '>
        <img src={profile} alt="" className='w-10 h-10 bg-gray-400 rounded-xl ' />
      </div>
    </div>
  )
}

export default Profile