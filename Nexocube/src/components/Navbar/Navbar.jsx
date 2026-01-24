import React, { useEffect, useState } from 'react';
import logo from '/image/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Product' },
    { id: 'product', label: 'Capabilities' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar-main ${scrolled ? 'navContainer' : 'nav-transparent'}`}>
      <div className='nav-wrapper'>

        {/* Logo Section */}
        <div className='logo-section'>
          <img src={logo} alt="logo" className='logo-img' />
          <h1 className='web-title'>Nexocube</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='desktop-nav-container'>
          <ul className='nav-list'>
            {navLinks.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <NavLink
                  to={`/${id}`}
                  className={({ isActive }) => `nav-link ${isActive ? "active-text" : ""}`}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="ActiveNavLink"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="nav-label">{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className='nav-actions'>
          <Link to='/login' className='btnGradient desktop-only-btn'>
            Get Started
          </Link>

          <button className='mobile-toggle' onClick={() => setIsOpen(!isOpen)}>
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
            className='mobile-menu'
          >
            <ul className='mobile-nav-list'>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <NavLink
                    to={`/${id}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? "active-mobile" : ""}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className='btnGradient w-full-btn'>
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;