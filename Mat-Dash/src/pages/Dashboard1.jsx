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

const Dashboard1 = () => {
    // console.log("DASHBOARD-1 ");
    return (

        <div className='bg-[#F4F7FB] space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>
            <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
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

            <div className="space-y-7 xl:flex xl:gap-7 w-full min-w-0 h-fit ">
                <div className="w-full xl:min-w-[400px] xl:max-w-[500px]  shrink-0 ">
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

    )
}

export default React.memo(Dashboard1);
