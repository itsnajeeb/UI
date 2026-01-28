import React from 'react';
import { Wallet, Info } from 'lucide-react';
import wallet from '/icons/icon-22.png'
import './WeekLimitCard.css';


export const WeekLimitCard= ()=>{
  return (
    <div className="week-card ">
      <div className="week-card-inner">
        
        {/* Wallet Icon */}
          <div className="wallet-image">
            <img src={wallet} alt="" className="wallet-icon"/>
          </div>

        {/* Content */}
        <div className="week-content">
          <div className="week-title">
            <span>Total week limit</span>
            <Info size={16} className="info-icon" />
          </div>

          <div className="week-amount">$450-600</div>

          <div className="week-note">
            Limit updates<br />every Monday at 00:00
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeekLimitCard;
