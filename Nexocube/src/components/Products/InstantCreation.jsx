import React from 'react';
import logoBlack from '/image/logoBlack.png';
import './style.css';

const InstantCreation = () => {
    return (
        <div className="instant-card-container">
            {/* Tag/Status Header */}
            <div className='status-tags-wrapper'>
                <div className='status-tag-row'>
                    <h1 className='status-tag'>
                        <span className="check-dot">✓</span>Summary Extracted
                    </h1>
                    <h1 className='status-tag'>
                        <span className="check-dot">✓</span>Data Validated
                    </h1>
                </div>
                <div className='status-tag-row second-row'>
                    <h1 className='status-tag'>
                        <span className="check-dot">✓</span>Key Insights Identified
                    </h1>
                    <h1 className='status-tag'>
                        <span className="check-dot">✓</span>Next Actions Generated
                    </h1>
                </div>
            </div>

            {/* Visual Centerpiece */}
            <div className="visual-stage">
                {/* Animated Backgrounds */}
                <div className="glow-circle-bg animate-pulse-slow"></div>
                <div className="solid-circle-bg"></div>
                <div className="inner-circle-bg"></div>

                {/* Floating Report Card */}
                <div className="floating-report-card">
                    <h3 className="report-header">Research Report</h3>
                    <div className="report-content">
                        <div className="report-section">
                            <h1 className='report-item-title'>Beverage Launch Study</h1>
                            <p className='report-item-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at, ea autem numquam eaque.</p>
                        </div>
                        
                        {/* Repeated Data Items */}
                        {["Data Validated", "Summary Extracted", "Key Insight Identified"].map((item, i) => (
                            <div key={i} className="report-section">
                                <span className="report-item-title">{item}</span>
                                <p className="report-item-desc">AI-generated insights verified against core datasets.</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Centered Bottom Logo */}
                    <div className="report-logo-badge">
                        <img src={logoBlack} alt="logo" />
                    </div>
                </div>
            </div>

            {/* Text Footer */}
            <div className='instant-footer-text'>
                <h2 className="footer-title textGredient">Instant Creation</h2>
                <p className="footer-subtitle">Creates content instantly.</p>
            </div>
        </div>
    );
}

export default InstantCreation;