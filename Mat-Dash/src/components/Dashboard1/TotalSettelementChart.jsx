import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalSettelementChart = () => {
    const [state, _] = useState({
        series: [
            {
                name: "settlements",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],

        options: {
            chart: {
                type: "line",
                height: 300,
                zoom: { enabled: false },
                toolbar: { show: false },
            },

            dataLabels: { enabled: false },

            stroke: {
                curve: "smooth",
                width: 4,
                colors: ["#6A5AF9"],
            },

            markers: {
                size: 3, // Dots width
            },

            xaxis: {
                categories: ["1W", "3W", "5W", "7W", "9W", "11W", "13W", "15W", "17W"],
                labels: { style: { colors: "#9ca3af" } },

                // ⭐ Moving vertical hover line
                crosshairs: {
                    show: true,
                    width: 1,
                    stroke: {
                        color: "#6A5AF9",
                        dashArray: 5,
                    },
                },
            },

            yaxis: { show: false },

            grid: {
                borderColor: "#e5e7eb44",
                strokeDashArray: 5,
            },

            tooltip: {
                theme: "dark",
                shared: false,
                intersect: false,
                marker: { show: false },
            },
        },
    });

    return (
        <div className="bg-[#EDEBFF] bg-opacity-60 p-7 rounded-xl shadow h-full flex flex-col justify-between">

            <div className="flex items-center mb-6 space-x-4">
                <div className="p-3 bg-white rounded-xl text-indigo-600 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                    </svg>
                </div>

                <div>
                    <p className="text-gray-600 text-sm">Total settlements</p>
                    <h2 className="text-2xl font-semibold">$122,580</h2>
                </div>
            </div>

            <div className="w-full">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height={260}
                />
            </div>

            <div className="flex justify-between mt-6">
                <div>
                    <p className="text-gray-500 text-sm">Total balance</p>
                    <h3 className="text-xl font-bold">$122,580</h3>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Withdrawals</p>
                    <h3 className="text-xl font-bold">$31,640</h3>
                </div>
            </div>
        </div>
    );
};

export default TotalSettelementChart;
