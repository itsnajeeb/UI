import React from 'react'

const TransactionPassword = () => {
  return (
    <div className='profile-info-show'>
      <h1 className='title'>Change Your Transaction Password</h1>
      <div className='info-container'>

        <div className='info-tab'>
          <label htmlFor="">Current Transaction Password</label>
          <input type="text" placeholder='Current Password' />
        </div>

        <div className='info-tab'>
          <label htmlFor="">New Transaction Password</label>
          <input type="text" placeholder='New Password' />
        </div>

        <div className='info-tab'>
          <label htmlFor="">Confirm New Transaction Password</label>
          <input type="text" placeholder='Confir New Password' />
        </div>
      </div>
    </div>)
}

export default TransactionPassword