import React from 'react'
import profileImg from '/image/profile.png'
import { Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
const ProfileImage = () => {
    const openFileHandler = () => {

    }
    return (
        <div className='pt-7 flex justify-center'>
            <div className='bg-gray-200/20 p-2 w-fit rounded-full relative '>
                <img src={profileImg} alt="" className='w-16 h-16 bg-gray-400 rounded-full ' />
                <div className='absolute text-[#8ac9ff] bg-gray-800 p-1 rounded-full right-0 bottom-1 cursor-pointer '>
                    <Link to={'/avatar'}>
                        <Camera size={20} onClick={openFileHandler} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage