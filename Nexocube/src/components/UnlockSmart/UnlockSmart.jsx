import React from 'react';
import './style.css';

const UnlockSmart = () => {
  return (
    <div className='unlock-container'>
        <div className='unlock-content'>
            <h1 className='unlock-title'>
              Unlock a Smarter Way to Work
            </h1>
            <p className='unlock-description'>
              Experience a refined AI platform built for clarity, intelligence, and exceptional performance.
            </p>
        </div>

        <div className='unlock-actions'>
            <button className='btn-primary activeBtn'>Get Started</button>
            <button className='btn-secondary'>Book a Demo</button>
        </div>
    </div>
  );
}

export default UnlockSmart;