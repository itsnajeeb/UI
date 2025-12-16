import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const Card = ({ text, total }) => {
    const profit = false
    return (
        <div className={`relative px-7 py-8 flex  rounded-xl max-w-2xl w-60  bg-white boxShadow text-black `} >
            <div className='flex flex-col items-center justify-center space-y-1  mx-auto'>
                <h2 className='text-black text-lg font-medium'>{text}</h2>
                <h1 className='text-3xl font-bold text-primary-text'>{"$" + total}</h1>
                <p></p>

                <p className={`${profit ? 'text-green-500' : 'text-red-500'}  font-semibold flex gap-1 text-xs absolute right-3 bottom-3 `}>{profit ?
                    <> 2.5%<TrendingUp size={17} /> </> : <>2.5% <TrendingDown size={17} /> </>}</p>
            </div>
        </div>


    )
}

export default Card