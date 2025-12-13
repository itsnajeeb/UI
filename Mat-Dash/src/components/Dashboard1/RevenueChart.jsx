import React from "react";
import ReactApexChart from "react-apexcharts";

const RevenueChart = () => {
  const series = [
    { name: "2025", data: [100, 80, 78, 60, 40, 70, 20, 30] },
    { name: "2024", data: [50, 60, 30, 55, 80, 60, 95, 110] },
    { name: "2023", data: [35, 45, 40, 50, 38, 60, 40, 45] },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#5A55FE", "#FF6B81", "#2ED47A"],
    },
    colors: ["#5A55FE", "#FF6B81", "#2ED47A"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
    },
    yaxis: {
      min: 0,
      max: 120,
      labels: { style: { colors: "#9CA3AF" } },
    },
    grid: { borderColor: "#E5E7EB" },
    legend: { show: false }, // legend ko upar nahi chahiye
    tooltip: { shared: true },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow h-fit  ">

      {/* HEADER + YEARS → LG pe ek row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-0 ">

        {/* LEFT SIDE: title + icon */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="p-3 rounded-xl bg-[#ECEBFF] text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>
            </svg>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Revenue Forecast</h2>
            <p className="text-gray-500 text-sm">Overview of Profit</p>
          </div>
        </div>

        {/* RIGHT SIDE: YEARS FROM SERIES DYNAMICALLY */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          {series.map((item, index) => (
            <span key={index} className="cursor-pointer hover:text-blue-600">
              {item.name}
            </span>
          ))}
        </div>

      </div>

      {/* CHART */}
      <ReactApexChart
        options={options}
        series={series}
        height={350}
        type="area"
      />
    </div>
  );
};

export default RevenueChart;
