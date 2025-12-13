import React from 'react'
import WelcomeCard from '../components/Dashboard1/WelcomeCard'
import CustomerChart from '../components/Dashboard1/CustomerChart'
import ProjectsChart from '../components/Dashboard1/ProjectChart'
import RevenueChart from '../components/Dashboard1/RevenueChart'
import Performance from '../components/Dashboard1/Performance'
import Customers from '../components/Dashboard1/Customers'
import SalesOverview from '../components/Dashboard1/SalesOverview'
import RevenueByProduct from '../components/Dashboard1/RevenueByProduct'
import TotalSettelementChart from '../components/Dashboard1/TotalSettelementChart'
import TopBar from '../components/TopBar'
import AppDrawer from '../components/SideBar'
import useIsLgScreen from '../hooks/useIsLgScreen';

const Dashboard1 = ({ isDrawerOpen, setIsDrawerOpen }) => {
    const SLIDING_PANEL_WIDTH = 250;
    const FIXED_SIDEBAR_WIDTH = 70;

    // Use the hook to determine the current screen size
    const isLgScreen = useIsLgScreen();

    //  Calculate the dynamic margin value
    const calculatedMargin = isDrawerOpen
        ? FIXED_SIDEBAR_WIDTH + SLIDING_PANEL_WIDTH // 320px
        : FIXED_SIDEBAR_WIDTH; // 70px

    //  Determine the final margin based on screen size
    const finalMarginValue = isLgScreen
        ? `${calculatedMargin}px` // Apply the dynamic value only on LG screens
        : '0px';                  // Apply 0px on small/medium screens

    //  Create the style object with the responsive margin
    const style = {
        // Set the margin based on the screen size check
        marginLeft: finalMarginValue,
        // Keep the transition inline
        transition: 'margin-left 0.3s ease',
    };
    return (
        <div className='lg:flex relative overflow-x-hidden w-full'>

            {/* This will show greter then lg screen >1024 */}
            <div className='fixed h-screen z-50 bg-white hidden lg:flex'>
                <AppDrawer
                    open={isDrawerOpen}
                    setOpen={setIsDrawerOpen}
                    FIXED_SIDEBAR_WIDTH={FIXED_SIDEBAR_WIDTH}
                    SLIDING_PANEL_WIDTH={SLIDING_PANEL_WIDTH}
                />
            </div>
            {isDrawerOpen && (
                <div
                    // this will show only on less then lg screen <1024
                    className='fixed h-screen z-99 bg-white lg:hidden'
                >
                    <AppDrawer
                        open={isDrawerOpen}
                        setOpen={setIsDrawerOpen}
                        FIXED_SIDEBAR_WIDTH={FIXED_SIDEBAR_WIDTH}
                        SLIDING_PANEL_WIDTH={SLIDING_PANEL_WIDTH}
                    />
                </div>
            )}


            {/* Right content */}
            <div
                className="px-3 py-4 rounded-3xl bg-white md:pb-7 w-full overflow-hidden"
                style={style}
            >
                <TopBar setIsDrawerOpen={setIsDrawerOpen} />
                <div className='bg-[#F4F7FB] space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>

                    <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                        {/* Left side */}
                        <div className="flex  flex-col gap-7 shrink-0 xl:min-w-[400px] xl:max-w-[500px] ">
                            <div className="">
                                <WelcomeCard />
                            </div>

                            <div className="grid grid-cols-2 gap-7">
                                <div className="">
                                    <CustomerChart />
                                </div>
                                <div className="">
                                    <ProjectsChart />
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex-1 max-w-full min-w-0 ">
                            <RevenueChart />
                        </div>
                    </div>

                    <div className="space-y-7 xl:flex xl:gap-7 w-full min-w-0">

                        <div className="w-full h-full  xl:min-w-[400px] xl:max-w-[500px] ">
                            <Performance />
                        </div>

                        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-7 space-y-7 lg:space-y-0 min-w-0">

                            <div className="w-full min-w-0">
                                <Customers />
                            </div>

                            <div className="w-full  flex-1">
                                <SalesOverview />
                            </div>

                        </div>
                    </div>



                    <div className='space-y-7 xl:grid xl:grid-cols-[13fr_7fr] xl:gap-7 xl:space-y-0'>
                        <div className='w-full '>
                            <RevenueByProduct />
                        </div>

                        <div className='h-full'>
                            <TotalSettelementChart />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Dashboard1