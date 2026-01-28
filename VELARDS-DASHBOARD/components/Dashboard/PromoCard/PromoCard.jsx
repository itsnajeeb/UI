import React from 'react';
import { Info, Infinity, Lock } from 'lucide-react';
import bgBox from '/dashboardimg/dashboard-img-05.png'
import './PromoCard.css';
import buttonBg from '/dashboardimg/buttonBg.png'
import icon from '/icons/icon-27.png'
export const PromoCard = ({
    rate = '3.1-3.3%',
    bonus = '+ 0.2%',
}) => {
    return (
        <div className='promo-card-section'>
            <div className='promo-bg-card'>
                <img src={bgBox} alt="" />
            </div>
            <div className='promo-card-content'>

                <div className="promo-header">
                    <h1>Every Monday  </h1>
                    <p className='percentage'> + 0.2%</p>
                    <span className='icon'><Info size={16} /></span>
                </div>
            </div>

            <div className='current-rate'>
                <div className='current-rate-content'>
                    <p className='rate-title'>CURRENT RATE</p>
                    <div className='middle-info'>
                        <img src={icon} alt="" className='current-rate-icon' />
                        <h1 className='percentage-to'>3.1-3.3%</h1>
                    </div>
                    <p className='desc-info'>Rate increases only for new deposits </p>
                </div>
            </div>

            <div className="button">
                <img src={buttonBg} alt="" />
                <h5>Buy CST Token</h5>
            </div>
        </div>
    );
};

export default PromoCard;
