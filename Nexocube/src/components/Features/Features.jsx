import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="flex flex-col items-center md:mt-20 mt-28 px-6">
      {/* Header Section */}
      <div className="mb-10  flex flex-col justify-center items-center gap-2 text-center">
        <p className="text-sm md:text-lg flex items-center gap-2 font-medium px-6 md:px-9 py-2 rounded-full text-(--text-color-1) FeatureSubtitle">
          <span><PackageOpen color="gray" size={18} /></span> Intelligence Layers
        </p>
        <h1 className="text-3xl md:text-4xl font-bold textGredient pb-1">
          A New Layer of Intelligence
        </h1>
        <p className="text-color-gray max-w-xl">
          Each AI Capability works independently and seamlessly together to support your entire workflow
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4 md:gap-0 md:h-135  ">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            onClick={() => setActiveId(card.id)}
            className={`relative  cursor-pointer rounded-md md:rounded p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500  
              ${activeId === card.id
                ? "w-full md:w-[27%] min-h-85 md:h-115 ActiveCardBgGradient  text-white shadow-xl z-10 "
                : "w-full md:w-[22%] min-h-62.5 md:h-95  bg-white text-(--text-gray-1) shadow-sm inActiveCardBg opacity-80 md:opacity-100"
              }`}
          >
            {/* Corner Dots for Active Card */}
            {activeId === card.id && (
              <>
                <span className="dot tl"></span>
                <span className="dot tr"></span>
                <span className="dot bl"></span>
                <span className="dot br"></span>
              </>
            )}

            {/* Icon/Subtitle Logic */}
            <div className="flex flex-col items-center h-full">
              {activeId === card.id ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="mb-6 w-14 h-14 rounded-lg flex items-center justify-center cardSubtitle"
                >
                  <img src={card.icon} alt="icon" className="w-10 h-10 object-contain" />
                </motion.div>
              ) : (
                <div className="mb-6 w-fit px-4 h-8 text-xs font-normal rounded-full flex items-center justify-center cardSubtitle uppercase tracking-wider text-(--text-color-1)">
                  {card.subtitle}
                </div>
              )}

              <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors ${activeId === card.id ? "text-white" : "text-gray-800"}`}>
                {card.title}
              </h3>

              <p className={`text-sm md:text-base leading-relaxed transition-opacity ${activeId === card.id ? "opacity-100" : "opacity-70"}`}>
                {card.desc}
              </p>

              <AnimatePresence>
                {activeId === card.id && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-8 px-8 py-2 bg-white text-(--text-color-1) font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
      <BottomDesigned />
    </div>
  );
}