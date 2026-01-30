import React from 'react';
import { Info, Infinity, Lock } from 'lucide-react';
import bgBox from '/dashboardimg/dashboard-img-05.png'
import './PromoCard.css';
import buttonBg from '/dashboardimg/buttonBg.png'
import icon from '/icons/icon-27.png'
import { Link } from 'react-router-dom';
export const PromoCard = () => {
    return (
        <div className='promo-card-section'>
            <div className='promo-bg-card'>
                <img src={bgBox} alt="" />
            </div>

            <div className='promo-card-content'>
                <div className="promo-header">
                    <h1>My Investment</h1>
                </div>

                <div className='current-rate'>
                    <div className='current-rate-content'>
                        <div className='middle-info'>
                            <img src={icon} alt="" className='current-rate-icon' />
                            <h1 className='percentage-to'>$100</h1>
                        </div>
                        <p className='desc-info'>Rate increases only for new deposits </p>
                    </div>
                </div>
            </div>

            <div className="button">
                <img src={buttonBg} alt="" />
                <h5><Link to={'/my-deposit'}>Buy</Link> </h5>
            </div>

        </div>
    );
};

export default PromoCard;
