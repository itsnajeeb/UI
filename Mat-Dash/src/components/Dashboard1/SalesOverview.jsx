import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const SalesOverviewRadialChart = () => {
    // Example percentage fill for each radial bar 
    const [chartData] = useState({
        series: [75, 60, 45],
        options: {
            chart: {
                height: 300,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    // Set up the track (the grey, unfilled part)
                    startAngle: -0,
                    endAngle: 280,
                    track: {
                        show: true,
                        background: '#e0e0e0',
                        strokeWidth: '70%',
                        margin: 5, // Space between the rings
                    },
                    dataLabels: {
                        enabled: false,
                    },
                }
            },
            // Define the colors for the three series/rings
            colors: ['#6c63ff', '#1ee3cf', '#ff669a'], // Purple, Teal, Pink
            labels: ['Series 1', 'Series 2', 'Series 3'],
            legend: {
                show: false
            },
            stroke: {
                lineCap: 'round',
                width: 10,
            }
        },
    });

    // percentage positioning for the labels.
    const customLabels = (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            // Center the entire label overlay div
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            pointerEvents: 'none'
        }}>

            {/* 0% - Top Center */}
            <span style={{
                position: 'absolute',
                top: '0%',
                left: '50%',
                transform: 'translate(-50%, -150%)', // Adjusted offset for separation
                fontSize: '12px',
                color: '#666'
            }}>0%</span>

            {/* 25% - Right Center */}
            <span style={{
                position: 'absolute',
                top: '50%',
                right: '0%',
                transform: 'translate(150%, -50%)', // Adjusted offset for separation
                fontSize: '12px',
                color: '#666'
            }}>25%</span>

            {/* 50% - Bottom Center */}
            <span style={{
                position: 'absolute',
                bottom: '-5%',
                left: '50%',
                transform: 'translate(-50%, 150%)', // Adjusted offset for separation
                fontSize: '12px',
                color: '#666'
            }}>50%</span>

            {/* 75% - Left Center */}
            <span style={{
                position: 'absolute',
                top: '50%',
                left: '0%',
                transform: 'translate(-150%, -50%)', // Adjusted offset for separation
                fontSize: '12px',
                color: '#666'
            }}>75%</span>
        </div>
    );


    return (
        <div className="bg-white p-6 rounded-2xl  shadow " style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', position: 'relative' }}>

            <h2 className='text-lg font-semibold'>Sales Overview</h2>
            <p style={{ color: '#999', margin: '0 0 15px 0' }}>Last 7 days</p>

         
            <div style={{ position: 'relative' }} className='h-full'>
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="radialBar"
                    height={300}
                />
                {customLabels}
            </div>
        </div>
    );
};

export default SalesOverviewRadialChart;