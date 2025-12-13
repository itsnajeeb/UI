import React from "react";

const activities = [
  {
    time: "09.30 am",
    color: "bg-indigo-500",
    title: "Payment received from John Doe of $385.90",
    textColor: "29343d",
    fontWeight: "font-normal"
  },
  {
    time: "10.30 am",
    color: "bg-yellow-400",
    title: "New sale record",
    link: "#ML-3467",
    textColor: "#29343d",
    fontWeight: "font-semibold",
  },
  {
    time: "12.30 pm",
    color: "bg-yellow-400",
    title: "Payment was made of $64.95 to Michael",
    textColor: "29343d",
    fontWeight: "font-normal"
  },
  {
    time: "12.30 pm",
    color: "bg-teal-400",
    title: "New sale recorded",
    link: "#ML-3467",
    textColor: "#29343d",
    fontWeight: "font-semibold",

  },
  {
    time: "12.30 pm",
    color: "bg-pink-400",
    title: "Project meeting",
    textColor: "29343d",
    fontWeight: "font-normal"
  },
  {
    time: "12.30 pm",
    color: "bg-indigo-500",
    title: "Payment received from John Doe of $385.90",
    textColor: "29343d",
    fontWeight: "font-normal"
  },
];

const DailyActivities = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">
      <h2 className="text-lg mb-6 text-[#29343d] font-semibold manrope-fontFamily">
        Daily activities
      </h2>

      <div className="relative">
        {activities.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[60px_20px_1fr]  w-full gap-2 rounded-lg" >
            {/* Time */}
            <div className="text-sm font-medium text-gray-800 self-start ">
              {item.time}
            </div>

            {/* Dot + Line */}
            <div className="flex flex-col items-center ">
              <div
                className={`w-3 h-3 rounded-full ${item.color} mt-1 z-10`}
              />
              <div className="flex-1 w-px bg-gray-300 mt-1" />
            </div>

            {/* Content */}
            <div className="text-sm text-black manrope-fontFamily h-12 overflow-hidden">
              <p
                className={`text-sm ${item.fontWeight}`}
                style={{ color: item.textColor }}
              >
                {item.title}
              </p>

              {item.link && (
                <a
                  href="#"
                  className="text-sm text-indigo-500 font-semibold block mt-1"
                >
                  {item.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default DailyActivities;
