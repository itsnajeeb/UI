import React from 'react'
import blog from '/Images/blog.jpg';
import { Avatar, AvatarGroup } from '@mui/material';
import user1 from '/Images/profile/user-1.jpg'
import user2 from '/Images/profile/user-2.jpg'
import user3 from '/Images/profile/user-3.jpg'
import user4 from '/Images/profile/user-4.jpg'

const FigmaTips = () => {
  return (
    <div className='bg-white shadow rounded-xl flex flex-col gap-8 overflow-hidden h-full'>
      <div className='w-full h-50 sm:h-50  '>
        <img src={blog} alt="Blog Image"
          className='w-full h-full object-fit object-fill'
        />
      </div>
      <div className='mb-10 px-8 flex flex-col gap-2'>
        <h1 className='text-main-text font-semibold text-lg'>Figma Tips and Trick with Stephan</h1>
        <p className='text-subtle-text font-normal text-[15px]'>Nullam lobortis sodales dolor vitae viverra. Cras lacinia bibendum metus vel rhoncus.</p>
        <AvatarGroup total={12}
          sx={{
            justifyContent: 'start',
            alignItems: 'start'
          }} >
          <Avatar alt='user-1' src={user1} />
          <Avatar alt='user-2' src={user2} />
          <Avatar alt='user-3' src={user3} />
          <Avatar alt='user-4' src={user4} />
        </AvatarGroup>
      </div>
    </div>
  )
}

export default FigmaTips