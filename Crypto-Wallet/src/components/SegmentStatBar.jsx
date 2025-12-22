import { useEffect, useState } from "react";

const items = [
    {
        value: 2350,
        label: "2,350.00 USD",
        width: 40,
        gradient: "from-purple-400 to-pink-500",
    },
    {
        value: 898.5,
        label: "898.50 USD",
        width: 35,
        gradient: "from-pink-400 to-yellow-300",
    },
    {
        value: 280,
        label: "280.00 USD",
        width: 30,
        gradient: "from-gray-400 to-gray-200",
    },
];

export default function InlineValueBars() {
    // const maxValue = Math.max(...items.map(i => i.value));
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 200);
    }, []);

    return (
        <div className="w-full max-w-105">
            <div className="flex items-center gap-2">
                {items.map((item, index) => {
                    //   const widthPercent = (item.value / maxValue) * 100;
                    const widthPercent = item.width

                    return (
                        <div div
                            key={index}
                            className="relative  h-3  rounded-full  "
                            style={{
                                width: animate ? `${widthPercent}%` : "0%",
                                transition: "width 700ms ease-out",
                            }}
                        >
                            {/* BAR */}
                            <div
                                className={`absolute rounded-full inset-0 bg-linear-to-r ${item.gradient}`}
                            />

                            {/* TEXT */}
                            <span className="
                            absolute  -bottom-5 ml-1
                            text-xs font-light  text-white/90 whitespace-nowrap">
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}
