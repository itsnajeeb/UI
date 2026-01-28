import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from './layouts'
import { Dashboard, Home, MyDeposit, RoiIncomePage, DirectIncomePage, MatchingIncomePage, RewardIncomePage, WithdrawalPage, WithdrawalHistoryPage, DepositeHistory, MyReferralPage, MyTeamPage, SupportPage } from './pages'
import './index.css'
import Login from './components/Home/Login/Login'
import Singup from './components/Home/signup/signup'
export default function App() {

  const handleLogout = () => {
    console.log('Logout clicked')
  }

  return (
    <Routes>

      {/* HOME PAGE */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />

      {/* DASHBOARD LAYOUT */}
      <Route path='/' element={<DashboardLayout onLogout={handleLogout} />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="roi-income" element={<RoiIncomePage />} />
        <Route path="roi-income-history" element={<Dashboard />} />
        <Route path="my-deposit" element={<MyDeposit />} />
        <Route path="deposit-history" element={<DepositeHistory />} />
        <Route path="direct-income" element={<DirectIncomePage />} />
        <Route path="matching-income" element={<MatchingIncomePage />} />
        <Route path="reward-income" element={<RewardIncomePage />} />
        <Route path="withdrawal" element={<WithdrawalPage />} />
        <Route path="withdrawal-history" element={<WithdrawalHistoryPage />} />
        <Route path="my-referral" element={<MyReferralPage/>} />
        <Route path="my-team" element={<MyTeamPage/>} />
        <Route path="support" element={<SupportPage/>} />
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Route>



      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/home" />} />

    </Routes>
  )
}
