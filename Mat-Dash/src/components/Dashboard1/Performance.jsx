import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

const Performance = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow h-full flex-1 mb-0 ">
            <div>
                <h1 className='text-base font-semibold'>Your Performance</h1>
                <p className='text-sm'>Last check on 25 february</p>
            </div>


            <div className='sm:grid sm:grid-cols-2 sm:mt-2'>
                <div className='flex justify-center flex-col items-center mb-8 
                md:justify-between md:items-start 
                '>

                    <div className='flex justify-center flex-col items-center space-y-4 mt-6
                    md:flex-row md:gap-4 md:items-start 
                    '>
                        <div className='bg-[#ECEBFF] text-blue-600 w-fit p-3 rounded-xl self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </div>

                        <div>
                            <h4 className='font-semibold'>64 new orders</h4>
                            <p className='text-base text-gray-500/90'>Processing</p>
                        </div>
                    </div>

                    <div className='flex justify-center flex-col items-center space-y-4 mt-6
                    md:flex-row md:gap-4 md:items-start md:mt-1
                    
                    '>
                        <div className='bg-[#FED4DE] text-red-400 w-fit p-3 rounded-xl self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blend-icon lucide-blend"><circle cx="9" cy="9" r="7" /><circle cx="15" cy="15" r="7" /></svg>
                        </div>
                        <div>
                            <h4 className='font-semibold'>4 orders</h4>
                            <p className='text-base text-gray-500/90'>On holds</p>
                        </div>
                    </div>

                    <div className='flex justify-center flex-col items-center space-y-4 mt-6
                    md:flex-row md:gap-4 md:items-start md:mt-1
                     '>
                        <div className='bg-[#DCF8F7] text-[#24b4af] w-fit p-3 rounded-xl self-center text-2xl'>

                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 text-secondary" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:pills-3-linear">
                                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2m12.757-2.379A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z"></path>
                                    <path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"></path>
                                    <path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"></path>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <h4 className='font-semibold '>12 orders</h4>
                            <p className='text-base text-gray-500/90'>Delivered</p>
                        </div>
                    </div>
                </div>

                <ApexChart />
            </div>
        </div>
    )
}

const ApexChart = () => {
    const [state, _] = useState({
        series: [30, 20, 10, 20, 20], // 5 equal color segments
        options: {
            chart: {
                type: "donut",
            },
            labels: ["A", "B", "C", "D", "E"], // not visible but required by apex
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            stroke: {
                width: 1,
            },
            colors: ["#ff6188", "#f7c600", "#ecdfac", "#e3f8f7", "#22FFFF"], // segment colors
            plotOptions: {
                pie: {
                    donut: {
                        size: "80%",
                    },
                    startAngle: -115,
                    endAngle: 115,
                },
            },
            grid: {
                padding: {
                    bottom: -120,
                },
            },
        },
    });

    return (
        <div style={{ textAlign: "center" }} >
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height={260}
            />

            {/* Value under chart */}
            <h1 style={{ fontSize: "40px", marginTop: "-40px", fontWeight: 600 }}>
                275
            </h1>
            <p style={{ fontSize: "15px", marginTop: "-10px", color: "#555" }}>
                Learn insights how to manage all aspects of your startup.
            </p>
        </div>
    );
};


export default Performance