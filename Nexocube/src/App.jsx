import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import OurTeam from './components/OurTeam/OurTeam'
import Product from './components/Products/Product'
import WorkSmart from './components/WorkSmart/WorkSmart'
import { Feedback } from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='relative'>
        <Hero/>
      </div>
      <Features/>
      <OurTeam/>
      <Product/>
      <WorkSmart/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default App