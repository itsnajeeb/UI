import { useEffect, useState } from "react";

const items = [
    {
        value: 2350,
        label: "2,350.00 USD",
        width: 40,
        gradient: "from-purple-400 to-pink-500",
        text: 'Total',
    },
    {
        value: 898.5,
        label: "898.50 USD",
        width: 35,
        gradient: "from-pink-400 to-yellow-300",
        text: 'Withdarawl',

    },
    {
        value: 280,
        label: "280.00 USD",
        width: 30,
        gradient: "from-gray-400 to-gray-200",
        text: 'Balance',
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
                            className="relative  h-3  rounded-full  mb-2"
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
                            <div className="flex absolute -bottom-9  translate-x-1/3  flex-col">
                                <span className="
                            text-[12px] font-light  text-white/90 whitespace-nowrap">
                                    {item.label}
                                </span>
                                <span className="
                            text-[11px] font-medium text-center  text-white/90 whitespace-nowrap">
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}
