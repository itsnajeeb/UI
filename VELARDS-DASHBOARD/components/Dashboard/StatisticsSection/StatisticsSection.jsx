import React, { useState } from 'react';
import './StatisticsSection.css';
import AllPayments from './TabsSection/AllPayments';
import icon1 from '/icons/icon-23.png'
import icon2 from '/icons/icon-24.png'
import icon3 from '/icons/icon-26.png'
import icon4 from '/icons/icon-25.png'
const tabs = [
    'All Payments',
    'Bitcoin',
    'Ethereum',
    'Ripple',
    'Perfect Money',
    'Tron'
];

export const StatisticsSection = () => {
    const [activeTab, setActiveTab] = useState('All Payments');

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
            <div className="stats-grid">
                <div className='stats-card'>
                    <div className='stats-img'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className="stats-box">
                        <AllPayments title="Active Deposit" amount ="0.0004876" currency="BTC" />
                        <AllPayments title="Total Paid" amount ="0.0004876" currency="BTC"/>
                    </div>
                    <div className='stats-img'>
                        <img src={icon2} alt="" />
                    </div>
                </div>
                <div className='stats-card'>
                    <div className='stats-img'>
                        <img src={icon3} alt="" />
                    </div>
                    <div className="stats-box">
                        <AllPayments title="Total Earned" amount ="0.0004876" currency="BTC"/>
                        <AllPayments title="Partner Bonuses" amount ="0.0004876" currency="BTC"/>
                    </div>
                    <div className='stats-img'>
                        <img src={icon4} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatisticsSection;
