import React, { useState } from 'react'
import { Clipboard } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { formattedWalletId } from '../utils/customFunction';
const Wallet = () => {
    const id = '91F3dkl9219kld912301klsd9123lk1d0'
    const [walletId,] = useState(formattedWalletId(id));
    const [copied, setCopied] = useState(false)
    const handeCopy = async () => {
        try {
            await navigator.clipboard.writeText(id);
            setCopied(true)
            if (copied) {
                toast.success("Wallet Id copied successfully ", {
                    position: 'top-center',
                    closeOnClick: false,
                    autoClose: 1500,
                    theme: 'dark'
                });
            }
        }
        catch {
            toast.error("Failed to Copy !", {
                position: 'top-center',
                closeOnClick: false,
                autoClose: 1500,
                theme: 'dark'
            })
        }
    }
    return (
        <div className='text-white flex flex-col justify-center items-center py-4'>
            <div className='flex flex-col '>
                <p className='text-sm  text-gray-500/80 '>Available Balance 90,268</p>
                <h1 className='text-[30px] font-light -mt-1.5'>0.00589 USDT</h1>
            </div>

            <div className=' flex mt-3 bg-gray-400/20 px-2 rounded-md py-1 gap-3'>
                <h2 className='flex h-fit bg-gray-400/10 px-2  rounded-md py-1 text-xs self-center items-center-safe'>Main Wallet <div className=' self-center-safe'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                </div></h2>
                <p className='text-xs self-center-safe flex gap-2' > {walletId}<span className='cursor-pointer ' onClick={handeCopy}><Clipboard size={15} /> </span> </p>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Wallet