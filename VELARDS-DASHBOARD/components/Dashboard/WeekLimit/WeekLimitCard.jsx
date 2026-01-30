import React from 'react';
import { Wallet, Info } from 'lucide-react';
import wallet from '/icons/icon-22.png'
import './WeekLimitCard.css';


export const WeekLimitCard = () => {
  const weekLimitCardData = [
    {
      title: 'Total Income',
      amount: '$450', 
    },

    {
      title: 'Total Withdrawal',
      amount: '$450',
    },

    {
      title: 'Net Balance',
      amount: '$450',
    },


  ]

  return (
    <>
      {
        weekLimitCardData.map((data, idx) => (

          <div className="week-card " key={idx}>
            <div className="week-card-inner">
              {/* Wallet Icon */}
              <div className="wallet-image">
                <img src={wallet} alt="" className="wallet-icon" />
              </div>

              {/* Content */}
              <div className="week-content">
                <div className="week-title">
                  <span>{data.title}</span>
                  <Info size={16} className="info-icon" />
                </div>
                <div className="week-amount">{data.amount}</div>
              </div>
            </div>

          </div>
        ))
      }
    </>

  );
};

export default WeekLimitCard;
