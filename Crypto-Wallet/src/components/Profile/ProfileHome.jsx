import React from 'react'
import ProfileImage from './ProfileImage'
import InfoBox from '../CommonComponents/InfoBox'
import { Link } from 'react-router-dom'
import { formattedElement } from '../../utils/customFunction'
import QRCodeDownload from './QRCodeDownload'

const ProfileHome = () => {
    const emailId = formattedElement(4, 4, "info@falicity.com")

    const MobileNo = formattedElement(4, -4, "9102303124")
    return (
        <>
            <ProfileImage />
            <div className='flex flex-col gap-4 mt-7'>
                <InfoBox title={"User Name"} value={"FalicityAI"} />
                <InfoBox title={"Email"} value={emailId} />
                <InfoBox title={"Mobile No"} value={MobileNo} />
                <div className='bg-secondary mx-8 text-[#a3a3a3] flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
                    <p className='text-sm font-semibold'>Withdrawal Address</p>
                    <Link to='/update-withdrawal-address'><p className='text-sm font-semibold text-blue-500'>Update</p></Link>
                </div>
                                <InfoBox title={"User ID"} value={"FC224466"} />
                <div className='bg-secondary mx-8 text-[#a3a3a3] flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
                    <p className='text-sm font-semibold'>Login Password</p>
                    <Link to='/change-password'><p className='text-sm font-semibold text-blue-500'>Change</p></Link>
                </div>
                <div className='bg-secondary mx-8 text-[#a3a3a3] flex justify-between px-4 rounded-lg py-3 border-2 border-gray-300/40'>
                    <p className='text-sm font-semibold'>Transaction Password</p>
                    <Link to='/change-transaction-password'><p className='text-sm font-semibold text-blue-500'>Change</p></Link>
                </div>

                <div className='flex justify-center mb-10 bg-secondary rounded-xl border-2 border-gray-400/80 mx-8'>
                    <QRCodeDownload />
                </div>
            </div>
        </>
    )
}

export default ProfileHome