import React from 'react'
import Input from '../CommonComponents/Input'
import WalletPocketCard from '../CommonComponents/WalletPocketCard'
import Button from '../CommonComponents/Button'

const Home = () => {
    return (
        <div className='flex flex-col text-white items-center mt-10 px-12 space-y-2 pt-6'>
            <h1 className='font-semibold text-2xl text-center'>Balance Withdraw</h1>
            <p className='text-sm font-medium'>$5 deduct for Fast-X pool.</p>
            <div className="relative h-37.5 overflow-visible w-fit  my-7  ">
                <WalletPocketCard totalWithdrawal={"10,200"} />
            </div>
            <Input placeholder={"Enter Amount"} />
            <div className='w-full flex items-center justify-center'>
                <Button btnText={"WITHDRAWAL"} />
            </div>


        </div>
    )
}

export default Home