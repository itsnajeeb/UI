import React, { useState, useEffect, useRef } from 'react';

// --- MOCK DATA ---
const mockData = {
    // NOTE: For production, ensure IDs are unique across all categories, e.g., id: 'App-1', id: 'Mobile-1', etc.
    App: [
        { id: 'app-1', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-1.jpg', name: 'Minecraf App', assignee: 'Jason Roy', progress: '73.2%', priority: 'Low', budget: '$3.5k' },
        { id: 'app-2', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-2.jpg', name: 'Web App Project', assignee: 'Mathew Flintoff', progress: '73.2%', priority: 'Medium', budget: '$3.5k' },
        { id: 'app-3', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-3.jpg', name: 'Modernize Dashboard', assignee: 'Anil Kumar', progress: '73.2%', priority: 'Very High', budget: '$3.5k' },
        { id: 'app-4', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-4.jpg', name: 'Dashboard Co', assignee: 'George Cruize', progress: '73.2%', priority: 'High', budget: '$3.5k' },
    ],
    Mobile: [
        { id: 'mobile-1', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-1.jpg', name: 'iOS E-Commerce', assignee: 'Jason Roy', progress: '73.2%', priority: 'Low', budget: '$3.5k' },
        { id: 'mobile-2', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-2.jpg', name: 'Android Widget', assignee: 'Mathew Flintoff', progress: '73.2%', priority: 'Medium', budget: '$3.5k' },
        { id: 'mobile-3', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-3.jpg', name: 'React Native Update', assignee: 'Anil Kumar', progress: '73.2%', priority: 'Very High', budget: '$3.5k' },
        { id: 'mobile-4', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-4.jpg', name: 'Flutter Project', assignee: 'George Cruize', progress: '73.2%', priority: 'High', budget: '$3.5k' },
    ],
    SaaS: [
        { id: 'saas-1', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-1.jpg', name: 'Cloud API Service', assignee: 'Jason Roy', progress: '73.2%', priority: 'Low', budget: '$3.5k' },
        { id: 'saas-2', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-2.jpg', name: 'Subscription Model', assignee: 'Mathew Flintoff', progress: '73.2%', priority: 'Medium', budget: '$3.5k' },
        { id: 'saas-3', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-3.jpg', name: 'Server Migration', assignee: 'Anil Kumar', progress: '73.2%', priority: 'Very High', budget: '$3.5k' },
        { id: 'saas-4', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-4.jpg', name: 'Platform Scaling', assignee: 'George Cruize', progress: '73.2%', priority: 'High', budget: '$3.5k' },
    ],
    Others: [
        { id: 'other-1', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-1.jpg', name: 'Hardware Prototyping', assignee: 'Jason Roy', progress: '73.2%', priority: 'Low', budget: '$3.5k' },
        { id: 'other-2', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-2.jpg', name: 'Internal Tooling', assignee: 'Mathew Flintoff', progress: '73.2%', priority: 'Medium', budget: '$3.5k' },
        { id: 'other-3', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-3.jpg', name: 'Legacy System Update', assignee: 'Anil Kumar', progress: '73.2%', priority: 'Very High', budget: '$3.5k' },
        { id: 'other-4', image: 'https://matdash-angular-stylish.netlify.app/assets/images/products/dash-prd-4.jpg', name: 'Research Project X', assignee: 'George Cruize', progress: '73.2%', priority: 'High', budget: '$3.5k' },
    ],
};

const TAB_ORDER = ['App', 'Mobile', 'SaaS', 'Others'];

//  Helper component for icons
const TabIcon = ({ tab, isActive }) => {
    const color = isActive ? 'text-white' : 'text-gray-700';

    switch (tab) {
        case 'App':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            );
        case 'Mobile':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        case 'SaaS':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h.01M21 10h.01M3 14h.01M21 14h.01M16 4h2a2 2 0 012 2v2m-6-4v4m-6-4v4m6 12h2a2 2 0 002-2v-2m-6 4v-4m-6 4v-4" />
                </svg>
            );
        case 'Others':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            );
        default:
            return null;
    }
};

const RevenueByProduct = () => {
    const [activeTab, setActiveTab] = useState('App');
    const [direction, setDirection] = useState(null);
    const [currentMonth, setCurrentMonth] = useState('Sep 2025');
    const [previousTab, setPreviousTab] = useState(activeTab);

    //  REF for the scrolling container 
    const tabContainerRef = useRef(null);

    //  Tab Scroll Logic
    const scrollAmount = 110; // Scroll distance
    const scrollTabs = (direction) => {
        if (tabContainerRef.current) {
            tabContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Helper to get priority tag classes
    const getPriorityClasses = (priority) => {
        switch (priority) {
            case 'Low': return 'bg-green-100 text-green-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'High': return 'bg-red-100 text-red-800';
            case 'Very High': return 'bg-teal-100 text-teal-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Effect to detect tab change and set animation direction
    useEffect(() => {
        if (activeTab !== previousTab) {
            const currentIndex = TAB_ORDER.indexOf(previousTab);
            const newIndex = TAB_ORDER.indexOf(activeTab);

            if (newIndex > currentIndex) {
                // Clicked tab to the right: New content slides in from RIGHT
                setDirection('right');
            } else if (newIndex < currentIndex) {
                // Clicked tab to the left: New content slides in from LEFT
                setDirection('left');
            }
            setPreviousTab(activeTab);
        }
    }, [activeTab, previousTab]);


    const handleTabClick = (newTab) => {
        if (newTab !== activeTab) {
            setActiveTab(newTab);
        }
    };

    // --- Table Renderer Component ---
    const TableRows = ({ data }) => (
        <>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="grid grid-cols-6 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0 
                   min-w-[600px] md:min-w-full"
                >
                    {/* Assigned (col-span-2) */}
                    <div className="col-span-2 flex items-center space-x-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.assignee}</p>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="text-right text-gray-700 font-medium">{item.progress}</div>

                    {/* Priority */}
                    <div className="flex justify-center col-span-2">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-lg ${getPriorityClasses(item.priority)}`}>
                            {item.priority}
                        </span>
                    </div>

                    {/* Budget */}
                    <div className="text-right text-gray-700 font-medium">{item.budget}</div>
                </div>
            ))}

        </>
    );

    // Determine the animation class based on direction
    const animationClass = direction === 'right' ? 'animate-in-right' : direction === 'left' ? 'animate-in-left' : '';

    return (
        <div className="bg-white p-6 rounded-xl shadow  mx-auto font-sans  ">
            {/*ANIMATION CSS  */}
            <style jsx="true">{`
                /* Hiding the horizontal scrollbar */
                .hide-scrollbar {
                    overflow-x: hidden;
                }

                /* Define Keyframes for the Entrance (New content slides in) */
                @keyframes slide-in-right {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slide-in-left {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                /* Apply the animation classes */
                .animate-in-right {
                    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .animate-in-left {
                    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Revenue by Product</h2>
                <div className="relative">
                    <select
                        className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                        value={currentMonth}
                        onChange={(e) => setCurrentMonth(e.target.value)}
                    >
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                            <option key={m}>{m} 2025</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/*  SCROLLABLE TAB CONTAINER: Full width, arrows visible on small screens  */}
            <div className="flex items-center relative mb-6 ">

                {/* LEFT Scroll Button (Hidden on Medium and larger screens)  */}
                <button
                    onClick={() => scrollTabs('left')}
                    className="shrink-0 w-8 h-10  mr-1 flex items-center justify-center rounded-lg  sm:hidden text-gray-500 hover:text-indigo-600 transition duration-150 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>


                {/* Tab List Container - The element that scrolls */}
                <div
                    ref={tabContainerRef}
                    // Apply hide-scrollbar, enable scrolling on small screens, disable on large screens
                    className="flex space-x-3  overflow-x-hidden hide-scrollbar-tabs  md:overflow-x-visible"
                >
                    {TAB_ORDER.map((tab) => (
                        <button
                            key={tab}
                            // flex-shrink-0 ensures the buttons stay in one line and don't wrap
                            className={`shrink-0 flex cursor-pointer items-center space-x-2 py-2 px-5 rounded-lg font-medium transition-colors duration-200 text-base
                                ${activeTab === tab ? 'bg-[#6058F6] text-white shadow-md' : 'bg-[#f9f6f6] text-gray-600 hover:bg-[#EDEEF0]'}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            <TabIcon tab={tab} isActive={activeTab === tab} />
                            <span>{tab}</span>
                        </button>
                    ))}
                </div>

                {/* RIGHT Scroll Button (Hidden on Medium and larger screens) */}
                <button
                    onClick={() => scrollTabs('right')}
                    className="shrink-0 w-8 h-10 ml-1 flex items-center justify-center rounded-lg sm:hidden text-gray-500 hover:text-indigo-600 transition duration-150 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            {/* END: SCROLLABLE TAB CONTAINER */}


            {/* ANIMATED TABLE CONTENT WRAPPER */}
            <div className="relative overflow-x-hidden  px-2 ">

                {/* Fixed-width inner wrapper for small screens */}
                <div
                    key={activeTab}
                    className={`${animationClass}  min-w-[600px] md:min-w-full`}
                >
                    {/* TABLE HEADER  */}
                    <div className="grid grid-cols-6 gap-4 text-gray-500 text-sm font-medium uppercase tracking-wider py-3 border-b border-gray-200 mb-2">
                        <div className="col-span-2">Assigned</div>
                        <div className="text-right">Progress</div>
                        <div className="text-center col-span-2">Priority</div>
                        <div className="text-right">Budget</div>
                    </div>

                    {/*  TABLE ROWS  */}
                    <TableRows data={mockData[activeTab]} />
                </div>
            </div>

        </div>
    );
};

export default RevenueByProduct;