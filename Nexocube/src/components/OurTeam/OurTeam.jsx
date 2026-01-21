import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, BarChart3, PenTool, ClipboardList } from 'lucide-react';

const tabData = [
  {
    id: 0,
    icon: <Settings size={24} />,
    title: "For Operations Teams",
    description: "Create efficient, repeatable processes that reduce manual work, speed up decisions, and keep your entire operation running smoothly.",
    features: [
      "Automate repetitive, high-volume tasks",
      "Maintain consistency across daily workflows",
      "Reduce human error with intelligent checks",
      "Enable faster coordination across departments"
    ],
    image: "https://illustrations.popsy.co/lime/remote-work.svg" // Replace with your lime/green 3D asset
  },
  {
    id: 1,
    icon: <BarChart3 size={24} />,
    title: "For Data Analysts",
    description: "Turn complex data into actionable insights. Centralize your reporting and give stakeholders the clarity they need.",
    features: [
      "Real-time data visualization",
      "Custom reporting dashboards",
      "Identify trends with AI-driven insights",
      "Integrate with existing data stacks"
    ],
    image: "https://illustrations.popsy.co/lime/data-analysis.svg"
  },
  {
    id: 2,
    icon: <PenTool size={24} />,
    title: "For Business Analysts",
    description: "Bridge the gap between business needs and technical solutions with structured documentation and planning.",
    features: [
      "Streamline requirement gathering",
      "Visual workflow mapping",
      "Stakeholder alignment tools",
      "Impact analysis reporting"
    ],
    image: "https://illustrations.popsy.co/lime/designer.svg"
  },
  {
    id: 3,
    icon: <ClipboardList size={24} />,
    title: "For Content Creators",
    description: "Manage your editorial calendar and production pipeline in one place, from ideation to final publication.",
    features: [
      "Centralized content library",
      "Collaborative editing tools",
      "Approval workflow automation",
      "Multi-channel distribution tracking"
    ],
    image: "https://illustrations.popsy.co/lime/creative-work.svg"
  }
];

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-8xl mx-auto p-6 min-h-[600px] flex items-center justify-center">
      <div className="bg-white rounded-3xl  justify-between  px-10 overflow-hidden w-full flex flex-col md:flex-row min-h-[500px]">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="flex-1 max-w-[500px]  p-10 lg:p-16 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center text-white mb-6">
                {tabData[activeTab].icon}
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                {tabData[activeTab].title}
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                {tabData[activeTab].description}
              </p>
              <ul className="space-y-3">
                {tabData[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MIDDLE: IMAGE */}
        <div className=" max-w-[500px]  bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={tabData[activeTab].image}
              alt="Feature Illustration"
              className="w-full max-w-[400px] object-contain relative z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
            />
          </AnimatePresence>
          {/* Decorative background circle */}
          <div className="absolute w-64 h-64 bg-lime-100 rounded-full -bottom-10 -right-10 blur-3xl opacity-50" />
        </div>



        {/* RIGHT SIDE: TAB NAVIGATION */}
        <div className="w-full md:w-90 border-l   border-gray-100 p-6 flex flex-col justify-center gap-4 bg-white">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center cursor-pointer gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                activeTab === index 
                ? 'bg-lime-400 text-white shadow-lg shadow-lime-200 translate-x-[-8px]' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-gray-100'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === index ? 'bg-white/20' : 'bg-slate-100'}`}>
                {tab.icon}
              </div>
              <span className="font-semibold text-sm lg:text-base leading-tight">
                {tab.title}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurTeam;