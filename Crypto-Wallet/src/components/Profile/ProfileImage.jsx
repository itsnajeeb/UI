import React, { useRef } from 'react'
import profileImg from '/image/profile.png'
import { Camera } from 'lucide-react'
const ProfileImage = () => {
    const fileInputRef = useRef(null)
    const openFileHandler = () => {
        fileInputRef.current.click();
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log("Selected file:", file);
    };
    return (
        <div className='pt-7 flex justify-center'>
            <div className='bg-gray-200/20 p-2 w-fit rounded-full relative '>
                <img src={profileImg} alt="" className='w-16 h-16 bg-gray-400 rounded-full ' />
                <div className='absolute text-[#8ac9ff] bg-gray-800 p-1 rounded-full right-0 bottom-1 cursor-pointer '>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                    <Camera size={20} onClick={openFileHandler} />
                </div>
            </div>
        </div>
    )
}

export default ProfileImage