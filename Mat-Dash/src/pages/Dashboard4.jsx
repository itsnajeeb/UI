import React from 'react'
import { CardData } from '../data/DashboardData'
import TopTab from '../components/Dashboard4/TopTab'
import Crousel from '../components/Dashboard4/Slider'
import Card1 from '../components/Dashboard4/Card1'
import Card2 from '../components/Dashboard4/Card2'

const Dashboard4 = () => {
    // console.log("DASHBOARD 3 ");

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>

            <div className="xl:flex flex-col xl:gap-7 w-full  space-y-7 xl:space-y-0">
                {/* Left side */}
                <div className="flex flex-col gap-7 w-full ">
                    <div className="  w-full ">
                        <TopTab data={CardData} />
                    </div>
                </div>
                
                <div className="">
                        <Crousel  />
                </div>

                <div className="mt-10">
                        <Card1  />
                </div>

                <div className="mt-10">
                        <Card2  />
                </div>

            </div>







        </div>

    )
}

export default React.memo(Dashboard4);
