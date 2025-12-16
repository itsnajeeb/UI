import React from 'react'
import WithdrawalComp from '../../components/Withdrawal/Withdrawal';

const Withdrawal = () => {

    return (

        <div className='bg-dashboard-bg space-y-6 px-4 py-5 rounded-3xl md:p-10 w-full overflow-hidden'>
            <div className="xl:flex xl:gap-7 w-full overflow-hidden space-y-7 xl:space-y-0">
                {/* Left side */}
                <div className="flex  flex-col gap-7 shrink-0 w-full h-full ">
                    <WithdrawalComp />
                </div>

            </div>
        </div>

    )
}

export default React.memo(Withdrawal)