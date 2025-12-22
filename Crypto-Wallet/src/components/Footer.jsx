import React from 'react'

const Footer = () => {
    return (
        <div className='relative w-full  h-full'>
            <div className='  absolute border bottom-5 flex justify-between w-full px-10'>

                <div className='bg-[#222] rounded-lg text-white w-10 h-10 p-2 cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(248,245,245,0.92)"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM8 9.99998C11.866 9.99998 15 13.134 15 17H13C13 14.2386 10.7614 12 8 12V9.99998ZM8 14C9.65685 14 11 15.3431 11 17H8V14Z"></path></svg>
                </div>

                <div className='bg-[#222] rounded-lg text-white w-10 h-10 p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(249,249,249,0.85)"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>
                </div>

                <div className='bg-[#222] rounded-lg text-white w-10 h-10 p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(243,243,243,0.85)"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path></svg>
                </div>
                <div className='bg-[#222] rounded-lg text-white w-10 h-10 p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(231,231,231,0.89)"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Footer