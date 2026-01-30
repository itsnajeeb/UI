import React from 'react';
import './Home/styles/style.css';

export const SidebarItem = ({
  icon: Icon,
  label,
  active, 
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item-btn ${active ? 'sidebar-active' : ''}`}
    >
      <div className="icon-wrapper">
        {Icon && ( 
          <Icon
            size={24}
            strokeWidth={2}
            className="sidebar-icon"
          />
        )}
      </div>

      <span className="item-label">
        {label}
      </span>
    </button>
  );
};

export default SidebarItem;