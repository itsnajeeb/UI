import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BalanceCard } from './BalanceCard';
import './AccountBalance.css';

import icon1 from '/icons/icon-1.png'
import icon2 from '/icons/icon-2.png'
import icon3 from '/icons/icon-3.png'
import icon4 from '/icons/icon-4.png'
import icon5 from '/icons/icon-5.png'
import icon6 from '/icons/icon-6.png'
import icon7 from '/icons/icon-7.png'
import icon8 from '/icons/icon-8.png'
import icon9 from '/icons/icon-9.png'

const defaultBalances = [
  { icon: icon1, amount: 0.786736389 },
  { icon: icon2, amount: 0.786736389 },
  { icon: icon3, amount: 0.786736389 },
  { icon: icon4, amount: 0.786736389 },
  { icon: icon5, amount: 0.786736389 },
  { icon: icon6, amount: 0.786736389 }, 
  { icon: icon7, amount: 0.786736389 },
  { icon: icon8, amount: 0.786736389 },
  { icon: icon9, amount: 0.786736389 },
];

export const AccountBalance = () => {
  return (
    <div className="account-balance">
      <div className="account-header">
        <h2 className="account-title">Account balance</h2>

        <button className="wallet-btn">
          Set Wallets <ArrowRight size={12} />
        </button>
      </div>

      <div className="balance-grid">
        {defaultBalances.map((balance, index) => (
          <BalanceCard
            key={index}
            icon={balance.icon}
            amount={balance.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountBalance;
