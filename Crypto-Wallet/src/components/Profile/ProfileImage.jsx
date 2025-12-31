import React from 'react'
import profileImg from '/image/profile.png'
import { Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
const ProfileImage = () => {
    
    return (
        <div className='pt-7 flex justify-center'>
            <div className="inline-flex relative items-center justify-center rounded-full 
                bg-linear-to-r from-blue-500 to-purple-600 p-1.5">
                <img src={profileImg} alt="" className='w-16 h-16 bg-gray-400 rounded-full ' />
                <div className='absolute text-[#8ac9ff] bg-secondary p-1 rounded-full right-0 bottom-1 cursor-pointer '>
                    <Link to={'/avatar'}>
                        <Camera size={20}  />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage