import React from 'react'
import ReactApexChart from 'react-apexcharts';

const TotalIncome = () => {
    const options = {
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            sparkline: { enabled: true },
        },
        stroke: {
            curve: "smooth",
            width: 4,
            colors: ["#ff4fa3"],   // same pink color
        },
        tooltip: {
            enabled: true,
            theme: "light",
            x: {
                show: false
            },
            y: {
                formatter: (value) => `${value}`,
            },
        },
    };
    const series = [
        {
            name: "Income",
            data: [20, 35, 18, 40, 32, 55], // Hover will show 20, 35, 18...
        },
    ];

    return (
        <div className='bg-white px-7 py-6 shadow rounded-lg flex flex-col gap-5'>
            <div className='flex gap-5 items-center'>
                <div className='bg-[#FED4DE] p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-24 text-error" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:box-linear" width="24" height="24"><path fill="none" stroke="#FF6692" strokeLinecap="round" strokeWidth="1.5px" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></path></svg>                </div>
                <h1 className='manrope-fontFamliy text-base font-medium'>Total Income</h1>
            </div>

            <div className='flex flex-row  justify-between items-center '>
                <div className='flex mb-2 flex-col '>
                    <h2 className='font-sans font-semibold manrope-fontFamliy text-2xl text-[#222]'>$680</h2>
                    <p className='text-green-500 font-semibold'>+18</p>
                </div>
                <div className="w-[50%]">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="line"
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default TotalIncome