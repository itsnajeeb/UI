import React, { useState } from 'react';
import './StatisticsSection.css';
import IncomeSummary from './TabsSection/IncomeSummary/IncomeSummary';
import Referral from './TabsSection/Referral/Referral';
import Team from './TabsSection/Team/Team';
import Business from './TabsSection/Business/Business';
import Rank from './TabsSection/Rank/Rank';
const tabs = [
    'Income Summery',
    'Referral',
    'Team',
    'Business',
    'Rank',
];
 
export const StatisticsSection = () => {
  
    const [activeTab, setActiveTab] = useState('Income Summery');
    const callTab = () => {
        switch (activeTab) {
            case 'Income Summery':
                return <IncomeSummary  />

            case 'Referral':
                return <Referral />

            case 'Team':
                return <Team />
            case 'Business':
                return <Business />
            case 'Rank':
                return <Rank />
            default:
                <IncomeSummary />
        }
    }
    return (
        <div className="statistics-section  "> 

            {/* Tab Navigation */}
            <div className="tabs-wrapper">
                <div className="tabs-container">
                    {tabs.map(tab => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`tab-btn ${isActive ? 'tab-active' : 'tab-inactive'}`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Stats Grid */}
            {

                callTab()
            }
          

        </div>
    );
};

export default StatisticsSection;
