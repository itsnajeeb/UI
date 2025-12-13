import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

const schedules = [
  {
    day: "Sun",
    color: "#4f46e5",
    text: "Sun: Meeting with Sunil",
    startDate: "2025-02-27",
    endDate: "2025-03-04",
  },
  {
    day: "Mon",
    color: "#34d399",
    text: "Mon: Meeting with Raj",
    startDate: "2025-03-01",
    endDate: "2025-03-06",
  },
  {
    day: "Tue",
    color: "#fbbf24",
    text: "Tue: Meeting with Suhail",
    startDate: "2025-03-02",
    endDate: "2025-03-05",
  },

];

const transformData = (data) => {
  return [
    {
      name: "Schedule",
      data: data.map(item => ({
        x: item.day,
        y: [
          new Date(item.startDate).getTime(),
          new Date(item.endDate).getTime(),
        ],
        fillColor: item.color,
        meeting: item.text,
      }))
    }
  ];
};



export default function ApexWeeklySchedule() {
  const chartSeries = useMemo(() => transformData(schedules), []);

  const chartOptions = {
    chart: {
     
      height: 350,
      type: "rangeBar",
      toolbar: {
        show: true,
        tools: { download: false, selection: false, zoom: false, zoomin: false, zoomout: false, pan: false, reset: true },
      },

      animations: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const data = opts.w.config.series[0].data[opts.dataPointIndex];

        // sirf first word / short label
        return data.meeting
      },
      style: {
        colors: ["#fff"],
        fontSize: "11px",
        fontWeight: 600,
      },
    },

    stroke: {
      width: 0,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 22, // Set the radius in pixels for rounded edges
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        barHeight: "55%",

      },
    },
    // X-Axis 
    xaxis: {
      axisBorder: {
        show: false,
      },
      type: "datetime",
      min: new Date("2025-02-25").getTime(),
      max: new Date("2025-03-10").getTime(),
      labels: {
        // Format labels for IST Locale (India)
        formatter: function (val) {
          return new Date(val).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
          });
        },
      },

    },

    yaxis: {
      reversed: true,
      labels: {
        style: {
          fontWeight: 300,
          fontSize: 12,
        },
      },
    },

    colors: schedules.map(s => s.color),

    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const data = w.config.series[seriesIndex].data[dataPointIndex];

        // Convert timestamps (data.y[0] and data.y[1]) to formatted date strings
        const startTime = new Date(data.y[0]).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short"
        });
        const endTime = new Date(data.y[1]).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short"
        });

        return `<div class="p-2 outline bg-gray-900/85 rounded border-none text-sm">
                  <div class="text-xs text-white mt-1 ">
                       ${startTime} - ${endTime}
                    </div>
                </div>`;
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 md:p-8">
      <h2 className="text-lg font-semibold text-[#29343d] manrope-fontFamily">
        Weekly Schedules
      </h2>

      <div id="chart ">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="rangeBar"
          height={300}
        />
      </div>
    </div>
  );
}