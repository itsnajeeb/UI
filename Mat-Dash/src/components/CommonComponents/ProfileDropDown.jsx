import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { IoMdArrowDropdown } from 'react-icons/io';
import { ListFilter } from 'lucide-react';
import CountryFlagEn from '/Images/icon/icon-flag-en.svg';
import Bell from '/Images/icon/bell.svg';
import {  MenuItem } from '@mui/material';
import CountryFlagDropDown from '../TopBarDropDown/CountryFlagDropDown';
import Notification from '../TopBarDropDown/Notification';

export default function ProfileDropDownforLgScreen() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0, mr: 2 }}> {/* Positioning context for the dropdown */}
            <Button
                id="profile-dropdown-button"
                aria-controls={open ? 'profile-dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    p: 0, // Remove default padding
                    textTransform: 'none', // Prevent uppercase text
                    borderRadius: '50px', // Make the button rounded like the example
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)', // Slight hover effect
                    },
                }} >
                <Avatar
                    alt="User Profile"
                    src="https://i.pravatar.cc/150?img=68" // User Profile Image
                    sx={{ width: 32, height: 32 }}
                />
                <IoMdArrowDropdown size={20} color='black' />
            </Button>
            <Menu
                id="profile-dropdown-menu"
                aria-labelledby="profile-dropdown-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        minWidth: 350, // Set a minimum width for the dropdown
                        borderRadius: 2, // Rounded corners for the menu paper
                        boxShadow: 3, // Add a slight shadow
                    },
                }}  >
                {/* User Info Section */}
                <div className=' flex gap-1 pt-3 pb-5 px-6 border-b border-b-gray-300/80 manrope-fontFamliy'>
                    <Avatar
                        alt="User Profile"
                        src="https://i.pravatar.cc/150?img=68" // User Profile Image
                        sx={{ width: 50, height: 50, mr: 1.5 }}
                    />
                    <Box>
                        <h5 className='font-semibold text-[#4a5565] text-base manrope-fontFamliy '>
                            David McMichael{' '}
                            <Typography component="span" sx={{ color: 'success.main', fontWeight: 'medium', fontSize: '0.875rem' }}>
                                Pro
                            </Typography>
                        </h5>
                        <h5 className='text-sm manrope-fontFamliy text-[#526b7a] font-medium'>
                            david@wrappixel.com
                        </h5>
                    </Box>
                </div>

                <div className='px-8 mt-4 manrope-fontFamliy space-y-3 font-semibold text-[#29343d] text-sm'> {/* Padding for the menu items block */}
                    <div onClick={handleClose} className='hover:text-[#635bff] cursor-pointer'>
                        <h5   >My Profile</h5>
                    </div>
                    <div onClick={handleClose} className='hover:text-[#635bff] cursor-pointer'>
                        <h5 className='hover:text-[#635bff]'>My Subscription</h5>
                    </div>

                    <div onClick={handleClose} className='flex gap-5 hover:text-[#635bff] cursor-pointer' >
                        <h5  >My Invoice</h5>
                        <span label="5" className='bg-red-200 w-5 h-5 text-center text-xs place-items-center items-center rounded-full text-red-500 '>5</span>
                    </div>

                    <div onClick={handleClose} className='cursor-pointer'>
                        <h5 className='hover:text-[#635bff]'>Account Settings</h5>
                    </div>
                </div>

                <Divider sx={{ my: 2 }} /> {/* Divider for separation */}

                <div onClick={handleClose} className='cursor-pointer px-8 pb-3 font-semibold text-sm manrope-fontFamliy'>
                    <h5 variant="body2" className='hover:text-[#635bff]'>Sign Out</h5>
                </div>
            </Menu>
        </Box>
    );
}

export const ProfileDropDownforMediumScreen = () => {
    //  State for the filter menu (ListFilter icon)
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);

    //  State for the profile menu (Avatar icon)
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);

    //  State for the flag menu (Country Flag icon)
    const [anchorElFlag, setAnchorElFlag] = useState(null);
    const openFlag = Boolean(anchorElFlag);

    // 4. State for the flag menu (Notification icon)
    const [anchorElBell, setAnchorElBell] = useState(null);
    const openBell = Boolean(anchorElBell);


    //Handler for the filter menu button
    const handleFilterClick = (event) => {
        // Close profile menu if it's open
        setAnchorElProfile(null);
        setAnchorElFilter(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorElFilter(null);
    };

    // This function call when clik on Profile Avatar 
    const handleProfileClick = (event) => {
        // Close Flag Menu if it's open
        setAnchorElFlag(null);

        // If Open then close (Toggle)
        if (anchorElProfile) {
            setAnchorElProfile(null);
            return;
        }

        //  If Open then close like toggle
        if (anchorElProfile) {
            setAnchorElProfile(null); // Close the Profile Menu
            return; // Stop execution
        }
        //It will open ProfileDropDownMenu
        setAnchorElProfile(event.currentTarget);

    };

    //Close profile menu
    const handleProfileClose = () => {
        setAnchorElProfile(null);
    };
    //END
    
    // Hander for flag icon (Toggle & Cascade)
    const handleFlagClick = (event) => {
        // Close Profile Menu if it's open
        setAnchorElProfile(null);
        //  If Open then close (Toggle)
        if (anchorElFlag) {
            setAnchorElFlag(null);
            return;
        }
        setAnchorElFlag(event.currentTarget);
    }

    const handleFlagClose = () => {
        setAnchorElFlag(null);
    };
    //END

    // Handler for Notification bell icon  (Toggle & Cascade)
    const handleBellClick = (event) => {
        // Close other specific menus
        setAnchorElProfile(null);
        setAnchorElFlag(null);

        // If Open then close (Toggle)
        if (anchorElBell) {
            setAnchorElBell(null);
            return;
        }
        //  If Closed, then Open 
        // handleFilterClose();

        setAnchorElBell(event.currentTarget);
    };
    //END

    const handleBellClose = () => {
        setAnchorElBell(null);
    };

    return (
        <Box sx={{ flexGrow: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 1 }}>

            {/*  Filter Button (The main trigger) */}
            <Button
                id='filter-dropdown-button'
                aria-controls={openFilter ? 'filter-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openFilter ? 'true' : undefined}
                onClick={handleFilterClick}
                sx={{
                    width: 36, height: 36, color: "black", minWidth: 0, p: 1,
                    '&:hover': { color: "#827cf4" },
                }} >
                <ListFilter />
            </Button>

            {/*. Content when clik on Filter icon*/}
            <Menu
                id="filter-menu"
                anchorEl={anchorElFilter}
                open={openFilter}
                onClose={handleFilterClose}
                elevation={0}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{
                    className: 'mt-12 bg-red-800 border border-gray-200 rounded-lg',
                    sx: {
                        width: '100%',
                        // bgcolor: 'red',
                        border: 0
                    }
                }}
            >
                <MenuItem
                    className="transition duration-150 ease-in-out hover:bg-gray-50 gap-3"
                    sx={{
                        minHeight: 50,
                        padding: '8px 16px',
                        justifyContent: 'center',
                    }}
                >
                    {/* Bell icon */}
                    <Box
                        id='bell-dropdown-trigger'
                        onClick={handleBellClick} // <--- NEW HANDLER
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', minWidth: 24, justifyContent: 'center' }}
                    >
                        <img src={Bell} alt="Bell Icon" style={{ width: 24, height: 24 }} />
                    </Box>
                    {openBell && (
                        <Notification
                            anchorEl={anchorElBell}
                            open={openBell}
                            handleClose={handleBellClose}
                        />
                    )}

                    {/* Flag icon*/}
                    <Box
                        id='flag-dropdown-trigger'
                        onClick={handleFlagClick} // <--- NEW HANDLER
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', minWidth: 24, justifyContent: 'center', mx: 1.5 }}
                    >
                        <img src={CountryFlagEn} alt="Flag" style={{ width: 24, height: 24 }} />
                    </Box>
                    {openFlag && (
                        <CountryFlagDropDown
                            anchorEl={anchorElFlag}
                            open={openFlag}
                            handleClose={handleFlagClose}
                        />
                    )}

                    {/* Profile Avatar (The trigger for the Profile Menu)  */}
                    <Box
                        id='profile-dropdown-avatar'
                        // This handler closes the filter menu AND opens the profile menu
                        onClick={handleProfileClick}
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', ml: 1.5 }} // Added margin left for spacing
                    >
                        <Avatar
                            alt="User Profile"
                            src="https://i.pravatar.cc/150?img=68"
                            sx={{ width: 40, height: 40 }}
                        />
                        {/*  Profile Avatar (Avatar Content - User Info */}
                        {openProfile && (
                            <ProfileDropDownMenu
                                anchorEl={anchorElProfile}
                                open={openProfile}
                                handleClose={handleProfileClose}
                            />
                        )}
                    </Box>

                </MenuItem>
            </Menu>



        </Box >
    );
};

export const ProfileDropDownMenu = ({ anchorEl, open, handleClose }) => {
    console.log("PROFILE DROP DOWN");

    return (
        <Menu
            id="profile-dropdown-menu"
            aria-labelledby="profile-dropdown-button"
            // Pass props to Menu for state control ---
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}

            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                sx: {
                    width: {
                        xs: '90vw', // On extra-small devices
                        sm: 300,
                        md: 400
                    },
                    borderRadius: 2,
                    boxShadow: 2,
                },
            }}
        >
            {/* User Info Section */}
            <div className=' flex gap-1 pt-3 pb-5 px-6 border-b border-b-gray-300/80 manrope-fontFamliy'>
                <Avatar
                    alt="User Profile"
                    src="https://i.pravatar.cc/150?img=68"
                    sx={{ width: 50, height: 50, mr: 1.5 }}
                />
                <Box>
                    <h5 className='font-semibold text-[#4a5565] text-base manrope-fontFamliy '>
                        David McMichael{' '}
                        <Typography component="span" sx={{ color: 'success.main', fontWeight: 'medium', fontSize: '0.875rem' }}>
                            Pro
                        </Typography>
                    </h5>
                    <h5 className='text-sm manrope-fontFamliy text-[#526b7a] font-medium'>
                        david@wrappixel.com
                    </h5>
                </Box>
            </div>

            {/* Navigation Links Section */}
            <div className='px-8 mt-4 manrope-fontFamliy space-y-3 font-semibold text-[#29343d] text-sm'>
                <div onClick={handleClose} className='hover:text-[#635bff] cursor-pointer'>
                    <h5>My Profile</h5>
                </div>
                <div onClick={handleClose} className='hover:text-[#635bff] cursor-pointer'>
                    <h5 className='hover:text-[#635bff]'>My Subscription</h5>
                </div>
                <div onClick={handleClose} className='flex gap-5 hover:text-[#635bff] cursor-pointer' >
                    <h5>My Invoice</h5>
                    <span label="5" className='bg-red-200 w-5 h-5 text-center text-xs place-items-center items-center rounded-full text-red-500 '>5</span>
                </div>
                <div onClick={handleClose} className='cursor-pointer'>
                    <h5 className='hover:text-[#635bff]'>Account Settings</h5>
                </div>
            </div>

            <Divider sx={{ my: 2 }} />

            {/* Sign Out Section */}
            <div onClick={handleClose} className='cursor-pointer px-8 pb-3 font-semibold text-sm manrope-fontFamliy'>
                <h5 variant="body2" className='hover:text-[#635bff]'>Sign Out</h5>
            </div>
        </Menu>
    );
};


