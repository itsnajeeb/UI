import React from 'react';
import {
  LayoutGrid, PlusCircle, Clock, Wallet, Users,
  ArrowLeftRight, Headphones, BanknoteArrowDown, BanknoteArrowUp
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import './Home/styles/style.css';

export const Sidebar = ({ activePage = 'dashboard', onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'roi-income', icon: PlusCircle, label: 'ROI Income' },
    { id: 'direct-income', icon: Clock, label: 'Direct Income' },
    { id: 'matching-income', icon: Wallet, label: 'Matching Income' },
    { id: 'reward-income', icon: Users, label: 'Reward Income' },
    { id: 'withdrawal', icon: BanknoteArrowDown, label: 'Withdrawal' },
    { id: 'my-team', icon: Users, label: 'My Team' },
    { id: 'my-deposit', icon: BanknoteArrowUp, label: 'My Deposit' },
    { id: 'my-referral', icon: ArrowLeftRight, label: 'My Referral' },
    { id: 'my-profile', icon: Users, label: 'My Profile' },
    { id: 'support', icon: Headphones, label: 'Support' },
  ];

  return (
    <aside className="sidebar-container">
      {/* Sidebar background slope shape */}
      <div className="sidebar-bg-shape" />

      {/* Right Edge Sloped Highlight (SVG) */}
      <div className="sidebar-svg-overlay">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 110 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 2L108 60L108 740L50 798"
            stroke="#eab308"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Sidebar glow */}
      <div className="sidebar-glow-edge" />

      {/* Nav Items */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activePage === item.id}
            onClick={() => onNavigate && onNavigate(item.id)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;