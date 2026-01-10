import React from 'react';
import '../../styles/Product.css'
import logoBlack from '/image/logoBlack.png'
const SmartUnderstandingCard = () => {
    return (
        <div className="relative border border-gray-300/80 w-full max-w-sm overflow-hidden  bg-white px-4 cardContainer">

            {/* Top Section: Document Summary */}
            <div className="p-8 pb-0 relative">
                <div className=" rounded-xl bg-gray-50 px-5 py-6 shadow-sm border border-gray-100 ">
                    <h3 className="mb-4 text-center text-sm font-bold text-dark-green uppercase tracking-tight">
                        Project Performance Summary
                    </h3>

                    <div className="space-y-3 cardContenct relative">
                        <div className="flex justify-between text-xs font-medium">
                            <span className="text-gray-600">Engagement increased</span>
                            <span className="font-semibold text-gray-800 ">27.4%</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium">
                            <span className="text-gray-600">Customer retention improved</span>
                            <span className="font-semibold text-gray-800">68% → 74%</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium">
                            <span className="text-gray-600">Average response time decreased</span>
                            <span className="font-semibold text-gray-800">18%</span>
                        </div>

                        <div className='overlayContent'>
                            <div>
                                <h2 className='text-base font-medium'>Features</h2>
                                <p className='text-sm text-color-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis ducimus. Explicabo eligendi.</p>
                            </div>

                            <div>
                                <h2 className='text-base font-medium'>Features</h2>
                                <p className='text-sm text-color-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis ducimus. Explicabo eligendi.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-10 h-10 cardLogo'>
                    <img src={logoBlack} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="overlay" />

            </div>


            {/* Bottom Section: Text */}
            <div className=" py-8 mt-5  text-center">
                <h2 className="text-3xl pb-1 font-semibold tracking-tight textGredient">
                    Smart Understanding
                </h2>
                <p className="text-base font-medium text-color-gray">
                    Understands your documents.
                </p>
            </div>
        </div>
    );
};

export default SmartUnderstandingCard;