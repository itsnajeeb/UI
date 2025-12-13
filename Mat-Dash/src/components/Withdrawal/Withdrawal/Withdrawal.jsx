import * as React from 'react';
import Breadcrumb from "../../Breadcrumb";
import WalletPocketCard from '../Balance';
import { Clipboard } from 'lucide-react';

export default function Withdrawal() {

    const [wallet, setWallet] = React.useState("0xEbf79B98479b319800239Ac4C1581226f28f3f1B");
    const [copied, setCopied] = React.useState(false);
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(wallet);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset text after 1.5s
    };
    
    const isWalletConnected = true;
    return (
        <>
            <Breadcrumb title={"Withdrawal "} fontStyle='' />
            <div className="bg-white  manrope-fontFamliy flex justify-center items-center py-10  gap-5 overflow-visible rounded-xl">
                <div className="relative h-[150px] overflow-visible w-fit  ">
                    <WalletPocketCard totalWithdrawal={"10,200"} />
                </div>
                <div className='bg-white boxShadow px-10 max-w-[400px] py-7 rounded-xl'>
                    <h1>
                        {isWalletConnected ? (
                            <span className='text-green-500 text-lg'>Wallet is Connected</span>
                        ) : (
                            <span className='text-red-500 text-lg'>Wallet is not Connected</span>
                        )}
                    </h1>

                    <div className='flex flex-wrap w-fit gap-1'>

                        <h1 className='font-medium whitespace-nowrap'>
                            Your Wallet Id :
                        </h1>
                        <div className="relative group flex self-center ">

                            {/* ICON */}
                            <span
                                onClick={copyToClipboard}
                                className="ml-1 cursor-pointer text-gray-600 hover:text-black transition"
                            >
                                <Clipboard size={16} />
                            </span>
                            {/* OPTIONAL COPIED FEEDBACK */}
                            {copied && (
                                <span className="text-green-600 text-sm ml-1 self-center">
                                    Copied!
                                </span>
                            )}

                            {/* TOOLTIP */}
                            <div
                                className="
                                absolute -top-8 left-1/2 -translate-x-1/2
                                bg-black/70 text-white text-xs px-3 py-2  rounded
                                opacity-0 group-hover:opacity-100
                                pointer-events-none
                                transition-all duration-300
                                whitespace-nowrap  "
                            >
                                Click to copy ID
                            </div>
                        </div>

                        {/* ID + COPY ICON */}
                        <div className="flex items-center gap-1 break-all text-gray-700 relative">
                            {wallet}
                        </div>
                    </div>

                </div>

            </div>



            <div className='w-full overflow-hidden rounded-xl  ' >
                <div className='bg-white shadow-xl rounded-xl overflow-hidden px-2 py-4'
                >

                    <div className='flex flex-col justify-center max-w-2xl mx-auto gap-8 my-7'>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder=" "
                                value={wallet}
                                onChange={(e) => setWallet(e.target.value)}
                                className=" peer w-full rounded-lg px-4 py-3 border-2 border-indigo-700
                                            outline-none bg-transparent
                                            placeholder-transparent "
                            />

                            <label
                                className={`  absolute left-4 bg-white px-1 transition-all duration-300
                                         ${wallet
                                        ? "-top-3 text-sm text-indigo-600"   // When value exists
                                        : "top-3 text-base text-gray-700 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600"
                                    } `}
                            >
                                Wallet Address
                            </label>
                        </div>


                        <div className="relative w-full">
                            <input
                                type="text"
                                className="peer w-full border-2 border-indigo-700 rounded-lg px-4 py-3 
                                        outline-none bg-transparent
                                        placeholder-transparent
                                        focus:border-indigo-500 " />

                            <label
                                className="absolute left-4 top-3 text-gray-700 transition-all duration-300 
                                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                                             peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600
                                             bg-white px-1 ">
                                Enter Amount in USDT
                            </label>
                        </div>

                        <div className="group relative w-fit mx-auto">
                            <button
                                className="
      relative overflow-hidden px-10 py-3 rounded-md font-semibold
      text-white bg-[#635BFF] transition-all duration-300 cursor-pointer
    "
                            >
                                {/* BG SLIDE */}
                                <span
                                    className="
        absolute inset-0 bg-white -translate-x-full
        group-hover:translate-x-0 transition-transform duration-500 ease-out
        z-10
      "
                                ></span>

                                {/* OLD TEXT hides immediately */}
                                <span
                                    className="
        relative z-20 block transition-all duration-300
        group-hover:opacity-0 group-hover:translate-x-10
      "
                                >
                                    Withdrawal
                                </span>

                                {/* NEW TEXT STARTS IMMEDIATELY (same as BG) */}
                                <span
                                    className="
        absolute inset-0 flex items-center justify-center text-[#635BFF]
        -translate-x-full opacity-0
        group-hover:translate-x-0 group-hover:opacity-100
        transition-all duration-500 ease-out
        z-20
      "
                                >
                                    Withdrawal
                                </span>

                                {/* BORDER DRAW (last stage) */}
                                <div className="border-anim z-30">
                                    <span className="top"></span>
                                    <span className="right"></span>
                                    <span className="bottom"></span>
                                    <span className="left"></span>
                                </div>
                            </button>
                        </div>









                    </div>

                </div>
            </div>
        </>

    );
}
