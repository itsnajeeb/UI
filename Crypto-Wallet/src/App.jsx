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
    <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

      {/* APP SHELL */}
      <div className="relative w-full max-w-97.5 h-full bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

        {/*  Only this div will scroll*/}
        <div className="flex-1 custom-scroll">

          <Profile />
          <Wallet />

          <div className="flex items-center justify-center px-10 w-full mb-10">
            <SegmentedStatBar />
          </div>

          <Card />

          <div className="grid grid-cols-2 w-full gap-5 mt-4 px-5 pb-5">
            {CardIconsData.map((item, idx) => (
              <ChildCard key={idx} data={item} />
            ))}
          </div>
         
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
