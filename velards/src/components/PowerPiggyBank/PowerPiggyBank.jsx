import './PowerPiggyBank.css'

const PowerPiggyBank = () => {
    return (
        <div className='power-container'>
            <div className='zigZagBarContainer'>
                <div className='zigZagBar'> 
                    <div className='zigzagBox font-judson'>
                        <h1><span className='icon'><i className="bi bi-star-fill"></i></span> Instant</h1>
                        <p className='subtext'>Withdrawals</p>
                    </div>
                    {/* These will be hidden on mobile via CSS */}
                    <div className='zigzagBox mobile-hide'>
                        <h1><span className='icon'><i className="bi bi-star-fill"></i></span> Daily</h1>
                        <p className='subtext'>income</p>
                    </div>
                    <div className='zigzagBox mobile-hide'>
                        <h1><span className='icon'><i className="bi bi-star-fill"></i></span> Technical</h1>
                        <p className='subtext'>security</p>
                    </div>
                    <div className='zigzagBox mobile-hide'>
                        <h1><span className='icon'><i className="bi bi-star-fill"></i></span> Instant</h1>
                        <p className='subtext'>Withdrawals</p>
                    </div>
                </div>
            </div>

            <div className='stripeWrapper'>
                <div className='powerStripe'>
                    <h1 className='stripe-title'><span className='icon'><i className="bi bi-star"></i></span> Power Piggybank</h1>
                    <h1 className='stripe-title mobile-hide'><span className='icon'><i className="bi bi-star"></i></span> Power piggybank</h1>
                    <h1 className='stripe-title mobile-hide'><span className='icon'><i className="bi bi-star"></i></span> Power piggybank</h1>
                </div>
            </div>
        </div>
    )
}

export default PowerPiggyBank