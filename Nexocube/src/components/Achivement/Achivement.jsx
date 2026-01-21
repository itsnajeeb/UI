import React from 'react'
import icon1 from '/image/icon/icon-1.png'
import icon2 from '/image/icon/icon-2.png'
import icon3 from '/image/icon/icon-3.png'
const Achivement = () => {
    const data = [
        {
            icon: icon1,
            title: "Sharp Intelligence",
            description: "Instantly delivers clear, useful insightful"
        },
        {
            icon: icon2,
            title: "Effortless Automation",
            description: "Workflows that run themselves"
        },
        {
            icon: icon3,
            title: "Instant Creation",
            description: "Create content and idea in seconds."
        },


    ]
    return (
        <div className='relative px-5 md:px-10 lg:px-20 mt-20 mb-20 flex justify-between flex-wrap gap-5'>
            {
                data.map((item, idx) => (
                    <div className='flex  items-center gap-4' key={idx}>
                        <div className=' bg-gray-200/80 p-3 rounded-md '>
                            <img src={item.icon} alt="" className='w-7 h-7' />
                        </div>
                        <div className='-space-y-1'>
                            <h1 className='text- text-lg font-semibold'>{item.title}</h1>
                            <p className='text-sm font-normal'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Achivement