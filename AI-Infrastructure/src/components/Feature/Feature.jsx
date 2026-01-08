import { useState, useEffect, useRef } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import feature1 from "/image/feature/feature-1.png";
import feature2 from "/image/feature/feature-2.png";
import robot from "/image/feature/Robot.png";
import "../../styles/Feature.css";
const features = [
    {
        title: "Encrypted Private Network",
        featureNo: '01',
        desc: [
            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi."
        ],

        image: feature1,
    },
    {
        title: "Secure Infrastructure",
        featureNo: '02',
        desc: [
            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi."
        ],
        image: feature2,
    },
    {
        title: "Secure Network Protocol",
        featureNo: '03',
        desc: [
            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi.",

            "Lorem ipsum dolor red consectetur adipisicing elit. Ab temporibus officiis consequatur maiores, ratione excepturi."
        ],
        image: feature1,
    },
];


const Feature = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [direction, setDirection] = useState("down");
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasEntered, setHasEntered] = useState(false); // Tracks the first entry

    const sectionRef = useRef(null);
    // 2. The First Entry Animation
    const triggerFirstEntry = () => {
        setIsAnimating(true);
        setDirection("down");
        // Start from index 0
        setActiveIndex(0);

        setTimeout(() => {
            setIsAnimating(false);
            setHasEntered(true);
        }, 1200);
    };

    // 1. Detect when section enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasEntered) {
                    triggerFirstEntry();
                }
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasEntered]);


    const handleNavigation = (dir) => {
        if (isAnimating) return;

        let nextIndex;
        if (dir === "down") {
            nextIndex = activeIndex === features.length - 1 ? 0 : activeIndex + 1;
        } else {
            nextIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
        }

        setDirection(dir);
        setPrevIndex(activeIndex);
        setActiveIndex(nextIndex);
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
            setPrevIndex(null);
        }, 1200);
    };

    const getSlideClass = (index) => {
        // If it's the very first time and we haven't entered yet, keep all below
        if (!hasEntered && !isAnimating) return "slide-stage-bottom";

        if (index === activeIndex) return "slide-stage-center";
        if (index === prevIndex) {
            return direction === "down" ? "slide-exit-up" : "slide-exit-down";
        }

        return direction === "down" ? "slide-stage-bottom" : "slide-stage-top";
    };

    return (
        <section
            ref={sectionRef}
            className="feature-section h-[90vh] flex items-center justify-center px-20 mt-32">

            <div className="feature-wrapper w-full h-full flex flex-col ">

                {/* Viewport: Added flex-1 to take up all remaining height */}
                <div className={`feature-viewport flex flex-row flex-1 w-full relative ${!hasEntered && !isAnimating ? "hidden-state" : ""}`}>

                    {/* LEFT SIDE: TEXT */}
                    <div className="feature-left w-1/2 relative h-full  flex ">
                        {/* Heading stays at the top */}
                        <h1 className="feature-title  w-fit mb-6" style={{ opacity: hasEntered || isAnimating ? 1 : 0 }}>
                            FEATURES
                        </h1>

                        {features.map((feature, idx) => (
                            <div key={idx} className={`slide-item self-center   ${getSlideClass(idx)}`}>
                                <div className="flex flex-col gap-5">
                                    <p className="text-gray-500 text-xl">{feature.featureNo}</p>
                                    <h2 className="feature-heading text-primary text-6xl font-medium">
                                        {feature.title.split(" ").slice(0, 2).join(" ")}
                                        <br />
                                        {feature.title.split(" ").slice(2).join(" ")}
                                    </h2>
                                    <div className="flex gap-5">
                                        {feature.desc.map((d, i) => (

                                            <p key={i}   className="feature-desc border-2 text-sm w-42 px-4 py-3 text-justify border-gray-500/40 rounded-lg relative"
>
                                                {d}
                                            </p>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* ARROWS: Fixed at the bottom */}
                        <div className="feature-arrows absolute bottom-0 border-2 border-primary w-fit px-5 py-4 rounded-md flex gap-5 mt-auto mb-10" style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 0.5s' }}>
                            <button className="cursor-pointer" onClick={() => handleNavigation("up")} disabled={isAnimating}><ArrowUp /></button>
                            <button className="cursor-pointer" onClick={() => handleNavigation("down")} disabled={isAnimating}><ArrowDown /></button>
                        </div>

                    </div>

                    <div className="line-wrapper">
                        <div className="line-core"></div>
                    </div>

                    {/* RIGHT SIDE: FULL HEIGHT IMAGE AREA */}
                    <div className="feature-right w-1/2 relative h-full flex justify-center items-center">
                        {/* Static Robot (Background) */}
                        <div className="absolute inset-0 pointer-events-none z-0 flex items-center">
                            <img src={robot} alt="" className="absolute right-15  opacity-50" />
                        </div>

                        {/* Sliding Content */}
                        {features.map((feature, idx) => (
                            <div key={idx} className={`slide-item h-full absolute inset-0 flex px-10 py-5 ${getSlideClass(idx)}`}>
                                <img
                                    src={feature.image}
                                    className="feature-image w-[50%] object-cover self-start  rounded-xl"
                                    alt={feature.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};


export default Feature;