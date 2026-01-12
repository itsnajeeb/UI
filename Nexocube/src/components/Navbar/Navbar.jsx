import React, { useEffect, useState } from 'react';
import logo from '/image/logo.png';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Product' },
    { id: 'product', label: 'Capabilities' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
  ];
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 30);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <nav className={`px-6 md:px-5 py-4 md:py-3  fixed top-3 transition-all duration-300 z-100 w-full 
    ${scrolled ? 'navContainer' : 'bg-transparent'}`}>
      <div className='flex justify-between items-center mx-auto gap-4'>

        {/* Logo Section */}
        <div className='gap-2 flex items-center'>
          <img src={logo} alt="logo" className='w-7 h-7 object-cover' />
          <h1 className='text-2xl font-bold  text-(--text-white)'>Nexocube</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:block bg-white/80 backdrop-blur-md shadow-md py-2 rounded-full px-8 lg:px-12 '>
          <ul className='flex gap-1 md:gap-6 text-base items-center'>
            {navLinks.map(({ id, label }) => (
              <li key={id} className="relative">
                <NavLink
                  to={`/${id}`}
                  className={({ isActive }) =>
                    `relative px-3 py-2 transition-colors duration-300 block ${isActive ? "text-white font-semibold" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute inset-0 z-0 ActiveNavLink bg-gray-100 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className='flex items-center gap-2'>
          <button className='hidden lg:block btnGradient rounded-full md:px-5 lg:px-8 px-6  py-2 cursor-pointer transition-all duration-300 hover:scale-105'>
            Get Started
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-20 left-6 right-6 bg-white shadow-2xl rounded-2xl p-6 md:hidden flex flex-col gap-4 z-50'
          >
            <ul className='flex flex-col gap-4'>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <NavLink
                    to={`/${id}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-medium ${isActive ? "text-blue-600" : "text-gray-600"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className='w-full btnGradient rounded-full px-8 py-3 mt-2'>
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;