import React from 'react';
import { 
  Settings, 
  Send, 
  LogOut, 
  ChevronDown, 
  Clock 
} from 'lucide-react';

interface HeaderProps {
  username?: string;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ username = 'Username', onLogout }) => {
  return (
    <header className="flex border border-white/10 rounded-2xl items-center justify-between px-8 py-4 m-5 bg-[#0a0a0a]/50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#fbbf24] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <span className="font-black text-black text-xl italic">V</span>
          </div>
          <span className="hidden md:flex items-center gap-2 text-xl font-black tracking-tight">
            <span className="text-white">VELARDS</span>
          </span>
        </div>
        <span className="text-gray-700 mx-2">/</span>
        <span className="text-gray-400 text-sm font-medium">Welcome, {username}!</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-yellow-500">
          <button className="underline flex items-center gap-2 hover:text-yellow-300 transition-colors">
            <Settings size={14} /> Settings
          </button>
          <button className="underline flex items-center gap-2 hover:text-yellow-300 transition-colors">
            <Send size={14} /> Telegram bot
          </button>
          <button className="underline flex items-center gap-2 hover:text-yellow-300 transition-colors">
            <Send size={14} /> Telegram group
          </button>
        </div>

        <div className="hidden lg:block h-5 w-px bg-white/10"></div>

        {/* Date/Time */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-400">
          <Clock size={14} />
          <span>Oct 20, 12:03 PM</span>
        </div>

        {/* Language & Logout */}
        <div className="flex items-center gap-3">
          <button className="button-cut-border flex items-center gap-1.5 px-4 py-2.5 text-yellow-500 text-[11px] font-bold hover:text-yellow-400 transition-colors">
            Eng <ChevronDown size={12} />
          </button>
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
