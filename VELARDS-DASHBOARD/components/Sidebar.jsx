import React from 'react';
import {
  LayoutGrid,
  PlusCircle,
  Clock,
  Wallet,
  Users,
  ArrowLeftRight,
  Headphones,
  BanknoteArrowDown,
  BanknoteArrowUp
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';

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
    <aside className="hidden md:flex w-[110px] h-full flex-col items-center py-10 relative overflow-visible">

      {/* Sidebar background slope shape */}
      <div
        className="absolute inset-0 bg-[#0a0a0a] z-0"
        style={{
          clipPath:
            'polygon(0% 0%, calc(100% - 60px) 0%, 100% 60px, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0% 100%)'
        }}
      />

      {/* Right Edge Sloped Highlight */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-10">
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
      <div className="absolute top-0 right-0 w-[4px] h-full bg-linear-to-b from-yellow-500 via-transparent to-yellow-500 opacity-20 z-0"></div>

      {/* Nav Items */}
      <div className="flex-1 w-full flex flex-col overflow-y-auto scrollbar-hide pt-2">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activePage === item.id}
            onClick={() => onNavigate && onNavigate(item.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
