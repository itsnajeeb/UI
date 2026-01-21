import './PowerPiggyBank.css'
const PowerPiggyBank = () => {
    return (
        <div className='flex mt-20 flex-col relative'>
            <div className='zigZagBarContainer'>
                <div className='zigZagBar '>
                    <div className='zigzagBox flex flex-col font-judson'>
                        <h1><span className='icon'><i class="bi bi-star-fill"></i></span> Instant</h1>
                        <p className='uppercase text-sm text-center text-gray-300/90'>Withdrawals</p>
                    </div>
                    <div className='zigzagBox flex flex-col'>
                        <h1><span className='icon'><i class="bi bi-star-fill"></i></span> Daily</h1>
                        <p className='uppercase text-sm text-center text-gray-300/90'>income</p>
                    </div>
                    <div className='zigzagBox flex flex-col'>
                        <h1><span className='icon'><i class="bi bi-star-fill"></i></span> Technical</h1>
                        <p className='uppercase text-sm text-center text-gray-300/90'>security</p>
                    </div>
                    <div className='zigzagBox flex flex-col'>
                        <h1><span className='icon'><i class="bi bi-star-fill"></i></span> Instant</h1>
                        <p className='uppercase text-sm text-center text-gray-300/90'>Withdrawals</p>
                    </div>
                </div>
            </div>

            <div className='stripeWrapper'>
                <div className='powerStripe flex px-20  '>
                    <h1 className='uppercase '><span className='icon'><i class="bi bi-star"></i></span> Power Piggybank</h1>
                    <h1 className='uppercase '><span className='icon'><i class="bi bi-star"></i></span> Power piggybank</h1>
                    <h1 className='uppercase '><span className='icon'><i class="bi bi-star"></i></span> Power piggybank</h1>
                </div>
            </div>
        </div>
    )
}

export default PowerPiggyBank
