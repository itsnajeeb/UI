import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function WalletPocketCard({totalWithdrawal}) {
    const [open, setOpen] = useState(false);

    return (
        /** OUTER YELLOW BACKGROUND WRAPPER **/
        <div className="p-4 rounded-xl ">

            {/* INNER CARD-POCKET LOGIC */}
            <div className="relative w-[220px]  grid place-items-center">

                {/* BACK POCKET */}
                <div
                    className="
                        absolute -top-6 left-1/2 -translate-x-1/2
                        w-[200px] h-40 bg-[#635BFF] rounded-3xl z-0
                    "
                ></div>

                {/* CARD */}
                <div
                    className={`
                        absolute left-1/2 transform -translate-x-1/2
                        w-[180px] h-[120px] bg-white rounded-xl boxShadow
                        transition-all duration-500 ease-out
                        z-10
                        ${open ? "-top-24 opacity-100" : "-top-2 opacity-80"}
                    `}
                >
                    <div className="h-full flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold text-gray-800">$ {totalWithdrawal}</h2>
                        <p className="text-gray-600 text-xs font-semibold">
                            Withdrawal Balance
                        </p>
                    </div>
                </div>

                {/* FRONT POCKET */}
                <div
                    className="
                        absolute top-8 w-[200px] h-[110px] 
                        bg-[#635BFF] rounded-3xl shadow-xl
                        flex justify-start items-center
                        z-20
                    "
                >
                    <div className="self-start pt-5 text-center w-full">

                        {/* EYE BUTTON */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-white/20 hover:bg-white/30 transition p-2 rounded-full cursor-pointer mb-2"
                        >
                            {open ? (
                                <EyeOff size={17} className="text-white" />
                            ) : (
                                <Eye size={17} className="text-white" />
                            )}
                        </button>

                        <p className="text-white/80">Total Balance</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
