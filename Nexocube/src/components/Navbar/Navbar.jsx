import React from 'react'
import logo from '/image/logo.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import '../../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='px-20 py-6 fixed top-0 z-99  w-full   '>
      <div className='flex justify-between'>
        <div className='w-7 h-7 gap-2 flex item-center  '>
          <img src={logo} alt="logo" className='object-cover' />
          <h1 className='text-2xl font-bold self-center'>Nexocube</h1>
        </div>

        <div className='bg-white/80 shadow-md py-3 rounded-full px-10 navContainer'>
          <ul className='flex gap-10 text-base items-center'>
            {['home', 'product', 'solution', 'features', 'testimonials'].map((path) => (
              <li key={path} className="relative py-2">
                <NavLink
                  to={`/${path}`}
                  className={({ isActive }) =>
                    `relative px-4 py-2 transition-colors duration-300 ${isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute inset-0 z-0 ActiveNavLink"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                        </motion.div>
                      )}

                      <span className="relative z-10 capitalize">
                        {path === 'home' ? 'Product' : path === 'product' ? 'Capabilities' : path}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className='btnGradient rounded-full px-8 py-2 cursor-pointer transition-all duration-300 hover:scale-105'>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar