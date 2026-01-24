import React from 'react';
import { FaCamera, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '/image/logo.png';
import footerImage from '/image/footerImage.png';
import './style.css';

const Footer = () => {
    return (
        <footer className='footer-main-wrapper'>
            <div className='footer-content-left'>
                <div className='footer-top-row'>
                    {/* Brand & Newsletter Section */}
                    <div className='footer-brand-section'>
                        <div className='footer-logo-group'>
                            <img src={logo} alt="Nexocube Logo" className='footer-logo-img' />
                            <h1 className='footer-brand-name'>Nexocube</h1>
                        </div>

                        <div className='footer-newsletter'>
                            <input type="text" className='newsletter-input' placeholder='Enter Your Email' />
                            <button className='btnGradient newsletter-btn'>Get Started</button>
                        </div>

                        <div className='footer-social-icons'>
                            <span className='social-icon'><FaFacebookF /></span>
                            <span className='social-icon'><FaLinkedin /></span>
                            <span className='social-icon'><FaTwitter /></span>
                            <span className='social-icon'><FaCamera /></span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className='footer-nav-column'>
                        <h4 className='nav-column-title'>Solutions</h4>
                        <ul className='nav-list'>
                            <li>Operations Teams</li>
                            <li>Business Analysts</li>
                            <li>Creators & Writers</li>
                            <li>Project Manager</li>
                        </ul>
                    </div>

                    <div className='footer-nav-column pr-padding'>
                        <h4 className='nav-column-title'>Company</h4>
                        <ul className='nav-list'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Status</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar Section */}
                <div className='footer-bottom-wrapper'>
                    <div className='footer-divider'></div>

                    <div className='footer-legal-row'>
                        <div className='legal-links'>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                        </div>

                        <div className='copyright-text'>
                            Copyright &copy; 2025 Nexocube. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Illustration (Desktop Only) */}
            <div className='footer-illustration'>
                <img src={footerImage} alt="" className='footer-side-img' />
            </div>
        </footer>
    );
};

export default Footer;