import React, { useState } from 'react';
import { Box } from '@mui/material';
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

// Tooltip Component  opning here 
export function MenuTooltip({ id, open, setOpen }) {

    switch (id) {
        case 1:
            return <div className='relative  '>
                <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-2 relative  '>
                    <DASHBOARDS open={open} setOpen={setOpen} />
                </div>
            </div>

        case 2:
            return <div className='relative'>
                <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-2 '>
                    <PAGES />
                </div>
            </div>
        case 3:
            return <div className='relative'>
                <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                    <SIDEBAR_LOGO />
                </div>
                <div className='px-4 mt-2 '>
                    <FORMS />
                </div>
            </div>
        case 4:
            return (
                <div>
                    <div className="px-5 bg-white  pt-5  h-16 sticky top-0 z-30">
                        <SIDEBAR_LOGO />
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


const AppDrawer = React.memo(function AppDrawer({
    open,
    setOpen,
    FIXED_SIDEBAR_WIDTH,
    SLIDING_PANEL_WIDTH,
}) {
    const [selectedMenu, setSelectedMenu] = useState(MAIN_MENU_ITEMS[0].id);
    // console.log("SIDE BAR ");

    return (
        <Box className="flex h-screen ">

            {/* LEFT FIXED ICON BAR */}
            <FixedSidebarIcons
                width={FIXED_SIDEBAR_WIDTH}
                selectedMenu={selectedMenu}
                onMenuSelect={(id) => {
                    setSelectedMenu(id);   //  only here
                    setOpen(true);
                }}
                onToggle={() => setOpen((p) => !p)}
            />

            {/* MIDDLE PANEL */}
            <Box
                className="relative sliding-panel-scroll"
                sx={{
                    width: open ? SLIDING_PANEL_WIDTH : 0,
                    transition: "width 0.3s ease",
                    overflowX: "hidden",
                    
                }}
            >
                <MenuTooltip id={selectedMenu} />
            </Box>

        </Box>
    );

});

export const SIDEBAR_LOGO = () => {
    return (
        <div className='w-32'>
            <img src={logo} alt=""
                className='w-full h-full object-fit'
            />
        </div>
    )
}

export default AppDrawer


