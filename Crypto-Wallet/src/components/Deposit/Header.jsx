import React from 'react'
import Input from '../CommonComponents/Input'
import Button from '../CommonComponents/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col text-white items-center mt-10 px-12  pt-6'>
      <h1 className='font-semibold text-2xl text-center '>First Time Investment: Extra $5!</h1>
      <p className='text-sm font-medium mt-1'>Invest now and get your bonus instantly.</p>
      <div className='w-full space-y-7 mt-5'>
        <Input placeholder={"Enter Deposit Amount"} />
        <Input placeholder={"Extra Amount"} />
        <Input placeholder={"Total Amount"} />
      </div>
      <div className='flex  justify-between px-2  w-full '>
        <Button btnText={"Invest Now"} />
        <Link to={'/deposit-history'}>
          <Button btnText={"History"} />
        </Link>
      </div>
    </div>
  )
}

export default Header