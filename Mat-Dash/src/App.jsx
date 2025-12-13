import React, { useState } from 'react'
import Dashboard1 from './pages/Dashboard1'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard2 from './pages/Dashboard2';
import Dashboard3 from './pages/Dashboard3';
import Chats from './pages/Chats';
import MyReferral from './pages/MyTeam/MyReferral';
import LevelDetails from './pages/MyTeam/LevelDetails';
import Downline from './pages/MyTeam/Downline';
import DirectLegBusiness from './pages/MyTeam/DirectLegBusiness';
import RewardBusiness from './pages/MyTeam/RewardBusiness';
import LevelTree from './pages/MyTeam/LevelTree';
import DailyRevenue from './pages/Incomes/DailyRevenue';
import TeamAffiliate from './pages/Incomes/TeamAffiliate';
import LeadershipBonus from './pages/Incomes/LeadershipBonus';
import InfiniteBonus from './pages/Incomes/InfiniteBonus';
import Withdrawal from './pages/Withdrawal/withdrawal';
import WithdrawalHistory from './pages/Withdrawal/WithdrawalHistory';
import Support from './pages/Support';
const App = () => {
  // This State Handle left Side bar (Dashboard1, Dashboard2, Dasbhoad3 .......)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (


    <Routes>
      <Route path='/' element={<Dashboard1 isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/dashboard2' element={<Dashboard2 isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/dashboard3' element={<Dashboard3 isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/apps/chat' element={<Chats isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/MyReferral' element={<MyReferral isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/LevelDetails' element={<LevelDetails isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/Downline' element={<Downline isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/DirectLegBusiness' element={<DirectLegBusiness isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/RewardRunningReport' element={<RewardBusiness isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/MyTeam/LevelTree' element={<LevelTree isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Incomes/DailyRevenueBonus' element={<DailyRevenue isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Incomes/TeamAffiliateBonus' element={<TeamAffiliate isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Incomes/Leadership' element={<LeadershipBonus isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Incomes/InfinitBonus' element={<InfiniteBonus isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Withdrawal/Withdrawal' element={<Withdrawal isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/Withdrawal/WithdrawalHistory' element={<WithdrawalHistory isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
      <Route path='/support' element={<Support isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />} />
    </Routes>
  )
}

export default App