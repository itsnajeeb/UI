import React from 'react'

const Wallet = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center py-4'>
            <div className='flex flex-col '>
                <p className='text-sm  text-gray-500/80 '>Available Balance 90,268</p>
                <h1 className='text-[30px] font-light -mt-1.5'>0.00589 BTC</h1>
            </div>


            <div className=' flex mt-3 bg-gray-400/20 px-2 rounded-md py-1 gap-3'>

                <h2 className='flex h-fit bg-gray-400/10 px-2  rounded-md py-1 text-xs self-center items-center-safe'>Main Wallet <div className=' self-center-safe'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                </div></h2>

                <p className='text-xs self-center-safe'>03345X...8d3e</p>
            </div>
        </div>
    )
}

export default Wallet