import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';


const CARD_COLOR_START = "#8b5cf6";
const CARD_COLOR_END = "#5b21b6";
const TEXT_COLOR = '#FFFFFF';
const SECONDARY_COLOR = '#D1D5DB';

const Card = ({ bgColor, data }) => {


    return (
        // Main Container: Ensures it takes full width of its parent on all devices.
        <div className={` rounded-xl w-full h-full p-6 sm:p-6 lg:p-5 `} style={{ backgroundColor: bgColor }}>
            {
                data.map((item, index) => {
                    let finalOptions;
                    let finalSeries;
                    let chartType;

                    // Check the data structure to get series and options.
                    if (typeof item.chartState === 'function') {
                        // This handles the STACKED BAR data structure (like userData)
                        const config = item.chartState();
                        finalOptions = config.options;
                        finalSeries = config.series;
                        chartType = finalOptions.chart.type || 'bar'; // Default to bar if type is missing
                    } else if (item.series && item.options) {
                        // This handles the AREA CHART data structure (like customerData)
                        finalOptions = item.options;
                        finalSeries = item.series;
                        chartType = finalOptions.chart.type || 'area'; // Default to area if type is missing
                    } else {
                        // Handle case where chart data is missing or invalid
                        return <div key={index}>No chart data available.</div>;
                    }
                    return (
                        <div key={item.id || index}>
                            {/* Header Section */}
                            <div className='flex items-center justify-between ' >
                                <div className="py-2">
                                    <h1 className='text-base text-gray-700 mb-1 font-semibold '>{item.title}</h1>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-2xl font-semibold">{item.subTitle}</span>
                                        <span className={`font-semibold text-sm ${item.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                            {item.profit}
                                        </span>
                                    </div>
                                </div>
                                <div className='bg-white h-fit p-2.5 rounded-xl shrink-0' >
                                    {item.icon}
                                </div>
                            </div>

                            {/* Chart Section */}
                            <div className="mt-2 w-full overflow-hidden">
                                <ReactApexChart
                                    options={finalOptions}
                                    series={finalSeries}
                                    type={chartType}
                                    height={120}
                                    
                                />
                            </div>
                        </div>
                    );
                })
            }
        </div >
    );
};
export default Card