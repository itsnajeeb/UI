import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import './index.css'
import Hero from './components/Hero/Hero'
import Achivement from './components/Achivement/Achivement'
import Feature from './components/Feature/Feature'
const App = () => {
  return (
    <div className=' text-white mb-20 bg-black '>
      <Navbar/>
      <Hero/>
      <Achivement/>
      <Feature/>
    </div>
  )
}

export default App