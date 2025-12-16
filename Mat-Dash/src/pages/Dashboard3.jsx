import React from 'react'
import Performance from '../components/Dashboard1/Performance'
import Customers from '../components/Dashboard1/Customers'
import SalesOverview from '../components/Dashboard1/SalesOverview'
import RevenueByProduct from '../components/Dashboard1/RevenueByProduct'
import TotalSettelementChart from '../components/Dashboard1/TotalSettelementChart'
import { Card } from '../components/Dashboard3/Card'
import { CardData } from '../data/DashboardData'
import RevenueForecast from '../components/Dashboard2/RevenueForcast'
import SmartCard from '../components/Dashboard2/SmartCard'

const Dashboard3 = () => {
    // console.log("DASHBOARD 3 ");

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>

            <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                {/* Left side */}
                <div className="flex  flex-col gap-7 w-full ">
                    <div className="  w-full ">
                        <Card data={CardData} />
                    </div>
                </div>

            </div>

            <div className="flex gap-7 flex-col  lg:grid grid-cols-[16fr_8fr]">
                <div className="w-full h-full shrink-0 lg:min-w-0">
                    <RevenueForecast />
                </div>


                <div className="w-full min-w-0">
                    <SmartCard
                        title="Converstion Rate"
                        data={[30, 100, 10, 99, 40, 80]}
                        color="#E8E7FF"
                    />
                </div>
            </div>

            <div className="space-y-7 xl:flex xl:gap-7 w-full min-w-0">

                <div className="w-full h-full  xl:min-w-100 xl:max-w-125 ">
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

export default React.memo(Dashboard3);
