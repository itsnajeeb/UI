import React from 'react';
// Make sure this path is correct and the image is a suitable pattern (like a PNG with transparency)
import bg2 from '/Images/welcome-bg2.png';
import { Check } from 'lucide-react';

const WelcomeCard = () => {
    let CARD_COLOR_START = "#635bff";
    let CARD_COLOR_END = "#635bff"

    // Correctly format the imported image variable for CSS
    const patternUrl = `url(${bg2})`;

    return (
        <div className="w-full h-65 md:h-57.5 lg:h-full">
            {/* Outer Card Container */}
            <div
                className="
                h-full
                    relative 
                    w-full 
                    p-6 
                    rounded-xl 
                    shadow-2xl 
                    overflow-hidden
                "
                // Use inline style to apply the linear gradient (This sets the overall card background)
                style={{
                    background: `linear-gradient(120deg, ${CARD_COLOR_START} 0%, ${CARD_COLOR_END} 80%)`,
                }}
            >

                {/* === Background Pattern Image === */}
                <div
                    className="
                        absolute 
                        bottom-0 
                        right-0 
                        w-full 
                        h-full 
                        opacity-70 
                        bg-no-repeat 
                        transform 
                        translate-y-1
                        translate-x-20
                        z-0 
                    "
                    style={{
                        // FIX 1: Correctly use the CSS url() function
                        backgroundImage: patternUrl,

                        // FIX 2: Adjust size and position to show the pattern on the right/bottom
                        backgroundSize: '80%', // Make the pattern cover only 80% of the area
                        backgroundPosition: 'right bottom', // Anchor the image to the bottom-right
                    }}
                />

                {/* === Content Area === */}
                <div className="relative z-10 text-white flex flex-col h-full ">

                    {/* Top Status Badge */}
                    <div className="inline-flex items-center space-x-2  px-4 mb-4 bg-gray-600/40 rounded-md py-2  self-start">
                        <span className="text-sm font-semibold border rounded-full p-0.5"><Check size={10} /></span>
                        <span className="text-sm manrope-fontFamliy">
                            This month <span className='font-semibold '>+15% Profit</span>
                        </span>
                    </div>

                    {/* Spacer to push name/text to the bottom */}
                    <div className="grow"></div>

                    {/* Bottom Text Content */}
                    <div className="mt-auto">
                        <h1 className="text-xl  mb-1 manrope-fontFamily">
                            Hey, <span className='font-bold'> David McMichael</span>
                        </h1>
                        <p className="text-sm text-gray-200/80 text-opacity-80">
                            Aenean vel libero id metus sollicitudin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;