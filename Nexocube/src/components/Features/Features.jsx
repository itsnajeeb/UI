import { useState } from "react";
import icon1 from '/image/icon/icon-5.png'
import icon2 from '/image/icon/icon-6.png'
import icon3 from '/image/icon/icon-7.png'
import icon4 from '/image/icon/icon-8.png'
import BottomDesigned from "./BottomDesigned";

const cards = [
  {
    id: 1,
    subtitle: "01",
    icon: icon1,
    title: "Daily ROI",
    desc: "Generate Consistent passive income through daily return on your investment, designed to reward long-term participation."
  },
  {
    id: 2,
    subtitle: "02",
    icon: icon2,
    title: "Direct Referrel",
    desc: "Earn instanct sponsorship commission when you personally refer new members who active a package."
  },
  {
    id: 3,
    subtitle: "03",
    icon: icon3,
    title: "Matching Income",
    desc: "Receive ongoing leadership by building, supporting, and balancing a strong team work."
  },
  {
    id: 4,
    subtitle: "04",
    icon: icon4,
    title: "Rank Achievements",
    desc: "Achieve higher ranks to unlock milestone bounses, rewards, and recognition for your performance and growth."
  },
];

export default function Features() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="flex flex-col items-center md:mt-20 mt-28 px-6  ">
      {/* Header Section */}
      <div className="mb-10  flex flex-col justify-center items-center gap-2 text-center">

        <div className="FeatureSubtitle  rounded-xl flex justify-center items-center py-4 px-8 ">
          <h1 className="text-3xl  md:text-4xl textGredient font-bold   rounded-xl pb-1   ">
            Our 4-Stream Income Model
          </h1>
        </div>

      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4 md:gap-0 md:h-135  ">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`relative  cursor-pointer rounded-md md:rounded p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500  
              ${activeId === card.id
                ? "w-full md:w-[27%] min-h-85 md:h-115 ActiveCardBgGradient  text-white shadow-xl z-10 "
                : "w-full md:w-[22%] min-h-62.5 md:h-95  bg-white text-(--text-gray-1) shadow-sm inActiveCardBg opacity-80 md:opacity-100"
              }`}
          >

            <div className="flex flex-col items-center h-full">
              <div
                className="mb-6 w-14  h-14 rounded-lg flex items-center justify-center cardSubtitle" >
                <div className=" w-fit self-center text-xl font-semibold  rounded-full flex items-center justify-center  uppercase tracking-wider text-(--text-color-1)">
                  {card.subtitle}
                </div>
              </div>


              <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors ${activeId === card.id ? "text-white" : "text-gray-800"}`}>
                {card.title}
              </h3>

              <p className={`text-sm md:text-base leading-relaxed transition-opacity ${activeId === card.id ? "opacity-100" : "opacity-70"}`}>
                {card.desc}
              </p>


            </div>
          </div>
        ))}
      </div>
      <BottomDesigned />
    </div>
  );
}