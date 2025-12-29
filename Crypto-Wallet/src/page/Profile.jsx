import React from 'react'
import Footer from '../components/Footer'
import ProfileImage from '../components/Profile/ProfileImage'
import ProfileHome from '../components/Profile/ProfileHome'

const Profile = () => {
    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 h-full bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll">
                    <ProfileHome />
                </div>
                <Footer />
            </div>
        </div>)
}
export default Profile

