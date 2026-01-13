import React from 'react'
import image1 from '/image/image.jpg'
const BottomDesigned = () => {
  return (
    <div className='mt-20'>

      <div className=''>
        <h1 className='text-5xl md:text-7xl lg:leading-16 leading-14 font-bold textGredient text-center lg:text-center'>Road To Success</h1>
        <div className='lg:w-[500px]  mt-2 h-1 btnGradient mx-auto rounded-full'>

        </div>
      </div>

      <div className='px-10 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_350px] gap-10 mt-10 md:mt-20  mx-auto'>

        <div>
          <h1 className='text-(--text-color-1) font-bold text-2xl md:text-3xl mb-5'>Forex Market</h1>
          <ul className='flex flex-col gap-3 list-none'>
            <li className='flex-row  flex items-start gap-1'>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'> What it is: </span>The Global marketplace for trading national currencies (e.g. EUR/USD).
              </div>
            </li>

            <li className='flex-row  flex items-start gap-1 '>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'>  Key Point: </span> It's the largest and most liquid financial market the world, operating 24/5.
              </div>
            </li>

            <li className='flex-row  flex items-start gap-1'>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'>   Main Driver: </span>  Global economics, central bank policies, and geopolitics.
              </div>
            </li>

          </ul>
        </div>

        <div className='rounded-xl'>
          <img src={image1} alt="image" className='overflow-hidden lg:h-[80%] rounded-xl h-full w-full' />
        </div>
        <div>
          <h1 className='text-(--text-color-1) font-bold text-2xl md:text-3xl mb-5'>CRYPTO MARKET</h1>
          <ul className='flex flex-col gap-3 list-none'>
            <li className='flex-row  flex items-start gap-1'>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'>What it is: </span> The digital marketplace
                for trading cryptocurrencies (e.g.,
                Bitcoin, Ethereum)
              </div>
            </li>


            <li className='flex-row  flex items-start gap-1 '>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'>  Key Point: </span> It's a decentralized,
                24/7 market known for high
                volatility and innovation.
              </div>
            </li>

            <li className='flex-row  flex items-start gap-1'>
              <span className='mt-2 w-2 h-2 rounded-full bg-(--bg-color-1) shrink-0' />
              <div className='text-lg'>
                <span className='font-medium'>   Main Driver: </span>  Technology,
                adoption trends, sentiment, and
                regulatory news.
              </div>
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default BottomDesigned