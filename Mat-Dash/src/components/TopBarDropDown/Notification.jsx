import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

// Define the Bell icon SVG as a reusable component or variable
const BellIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bell-icon lucide-bell"
        {...props}
    >
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </svg>
);


export default function NotificationDropDown(props) {

    // Internal State for Standalone (Large Screen) Use ---
    const {
        anchorEl: externalAnchorEl,
        open: externalOpen,
        handleClose: externalHandleClose
    } = props;

    const [internalAnchorEl, setInternalAnchorEl] = useState(null);
    const internalOpen = Boolean(internalAnchorEl);

    const handleInternalClick = (event) => {
        setInternalAnchorEl(event.currentTarget);
    };

    const handleInternalClose = () => {
        setInternalAnchorEl(null);
    };

    //  Determine which state/handlers to use (Controlled vs. Uncontrolled) ---
    // If external props are provided, use them. Otherwise, use internal state.
    const isControlled = externalAnchorEl !== undefined || externalOpen !== undefined || externalHandleClose !== undefined;

    const anchorEl = isControlled ? externalAnchorEl : internalAnchorEl;
    const open = isControlled ? externalOpen : internalOpen;
    const handleClose = isControlled ? externalHandleClose : handleInternalClose;
    const handleClick = isControlled ? () => { } : handleInternalClick; // Click is managed by parent on MD screen


    return (
        <Box sx={{ flexGrow: 0 }}>

            {/* --- Render the Trigger Button ONLY for the LG (Standalone) Screen --- */}
            {!isControlled && (
                <Button
                    id="notification-dropdown-button-lg"
                    aria-controls={open ? 'notification-dropdown-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{

                        width: 36,
                        height: 36,
                        color: "black",
                        minWidth: 0,
                        p: 1,
                        '&:hover': {
                            color: "#827cf4"
                        },
                    }}
                >
                    <BellIcon />
                </Button>
            )}

            {/* The Menu component uses the determined (external or internal) state/handlers*/}
            <Menu
                id="notification-dropdown-menu"
                aria-labelledby="notification-dropdown-button-lg"
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
                            sm: 380,
                            md: 420
                        },
                        padding: 0,
                        borderRadius: 2,
                        boxShadow: 3,
                        marginTop:8
                    },
                }
                }
            >
                {/* Notification Header */}
                < div className=' flex flex-col manrope-fontFamliy gap-1 py-5 '>
                    <div className='px-10 flex justify-between mb-4'>
                        <h2 className='text-base font-semibold'>Notifications</h2>
                        <h4 className='bg-[#635BFF] px-3 text-white rounded-full text-sm py-1 '>5 new</h4>
                    </div>

                    {/* Notification Items - Add onClick={handleClose} to close menu on item click */}
                    <MenuItem className='cursor-pointer' sx={{ paddingX: 4, paddingY: 1.5 }} onClick={handleClose}>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-4'>
                                <div className='bg-[#E8E7FF] p-3 rounded-full text-[#827cf4] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-sm manrope-fontFamliy font-semibold'>Launch Admin</h2>
                                    <p className='text-xs manrope-fontFamliy '>Just see the my new admin!</p>
                                </div>
                            </div>
                            <div className='text-xs self-start '>
                                <h2>8:30 AM</h2>
                            </div>
                        </div>
                    </MenuItem>

                    {/* Event Today */}
                    <MenuItem className='cursor-pointer' sx={{ paddingX: 4, paddingY: 1.5 }} onClick={handleClose}>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-3'>
                                <div className='bg-[#D4F3F4] p-3 rounded-full text-[#16CDC7]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-sm manrope-fontFamliy font-semibold'>Event Today</h2>
                                    <p className='text-xs manrope-fontFamliy '>Just a reminder that you have event</p>
                                </div>
                            </div>
                            <div className='text-xs self-start'>
                                <h2>8:25 AM</h2>
                            </div>
                        </div>
                    </MenuItem>

                    {/* Settings */}
                    <MenuItem className='flex cursor-pointer gap-4' sx={{ paddingX: 4, paddingY: 1.5 }} onClick={handleClose}>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-3'>
                                <div className='bg-[#F6F1D7] p-3 rounded-full text-[#F8C20A]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-sm manrope-fontFamliy font-semibold'> Settings</h2>
                                    <p className='text-xs manrope-fontFamliy '>You can customize this template</p>
                                </div>
                            </div>
                            <div className='text-xs '>
                                <h2>8:05 AM</h2>
                            </div>
                        </div>
                    </MenuItem>

                    {/* Launch Templates */}
                    <MenuItem className='flex cursor-pointer gap-4' sx={{ paddingX: 4, paddingY: 1.5 }} onClick={handleClose}>
                        <div className='flex w-full justify-between'>
                            <div className='flex gap-3'>
                                <div className='bg-[#D9F2E6] p-3 rounded-full text-[#36C76C]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-sm manrope-fontFamliy font-semibold'>Launch Templates</h2>
                                    <p className='text-xs manrope-fontFamliy '>Just see the my new admin!</p>
                                </div>
                            </div>
                            <div className='text-xs self-start'>
                                <h2>8:00 AM</h2>
                            </div>
                        </div>
                    </MenuItem>

                    {/* Event Tommorow */}
                    <MenuItem className='flex cursor-pointer gap-4' sx={{ paddingX: 4, paddingY: 1.5 }} onClick={handleClose}>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-3'>
                                <div className='bg-[#F7CFDC] p-3 rounded-full text-[#e2396e]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-sm manrope-fontFamliy font-semibold'>Event Tommorow</h2>
                                    <p className='text-xs manrope-fontFamliy '>Just a reminder that you have event</p>
                                </div>
                            </div>
                            <div className='text-xs self-start'>
                                <h2>7:30 AM</h2>
                            </div>
                        </div>
                    </MenuItem>

                    {/* See All Notification Button */}
                    <div className='mx-8 mt-5'>
                        <Button
                            className='bg-indigo-400 w-full manrope-fontFamliy font-semibold py-2'
                            sx={{ backgroundColor: "#4f39f6", color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: 2, paddingY: 1.2, borderRadius: 3 }}
                            onClick={handleClose} // Close menu when button is clicked
                        >
                            See All Notification
                        </Button>
                    </div>
                </div>
            </Menu>
        </Box >
    );
}