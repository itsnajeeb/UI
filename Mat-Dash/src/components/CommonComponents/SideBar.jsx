import React from 'react';
import { Box } from '@mui/material';
import DASHBOARDS from '../SideBarNavLinkItem/Dashboard';
import { House, Megaphone, UserRound, X } from 'lucide-react';
import sidebarbg from '/Images/sidebarBg.png'

const AppDrawer = React.memo(function AppDrawer({
    open,
    setOpen,
    SLIDING_PANEL_WIDTH,
}) {

    return (
        <Box className="flex h-screen ">
            <Box
                className="relative sliding-panel-scroll"
                sx={{
                    width: open ? SLIDING_PANEL_WIDTH : 0,
                    transition: "width 0.3s ease",
                    overflowX: "hidden",

                }}
            >
                <div className='relative  '>
                    <div className=" bg-white  mb-5  h-32 sticky top-0 z-30 px-2 pt-2  overflow-hidden">
                        <SIDEBAR_LOGO open={open} setOpen={setOpen} />
                    </div>
                    <div className='px-4 mt-2 relative   '>
                        <DASHBOARDS open={open} setOpen={setOpen} />
                    </div>
                </div>
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


                <div className="absolute   text-white/80 flex gap-4 text-[10px] h-full w-full">
                    <X className='lg:hidden relative  left-3 top-3 cursor-pointer' size={19}
                        onClick={() => setOpen(prev => !prev)} />

                    <div className="relative group left-[35%] top-[40%] lg:left-[45%]">
                        <House size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-primary-color h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>

                    <div className="relative group left-[35%] top-[40%] lg:left-[45%]">
                        <UserRound size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-primary-color h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>
                    <div className="relative group left-[35%] top-[40%] lg:left-[45%]">
                        <Megaphone size={21} className="cursor-pointer transition" />
                        <span className="absolute -bottom-1 left-0 bg-primary-color h-0.5 w-full scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100" />
                    </div>
                </div>

            </div>
          
        </>

    );
};


export default AppDrawer


