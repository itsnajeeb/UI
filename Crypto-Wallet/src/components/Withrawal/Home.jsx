import React from 'react'
import Input from '../CommonComponents/Input'
import Button from '../CommonComponents/Button'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-col text-white items-center mt-10 px-12 space-y-2 pt-6'>
            <h1 className='font-semibold text-2xl text-center'>Balance Withdraw</h1>
            <p className='text-sm font-medium'>$5 deduct for Fast-X pool.</p>
            <div className='text-center'>
                <h1 className='text-xl font-medium mt-5  text-gray-200/80'>Available Balance </h1>
                <p className='font-medium text-base text-gray-200'>375.29 $</p>
            </div>
            <Input placeholder={"Enter Amount"} />
            <div className=' flex items-center justify-center gap-5'>
                <Button btnText={"WITHDRAWAL"} />
                <Link to={'/withdrawal-history'}>
                    <Button btnText={"HISTORY"} />
                </Link>
            </div>


        </div>
    )
}

export default Home