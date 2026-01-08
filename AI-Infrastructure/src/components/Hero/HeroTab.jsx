import { MoveRight } from 'lucide-react'
import React from 'react'
import HeroAvailableTab from '../commonComponents/HeroAvailableTab';
import { partnerData } from '../../data/data';
const HeroTab = () => {
    return (
        <div className='flex justify-center  items-center gap-20  '>
            <div className='flex  flex-col '>
                <h1 className='flex-1 text-nowrap'>Available on : </h1>
                <div className='self-end '><MoveRight className='text-gray-400 ' /></div>
            </div>
            <div className=' flex gap-5 flex-row'>
                {
                    partnerData.map((data, idx) => (
                        <HeroAvailableTab item={data} key={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default HeroTab