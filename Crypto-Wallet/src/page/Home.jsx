import React from 'react'
import Profile from '../components/Home/Profile'
import Wallet from '../components/Home/Wallet'
import SegmentedStatBar from '../components/Home/SegmentStatBar'
import Card from '../components/Home/Card'
import ChildCard from '../components/CommonComponents/ChildCard'
import { CardIconsData } from "../data/data";
import Footer from '../components/CommonComponents/Footer'
const Home = () => {

    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 sm:h-screen h-[93vh]  bg-[#050816] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">

                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll">

                    <Profile />
                    <Wallet />

                    <div className="flex items-center justify-center px-10 w-full mb-10">
                        <SegmentedStatBar />
                    </div>

                    <Card />

                    <div className="grid grid-cols-2 w-full gap-5 mt-4 px-5 pb-5 mb-15">
                        {CardIconsData.map((item, idx) => (
                            <ChildCard key={idx} data={item} />
                        ))}
                    </div>

                </div>

                <div className='w-full px-3 mb-1 absolute bottom-0'>
                    <div className="bg-secondary shadow-(--shadow-soft) text-white py-2  rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home