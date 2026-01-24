import React from 'react'
import './style.css'
import logoBlack from '/image/logoBlack.png'
import document1 from '/image/document1.png'
import document2 from '/image/document2.png'
import document3 from '/image/document3.png'

const HighFidelityCard = () => {
    return (
        <div className="fidelity-card">

            {/* Top Section: Text */}
            <div className="fidelity-header">
                <h2 className="fidelity-title textGredient">
                    High-Fidelity Reasoning
                </h2>
                <p className="fidelity-subtitle">
                    Thinks through information clearly.
                </p>
            </div>

            {/* Document Icons */}
            <div className='document-row'>
                <div className='doc-wrapper'><img src={document1} alt="doc1" /></div>
                <div className='doc-wrapper'><img src={document2} alt="doc2" /></div>
                <div className='doc-wrapper'><img src={document3} alt="doc3" /></div>
            </div>

            {/* Bottom Section: Mock UI Analysis */}
            <div className="analysis-container">
                <div className="analysis-drawer">
                    <h3 className="analysis-header">Comparative Analysis</h3>

                    <div className="analysis-list">
                        {/* Section 1 */}
                        <div className="analysis-group">
                            <div className='group-title-row'>
                                <input type="checkbox" readOnly checked />
                                <h2 className='group-label'>Cost Efficiency</h2>
                            </div>
                            <div className='group-data'>
                                <div className='data-line'><span>Supplier A</span><span>$1.28 per unit</span></div>
                                <div className='data-line'><span>Supplier B</span><span>$1.41 per unit</span></div>
                                <div className='data-line font-medium'><span>Result</span><span>Supplier A is 9.2% Cheaper</span></div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="analysis-group">
                            <div className='group-title-row'>
                                <input type="checkbox" readOnly checked />
                                <h2 className='group-label'>Delivery Reliability</h2>
                            </div>
                            <div className='group-data'>
                                <div className='data-line'><span>Supplier A</span><span>$1.28 per unit</span></div>
                                <div className='data-line'><span>Supplier B</span><span>$1.41 per unit</span></div>
                                <div className='data-line font-medium'><span>Result</span><span>Supplier A is 9.2% Cheaper</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Logo Overlay */}
                    <div className='drawer-logo'>
                        <img src={logoBlack} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighFidelityCard;