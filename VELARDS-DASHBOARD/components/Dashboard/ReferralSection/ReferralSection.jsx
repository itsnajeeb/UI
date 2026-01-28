import React from 'react';
import { Users, Globe, Copy, Share } from 'lucide-react';
import './ReferralSection.css';


export const ReferralSection = () => {

    return (
        <div className="referral-section ">

            {/* Your Inviter */}
            <div className="referral-block">
                <div className="referral-label">YOUR INVITER</div>
                <div className="input-section">
                    <div className="icon-section">
                        <Users size={18} className="icon-yellow" />
                    </div>
                    <div className="inviter-name"><p>Username</p></div>
                </div>
            </div>
            <div className="referral-block">
                <div className="referral-label">YOUR REFERRAL LINK</div>
                <div className="input-section">
                    <div className="icon-section">
                        <Share size={18} className="icon-yellow" />
                    </div>
                    <div className="inviter-name"><p>https://castalt.cc/username</p></div>
                </div>
            </div>


        </div>
    );
};

export default ReferralSection;
