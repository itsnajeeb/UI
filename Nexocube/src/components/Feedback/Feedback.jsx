import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import quotes from '/public/image/icon/quote.png';
import './style.css';

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
  }
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
    <section className="feedback-section">
      <div className="feedback-container">
        
        {/* LEFT COLUMN */}
        <div className="feedback-sidebar">
          <div className="feedback-badge">
            <Quote className="badge-icon" />
            <span className="badge-text">User Stories</span>
          </div>
          
          <h2 className="feedback-heading">
            What Teams <br /> Are Saying
          </h2>

          <div className="feedback-nav">
            <button onClick={prevSlide} className="nav-btn">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="nav-btn">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="feedback-main">
          <div className="testimonial-grid">
            <AnimatePresence mode="wait">
              {[0, 1].map((offset) => {
                const item = testimonials[(currentIndex + offset) % testimonials.length];
                return (
                  <motion.div
                    key={`${item.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: offset * 0.1 }}
                    className="testimonial-card"
                  >
                    <div className="quote-icon-wrapper">
                      <img src={quotes} alt="quotes" className='quote-img' />
                    </div>
                    
                    <p className="testimonial-content">
                      {item.content}
                    </p>

                    <div className="author-info">
                      <img 
                        src={item.avatar} 
                        alt={item.author} 
                        className="author-avatar"
                      />
                      <div className="author-details">
                        <h4 className="author-name">{item.author}</h4>
                        <p className="author-role">{item.role}</p>
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