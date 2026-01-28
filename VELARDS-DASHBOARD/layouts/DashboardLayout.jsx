import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar, Header } from '../components';

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
    <div className="flex h-screen w-full text-white font-sans overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        onNavigate={(page) => navigate(`/${page}`)}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">

        {/* Header */}
        <Header username={username} onLogout={onLogout} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 dashboard-root">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;
