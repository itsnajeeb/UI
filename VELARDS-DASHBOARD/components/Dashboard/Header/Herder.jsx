import React from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import logo from '/websiteimg/logo.png';
import './header.css';

export const Header = ({ username = 'Username', onLogout, sidebarOpen, isSidebarOpen }) => {
  return (
    <header className="main-header">
      <div className="hamburger-btn" onClick={() => isSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? 
         <span className='icon'><i class="bi bi-x-lg"></i></span>
       : <span className='icon'><i class="bi bi-list"></i></span> 
        
        }
      </div>

      <div className="header-left">
        <div className="logo-section">
          <img src={logo} alt="Logo" />
        </div>
        <span className="welcome-text">Welcome, {username}!</span>
      </div>




      <div className="header-right">
        <div className="vertical-divider"></div>

        <div className="actions-section">
          <button
            onClick={onLogout}
            className="logout-button button-cut-border"
          >
            LOG OUT <LogOut size={12} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;