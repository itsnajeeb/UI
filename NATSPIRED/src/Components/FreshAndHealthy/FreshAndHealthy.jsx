import React from 'react'
import './FreshAndHealthy.css'
import bgImage from '/webimg/background-img-01.jpg'
export const FreshAndHealthy = () => {
    return (
        <div className='elemenator-section'>
            <img src={bgImage} alt="" />
            <div className='elementor-background-overlay'></div>

            <div className="elemenator-content">

                <div className="left-content">
                    <p className='top-title'><span>Start From</span> $39.99</p>
                    <h1 className='title'>Fresh & Healthy Organic Vegetables</h1>
                    <p className='subtitle'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>

                    <div className='descriptoin'>
                        <ul>
                            <li>Natural Products For</li>
                            <li>Lovers of Healthy Food.</li>
                        </ul>
                    </div>

                    <div className='elemenator-btn'>
                                <p className='btn-title'>View All</p> <span className='icon'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FreshAndHealthy