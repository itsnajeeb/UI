import React from 'react'
import WithdrawalHistoryComp from '../../components/Withdrawal/WithdrawalHistory';

const WithdrawalHistory = () => {

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>
            <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                {/* Left side */}
                <div className="flex-1 min-w-0 transition-all duration-300">
                    < WithdrawalHistoryComp />
            </div>

        </div>
        </div >

    )
}

export default React.memo(WithdrawalHistory)