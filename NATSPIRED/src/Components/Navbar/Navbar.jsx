import React, { useState } from 'react'
import './style.css'
import home1 from '/webimg/homeNavPage1.png';
import shop from '/webimg/shopNavImg.jpg';

export const Navbar = () => {
    const [leftNavMenu, setLeftMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <li className='nav-item '>
                            <span className="nav-link ">
                                Home
                                <span className='icon'>+</span>
                            </span>
                            <ul className='dropdown-menu home-dropdown'>

                                <li className=''>
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
                        <li className='nav-item '>
                            <span className="nav-link ">
                                Shop <span className='icon'>+</span>
                            </span>
                            <ul className='dropdown-menu shop-dropdown'>
                                <li className=''>
                                    <ul>
                                        <li>Shop Pages</li>
                                        <li className=''> <span className='dropdown-item'> Shop Grid 01</span></li>
                                        <li className=''> <span className='dropdown-item'> Shop Grid 02</span></li>
                                        <li className=''> <span className='dropdown-item'> Shop Grid 03</span></li>
                                        <li className=''> <span className='dropdown-item'> Shop List</span></li>
                                        <li className=''> <span className='dropdown-item'> My Account</span></li>
                                    </ul>
                                </li>
                                <li className=''>
                                    <ul>
                                        <li > <span className='dropdown-item'> Product Details </span></li>
                                        <li > <span className='dropdown-item'> Shop Details 01 </span></li>
                                        <li > <span className='dropdown-item'> Shop Details 02 </span></li>
                                        <li > <span className='dropdown-item'> Shop Details 03 </span></li>
                                    </ul>
                                </li>

                                <li>
                                    <div className='shop-nav-img'>
                                        <img src={shop} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </li>


                        <li className='nav-item  '>
                            <span className="nav-link ">
                                Blog <span className='icon'>+</span>
                            </span>
                            <ul className='dropdown-menu blog-dropdown'>
                                <li className='has-submenu  blog-item'> <span className='dropdown-item'> Blog List Views  <span className='icon'>+</span></span>
                                    <ul className='submenu'>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 01
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 02
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 03
                                            </span>
                                        </li>
                                    </ul>
                                </li>

                                <li className='has-submenu  blog-item'> <span className='dropdown-item'>  Blog Grid Views <span className='icon'>+</span></span>
                                    <ul className='submenu'>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 01
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 02
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 03
                                            </span>
                                        </li>
                                    </ul>
                                </li>

                                <li className='has-submenu  blog-item'>
                                    <span className='dropdown-item'>  Blog Details
                                        <span className='icon'>+</span>  </span>

                                    <ul className='submenu'>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 01
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 02
                                            </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>
                                                List Style 03
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item '>
                            <span className="nav-link ">
                                Pages <span className='icon'>+</span>
                            </span>
                            <ul className='dropdown-menu page-dropdown'>

                                <li className='page-item'> <span className='dropdown-item'>About Page</span> </li>

                                <li className='has-submenu page-item'>
                                    <span className='dropdown-item'>
                                        Services <span className='icon'>+</span>
                                    </span>
                                    <ul className='submenu'>
                                        <li >
                                            <span className='dropdown-item'>  Service Page </span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'>  Service Details </span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='has-submenu page-item'>

                                    <span className='dropdown-item'>
                                        Teams  <span className='icon'>+</span>
                                    </span>

                                    <ul className='submenu'>
                                        <li >
                                            <span className='dropdown-item'> Team Page 01</span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'> Team Page 02</span>
                                        </li>
                                        <li >
                                            <span className='dropdown-item'> Team Details</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='page-item'>
                                    <span className='dropdown-item'>404</span>
                                </li>

                            </ul>
                        </li>
                        <li className='nav-item '>
                            <span className="nav-link ">
                                Contact <span className='icon'>+</span>
                            </span>
                            <ul className='dropdown-menu contact-dropdown'>
                                <li className='page-item'> <span className='dropdown-item'>Contact With Map</span> </li>
                                <li className='page-item'> <span className='dropdown-item'>Contact Without Map</span> </li>
                            </ul>

                        </li>
                    </ul>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
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