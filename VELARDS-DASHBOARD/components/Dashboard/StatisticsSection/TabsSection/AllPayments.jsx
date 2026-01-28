import React from 'react'
import box from '/dashboardimg/dashboard-img-04.png'
import './Style.css'
const AllPayments = ({title, amount, currency}) => {
  return (
    <div className='payment-section'>
        <img src={box} alt=""  />
        <div className='content-section'>
            <h1>{title}</h1>
            <p className='amount'>{amount}</p> 
            <p className='badge'>{currency}</p>
        </div>
    </div>
  )
}

export default AllPayments