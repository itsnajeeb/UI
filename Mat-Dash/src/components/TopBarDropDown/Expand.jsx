import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { ArrowDownNarrowWide, BookText, CalendarDays, ChevronDown, ChevronUp, Ellipsis, ListChecks, MailCheck, MessageSquareMore, NotebookText, SquareUser, TicketMinus } from 'lucide-react';
import image from '/Images/profile/user-14.png';
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import logo from '/Images/logo.svg';
const data = [
    {
        title: "Chat Application",
        subTitle: "Message & Emails",
        icon: <MessageSquareMore />,
        color: 'bg-indigo-100 text-indigo-500', // Tailwind classes for background and icon
    },

    {
        title: "Todo App",
        subTitle: "Complete task",
        icon: <ListChecks />,
        color: 'bg-teal-100 text-teal-500',
    },


    {
        title: "Invoice App",
        subTitle: "Get latest invoice",
        icon: <NotebookText />,
        color: 'bg-red-100 text-red-500',
    },


    {
        title: "Calender App",
        subTitle: "Get Dates",
        icon: <CalendarDays />,
        color: 'bg-pink-100 text-pink-500',
    },


    {
        title: "Contact Application",
        subTitle: "2 Unsaved Contacts",
        icon: <SquareUser />,
        color: 'bg-yellow-100 text-yellow-500',
    },


    {
        title: "Tickets App",
        subTitle: "Create new ticket",
        icon: <TicketMinus />,
        color: 'bg-yellow-100 text-yellow-500',

    },


    {
        title: "Email App",
        subTitle: "Get new emails",
        icon: <MailCheck />,
        color: 'bg-pink-100 text-pink-500',


    },

    {
        title: "Contact List",
        subTitle: "Create new contact",
        icon: <BookText />,
        color: 'bg-teal-100 text-teal-500',
    },
];

export const LgScreen = () => {
    // console.log("LG SCREEN");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0, padding: 0 }}>
            <Button
                id="profile-dropdown-button"
                aria-controls={open ? 'profile-dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
                sx={{
                    width: 62,
                    height: 32,
                    color: "black",
                    minWidth: 0,
                    zIndex: 0,
                    position: "relative",
                    p: 1,
                   
                }}
            >

                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar icon-20 d-flex" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:widget-3-line-duotone">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5px">
                        <path d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" opacity=".5" stroke="currentColor" fill="none" strokeWidth="1.5px"></path>
                        <path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z" stroke="currentColor" fill="none" strokeWidth="1.5px"></path>
                    </g>
                </svg> */}

                <img src={image} alt="" className='transition-all duration-300 hover:scale-110' />
            </Button>

            <Menu
                id="profile-dropdown-menu"
                aria-labelledby="profile-dropdown-button"
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
                        padding: 0, //This is for Drop down div
                        borderRadius: 5
                    },
                }}
                MenuListProps={{
                    sx: {
                        padding: 0,
                    },
                }}
            >
                {/* Other Flag Drop Down Section */}
                <div className=' flex flow-row manrope-fontFamliy gap-2 p-0 '>
                    <div className='grid grid-cols-2 gap-6 py-5 px-12 '>
                        {
                            data.map((d, index) => (
                                <div key={index} className='flex gap-3  group cursor-pointer' onClick={handleClose}>
                                    <div className='bg-[#E8E7FF] p-3 rounded-xl text-[#827cf4]  text-[17px]'>
                                        {d.icon}
                                    </div>

                                    <div className='leading-10'>
                                        <h3 className='text-sm font-semibold group-hover:text-indigo-600'>{d.title}</h3>
                                        <p className='text-xs'>{d.subTitle}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='w-[250px]  '>
                        <img
                            className='w-full h-full rounded-tr-2xl rounded-br-2xl'
                            src="https://matdash-angular-stylish.netlify.app/assets/images/backgrounds/mega-dd-bg.jpg" alt="" />
                    </div>

                </div>

            </Menu>
        </Box >
    );
}


//This component will be mount if screen size md (<1024)
export const MdScreen = () => { // Destructure props if needed
    //Tracking Dropdwon Open or Not
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    //Tracking List visibility
    const [isListVisible, setIsListVisible] = useState(true);

    // Toggle Function for dropdown open/close
    const handleClick = () => {
        setIsDrawerOpen(true);
    };

    // Close the Drawer
    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    // Toggle List Visibility 
    const toggleListVisibility = () => {
        setIsListVisible(prev => !prev);
    };

    return (
        <Box sx={{ flexGrow: 0, padding: 0 }}>
            {/* Button That will be click for dropdown open*/}
            <Button
                onClick={handleClick}
                sx={{
                    width: 36, height: 36, color: "black", minWidth: 0, p: 1,
                    '&:hover': { color: "#827cf4" },
                }}
            >
                <Ellipsis />
            </Button>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleClose}
                PaperProps={{
                    className: 'w-80 h-full bg-white shadow-2xl',
                    sx: { maxWidth: '90vw' }
                }}
            >
                {/* Header Content*/}
                <Box className="flex justify-between items-center mb-5 pl-3 pr-5 pt-3">
                    <ListItem>
                        <img src={logo} alt="logo" width="120" height="20" />
                    </ListItem>
                    <IconButton onClick={handleClose} className="text-gray-500 hover:text-gray-900">
                        <CloseIcon fontSize={"small"} />
                    </IconButton>
                </Box>

                {/* Apps Title and Toggle Button  */}
                <Box
                    className="flex justify-between pl-7 pr-4 py-3 active:bg-blue-200 transition-all cursor-pointer"
                    onClick={toggleListVisibility} // Click on the whole Box to toggle
                >
                    <Typography variant="h6" className="font-semibold manrope-fontFamliy" sx={{ fontSize: 16 }}>
                        Apps
                    </Typography>

                    {/* Icon Container*/}
                    <IconButton
                        size="small"
                        //Arrow Rotaion
                        className={`
                            transform transition-transform duration-500 ease-in-out
                            ${isListVisible ? 'rotate-180' : 'rotate-0'}
                            rounded-full hover:bg-gray-100
                        `}
                    >
                        {/* 
                          If list is visible, it rotates 180 degrees .
                          If list is hidden, it rotates 0 degrees 
                        */}
                        <ChevronUp />
                    </IconButton>
                </Box>

                {/* List Content Collapse  */}
                <Collapse in={isListVisible} timeout={300} unmountOnExit>
                    <List
                        // but kept spacing/padding classes
                        className=" space-y-2"
                    >
                        {data.map((d, index) => (
                            <ListItem
                                key={index}
                                onClick={() => { handleClose(); }}
                                className="rounded-lg hover:bg-gray-50 transition duration-150 ease-in-out p-3"
                            >
                                {/* List Content Title, subTitle, and icon */}
                                <ListItemIcon className={`min-w-10 flex justify-center items-center`}>
                                    <div className={`p-2 rounded-lg ${d.color}`}>
                                        {d.icon}
                                    </div>
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" className="font-medium text-gray-800">
                                            {d.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="body2" className="text-sm text-gray-500">
                                            {d.subTitle}
                                        </Typography>
                                    }
                                    className="pl-2"
                                />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </Drawer>
        </Box>
    );
}