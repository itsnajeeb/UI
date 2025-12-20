import React, { useState } from "react";
import chartImg from '/assets/images/chart_img.png'
import PieChartMics from "./CommonComponents/PieChart";

const Toekmics = () => {

    const [active, setActive] = useState("funding");
    const data = [
        {
            sno: 1,
            label: "Symbol",
            value: "CIC"
        },
        {
            sno: 2,
            label: "Initial Value",
            value: "1 ETH=3177.38 CIC"
        },
        {
            sno: 3,
            label: "Type",
            value: "ERC20"
        },


    ]
    return (
        <div className="min-h-screen bg-linear-to-br from-[#010314] via-[#010314] to-[#010314] flex items-center justify-center p-6 manrope-fonts">
            <div className="max-w-8xl  w-full flex ">

                {/* LEFT SIDE */}
                <div className=" flex flex-col justify-center items-center w-[49%]">
                    {/* Donut Chart */}
                    <div className="flex justify-center mb-8">
                        <PieChartMics />
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-[#1C1D34] rounded-full py-3 flex px-3 ">
                            <button
                                onClick={() => setActive("funding")}
                                className={`px-6 py-2 font-semibold rounded-full text-sm cursor-pointer transition ${active === "funding"
                                    ? "bg-white text-black"
                                    : "text-gray-400"
                                    }`}
                            >
                                Funding Allocation
                            </button>
                            <button
                                onClick={() => setActive("token")}
                                className={`px-6 py-2 rounded-full font-semibold text-sm cursor-pointer transition ${active === "token"
                                    ? "bg-white text-black"
                                    : "text-gray-400"
                                    }`}
                            >
                                Token Distribution
                            </button>
                        </div>
                    </div>



                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#3fbfa8]" />
                            Contingency: 70%
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#2563eb]" />
                            Business Development: 20%
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#0ea5e9]" />
                            Investor: 30%
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#1e40af]" />
                            Poland: 15%
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#334155]" />
                            Legal & Regulation: 20%
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#64748b]" />
                            Czech Republic: 50%
                        </div>
                    </div>
                </div>

                {/* Middle Line */}
                <div className="  bottom-0  my-10 text-white justify-center w-[2%]  ">
                    <div className=" h-full w-[1px]  bg-linear-to-b 
                            from-transparent 
                            via-[#fff] 
                            to-transparent
                            opacity-60
                        " />
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col justify-center items-center  w-[49%]">
                    {/* Coin Image */}
                    <div className="flex justify-center mb-6  w-90">
                        <img
                            src={chartImg}
                            alt="Ethereum"
                            className="w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)]"
                        />
                    </div>

                    <p className="text-gray-400 text-base mb-8 text-left">
                        Ethereum is a decentralized, open-source <br />
                        blockchain with smart contract
                    </p>

                    {/* Info List */}
                    <div className="space-y-4">
                        {
                            data.map((dt, idx) => {
                                return (
                                    <div className="flex items-center gap-3 text-white" key={idx}>
                                        <span className="w-8 h-8 flex items-center justify-center rounded-full text-base text-white bg-[#1B1D2C] font-bold">
                                            {dt.sno}
                                        </span>
                                        <span className="text-white font-bold">{dt.label}: <b className="text-white">{dt.value}</b></span>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Toekmics;
