import { useState } from "react";
import { motion } from "framer-motion";
import icon1 from '/image/icon/icon-5.png'
import icon2 from '/image/icon/icon-6.png'
import icon3 from '/image/icon/icon-7.png'
import icon4 from '/image/icon/icon-8.png'
import { PackageOpen } from "lucide-react";
import BottomDesigned from "./BottomDesigned";

const cards = [
  {
    id: 1,
    subtitle: "underrated",
    icon: icon1,
    title: "Context-Aware Processing",
    desc: "AI that reads documents, data, and notes..."
  },
  {
    id: 2,
    subtitle: "underrated",
    icon: icon2,
    title: "High-Fidelity Reasoning",
    desc: "The core intelligence that interprets context..."
  },
  {
    id: 3,
    subtitle: "underrated",
    icon: icon3,
    title: "Intelligent Coordination",
    desc: "AI capabilities that sync effortlessly..."
  },
  {
    id: 4,
    subtitle: "underrated",
    icon: icon4,
    title: "On-Demand Creation",
    desc: "Instantly produce refined content..."
  },
];

export default function Features() {
  const [activeId, setActiveId] = useState(2); // Default to the second card

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <div className="mb-20 flex flex-col justify-center items-center gap-2">
          <p className="text-lg flex items-center gap-2 font-medium px-9 py-2 rounded-full text-[#38690c]
         FeatureSubtitle"><span><PackageOpen color="gray" size={18} /></span>Intelligence Layers</p>
          <h1 className="text-4xl font-bold textGredient pb-1">A New Layer of Intelligence</h1>
          <p className="text-color-gray">Each AI Capibility works independently and seamlessly together to support your entire workflow </p>
        </div>
        <div className="flex items-center justify-center w-full  px-44">

          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout // This triggers the smooth size/position animation
              onClick={() => setActiveId(card.id)}
              className={` relative card cursor-pointer rounded p-8 flex flex-col items-center justify-center text-center transition-colors duration-500 ${activeId === card.id
                ? "w- h-112.5 ActiveCardBgGradient text-white shadow-xl"
                : "w- h-87.5 bg-white text-gray-500  shadow-sm inActiveCardBg"
                }`}
            >
              {
                activeId === card.id ?
                  <>
                    <span className="dot tl"></span>
                    <span className="dot tr"></span>
                    <span className="dot bl"></span>
                    <span className="dot br"></span>
                  </>
                  : ""
              }

              {/* Icon Placeholder */}

              {
                activeId === card.id ?
                  <div className="mb-6 w-12 h-12 rounded-lg flex items-center justify-center cardSubtitle">
                    <img src={card.icon} alt="icon" srcset="" />
                  </div>
                  : <div className="mb-6 w-fit px-4 h-8 text-sm font-normal rounded-full flex items-center justify-center cardSubtitle">
                    {card.subtitle}
                  </div>
              }

              <h3 className={`text-2xl font-bold mb-4 ${activeId === card.id ? "text-white" : "text-gray-800"}`}>
                {card.title}
              </h3>

              <p className="text-base leading-relaxed opacity-90">
                {card.desc}
              </p>

              {activeId === card.id && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 px-6 py-2 bg-white text-lime-600 font-semibold rounded-full shadow-md"
                >
                  Get Started
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div >

      <BottomDesigned />
    </>
  );
}