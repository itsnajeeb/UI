import React from 'react'
import '../../styles/Achivement.css'
const Achivement = () => {
    return (
        <div className='relative'>
            <div className="horizantalLineLeftSide"></div>
            <div className='leftSideLine absolute'></div> 
            <div className="horizantalLineRightSide"></div>
            <div className='rightSideLine absolute'></div>
            <div class="stats-bar relative">
                <div class="stat">
                    <span class="label">AI Tokens Listed</span>
                    <span class="value">670</span>
                </div>

                <div class="stat">
                    <span class="label">Whitelabel Partners</span>
                    <span class="value">8139</span>
                </div>

                <div class="stat">
                    <span class="label">Users</span>
                    <span class="value">88776</span>
                </div>

                <div class="stat">
                    <span class="label">AI TOKENS</span>
                    <span class="value">436</span>
                </div>
            </div>
        </div>


    )
}

export default Achivement