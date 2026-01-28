import React from 'react'
import './style.css'
import buttonBg from '/dashboardimg/buttonBg.png'
import { useNavigate } from 'react-router-dom'
export const Withdrawal = () => {
  const navigate = useNavigate()
  return (
    <div className='deposit-section'>
      <h1 className='heading'>Withdrawal Your Amount</h1>
      <div className="deposit-content">
        {/* <h2>Minimum Deposit Balance : $100</h2> */}
        <div className='deposit-info-box'>

          <div className='deposit-info'>
            <input type="text" />
            <label htmlFor="">Enter User Id</label>
          </div>
          <div className='deposit-info'>
            <input type="text" />
            <label htmlFor="">Enter Amount</label>

          </div><div className='deposit-info'>
            <input type="text" />
            <label htmlFor="">Enter Transaction Password</label>
          </div>

          <div className='button'>
            <div className='btn'>
              <img src={buttonBg} alt="" />
              <p>Deposit</p>
            </div>
            <div className='btn' onClick={()=> navigate('/withdrawal-history')}>
              <img src={buttonBg} alt="" />
              <p>History</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdrawal