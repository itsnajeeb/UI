import React from 'react'
import WelcomeCard from '../components/Dashboard2/WelcomeCard'
import RevenueByProduct from '../components/Dashboard1/RevenueByProduct'
import TopBar from '../components/TopBar'
import AppDrawer from '../components/SideBar'
import useIsLgScreen from '../hooks/useIsLgScreen';
import Card from '../components/Dashboard2/Card'
import { customerData, subscriptionData } from '../data/DashboardData'
import RevenueForcast from '../components/Dashboard2/RevenueForcast'
import SmartCard from '../components/Dashboard2/SmartCard'
import Customer from '../components/Dashboard2/Customer'
import WeeklySchedule from '../components/Dashboard2/WeeklySchedule'
import TotalIncome from '../components/Dashboard2/TotalIncome'
import SalesFromLocation from '../components/Dashboard2/SalesFromLocation'
import { locationData } from '../data/CountryLocation'
import WeeklyStats from '../components/Dashboard2/WeeklyStats'
import DailyActivities from '../components/Dashboard2/DailyActivities'
import FigmaTips from '../components/Dashboard2/FigmaTips'

const Dashboard2 = ({isDrawerOpen, setIsDrawerOpen}) => {
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
                        <div className="flex  flex-col gap-7 shrink-0  w-full lg:grid grid-cols-2">
                            <div className="h-full">
                                <WelcomeCard />
                            </div>

                            {/* Right side */}
                            <div className=" flex flex-col gap-7 sm:grid grid-cols-2">
                                <Card
                                    bgColor="#F5CEDB"
                                    data={subscriptionData}
                                />
                                <Card
                                    bgColor="#D3F1F4"
                                    data={customerData}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-7 flex-col  lg:grid grid-cols-[16fr_8fr]">

                        <div className="w-full h-full shrink-0 lg:min-w-0">
                            <RevenueForcast />
                        </div>


                        <div className="w-full min-w-0">
                            <SmartCard
                                title="Customers Growth"
                                data={[30, 100, 10, 99, 40, 80]}
                                color="#E8E7FF"
                            />
                        </div>
                    </div>

                    <div className="flex gap-7 flex-col  lg:grid grid-cols-[10fr_20fr] h-full">
                        <div className='flex flex-col gap-7 min-w-0  '>
                            <Customer />
                            <TotalIncome />
                        </div>
                        <div className=' min-w-0 overflow-hidden'>
                            <WeeklySchedule />
                        </div>
                    </div>


                    <div className='space-y-7 xl:grid xl:grid-cols-[12fr_7fr] xl:gap-7 xl:space-y-0'>
                        <div className='w-full '>
                            <RevenueByProduct />
                        </div>

                        <div className='h-full'>
                            <SalesFromLocation data={locationData} />
                        </div>
                    </div>

                    <div className='space-y-7 xl:grid xl:grid-cols-[6fr_6fr_7fr] xl:gap-7 xl:space-y-0'>
                        <div className='w-full h-full '>
                            <WeeklyStats />
                        </div>

                        <div className='h-full '>
                            <DailyActivities  />
                        </div>

                        <div className='h-full '>
                            <FigmaTips/>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Dashboard2