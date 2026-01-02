import React from 'react'
import Footer from '../components/CommonComponents/Footer'
import ProfileHome from '../components/Profile/ProfileHome'
import BackArrow from '../components/CommonComponents/BackArrow'

const Profile = () => {
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5  sm:h-screen h-[93vh]  bg-[#161616] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>

                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll mb-10">
                    <ProfileHome />
                </div>
                
                <div className='w-full px-3 mb-1 absolute bottom-0'>
                    <div className="bg-secondary shadow-(--shadow-soft) text-white py-2  rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile

