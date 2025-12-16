import React from 'react'
import WelcomeCard from '../components/Dashboard2/WelcomeCard'
import RevenueByProduct from '../components/Dashboard1/RevenueByProduct'
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

const Dashboard2 = () => {
    // console.log("DASHBOARD-2 ");

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>

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
                    <DailyActivities />
                </div>

                <div className='h-full '>
                    <FigmaTips />
                </div>
            </div>
        </div>

    )
}

export default React.memo(Dashboard2);
