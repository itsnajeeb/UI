import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ProjectChart = () => {
    const series = [
        {
            name: 'Projects',
            data: [15, 20, 35, 40, 50, 35, 25, 20] // example sparkline data
        }
    ];

    const options = {
        chart: {
            type: 'bar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 3
            }
        },
        colors: ['#ffffff'], // bars color (white for contrast)
        tooltip: {
            enabled: false
        }
    };

    return (
        <div className="bg-pink-200 rounded-xl w-full">
            <div className=" py-5 px-7">
                <h1 className='text-base text-gray-600 mb-1 '>Projects</h1>
                <div className="flex items-baseline space-x-2 flex-wrap">
                    <span className="text-xl font-semibold md:text-2xl">78,298</span>
                    <span className="font-semibold text-sm">+31.8%</span>
                </div>
            </div>
            <div className='px-7 py-5'>
                <ReactApexChart options={options} series={series} type="bar" height={40} />
            </div>
        </div>
    );
};

export default ProjectChart;
