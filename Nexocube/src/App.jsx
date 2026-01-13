import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import { Feedback } from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import './styles/color.css'
import Roadmap from './components/Products/Product'
import Services from './components/WorkSmart/WorkSmart'
import UpcomingProject from './components/UpcomingProject/UpcomingProject'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='relative'>
        <Hero />
      </div>
      <UpcomingProject/>
      <Features />
      <Roadmap />
      <Services />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App