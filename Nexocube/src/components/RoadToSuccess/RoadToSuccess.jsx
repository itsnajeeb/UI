import React from 'react'
import image1 from '/image/ourTeam.png'
import './style.css' // Or a specific BottomDesigned.css

const RoadToSuccess = () => {
  return (
    <div className='roadmap-section'>

      {/* Title Header */}
      <div className='roadmap-header'>
        <h1 className='roadmap-main-title'>Road To Success</h1>
        <div className='roadmap-underline btnGradient'></div>
      </div>

      {/* Grid Content */}
      <div className='roadmap-grid'>

        {/* Forex Section */}
        <div className='roadmap-card'>
          <h2 className='success-title'>Forex Market</h2>
          <ul className='roadmap-list'>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>What it is: </span>
                The Global marketplace for trading national currencies (e.g. EUR/USD).
              </div>
            </li>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>Key Point: </span> 
                It's the largest and most liquid financial market the world, operating 24/5.
              </div>
            </li>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>Main Driver: </span>  
                Global economics, central bank policies, and geopolitics.
              </div>
            </li>
          </ul>
        </div>

        {/* Center Image */}
        <div className='roadmap-image-container'>
          <img src={image1} alt="Team Roadmap" className='roadmap-img' />
        </div>

        {/* Crypto Section */}
        <div className='roadmap-card'>
          <h2 className='success-title'>CRYPTO MARKET</h2>
          <ul className='roadmap-list'>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>What it is: </span> 
                The digital marketplace for trading cryptocurrencies (e.g., Bitcoin, Ethereum)
              </div>
            </li>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>Key Point: </span> 
                It's a decentralized, 24/7 market known for high volatility and innovation.
              </div>
            </li>
            <li className='roadmap-item'>
              <span className='list-dot' />
              <div className='item-text'>
                <span className='font-bold-label'>Main Driver: </span>  
                Technology, adoption trends, sentiment, and regulatory news.
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default RoadToSuccess;