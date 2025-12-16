import React, { useState } from 'react'
import CountryFlagDropDown from '../TopBarDropDown/CountryFlagDropDown'
import Notification from '../TopBarDropDown/Notification'
import { LgScreen, MdScreen } from '../TopBarDropDown/Expand'
import Search from '../TopBarDropDown/Search'
import ProfileDropDownforLgScreen, { ProfileDropDownforMediumScreen } from './ProfileDropDown'
import { MenuIcon } from 'lucide-react'

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
                <div className='block lg:hidden cursor-pointer'
                    onClick={() => setIsDrawerOpen(prev => !prev)} // Toggle the state
                >
                    <MenuIcon size={18} />
                </div>

                <div className='cursor-pointer hover:bg-[#E8E7FF]   rounded-full hover:text-[#827cf4] h-fit p-2 '
                    onClick={handleOpenSearchDialog} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                </div>

                <Search open={openSearchDialog}
                    handleClose={handleCloseSearchDialog}
                />

                <div className='hidden lg:flex cursor-pointer hover:bg-[#E8E7FF]  rounded-full hover:text-[#827cf4] z-10' >
                    <LgScreen />
                </div>
            </div>

            {/* RIHGT SIDE  */}
            <div className='flex gap-2  items-center'>

                {/* <div className='cursor-pointer hover:bg-[#E8E7FF]  p-2 rounded-full hover:text-[#827cf4] '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>
                </div> */}


                <div className='flex lg:hidden cursor-pointer hover:bg-[#E8E7FF]  rounded-full hover:text-[#827cf4]' >
                    <MdScreen />
                </div>

                <div className='hidden cursor-pointer hover:bg-[#E8E7FF]  rounded-full hover:text-[#827cf4]  w-fit lg:flex justify-center items-center '>
                    <Notification />
                </div>

                <div className='hidden cursor-pointer hover:bg-[#E8E7FF]  rounded-full hover:text-[#827cf4] lg:flex'>
                    <CountryFlagDropDown />
                </div>

                <div className='hidden lg:flex'>
                    <ProfileDropDownforLgScreen />
                </div>

                <div className='flex lg:hidden cursor-pointer hover:bg-[#E8E7FF]  rounded-full hover:text-[#827cf4]' >
                    <ProfileDropDownforMediumScreen />
                </div>

            </div>
        </div >
    )
}

export default TopBar