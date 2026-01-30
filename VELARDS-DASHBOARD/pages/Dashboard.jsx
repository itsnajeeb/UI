import React from 'react';
import {
  AccountBalance,
  WeekLimitCard,
  StatisticsSection,
  PromoCard,
  HeroSection,
} from '../components';
export const Dashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto space-y-12 pb-12 ">
      {/* Top Row: Hero + Account Balance */}
      <div className="flex gap-5">
        <HeroSection />
        <AccountBalance />
      </div>


      {/* Bottom Section */}
      <div className="flex  justify-between ">
        {/* Left Column: Week Limit, Inviter, Referral */}
        <div className="flex-1 h-full">
          <WeekLimitCard />
        </div>

        {/* Middle: Statistics Section */}
        <StatisticsSection />

        {/* Right: Monday Promo Card */}
        <PromoCard />
      </div>
    </div>
  );
};

export default Dashboard;
