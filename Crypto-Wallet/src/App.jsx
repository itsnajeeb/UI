import React from 'react'
import './index.css'
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import Deposit from './page/Deposit';
import Withdrawal from './page/Withdrawal';
import Profile from './page/Profile';
import Avatar from './components/Avatar';
import ChangePassword from './components/ChangePassword';
import ChangeTransactionPassword from './components/ChangeTransactionPassword';

import './App.css'
import Leaderboad from './components/CommonComponents/Leaderboad';
import UpdateWithdrawalAddress from './components/UpdateWithdrawalAddress';
import DepostiHistory from './components/Deposit/DepostiHistory';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/withdrawal' element={<Withdrawal />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/avatar' element={<Avatar />} />
      <Route path='/change-password' element={<ChangePassword />} />
      <Route path='/change-transaction-password' element={<ChangeTransactionPassword />} />
      <Route path='/leaderboard' element={<Leaderboad />} />
      <Route path='/update-withdrawal-address' element={<UpdateWithdrawalAddress />} />
      <Route path='/deposit-history' element={<DepostiHistory />} />
    </Routes>
  );
};

export default App;
