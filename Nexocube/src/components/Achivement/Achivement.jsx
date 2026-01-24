import React from 'react'
import icon1 from '/image/icon/icon-1.png'
import icon2 from '/image/icon/icon-2.png'
import icon3 from '/image/icon/icon-3.png'
import './style.css'

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
        <div className='achievement-container'>
            {data.map((item, idx) => (
                <div className='achievement-card' key={idx}>
                    <div className='achievement-icon-box'>
                        <img src={item.icon} alt={item.title} className='achievement-icon' />
                    </div>
                    <div className='achievement-text-content'>
                        <h1 className='achievement-title'>{item.title}</h1>
                        <p className='achievement-desc'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Achivement;