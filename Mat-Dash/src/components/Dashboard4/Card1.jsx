import { useState } from "react";
import VideoCard from "./VideoCard"

const Card1 = () => {
    const [play, setPlay] = useState(0);

    return (
        <div className=' flex px-6 justify-between gap-10 py-7 pb-8 manrope-fontFamly bg-white boxShadow rounded-xl min-w-225 max-w-250 mx-auto'>
            <div className='flex space-y-4 flex-col w-[55%]  '>
                <VideoCard play={play} setPlay={setPlay} />


                <button onClick={() => setPlay(1)} className='text-primary-color font-semibold text-base text-left cursor-pointer w-fit mt-4 pl-3 '>WATCH</button>
            </div>
            <div className='flex flex-col justify-between w-[45%]'>
                <div className='space-y-5 py-5'>
                    <h1 className='text-[43px] font-bold leading-12 text-gray-900/80'>Player Unknown's Battler Grounds</h1>
                    <p className='text-[27px] font-semibold text-gray-500/80 leading-8'>After 4300 hours played this is the best game ever made !</p>
                </div>
                <div className='flex justify-between '>
                    <p className='text-gray-600/80 text-sm font-medium'>PUBG Corporation</p>
                    <span className='text-gray-600/80 text-sm font-medium'>24 min ago</span>
                </div>
            </div>
        </div>
    )
}

export default Card1