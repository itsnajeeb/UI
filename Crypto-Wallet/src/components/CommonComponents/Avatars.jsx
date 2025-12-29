import React from 'react'

const Avatars = ({img, setProfilePictureHandler}) => {
    return (
        <img src={img} alt="Profile Image" className='w-18  h-18 rounded-full cursor-pointer object-fill' onClick={() => setProfilePictureHandler(img)} />
    )
}

export default Avatars