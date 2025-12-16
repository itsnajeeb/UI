import React from 'react'
import DilyRevenu from '../../components/Incomes/DailyRevenue/DailyRevenue';

const DailyRevenue = () => {

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>
            <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                <div className="flex  flex-col gap-7 shrink-0 w-full h-full ">
                    <DilyRevenu />
                </div>
            </div>
        </div>

    )
}

export default React.memo(DailyRevenue)