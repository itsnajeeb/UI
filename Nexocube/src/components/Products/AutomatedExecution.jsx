import React from 'react'
import Chart from './Chart'
import system from '/image/system.png'
import './style.css'

const AutomatedExecution = () => {
    return (
        <div className='execution-card'>
            {/* Left/Top Section: Chart */}
            <div className='execution-chart-wrapper'>
                <Chart />
            </div>

            {/* Right/Bottom Section: Content */}
            <div className='execution-content'>
                <div className='execution-text-group'>
                    <h1 className='execution-title textGredient'>
                        Automated Execution
                    </h1>
                    <h5 className='execution-subtitle'>
                        Handles tasks automatically.
                    </h5>
                </div>

                <div className='execution-system-graphic'>
                    <img src={system} alt="system" />
                </div>
            </div>

            {/* Chips Container (Hidden on mobile) */}
            <div className='execution-chips-overlay'>
                {/* Floating chips can be added here if needed */}
            </div>
        </div>
    )
}

export default AutomatedExecution;