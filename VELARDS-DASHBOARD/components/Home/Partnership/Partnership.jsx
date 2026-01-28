import React from 'react'
import './Partnership.css'
import button from '/public/websiteimg/button.png';
import icon1 from '/public/icons/icon-18.png';
import icon2 from '/public/icons/icon-19.png';
import boxImage from '/public/websiteimg/centerImage.png';
import buttonBg from '/public/websiteimg/buttonBg.png';
import logo from '/public/websiteimg/bottomLogo.png';

export const Partnership = () => {
    const ranks = [1, 2, 3, 4, 5, 6];

    return (
        <div className='partnership-wrapper'>
            <div className='partnership-main-content'>
                
                <header className='partnership-header'>
                    <h4 className='sub-title'>Affiliate Program</h4>
                    <h1 className='main-title'>Partnership</h1>
                </header>

                <div className='partnership-grid'>
                    {/* Left: Rank Selection */}
                    <div className='rank-selector'>
                        {ranks.map((num) => (
                            <div key={num} className='rank-btn'>
                                <img src={button} alt="btn-bg" />
                                <p>Rank {num}</p>
                            </div>
                        ))}
                    </div>

                    {/* Middle: Turnover and Income Stats */}
                    <div className='stats-center'>
                        <div className='turnover-box'>
                            <img src={icon1} alt="icon" className='icon-left' />
                            <div className='turnover-text'>
                                <h3>Active Turnover</h3>
                                <p>1000 - 20 000 USD</p>
                            </div>
                            <img src={icon2} alt="icon" className='icon-right' />
                        </div>

                        <div className='income-arc-container'>
                            <div className='income-arc'>
                                <h2>Your Income <br /><span>at Rank 1</span></h2>
                            </div>

                            <div className="levels-row">
                                {[ {p: '10%', l: 1}, {p: '6%', l: 2}, {p: '3%', l: 3} ].map((item, i) => (
                                    <div className="level-item" key={i}>
                                        <div className="level-circle">
                                            <strong>{item.p}</strong>
                                            <small>Level {item.l}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Card & Call to Action */}
                    <div className='partnership-info-card'>
                        <div className='info-box-bg'>
                            <img src={boxImage} alt="box" />
                            <p className='info-text'>
                                Our company is officially registered in the registry of companies of the United Kingdom, 
                                as evidenced by the relevant records and available certificate. which guara ntees the officiality of all activities of Worldh ourly. the United Kingdom.
                            </p>
                        </div>
                        
                        <div className='cta-section'>
                            <h2 className='cta-heading'>We welcome new partners!</h2>
                            <button className='become-partner-btn'>
                                <img src={buttonBg} alt="btn" />
                                <span>Become a partner</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className='partnership-footer'>
                    <div className='footer-logo-section'>
                        <img src={logo} alt="logo" />
                        <h1>CASTALT</h1>
                    </div>

                    <nav className='footer-nav'>
                        <ul className='nav-list'>
                            <li>Main</li>
                            <li className='star-sep'><i className="bi bi-star-fill"></i></li>
                            <li>About us</li>
                            <li className='star-sep'><i className="bi bi-star-fill"></i></li>
                            <li>Investments</li>
                            <li className='star-sep'><i className="bi bi-star-fill"></i></li>
                            <li>For partners</li>
                            <li className='star-sep'><i className="bi bi-star-fill"></i></li>
                            <li>FAQ</li>
                            <li className='star-sep'><i className="bi bi-star-fill"></i></li>
                            <li>Support</li>
                        </ul>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Partnership;