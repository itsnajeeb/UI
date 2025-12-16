import React, { useState } from 'react'

const Customers = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow    ">
            <div className='flex justify-between '>
                <div>
                    <h1 className='text-lg font-semibold'>Customers</h1>
                    <p className='text-base text-gray-500/90'>Last 7 days</p>
                </div>
                <div>
                    <h4 className='text-sm text-green-500 font-semibold'>+26.5%</h4>
                </div>
            </div>

            <TwoLineChart />
        </div>
    )
}


import ReactApexChart from "react-apexcharts";

const TwoLineChart = () => {
    const [chartData, _] = useState({
        series: [
            {
                name: "This Week",
                data: [30, 40, 35, 50, 49, 60, 70],
            },
            {
                name: "Last Week",
                data: [20, 30, 28, 40, 35, 50, 55],
            },
        ],
        options: {
            chart: {
                type: "line",
                toolbar: { show: false },
            },
            stroke: {
                curve: "smooth",
                width: [4, 3], // Dark Energetic, Light Thin
            },
            colors: ["#3b82f6", "#93c5fd"], // Blue dark + light
            dataLabels: { enabled: false },
            legend: { show: false },
            grid: {
                strokeDashArray: 5,
                padding: { bottom: 20 },
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                labels: { style: { colors: "#9ca3af" } },
            },
            yaxis: { show: false },
            markers: {
                size: 4,
                colors: ["#fff"],
                strokeColors: ["#3b82f6", "#93c5fd"],
                strokeWidth: 3,
            },
        },
    });

    return (
        <div className="text-center  ">
            <div className='h-[230px] lg:h-[250px] '>
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height="100%"
                    width="100%"
                />
            </div>

            {/* Legends Under Chart */}
            <div className="flex flex-col items-center gap-2 justify-between  ">
                <div className='flex  justify-between w-full'>
                    <p className="text-sm font-semibold text-blue-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                        April 07 - April 14
                    </p>
                    <p className='text-sm'>6,380</p>
                </div>

                <div className='flex justify-between  w-full'>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-300 inline-block"></span>
                        Last Week
                    </p>
                    <p className='text-sm'>4,380</p>
                </div>

            </div>
        </div>
    );
};



export default Customers