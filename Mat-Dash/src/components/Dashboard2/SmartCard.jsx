import React from "react";
import ReactApexChart from "react-apexcharts";

const SmartCard = () => {
    
    const series = [
        {
            name: "Conversion",
            data: [20, 40, 25, 55, 35, 60],
        },
    ];

    const options = {
        chart: {
            type: "area",
            sparkline: { enabled: true },
        },
        stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#4F46E5"],
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0.4,
                opacityFrom: 0.4,
                opacityTo: 0.05,
                stops: [0, 90, 100],
            },
        },
        tooltip: { enabled: false },
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm  h-full ">
            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">Annual Profit</h2>

            {/* Conversion Card */}
            <div className="bg-[#E8E7FF] rounded-2xl p-5 mb-6 w-full shrink-0 overflow-hidden ">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 font-medium">Conversion Rate</span>
                    <span className="text-2xl font-semibold md:text-3xl">18.4%</span>
                </div>

                <div className="w-full shrink-0">
                    <ReactApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={90}
                />
                </div>
            </div>

            {/* List Items */}
            <div className="space-y-4 manrope-fontFamliy">
                {/* Item 1 */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-medium text-gray-600 text-sm">Added to Cart</p>
                        <p className="text-gray-600 text-sm font-medium">5 clicks</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-sm">$21,120.70</p>
                        <p className="text-green-500 text-sm font-medium">+13.2%</p>
                    </div>
                </div>

                <hr />

                {/* Item 2 */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-medium text-gray-600 text-sm">Reached to Checkout</p>
                        <p className="text-gray-600 text-sm font-medium">12 clicks</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">$16,100.00</p>
                        <p className="text-red-500 text-sm">-7.4%</p>
                    </div>
                </div>

                <hr />

                {/* Item 3 */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-medium text-gray-600 text-sm">Added to Cart</p>
                        <p className="text-gray-600 text-sm font-medium">24 views</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">$21,120.70</p>
                        <p className="text-green-500 text-sm">+9.3%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartCard;
