import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { month: "Apr", value: 60 },
  { month: "May", value: 50 },
  { month: "June", value: 80 },
  { month: "July", value: 90 },
  { month: "Aug", value: 40 },
  { month: "Sept", value: 55 },
  { month: "Oct", value: 70 },
];

const WeeklyStats = () => {
  return (
    <div className="bg-white rounded-xl shadow  p-6 w-full manrope-fontFamily h-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg text-main-text font-semibold manrope-fontFamily">Weekly Stats</h2>
        <p className="text-sm text-subtle-text">Overview of Profit</p>
      </div>

      {/* Recharts Bar Chart */}
      <div className="h-40 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data.map((entry) => (
                <Cell
                  key={entry.month}
                  fill={entry.month === "June" ? "#6366F1" : "#E5E7EB"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Divider */}
      <div className=" border-gray-200 mb-4"></div>

      {/* Summary Section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 p-2 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:course-down-linear" width="24" height="24"><path fill="none" stroke="#FF6692" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" d="m22 18l-7.38-7.335c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582"></path></svg>
          </div>
          <div>
            <p className="text-sm text-subtle-text">Sales</p>
            <p className="font-semibold text-main-text">$36,850</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 p-2 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar f-s-20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="solar:chart-linear" width="24" height="24"><g fill="none" stroke="#635BFF" strokeWidth="1.5px"><path strokeLinecap="round" d="M22 22H2" stroke="#635BFF" fill="none" strokeWidth="1.5px"></path><path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22m0 0V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17m0 0V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22" stroke="#635BFF" fill="none" strokeWidth="1.5px"></path></g></svg>
          </div>
          <div>
            <p className="text-sm text-subtle-text">Expenses</p>
            <p className="font-semibold text-main-text">$4,720</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyStats;
