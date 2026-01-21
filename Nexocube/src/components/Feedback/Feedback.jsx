import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import quotes from '/public/image/icon/quote.png'
import './style.css'
const testimonials = [
  {
    id: 1,
    content: "As a business analyst, I deal with messy data every single day and cleaning it used to take up half my time. Now, the platform reads through datasets, highlights patterns, and even explains anomalies in a way I've never seen.",
    author: "Daniel Rhicard",
    role: "Senior Business Analyst",
    avatar: "https://i.pravatar.cc/150?u=daniel"
  },
  {
    id: 2,
    content: "Managing multiple projects across different teams used to feel chaotic—information scattered everywhere, decisions delayed, and updates constantly getting lost. The entire flow of communication and planning has changed.",
    author: "Sofia Lorenza",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?u=sofia"
  },
  // Add more testimonials here to see the slider in action
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Header & Nav */}
        <div className="lg:col-span-4 space-y-8 feedback-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
            <Quote className="w-4 h-4 text-lime-600 fill-lime-600" />
            <span className="text-sm font-medium text-gray-600">User Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold  leading-tight">
            What Teams <br /> Are Saying
          </h2>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-2xl cursor-pointer bg-gray-50 text-gray-400 hover:bg-lime-50 hover:text-lime-600 transition-colors border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-2xl cursor-pointer bg-gray-50 text-gray-400 hover:bg-lime-50 hover:text-lime-600 transition-colors border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Testimonials Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              {/* Displaying two at a time, or based on index */}
              {[0, 1].map((offset) => {
                const item = testimonials[(currentIndex + offset) % testimonials.length];
                return (
                  <motion.div
                    key={`${item.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: offset * 0.1 }}
                    className="space-y-6"
                  >
                    <div className="text-lime-400">
                      <img src={quotes} alt="quotes" className='w-10' />
                    </div>
                    
                    <p className="text-gray-500 text-lg leading-relaxed min-h-[140px]">
                      {item.content}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                      <img 
                        src={item.avatar} 
                        alt={item.author} 
                        className="w-12 h-12 rounded-full object-cover grayscale"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{item.author}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feedback;