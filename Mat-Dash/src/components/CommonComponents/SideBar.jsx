import React, { useState } from 'react';
import { Box, IconButton, ListItem } from '@mui/material';
import logo from '/Images/logo.svg';
import { PAGES } from '../SideBarNavLinkItem/Pages';
import { FORMS } from '../SideBarNavLinkItem/Forms';
import { TABLE } from '../SideBarNavLinkItem/Tables';
import { CHARTS } from '../SideBarNavLinkItem/charts';
import { UI_COMPONENTS } from '../SideBarNavLinkItem/UiComponents';
import { AUTHENTICATION_PAGE } from '../SideBarNavLinkItem/Authentication';
import { OTHER } from '../SideBarNavLinkItem/Other';
import DASHBOARDS from '../SideBarNavLinkItem/Dashboard';
import { MAIN_MENU_ITEMS } from '../../data/SideBarData';
import FixedSidebarIcons from './FixedIconSidebar'
import { House, Megaphone, MenuIcon, UserRound } from 'lucide-react';
import sidebarbg from '/Images/sidebarBg.png'

// Tooltip Component  opning here 
export function MenuTooltip({ id, open, setOpen }) {

    switch (id) {
        case 1:
            return <div className='relative  '>
                <div className=" bg-white  mb-5  h-32 sticky top-0 z-30 px-2 pt-2  overflow-hidden">
                    <SIDEBAR_LOGO open={open} setOpen={setOpen} />
                </div>
                <div className='px-4 mt-2 relative  '>
                    <DASHBOARDS open={open} setOpen={setOpen} />
                </div>
            </div>

        case 2:
            return <div className='relative'>
                <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                    <SIDEBAR_LOGO setOpen={setOpen} />
                </div>
                <div className='px-4 mt-2 '>
                    <PAGES />
                </div>
            </div>
        case 3:
            return <div className='relative'>
                <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                    <SIDEBAR_LOGO setOpen={setOpen} />
                </div>
                <div className='px-4 mt-2 '>
                    <FORMS />
                </div>
            </div>
        case 4:
            return (
                <div>
                    <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                        <SIDEBAR_LOGO setOpen={setOpen} />
                    </div>
                    <div className='px-4 mt-2 '>
                        <TABLE />
                    </div>
                </div>
            );
        case 5:
            return (
                <>
                    <div className="px-5  pt-5">
                        <SIDEBAR_LOGO setOpen={setOpen} />
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
                        <SIDEBAR_LOGO setOpen={setOpen} />
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
                        <SIDEBAR_LOGO setOpen={setOpen} />
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
                        <SIDEBAR_LOGO setOpen={setOpen} />
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


const AppDrawer = React.memo(function AppDrawer({
    open,
    setOpen,
    // FIXED_SIDEBAR_WIDTH,
    SLIDING_PANEL_WIDTH,
}) {
    // setOpen(false)
    const [selectedMenu, setSelectedMenu] = useState(MAIN_MENU_ITEMS[0].id);
    // console.log("SIDE BAR ");

    return (
        <Box className="flex h-screen ">

            {/* LEFT FIXED ICON BAR */}
            {/* <FixedSidebarIcons
                width={FIXED_SIDEBAR_WIDTH}
                selectedMenu={selectedMenu}
                onMenuSelect={(id) => {
                    setSelectedMenu(id);   //  only here
                    setOpen(true);
                }}
                onToggle={() => setOpen((p) => !p)}
            /> */}

            {/* MIDDLE PANEL */}
            <Box
                className="relative sliding-panel-scroll"
                sx={{
                    width: open ? SLIDING_PANEL_WIDTH : 0,
                    transition: "width 0.3s ease",
                    overflowX: "hidden",

                }}
            >
                <MenuTooltip id={selectedMenu} open={open} setOpen={setOpen} />
            </Box>

        </Box>
    );

});
export const SIDEBAR_LOGO = ({ setOpen }) => {
    return (

        <>
            <div className="relative h-32 rounded-t-2xl w-full overflow-hidden ">
                {/* background image */}
                <img
                    src={sidebarbg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-indigo-950/55" />

                {/*  SNOW CURVE */}
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 180"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#fff"
                        d="
                M1,135
                C110,160 290,60 360,100
                C480,140 600,80 720,100
                C900,130 1080,50 1260,80
                C1320,90 1380,110 1440,120
                L1440,180
                L0,180
                Z  "
                    />
                </svg>


                <div className="absolute left-[50%] bottom-[50%] text-white/80 flex gap-4 text-[10px]">
                    <div className="relative group ">
                        <House size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-[#FF6E6A] h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>

                    <div className="relative group ">
                        <UserRound size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-[#FF6E6A] h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>
                    <div className="relative group ">
                        <Megaphone size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-primary-bg h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>
                </div>

            </div>
            <div className="flex justify-between items-center">

                {/* <ListItem
                    disablePadding
                    onClick={() => setOpen((prev) => !prev)}
                    sx={{
                        width: "40px",
                        display: "flex",
                        mb: 1,
                        justifyContent: "center",
                        cursor: "pointer",
                        "&:hover svg": {
                            color: "var(--text-primary-color)",
                        },
                    }}
                >
                    <IconButton>
                        <MenuIcon size={19} />
                    </IconButton>
                </ListItem> */}

                {/* <div className="w-32">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full h-full object-contain"
                    />
                </div> */}
            </div>
        </>

    );
};


export default AppDrawer


