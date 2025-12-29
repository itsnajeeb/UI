import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arrow from '/image/icon/arrow-left.png'
const BackArrow = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/'
    if (isHome) return null

    return (
        <button className='cursor-pointer' onClick={()=> navigate(-1)}>
            <img src={arrow} alt="" className='w-6 '/>
        </button>
    )
}

export default BackArrow