import React from 'react'
import Hero from './components/Hero'
import ContributionReceive from './components/ContributionReceive';
import Partners from './components/Partners';
import Revolutionary from './components/Revolutionary';
import PlatformIntro from './components/PlatformIntro';
import Toekmics from './components/Tokemisc';
import RoadmapSlider from './components/Roadmap';
import TeamBackground from './components/OurTeam/TeamBackground';
import TeamSlider from './components/OurTeam/TeamSlider';
import Accordion from './components/Accordions';
import MobileControlHero from './components/MobileControl';
import FooterSection from './components/Footer/FooterSection';
import 'remixicon/fonts/remixicon.css'
import './styles/style.css';


const App = () => {
  return (
    <div>
      <Hero />
      <ContributionReceive />
      <Partners />
      <Revolutionary />
      <div className="bg-black px-6">
        <PlatformIntro />
      </div>
      <Toekmics/>
    <RoadmapSlider/>

    <TeamBackground>
      <TeamSlider/>
    </TeamBackground>
    <Accordion/>
    <MobileControlHero/>
    <FooterSection/>
    </div>
  )
}

export default App