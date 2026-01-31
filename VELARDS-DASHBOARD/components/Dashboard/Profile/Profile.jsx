import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './style.css'
import ChangePassword from './ChangePassword/ChangePassword';
import TransactionPassword from './TransactionPassword/TransactionPassword';
import UsdtAddress from './USDT/UsdtAddress';
export const Profile = () => {
  const [activeTab, setActiveTab] = useState('profileInfo');

  const renderTab = () => {
    switch (activeTab) {
      case 'profileInfo':
        return <ProfileInfo />
      case 'changePassword':
        return <ChangePassword />
      case 'transactionPassword':
        return <TransactionPassword />
      case 'usdtAddress':
        return <UsdtAddress />
      default:
        return <ProfileInfo />
    }
  }

  return (
    <div className='main-profile-container table-container'>
      <h1 className='heading'>Your Profile Summery</h1>
      <div className='profile-tab-container'>
        <div className={`profile-tab ${activeTab === 'profileInfo' ? 'active-tab' : 'inActive-tab'}`}
          onClick={() => setActiveTab('profileInfo')}
        > 
          <span className='icon'><i class="bi bi-person-fill"></i></span>
          <h1 className='tab-name'>Profile Info</h1>
        </div>

        <div className={`profile-tab  ${activeTab === 'changePassword' ? 'active-tab' : 'inActive-tab'}`}
          onClick={() => setActiveTab("changePassword")}
        >
          <span className='icon'><i class="bi bi-key-fill"></i></span>
          <h1 className='tab-name'>Change Password</h1>
        </div>

        <div className={`profile-tab  ${activeTab === 'transactionPassword' ? 'active-tab' : 'inActive-tab'}`}
          onClick={() => setActiveTab('transactionPassword')}
        >
          <span className='icon'><i class="bi bi-key-fill"></i></span>
          <h1 className='tab-name'>Transaction Password</h1>
        </div>

        <div className={`profile-tab  ${activeTab === 'usdtAddress' ? 'active-tab' : 'inActive-tab'}`}
          onClick={() => setActiveTab('usdtAddress')}
        >
          <span className='icon'><i class="bi bi-currency-dollar"></i></span>
          <h1 className='tab-name'>USDT Address</h1>
        </div>
      </div>
      
      <div className='text-white'>
        {renderTab()}
      </div>
    </div>
  )
}
