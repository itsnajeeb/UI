import React from 'react';
import { 
  Settings, 
  Send, 
  LogOut, 
  ChevronDown, 
  Clock 
} from 'lucide-react';
import logo from '/websiteimg/logo.png'
import './header.css'


export const Header = ({ username = 'Username', onLogout })=> {

  return (
    <header className="flex border border-white/10 rounded-2xl items-center justify-between px-8 py-4 m-5 bg-[#0a0a0a]/50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="logo-section">
            <img src={logo} alt="" />
          </div>
        </div>
        <span className="text-gray-700 mx-2">/</span>
        <span className="text-gray-400 text-sm font-medium">Welcome, {username}!</span>
      </div>

      <div className="flex items-center gap-6">
       

        <div className="hidden lg:block h-5 w-px bg-white/10"></div>

       

        {/* Language & Logout */}
        <div className="flex items-center gap-3">
         
          <button 
            onClick={onLogout}
            className="button-cut-border flex items-center gap-2 px-4 py-2.5 text-yellow-500 text-[11px] font-bold hover:text-yellow-400 transition-colors"
          >
            Log out <LogOut size={12} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
