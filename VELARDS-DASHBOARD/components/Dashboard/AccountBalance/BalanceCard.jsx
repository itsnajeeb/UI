import React from 'react';
import './AccountBalance.css';

export const BalanceCard = ({ icon, amount }) => (
  <div className="balance-card ">
    <div className="balance-icon">
      <img src={icon} alt="" />
    </div> 

    <div className="balance-info">
      <div className="balance-amount">{amount}</div>
      <div className="balance-label">BTC</div>
    </div>
  </div>
);

export default BalanceCard;
