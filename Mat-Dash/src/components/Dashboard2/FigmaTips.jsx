import React from 'react'
import blog from '../../assets/images/blog.jpg';
import { Avatar, AvatarGroup } from '@mui/material';
import user1 from '../../assets/images/user-1.jpg'
import user2 from '../../assets/images/user-2.jpg'
import user3 from '../../assets/images/user-3.jpg'
import user4 from '../../assets/images/user-4.jpg'

const FigmaTips = () => {
  return (
    <div className='bg-white shadow rounded-xl flex flex-col gap-8 overflow-hidden h-full'>
      <div className='w-full h-[200px] sm:h-[200px]  '>
        <img src={blog} alt="Blog Image"
          className='w-full h-full object-fit object-fill'
        />
      </div>
      <div className='mb-10 px-8 flex flex-col gap-2'>
        <h1 className='text-[#29343d] font-semibold text-lg'>Figma Tips and Trick with Stephan</h1>
        <p className='text-[#526b7a] font-normal text-[15px]'>Nullam lobortis sodales dolor vitae viverra. Cras lacinia bibendum metus vel rhoncus.</p>
        <AvatarGroup total={12}
          sx={{
            justifyContent:'start',
            alignItems:'start'
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