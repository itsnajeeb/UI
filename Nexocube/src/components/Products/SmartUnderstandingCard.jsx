import React from 'react';
import logoBlack from '/image/logoBlack.png'

const SmartUnderstandingCard = () => {
    return (
        <div className="relative border-b md:border-b-0 md:border-r border-gray-300/80 w-full overflow-hidden bg-white px-4 md:px-8 py-10 cardContainer">
            <div className="relative">
                <div className="rounded-xl bg-gray-50 px-5 py-6 shadow-sm border border-gray-100">
                    <h3 className="mb-4 text-center text-xs font-bold text-dark-green uppercase tracking-tight">
                        Project Performance Summary
                    </h3>
                    <div className="space-y-3 cardContent relative">
                        {[
                            { label: "Engagement increased", val: "27.4%" },
                            { label: "Retention improved", val: "68% → 74%" },
                            { label: "Response time decreased", val: "18%" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex justify-between text-[11px] font-medium border-b border-gray-100 pb-1">
                                <span className="text-gray-600">{item.label}</span>
                                <span className="font-semibold text-gray-800">{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-10 h-10 cardLogo mx-auto -mt-5 relative z-20'>
                    <img src={logoBlack} alt="logo" className='w-full h-full object-cover' />
                </div>
            </div>

            <div className="mt-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold textGredient">Smart Understanding</h2>
                <p className="text-sm md:text-base font-medium text-color-gray">Understands your documents.</p>
            </div>
        </div>
    );
};

export default SmartUnderstandingCard;