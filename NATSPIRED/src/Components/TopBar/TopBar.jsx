import React from 'react'
import icon1 from '/icons/icon-1.png'
import icon2 from '/icons/icon-2.png'
import icon3 from '/icons/icon-3.png'
import './style.css'
export const TopBar = () => {
    return (
        <div className='topbar league-spartan-font'>
            <h1 className='left-title '>Welcome to our Organic store Organia!</h1>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-item dropdown '>
                        <div className='nav-link'>
                            <img src={icon1} alt="" className='flag-icon' />
                            <p>Indian Store</p>
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
            </nav>
        </div>
    )
}

export default TopBar