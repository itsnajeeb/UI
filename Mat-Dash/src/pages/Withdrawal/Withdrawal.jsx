import React from 'react'
import TopBar from '../../components/TopBar'
import AppDrawer from '../../components/SideBar'
import useIsLgScreen from '../../hooks/useIsLgScreen';
import WithdrawalComp from '../../components/Withdrawal/Withdrawal/Withdrawal';

const Withdrawal = ({ isDrawerOpen, setIsDrawerOpen }) => {
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
                style={style}  >
                <TopBar setIsDrawerOpen={setIsDrawerOpen} />
                <div className='bg-[#F4F7FB] space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>

                    <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                        {/* Left side */}
                        <div className="flex  flex-col gap-7 shrink-0 w-full h-full ">
                                <WithdrawalComp />
                        </div>
                     
                    </div>

                   



                </div>
            </div>


        </div>

    )
}

export default Withdrawal