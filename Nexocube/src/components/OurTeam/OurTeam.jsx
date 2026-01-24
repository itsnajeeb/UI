import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, BarChart3, PenTool, ClipboardList } from 'lucide-react';
import team1 from '/public/image/team-1.png'
import team2 from '/public/image/team-2.png'
import team3 from '/public/image/team-3.png'
import './style.css';

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
    image: team1
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
    image: team2
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
    image: team3
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
    image: team1
  }
];

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="team-container">
      <div className="team-card">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="team-content-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="content-icon-box">
                {tabData[activeTab].icon}
              </div>
              <h2 className="content-title">
                {tabData[activeTab].title}
              </h2>
              <p className="content-desc">
                {tabData[activeTab].description}
              </p>
              <ul className="feature-list">
                {tabData[activeTab].features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="dot" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MIDDLE: IMAGE */}
        <div className="team-image-area">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={tabData[activeTab].image}
              alt="Feature Illustration"
              className="feature-illustration"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
            />
          </AnimatePresence>
          <div className="decorative-circle" />
        </div>

        {/* RIGHT SIDE: TAB NAVIGATION */}
        <div className="team-tabs-sidebar">
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`tab-btn ${activeTab === index ? 'tab-active' : 'tab-inactive'}`}
            >
              <div className="tab-icon-wrapper">
                {tab.icon}
              </div>
              <span className="tab-label">
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