import React, { useState } from 'react'
import Footer from './CommonComponents/Footer'
import profileImg from '/image/userProfile-5.png'
import profileImg1 from '/image/userProfile-1.png'
import profileImg2 from '/image/userProfile-2.png'
import profileImg3 from '/image/userProfile-3.png'
import profileImg4 from '/image/userProfile-4.png'
import profileImg5 from '/image/userProfile-5.png'
import profileImg6 from '/image/userProfile-6.png'
import profileImg7 from '/image/userProfile-7.png'
import profileImg8 from '/image/userProfile-8.png'
import profileImg9 from '/image/userProfile-9.png'
import profileImg10 from '/image/userProfile-10.png'
import profileImg11 from '/image/userProfile-11.png'
import profileImg12 from '/image/userProfile-12.png'
import profileImg13 from '/image/userProfile-13.png'
import profileImg14 from '/image/userProfile-14.png'
import profileImg15 from '/image/userProfile-15.png'
import profileImg16 from '/image/userProfile-16.png'
import profileImg17 from '/image/userProfile-17.png'
import profileImg18 from '/image/userProfile-18.png'
import profileImg19 from '/image/userProfile-19.png'
import profileImg20 from '/image/userProfile-20.png'
import Avatars from './CommonComponents/Avatars'
import BackArrow from './CommonComponents/BackArrow'
const Avatar = () => {
    const imageArr = [profileImg, profileImg1, profileImg2, profileImg3, profileImg4, profileImg5, profileImg6, profileImg7, profileImg8, profileImg9, profileImg10, profileImg11, profileImg12, profileImg13, profileImg14, profileImg15, profileImg16, profileImg17, profileImg18, profileImg19, profileImg20]
    const [selectedImage, setSelectedImage] = useState(profileImg)

    const setProfilePictureHandler = (userSelectionImage) => {
        setSelectedImage(userSelectionImage)
    }
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 h-full bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll flex mx-auto gap-8 item-center mt-10 flex-col px-5">
                    {/* <Selected Image /> */}
                    <div className='self-center bg-gray-800 rounded-full p-3'>
                        <img src={selectedImage} alt="Profile Image" className='w-22 h-22 rounded-full' />
                    </div>
                    <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                        <BackArrow />
                    </div>

                    <div className='flex justify-between  space-x-3  space-y-6 flex-wrap  bg-gray-800 px-6 rounded-xl py-10 mb-11 '>
                        {
                            imageArr.map((elem, idx) => (
                                <Avatars img={elem} key={idx} setProfilePictureHandler={setProfilePictureHandler} />

                            ))
                        }

                        <img src={profileImg10} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />
                        <img src={profileImg11} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />
                        <img src={profileImg12} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />
                        <img src={profileImg13} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />
                        <img src={profileImg14} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />
                        <img src={profileImg15} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' />

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Avatar