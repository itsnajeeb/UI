import { ChartNoAxesColumn, PanelsTopLeft, PenLine, Settings } from 'lucide-react'
import React, { useState } from 'react'
import team1 from '/image/team-1.jpg'
import team2 from '/image/team-2.jpg'
import team3 from '/image/team-3.jpg'
import { motion, AnimatePresence } from 'framer-motion'

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState('operations');

    const teamData = {
        operations: {
            title: "For Operation Teams",
            desc: "Create efficient, repeatable processes that reduce manual work, speed up decisions, and keep your entire operation running smoothly.",
            points: [
                "Automate repetitive, high-value tasks",
                "Maintain consistency across daily workflows",
                "Reduce human error with intelligent checks",
                "Enable faster coordination across departments"
            ],
            image: team1,
            icon: <Settings size={20} color='#fff' />
        },
        analysts: {
            title: "For Business Analysts",
            desc: "Transform raw data into actionable insights with AI-driven processing and high-fidelity reasoning tools.",
            points: [
                "Generate instant data visualizations",
                "Identify trends with context-aware AI",
                "Simplify complex reporting structures",
                "Data-backed decision making"
            ],
            image: team2,
            icon: <ChartNoAxesColumn size={20} color='#fff' />
        },
        creators: {
            title: "For Creator & Writer",
            desc: "Transform raw data into actionable insights with AI-driven processing and high-fidelity reasoning tools.",
            points: [
                "Generate instant data visualizations",
                "Identify trends with context-aware AI",
                "Simplify complex reporting structures",
                "Data-backed decision making"
            ],
            image: team3,
            icon: <PenLine size={20} color='#fff' />
        },
        managers: {
            title: "For Project Managers",
            desc: "Transform raw data into actionable insights with AI-driven processing and high-fidelity reasoning tools.",
            points: [
                "Generate instant data visualizations",
                "Identify trends with context-aware AI",
                "Simplify complex reporting structures",
                "Data-backed decision making"
            ],
            image: team2,
            icon: <PanelsTopLeft size={20} color='#ffff' />
        },
    };

    const current = teamData[activeTab] || teamData.operations;

    return (
        <div className='px-10 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_350px] gap-10 mt-10 md:mt-20  mx-auto'>

            {/* Left Section: Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className='order-2 lg:order-1'
                >
                    <div className='btnGradient w-fit rounded-xl p-4 mb-5'>
                        {current.icon}
                    </div>
                    <div className='mb-5'>
                        <h1 className=' text-(--text-color-1) font-bold text-2xl md:text-3xl'>{current.title}</h1>
                    </div>
                    <div className='text-color-gray flex flex-col justify-between'>
                        <p className='text-lg font-medium mb-5 lg:pr-8'>
                            {current.desc}
                        </p>
                        <ul className='flex flex-col gap-3 list-none'>
                            {current.points.map((point, index) => (
                                <li key={index} className='text-base md:text-lg font-medium flex items-start gap-2'>
                                    <span className='mt-1.5 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Middle Section: Image */}
            <div className='order-1 lg:order-2 w-full flex justify-center items-center'>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        src={current.image}
                        alt={current.title}
                        className='h-auto w-full max-w-120 lg:max-w-none rounded-2xl shadow-lg'
                    />
                </AnimatePresence>
            </div>

            {/* Right Section: Selectors */}
            <div className='order-3 flex flex-col gap-4 self-center w-full'>
                <TeamTab
                    isActive={activeTab === 'operations'}
                    onClick={() => setActiveTab('operations')}
                    icon={<Settings size={20} />}
                    label="For Operation Teams"
                />
                <TeamTab
                    isActive={activeTab === 'analysts'}
                    onClick={() => setActiveTab('analysts')}
                    icon={<ChartNoAxesColumn size={20} />}
                    label="For Business Analysts"
                />
                <TeamTab
                    isActive={activeTab === 'creators'}
                    onClick={() => setActiveTab('creators')}
                    icon={<PenLine size={20} />}
                    label="For Creator and Writer"
                />
                <TeamTab
                    isActive={activeTab === 'managers'}
                    onClick={() => setActiveTab('managers')}
                    icon={<PanelsTopLeft size={20} />}
                    label="For Project Managers"
                />
            </div>
        </div>
    )
}

// Sub-component for the side tabs
const TeamTab = ({ isActive, onClick, icon, label }) => (
    <div
        onClick={onClick}
        className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 items-center ${isActive ? 'bg-white shadow-md border-l-4 border-(--bg-color-2)' : 'hover:bg-gray-50 border-l-4 border-transparent'
            }`}
    >
        <div className={`${isActive ? 'btnGradient' : 'border-2 border-gray-200'} p-3 h-fit rounded-xl`}>
            {React.cloneElement(icon, {
                color: isActive ? "#fff" : "#4e4f4c" 
            })}
        </div>
        <h1 className={`text-dark-green text-lg font-semibold ${isActive ? 'opacity-100' : 'opacity-60'}`}>
            {label}
        </h1>
    </div>
)

export default OurTeam;