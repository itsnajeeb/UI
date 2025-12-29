import React from 'react'
import ProfileImage from './ProfileImage'
import InfoBox from '../CommonComponents/InfoBox'
import { Link } from 'react-router-dom'
import { formattedElement } from '../../utils/customFunction'
import QRCodeDownload from './QRCodeDownload'

const ProfileHome = () => {
    const emailId = formattedElement(4,4,"info@falicity.com")
    
    const MobileNo = formattedElement(4,-4,"9102303124")
    return (
        <>
            <ProfileImage />
            <div className='flex flex-col gap-4 mt-7'>
                <InfoBox title={"User Name"} value={"FalicityAI"} />
                <InfoBox title={"Email"} value={emailId} />
                <InfoBox title={"Mobile No"} value={MobileNo} />
                <InfoBox title={"Withdrawal Address (Bep20)"} />
                <InfoBox title={"User ID"} value={"FC224466"} />
                <div className='bg-gray-800 mx-8 text-white flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
                    <p className='text-sm font-semibold'>Login Password</p>
                    <Link><p className='text-sm font-semibold text-blue-500'>Change</p></Link>
                </div>

                <div className='flex justify-center mb-10 bg-gray-800 rounded-xl border-2 border-gray-400/80 mx-8'>
                    <QRCodeDownload/>
                </div>
            </div>
        </>
    )
}

export default ProfileHome