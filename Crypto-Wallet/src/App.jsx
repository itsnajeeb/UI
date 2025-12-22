import React from 'react'
import './index.css'
import Profile from './components/Profile'
import Wallet from './components/Wallet'
import SegmentedStatBar from './components/SegmentStatBar'
import Card from './components/Card'
import ChildCard from './ChildCard'
import { CardIconsData } from "./data/data";
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0cc8] flex justify-center">

      {/* MAIN APP WRAPPER */}
      <div className="relative w-full max-w-97.5 min-h-full lg:rounded-3xl my-1 lg:border-2 lg:border-[#8ac9ff] shadow-2xl  bg-[#111116] flex flex-col items-center ">

        <Profile />
        <Wallet />

        <div className="flex items-center justify-center px-10 w-full mb-10">
          <SegmentedStatBar />
        </div>

        <Card />

        <div className="grid grid-cols-2 w-full gap-5 mt-4 px-5 pb-20 lg:pb-0">
          {CardIconsData.map((item, idx) => (
            <ChildCard key={idx} data={item} />
          ))}
        </div>

        <Footer />

      </div>
    </div>
  )
}

export default App
