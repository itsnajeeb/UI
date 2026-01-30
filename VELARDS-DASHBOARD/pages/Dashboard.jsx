import React from 'react';
import {
  AccountBalance,
  WeekLimitCard,
  StatisticsSection,
  PromoCard,
  HeroSection,
} from '../components';
import './style.css'
export const Dashboard = () => {
  return (
    <div className="dashboard-page-container">
      {/* Top Row: Hero + Account Balance */}
      <div className="dashboard-top-section">
        <HeroSection />
        <AccountBalance />
      </div>


      {/* Bottom Section */}
      <div className="dashboard-bottom-section">
        {/* Left Column: Week Limit, Inviter, Referral */}
        <div className="bottom-left">
          <WeekLimitCard />
        </div>

        {/* Middle: Statistics Section */}
        <div className='bottom-middle'>
          <StatisticsSection />
        </div>

        {/* Right: Monday Promo Card */}
        <div className='bottom-right '>
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
