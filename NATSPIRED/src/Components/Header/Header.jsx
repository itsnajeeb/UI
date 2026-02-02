import React from 'react'
import logo from '/webimg/logo.png'
import './style.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
export const Header = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Select a Category");
    const ref = useRef(null);

    const options = [
        "Fresh Organic",
        "Nutt & Seeds",
        "Fresh Tomatoes",
        "Superfoods & Grains",
        "Frozen Foods",
        "Bread & Cookies",
        "Fresh Fruits",
        "Vegitables & Spices",
        "Beverages",
    ];
    // outside click close
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);
    return (
        <section className='top-header-section'>
            <div className="header">

                <div className="logo-section">
                    <img src={logo} alt="" />
                </div>

                <div className='right-section'>
                    <div className='search-category-section'>
                        <input type="text" placeholder='65 Products Search. Hit enter...' />
                        <div className="select-wrapper" ref={ref}>
                            {/* Select box */}
                            <div className="select-box" onClick={() => setOpen(!open)}>
                                <span>{value}</span>
                                <span className={`arrow ${open ? "rotate" : ""}`}><i class="bi bi-caret-down"></i></span>
                            </div>

                            {/* Dropdown */}
                            {open && (
                                <ul className="select-dropdown">
                                    {options.map((opt) => (
                                        <li
                                            key={opt}
                                            onClick={() => {
                                                setValue(opt);
                                                setOpen(false);
                                            }}
                                        >
                                            {opt}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className='help-section'>
                        <span className='icon'><i class="bi bi-headphones"></i></span>
                        <div className='help-info'>
                            <h4>Call Us free</h4>
                            <h5>+91 9102938928</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header