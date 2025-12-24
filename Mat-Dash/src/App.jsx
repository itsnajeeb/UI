import React  from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import Withdrawal from './pages/Withdrawal/Withdrawal';
import WithdrawalHistory from './pages/Withdrawal/WithdrawalHistory';
import Support from './pages/Support';
import DashboardLayout from './components/CommonComponents/DashboardLayout';
import LogoutButton from './pages/Logout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/MyTeam/MyReferral' element={<MyReferral />} />
          <Route path='/MyTeam/LevelDetails' element={<LevelDetails />} />
          <Route path='/MyTeam/Downline' element={<Downline />} />
          <Route path='/MyTeam/DirectLegBusiness' element={<DirectLegBusiness />} />
          <Route path='/MyTeam/RewardRunningReport' element={<RewardBusiness />} />
          <Route path='/MyTeam/LevelTree' element={<LevelTree />} />
          <Route path='/Incomes/DailyRevenueBonus' element={<DailyRevenue />} />
          <Route path='/Incomes/TeamAffiliateBonus' element={<TeamAffiliate />} />
          <Route path='/Incomes/Leadership' element={<LeadershipBonus />} />
          <Route path='/Incomes/InfinitBonus' element={<InfiniteBonus />} />
          <Route path='/Withdrawal/Withdrawal' element={<Withdrawal />} />
          <Route path='/Withdrawal/WithdrawalHistory' element={<WithdrawalHistory />} />
          <Route path='/support' element={<Support />} />
          <Route path='/logout' element={<LogoutButton />} />
        </Route>
      </Routes>
    </>
  )
}

export default App