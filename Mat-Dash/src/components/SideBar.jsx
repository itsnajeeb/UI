import React, { useState, useRef } from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, Tooltip } from '@mui/material';
import { MenuIcon } from 'lucide-react';
import logo from '../assets/images/logos/logo.svg';
import { PAGES } from './SideBarNavLinkItem/Pages';
import { FORMS } from './SideBarNavLinkItem/Forms';
import { TABLE } from './SideBarNavLinkItem/Tables';
import { CHARTS } from './SideBarNavLinkItem/charts';
import { UI_COMPONENTS } from './SideBarNavLinkItem/UiComponents';
import { AUTHENTICATION_PAGE } from './SideBarNavLinkItem/Authentication';
import { OTHER } from './SideBarNavLinkItem/Other';
import { DASHBOARDS } from './SideBarNavLinkItem/Dashboard';
import { MAIN_MENU_ITEMS } from '../data/SideBarData';



// Tooltip Component  opning here 
function MenuTooltip({ id, open, setOpen }) {

    switch (id) {
        case 1:
            return <>
                <div className="px-5  pt-5">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-5 '>
                    <DASHBOARDS open={open} setOpen={setOpen} />
                </div>
            </>

        case 2:
            return <>
                <div className="px-5  pt-5">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-5 '>
                    <PAGES />
                </div>
            </>
        case 3:
            return <>
                <div className="px-5  pt-5">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-5 '>
                    <FORMS />
                </div>
            </>
        case 4:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO />
                    </div>
                    <div className='px-4 mt-5 '>
                        <TABLE />
                    </div>
                </>
            );
        case 5:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO />
                    </div>
                    <div className='px-4 mt-5 '>
                        <CHARTS />
                    </div>
                </>
            );
        case 6:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO />
                    </div>
                    <div className='px-4 mt-5 '>
                        <UI_COMPONENTS />
                    </div>
                </>
            );
        case 7:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO />
                    </div>
                    <div className='px-4 mt-5 '>
                        <AUTHENTICATION_PAGE />
                    </div>
                </>
            );
        case 8:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO />
                    </div>
                    <div className='px-4 mt-5 '>
                        <OTHER />
                    </div>
                </>
            );

        default:
            <>
                <div>
                    <h1>Default Case</h1>
                </div>
            </>
    }
}


export default function AppDrawer({ open, setOpen, FIXED_SIDEBAR_WIDTH, SLIDING_PANEL_WIDTH }) {
    const [selectedMenu, setSelectedMenu] = useState(MAIN_MENU_ITEMS[0].id);
    // console.log("OPEN VALUE in Side Bar", open);

    // 1. Create a ref for the entire drawer/menu container
    const drawerRef = useRef(null);

    //  1.  Create a ref for the Menu Toggle Icon 
    const handleMainMenuClick = (e, id) => {
        e.stopPropagation()
        //Toggle if user click same icon again
        if (open && selectedMenu === id) setOpen(false)

        if (open) {
            setSelectedMenu(id)
            return 0;
        } else {
            setSelectedMenu(id);
            setOpen(true);
            return 0;
        }
    };

    return (
        // 3. Attach the ref to the root container of both the fixed bar and the sliding panel
        <Box className="flex" ref={drawerRef} sx={{ height: '100vh' }}>
            {/* 1. FIXED ICON BAR (70px) */}
            <Box sx={{
                width: FIXED_SIDEBAR_WIDTH, flexShrink: 0, height: "100%",
                borderRight: '1px solid #eee', bgcolor: "#F4F7FB",
                position: 'relative', // Ensures it is part of the flow for flex
            }}>
                <List disablePadding >
                    {/* Menu button to manually open/close the panel */}
                    <ListItem disablePadding sx={{ py: 2, px: 2, }}// 
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(prevOpen => !prevOpen);
                        }}>
                        <IconButton className='w-full flex justify-center  '>
                            {/* Left side menu icon */}
                            <MenuIcon size={20} />
                        </IconButton>
                    </ListItem>
                    {/* Left Side Menu (Icon Only) */}
                    {MAIN_MENU_ITEMS.map((item) => (
                        <ListItem key={item.id}
                            className='h-fit '
                            disablePadding sx={{
                                bgcolor: 'transparent',
                                height: "fit",
                            }}>
                            <ListItemButton
                                onClick={(e) => handleMainMenuClick(e, item.id)}
                                selected={selectedMenu === item.id}
                                disableTouchRipple
                                sx={{
                                    height: "60px",
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0',
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    },
                                    '&.Mui-selected': {
                                        bgcolor: 'transparent',
                                        '&:hover': {
                                            bgcolor: 'transparent'
                                        }
                                    },

                                    // '&.Mui-selected': { backgroundColor: 'transparent' },
                                }}
                            >
                                <Tooltip title={item.ToolTip} placement="right"
                                    componentsProps={{
                                        tooltip: {
                                            sx: {

                                                backgroundColor: '#2D3748',
                                                color: 'white',
                                                borderRadius: '18px',
                                                fontSize: '0.75rem',
                                                padding: '8px 15px',
                                            },
                                        },
                                    }}
                                >
                                    <span className={` p-3 rounded-xl transition-all  text-gray-700 ${item.id === selectedMenu
                                        ? 'bg-[#635BFF] text-white hover:bg-[#635BFF] hover:text-white'
                                        : 'hover:bg-indigo-100 bg-transparent' // Not Selected
                                        } `}>
                                        {item.icon}
                                    </span>
                                </Tooltip>

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* 2. RIGHT CONTENT  (250px) */}
            <Box
                className="sliding-panel-scroll"
                sx={{
                    width: open ? SLIDING_PANEL_WIDTH : 0,
                    transition: "width 0.3s ease",
                    overflowX: "hidden",
                }} >
                <>

                    <MenuTooltip id={selectedMenu} open={open} setOpen={setOpen} />

                </>
            </Box>

        </Box>
    );
}

export const SIDEBAR_LOGO = () => {
    return (
        <div className='w-32'>
            <img src={logo} alt=""
                className='w-full h-full object-fit'
            />
        </div>
    )
}


