import { useState } from "react";
import VideoCard from "./VideoCard"

const Card1 = () => {
    const [play, setPlay] = useState(0);

    return (
        <div className=' flex px-6 justify-center  py-7 pb-8 manrope-fontFamly bg-white boxShadow rounded-xl  max-w-250 mx-auto flex-col '>
            <div className='flex space-y-4 flex-col w-full  '>
                <VideoCard play={play} setPlay={setPlay} />

                <button onClick={() => setPlay(1)} className='text-primary-color font-semibold text-base text-left cursor-pointer w-fit mt-4 pl-3 hidden'>WATCH</button>
            </div>
            <div className='flex flex-col md:px-4 w-full'>
                <div className='space-y-5 py-5'>
                    <h1 className='lg:text-[43px] font-bold lg:leading-12 text-gray-900/80 text-[30px] leading-9'>Player Unknown's Battler Grounds</h1>
                    <p className='text-[22px] font-semibold text-gray-500/80 leading-7 '>After 4300 hours played this is the best game ever made !</p>
                </div>
                <div className='flex justify-between  w-full mt-4'>
                    <p className='text-gray-600/80 text-sm font-medium'>PUBG Corporation</p>
                    <span className='text-gray-600/80 text-sm font-medium'>24 min ago</span>
                </div>
            </div>
        </div>
    )
}

export default Card1