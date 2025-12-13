import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomerChart = () => {
    const series = [{
        name: 'Customers',
        data: [30, 100, 10, 99, 40, 80]
    }];

    const options = {
        chart: {
            type: 'area',
            height: 80,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['rgb(22,205,199)'] // <-- line color here
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            enabled: false
        }
    };


    return (
        <div className="bg-[rgba(22,205,199,0.15)]  rounded-xl w-full h-full">
            <div className="px-7 py-8">
                <h1 className='text-base text-gray-600 mb-1 '>Customers</h1>
                <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-semibold">36,358</span>
                    <span className="font-semibold text-sm">-12%</span>
                </div>
            </div>
            <ReactApexChart options={options} series={series} type="area" height={50} />
        </div>
    );
};

export default CustomerChart;
