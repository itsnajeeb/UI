import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar, Header } from '../components';
import './dashboard-layout.css'
export const DashboardLayout = ({
  username = 'Username',
  onLogout
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL se active page nikalo
  const activePage = location.pathname.split('/').pop() || 'dashboard';
  console.log(activePage);

  return (


    <div className="dashboard-layout-container">
      {/* Sidebar - Fixed width on Desktop */}
      <Sidebar
        activePage={activePage}
        onNavigate={(page) => navigate(`/${page}`)}
      />

      {/* Right Side Content Area */}
      <div className="main-viewport">
        {/* Header - Stays at top */}
        <Header username={username} onLogout={onLogout} />

        {/* Scrollable View - Where Outlet pages render */}
        <div className="scrollable-content-area">
          <Outlet />
        </div>
      </div>
    </div>

  );
};
export default DashboardLayout;
