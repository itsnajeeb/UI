import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import quotes from '/image/icon/quotes.png'
import doubleQuotes from '/image/icon/doubleQuotes.png'
import user1 from '/image/user-1.jpg'
import user2 from '/image/user-2.jpg'
import '../../styles/Feedback.css'

const testimonialData = [
    {
        id: 1,
        text: "As a business analyst, I deal with messy data every single day and cleaning it used to take up half my time. Now, the platform reads through datasets effortlessly.",
        name: "Daniel Richard",
        role: "Senior Business Analyst",
        image: user1
    },
    {
        id: 2,
        text: "The coordination between teams has never been smoother. What used to take days of back-and-forth emails is now handled by the AI's intelligent layer.",
        name: "Sarah Jenkins",
        role: "Project Manager",
        image: user2
    },
    {
        id: 3,
        text: "The context-aware processing is a game changer. It understands our internal jargon and technical documents as if it were a tenured employee.",
        name: "Michael Chen",
        role: "Operations Lead",
        image: user1
    },
    {
        id: 4,
        text: "We've reduced our content production time by 60%. The Instant Creation tool doesn't just write; it thinks through the structure of our brand voice.",
        name: "Emma Watson",
        role: "Creative Director",
        image: user2
    }
];

export const Feedback = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonialData.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
    };

    // Helper to get the two cards to show in LG screen
    const nextIndex = (index + 1) % testimonialData.length;

    // Animation variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <div className='flex flex-col lg:flex-row py-10 lg:pt-20 px-6 md:px-10 lg:px-20 gap-2  overflow-hidden' >

            {/* Left Section: Title & Controls */}
            <div className='w-full lg:w-[35%] flex  flex-col gap-5 z-10 bg-white lg:bg-transparent'>
                <div className='subTittle w-fit flex gap-3 px-6 py-2 rounded-full border border-gray-100 shadow-sm'>
                    <img src={doubleQuotes} alt="" className='self-center w-4 lg:w-5' />
                    <h3 className=' text-sm lg:text-base font-semibold text-(--text-color-2)'>User Stories</h3>
                </div>

                <h1 className='text-3xl md:text-5xl textGredient font-semibold pb-3 lg:pr-10 leading-tight'>
                    What Teams Are Saying
                </h1>

                {/* Desktop Nav */}
                <div className='hidden lg:flex gap-6 mt-10'>
                    <button onClick={prevStep} className='bg-gray-400/20 hover:bg-(--bg-color-2) hover:text-white p-4 rounded-xl cursor-pointer transition-all'>
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={nextStep} className='bg-gray-400/20 hover:bg-(--bg-color-2) hover:text-white p-4 rounded-xl cursor-pointer transition-all'>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Right Section: Animated Cards */}
            <div className='w-full lg:w-[75%] relative min-h-87.5 '>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className='flex flex-col md:flex-row gap-20 w-full'
                    >
                        {/* Always show the first current card */}
                        <TestimonialCard data={testimonialData[index]} />

                        {/* Show second card only on LG screens */}
                        <div className="hidden lg:block flex-1">
                            <TestimonialCard data={testimonialData[nextIndex]} />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Nav */}
                <div className='flex lg:hidden gap-4 mt-8 justify-center'>
                    <button onClick={prevStep} className='bg-gray-400/20 p-4 rounded-xl active:bg-(--bg-color-1)'><ArrowLeft size={20} /></button>
                    <button onClick={nextStep} className='bg-gray-400/20 p-4 rounded-xl active:bg-(--bg-color-1)'><ArrowRight size={20} /></button>
                </div>
            </div>
        </div>
    )
}

// Sub-component for individual card to keep code clean
const TestimonialCard = ({ data }) => (
    <div className='flex-1 flex flex-col'>
        <img src={quotes} alt="" className='w-8 lg:w-10 opacity-40 mb-4' />
        <p className='text-gray-500 text-base lg:text-lg text-justify leading-relaxed min-h-25 sm:min-h-15'>
            {data.text}
        </p>
        <div className='mt-5 flex items-center gap-3'>
            <img src={data.image} alt={data.name} className='w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow-md' />
            <div className='flex flex-col'>
                <h2 className='text-(--text-color-1) font-bold text-base'>{data.name}</h2>
                <p className='text-(--text-color-2) font-medium text-xs lg:text-xs'>{data.role}</p>
            </div>
        </div>
    </div>
);