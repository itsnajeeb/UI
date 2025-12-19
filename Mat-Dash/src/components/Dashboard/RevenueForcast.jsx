import React from "react";
import ReactApexChart from "react-apexcharts";
import useResponsiveChart from "../../hooks/useRevenueForcase";

// Define the colors based on the image
const TEXT_COLOR = "#635BFF"; // Blue (2024)
const SECONDARY_COLOR = "#FF6692"; // Pink (2025)

const RevenueForecast = () => {
    const chartHeight = useResponsiveChart()

    // Data structure must be [Start_Point, End_Point] for Range Bar chart type
    const series = [
        {
            name: "2024",
            // Format: [0, positive value]
            data: [
                { x: "Jan", y: [0, 1.8] },
                { x: "Feb", y: [0, 4.1] },
                { x: "Mar", y: [0, 2.2] },
                { x: "Apr", y: [0, 3.5] },
                { x: "May", y: [0, 2.1] },
                { x: "Jun", y: [0, 3.2] },
                { x: "Jul", y: [0, 2.3] },
                { x: "Aug", y: [0, 3.6] },
                { x: "Sep", y: [0, 2.5] },
            ]
        },
        {
            name: "2025",
            // Format: [negative value, 0]
            data: [
                { x: "Jan", y: [-2.0, 0] },
                { x: "Feb", y: [-2.8, 0] },
                { x: "Mar", y: [-1.7, 0] },
                { x: "Apr", y: [-3.4, 0] },
                { x: "May", y: [-2.8, 0] },
                { x: "Jun", y: [-2.7, 0] },
                { x: "Jul", y: [-3.5, 0] },
                { x: "Aug", y: [-2.7, 0] },
                { x: "Sep", y: [-4.5, 0] },
            ]
        }
    ];

    const options = {
        chart: {
            type: "rangeBar",
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                rangeBarGroupRows: true,
                borderRadius: 6,
                borderRadiusApplication: "around",
                borderRadiusWhenStacked: "all",
                columnWidth: "15%",
            },
        },
        stroke: { show: false },
        colors: [TEXT_COLOR, SECONDARY_COLOR],
        dataLabels: { enabled: false },

        grid: {
            border: 2,
            borderColor: "#EEF1F7",
            xaxis: { lines: { show: true, colors: ['#EEF1F7'] } },
            yaxis: { lines: { show: true } }
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            markers: { radius: 12 },
            show: false
        },
        xaxis: {
            type: "category",
            labels: { style: { colors: "#9CA3AF" } },
            axisBorder: { show: false }
        },

        yaxis: {
            min: -5.0,
            max: 5.0,
            tickAmount: 4,
            labels: {
                formatter: (v) => v.toFixed(1),
                style: { colors: "#9CA3AF" },
            },
        },
    };

    return (
        <div className="w-full bg-white shadow rounded-2xl p-8 h-full overflow-hidden">

            {/* Header with Year */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">Revenue Forecast</h2>

                    {/* YEARS moved to header now */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: TEXT_COLOR }}></span>
                            <span className="text-gray-700 text-sm">2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: SECONDARY_COLOR }}></span>
                            <span className="text-gray-700 text-sm">2025</span>
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mt-1">Overview of Profit</p>
            </div>
            {/* End Header */}

            {/* Chart */}
            <ReactApexChart
                options={options}
                series={series}
                type="rangeBar"
                height={chartHeight}
            />

            {/* Bottom Stats */}
            <div className="mt-1 flex flex-col items-center  manrope-fontFamily sm:grid sm:grid-cols-3
            lg:mt-5 lg:gap-4
            ">

                {/* Total */}
                <div className="flex items-center gap-4 p-4 rounded-xl" >
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#ECE9FF', color: TEXT_COLOR }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 text-dark" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:pie-chart-2-linear" width="24" height="24"><g fill="none" stroke="#29343D" strokeWidth="1.5px"><path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z" stroke="#29343D" fill="none" strokeWidth="1.5px"></path><path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z" stroke="#29343D" fill="none" strokeWidth="1.5px"></path></g></svg>                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className="font-semibold text-gray-800 text-lg manrope-fontFamily">$96,640</p>
                    </div>
                </div>

                {/* Profit */}
                <div className="flex items-center gap-4 p-4 rounded-xl" >
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#ECE9FF', color: SECONDARY_COLOR }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 text-primary" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:dollar-minimalistic-linear" width="24" height="24"><g fill="none" stroke="#635BFF" strokeWidth="1.5px"><circle cx="12" cy="12" r="10" stroke="#635BFF" fill="none" strokeWidth="1.5px"></circle><path strokeLinecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5" stroke="#635BFF" fill="none" strokeWidth="1.5px"></path></g></svg>                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Profit</p>
                        <p className="font-semibold text-gray-800 text-lg">$48,820</p>
                    </div>
                </div>

                {/* Earnings */}
                <div className="flex items-center gap-4 p-4 rounded-xl" >
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#FED4DE', color: TEXT_COLOR }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 text-error" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:database-linear" width="24" height="24"><g fill="none" stroke="#FF6692" strokeWidth="1.5px"><path strokeLinecap="round" d="M4 18V6m16 0v12" stroke="#FF6692" fill="none" strokeWidth="1.5px"></path><path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Zm8 2c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 6c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="#FF6692" fill="none" strokeWidth="1.5px"></path></g></svg>                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Earnings</p>
                        <p className="font-semibold text-gray-800 text-lg">$48,450</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default RevenueForecast;