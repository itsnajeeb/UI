import React from 'react'
import Hero from './components/Hero'
import './styles/style.css';
import ContributionReceive from './components/ContributionReceive';
import Partners from './components/Partners';
import Revolutionary from './components/Revolutionary';
import PlatformIntro from './components/PlatformIntro';
const App = () => {
  return (
    <div>
      <Hero />
      <ContributionReceive />
      <Partners />
      <Revolutionary />
      <div className="bg-black p-6">
        <PlatformIntro />
      </div>

    </div>
  )
}

export default App