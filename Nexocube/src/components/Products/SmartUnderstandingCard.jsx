import React from 'react';
import logoBlack from '/image/logoBlack.png'
import './style.css'

const SmartUnderstandingCard = () => {
    return (
        <div className="smart-card-container">
            <div className="card-visual-area">
                <div className="inner-data-box">
                    <h3 className="data-box-header">
                        Project Performance Summary
                    </h3>
                    <div className="data-rows">
                        {[
                            { label: "Engagement increased", val: "27.4%" },
                            { label: "Retention improved", val: "68% → 74%" },
                            { label: "Response time decreased", val: "18%" }
                        ].map((item, idx) => (
                            <div key={idx} className="data-row-item">
                                <span className="label-text">{item.label}</span>
                                <span className="value-text">{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Floating Logo */}
                <div className='floating-card-logo'>
                    <img src={logoBlack} alt="logo" className='logo-img' />
                </div>
            </div>

            <div className="card-text-footer">
                <h2 className="card-footer-title textGredient">Smart Understanding</h2>
                <p className="card-footer-subtitle">Understands your documents.</p>
            </div>
        </div>
    );
};

export default SmartUnderstandingCard;