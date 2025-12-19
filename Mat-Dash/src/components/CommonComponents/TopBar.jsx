import React, { useState } from 'react'
import CountryFlagDropDown from '../TopBarDropDown/CountryFlagDropDown'
import Notification from '../TopBarDropDown/Notification'
import { LgScreen, MdScreen } from '../TopBarDropDown/Expand'
import Search from '../TopBarDropDown/Search'
import ProfileDropDownforLgScreen, { ProfileDropDownforMediumScreen } from './ProfileDropDown'
import { Menu, MenuIcon } from 'lucide-react'

const TopBar = ({ setIsDrawerOpen }) => {
    const [openSearchDialog, setOpenSearchDialog] = useState(false);
    const handleOpenSearchDialog = () => {
        setOpenSearchDialog(true);
    };
    const handleCloseSearchDialog = () => {
        setOpenSearchDialog(false);
    };
    return (
        <div className='flex  justify-between mb-5'>
            <div className='flex  gap-3 justify-center items-center px-4 lg:px-0'>
                <div className='block  cursor-pointer'
                    onClick={() => setIsDrawerOpen(prev => !prev)} // Toggle the state
                >
                    <MenuIcon size={18} />
                </div>
{/* 
                <div className='cursor-pointer hover:bg-hover-bg   rounded-full hover:text-primary-color h-fit p-2 '
                    onClick={handleOpenSearchDialog} >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar icon-20 d-flex" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:magnifer-outline" width="20" height="20"><path fill="currentColor" fillRule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25" clipRule="evenodd"></path></svg>
                </div>

                <Search open={openSearchDialog}
                    handleClose={handleCloseSearchDialog}
                /> */}
                <div>
                    {/* <Menu/> */}
                </div>

                <div className='hidden lg:flex cursor-pointer   rounded-full  z-10' >
                    <LgScreen />
                </div>
            </div>

            {/* RIHGT SIDE  */}
            <div className='flex gap-2  items-center'>

                {/* <div className='cursor-pointer hover:bg-hover-bg  p-2 rounded-full hover:text-[#827cf4] '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>
                </div> */}


                <div className='flex lg:hidden cursor-pointer hover:bg-hover-bg  rounded-full hover:text-[#827cf4]' >
                    <MdScreen />
                </div>

                <div className='hidden cursor-pointer hover:bg-hover-bg  rounded-full hover:text-[#827cf4]  w-fit lg:flex justify-center items-center '>
                    <Notification />
                </div>

                <div className='hidden cursor-pointer hover:bg-hover-bg  rounded-full hover:text-[#827cf4] lg:flex'>
                    <CountryFlagDropDown />
                </div>

                <div className='hidden lg:flex'>
                    <ProfileDropDownforLgScreen />
                </div>

                <div className='flex lg:hidden cursor-pointer hover:bg-hover-bg  rounded-full hover:text-[#827cf4]' >
                    <ProfileDropDownforMediumScreen />
                </div>

            </div>
        </div >
    )
}

export default TopBar