import React from 'react'

const UsdtAddress = () => {
  return (
    <div className='profile-info-show'>
      <h1 className='title'>Your USDT Address</h1>
      <div className='info-container'>

        <div className='info-tab'>
          <label htmlFor="">USDT Address (BEP-20)</label>
          <input type="text" placeholder='E-Currency Address (BEP-20)' />
        </div>

        <div className='info-tab'>
          <label htmlFor="">Transaction Password</label>
          <input type="text" placeholder='Enter Transaction Password' />
        </div>
      </div>
    </div>
  )
}

export default UsdtAddress