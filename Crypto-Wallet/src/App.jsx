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
    </Routes>
  );
};

export default App;
