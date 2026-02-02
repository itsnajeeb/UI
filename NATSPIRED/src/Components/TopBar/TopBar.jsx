import React from 'react'
import icon1 from '/icons/icon-1.png'
import icon2 from '/icons/icon-2.png'
import icon3 from '/icons/icon-3.png'
import './style.css';


export const TopBar = () => {
    return (
        <div className='topbar-section'>
            <div className="topbar">
                <h1 className='left-title '>Welcome to our Organic store Organia!</h1>
                <nav className='navbar'>
                    <ul className='nav-list'>
                        <li className='nav-item dropdown '>
                            <div className='nav-link'>
                                <img src={icon1} alt="" className='flag-icon' />
                                <p>Indian Store</p>
                                <span className='icon'><i class="bi bi-caret-down"></i></span>
                            </div>
                            <ul className='dropdown-menu'>
                                <li>
                                    <img src={icon2} alt="" className='flag-icon' />
                                    <p>USA Store</p>
                                </li>
                                <li>
                                    <img src={icon3} alt="" className='flag-icon' />
                                    <p>England Store</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='vertical-line'></div>
                    <div className='login-section'>
                        <p> <span className='icon'><i class="bi bi-person-fill"></i></span> Login</p>
                    </div>
                </nav>

            </div>

        </div>
    )
}

export default TopBar