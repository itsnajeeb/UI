import React from 'react'
import './index.css'
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import Deposit from './page/Deposit';
import Withdrawal from './page/Withdrawal';
import Profile from './page/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='/withdrawal' element={<Withdrawal />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default App;
