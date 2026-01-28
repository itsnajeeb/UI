import React from 'react';

export const SidebarItem = ({
  icon: Icon,
  label,
  active,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center py-4 w-full transition-all group relative"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-1 transition-all
          ${
            active
              ? 'bg-[#fbbf24] shadow-[0_4px_15px_rgba(251,191,36,0.4)]'
              : 'border-2 border-yellow-500/50 bg-[#0a0a0a]'
          }`}
      >
        {Icon && (
          <Icon
            size={24}
            strokeWidth={2}
            className={active ? 'text-black' : 'text-[#fbbf24]'}
          />
        )}
      </div>

      <span
        className={`text-[11px] font-bold tracking-tight transition-colors
          ${
            active
              ? 'text-white'
              : 'text-gray-400 group-hover:text-white'
          }`}
      >
        {label}
      </span>
    </button>
  );
};

export default SidebarItem;
