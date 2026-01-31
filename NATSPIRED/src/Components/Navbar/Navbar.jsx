import React, { useState } from 'react'
import './style.css'
import home1 from '/webimg/homeNavPage1.png';

const Navbar = () => {
    const [leftNavMenu, setLeftMenu] = useState(false);

    const Allcategories = [

        {
            icon: '🍯',
            name_of_category: "Vegetables & Spices",
            no_of_category: 13,
        },

        {
            icon: '🍯',
            name_of_category: "Fresh Fruits",
            no_of_category: 10,
        },

        {
            icon: '🍯',
            name_of_category: "Beverages",
            no_of_category: 12,
        },

        {
            icon: '🍯',
            name_of_category: "Bread & Cookies",
            no_of_category: 9,
        },
        {
            icon: '🍯',
            name_of_category: "Frozen Fruits",
            no_of_category: 18,
        },
        {
            icon: '🍯',
            name_of_category: "Superfoods & Grains",
            no_of_category: 8,
        },



    ]
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='left-container'>
                    <div className='left-navbar' onClick={() => setLeftMenu(!leftNavMenu)}>
                        <span className="icon"><i className="bi bi-list"></i></span>
                        <h5> All Categories</h5>
                    </div>
                    
                    <div className={`all-category ${leftNavMenu ? 'category-open' : 'category-close'}`}>
                        {Allcategories.map((category, index) => (
                            <div className='category' key={index}>
                                <div className='category-icon-name'>
                                    <span className='icon'>{category.icon}</span>
                                    <p className='category-name'>{category.name_of_category}</p>
                                </div>
                                <p className='category-no'>({category.no_of_category} Items)</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='middle-container'>
                    <ul className='navbar-list'>
                        <li className='nav-item'>Home
                            <span className='icon'>+</span>
                            <ul className='dropdown-menu'>

                                <li className='dropdown-item'>
                                    <div className='home-nav-item'>
                                        <img src={home1} alt="" />
                                    </div>
                                    <h5>Home <span className='home-nav-no'>01</span></h5>
                                </li>

                                
                                <li className='dropdown-item'>
                                    <div className='home-nav-item'>
                                        <img src={home1} alt="" />
                                    </div>
                                    <h5>Home <span className='home-nav-no'>01</span></h5>
                                </li>

                                
                                <li className='dropdown-item'>
                                    <div className='home-nav-item'>
                                        <img src={home1} alt="" />
                                    </div>
                                    <h5>Home <span className='home-nav-no'>01</span></h5>
                                </li>

                                <li className='dropdown-item'>
                                    <div className='home-nav-item'>
                                        <img src={home1} alt="" />
                                    </div>
                                    <h5>Home <span className='home-nav-no'>01</span></h5>
                                </li>

                                <li className='dropdown-item'>
                                    <div className='home-nav-item'>
                                        <img src={home1} alt="" />
                                    </div>
                                    <h5>Home <span className='home-nav-no'>01</span></h5>
                                </li>


                            </ul>
                        </li>
                        <li className='nav-item'>Shop <span className='icon'>+</span></li>
                        <li className='nav-item'>Blog <span className='icon'>+</span></li>
                        <li className='nav-item'>Pages <span className='icon'>+</span></li>
                        <li className='nav-item'>Contact <span className='icon'>+</span></li>
                    </ul>
                </div>

                <div className='right-container'>
                    <div className='icon'>
                        <i class="bi bi-heart"></i>
                    </div>
                    <div className='icon'>
                        <i class="bi bi-bag"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar