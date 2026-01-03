import React from 'react'
import { Link } from 'react-router-dom'
import BackArrow from './BackArrow'
import Footer from './Footer'
import trophy from '/image/trophy.png'
import { Trophy } from 'lucide-react'
import LeaderboardInfoBox from './LeaderboardInfoBox'
import { LeaderboardData } from '../../data/data'
const Leaderboad = () => {
    return (
            <div className="h-screen bg-[#242424c8] flex justify-center overflow-hidden">

                {/* APP SHELL */}
                <div className="relative w-full max-w-97.5 sm:h-screen h-[93vh]  bg-[#050816] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                    <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                        <BackArrow />
                    </div>
                    {/*  Only this div will scroll*/}
                    <div className="flex-1 custom-scroll mb-20">
                        <div className='text-white flex justify-center flex-col items-center mt-14 '>
                            <img src={trophy} alt="Trophy image" className='w-20 h-20' />
                            {/* <Trophy size={28} fill='yellow'/> */}
                            <h1 className='font-semibold text-xl mt-2.5'>Leaderboard</h1>
                            <p className='font-normal mt-1 text-gray-400'>Session end : 18d 02h 20m</p>
                        </div>
                        <div className='flex border-2 border-gray-300/40 text-white px-4 rounded-lg justify-between mt-6 bg-secondary py-3 mx-8'>
                            <div className=''>
                                <h2 className='font-normal'>4820.48</h2>
                                <p className='text-yellow-100/50 text-sm'>Total Coins</p>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='self-end'>5425</h2>
                                <p className='text-yellow-100/50  text-sm'>Total Players</p>
                            </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-4'>
                            {
                                LeaderboardData.map((data,idx)=> (
                                    <LeaderboardInfoBox data={data} key={idx}/>
                                ))
                            }
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

export default Leaderboad