import React from 'react'
import logoBlack from '/image/logoBlack.png'

const InstantCreation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center bg-white py-12  border-t lg:border-t-0 lg:border-l border-gray-300/80 cardContainer">
            <div className='flex flex-col gap-4  w-full '>
                <div className='flex px-10 justify-between '>
                    <h1 className='flex items-center gap-1  rounded-full px-3 py-2 text-xs border border-gray-400/90  inActiveCardBg'><span className="w-3 h-3 bg-(--bg-soft-dark) rounded-full flex items-center justify-center text-[8px] text-white" >✓</span>Summary Extracted</h1>

                    <h1 className='flex items-center gap-1 text-xs px-3 py-2 rounded-full border border-gray-400/90  inActiveCardBg'><span className="w-3 h-3 bg-(--bg-soft-dark) rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Data Validated</h1>
                </div>
                <div className='flex justify-between px-5'>
                    <h1 className='flex items-center gap-1 text-xs border border-gray-400/90  inActiveCardBg px-3 py-2 rounded-full'> <span className="w-3 h-3 bg-(--bg-soft-dark) rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Key Insights Identified</h1>

                    <h1 className='flex items-center gap-1 text-xs border border-gray-400/90  inActiveCardBg px-3 py-2 rounded-full'> <span className="w-3 h-3 bg-(--bg-soft-dark) rounded-full flex items-center justify-center text-[8px] text-white">✓</span> Next Actions Generated</h1>
                </div>
            </div>

            <div className="relative flex items-center justify-center w-full aspect-square max-w-100 px-6 md:px-10 ">
                {/* Visual Backgrounds */}
                <div className="absolute w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle,rgba(220,252,140,0.6)_0%,transparent_70%)] animate-pulse"></div>
                <div className="absolute w-[70%] h-[70%] rounded-full bg-[var(--bg-soft-dark)]"></div>
                <div className="absolute w-[85%] h-[85%] rounded-full bg-[var(--bg-soft)]"></div>

                {/* Floating Card */}
                <div className="relative z-10 w-full max-w-60 rounded-2xl bg-white shadow-2xl p-5 border border-gray-100">
                    <h3 className="text-[10px] font-bold text-dark-green text-center mb-3 uppercase tracking-widest">Research Report</h3>
                    <div className="space-y-2">
                        <div>
                            <h1 className='text-[9px] font-medium'>Beverage Launch Study</h1>
                            <p className='text-[6px] leading-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at, ea autem numquam eaque repellat illum repellendus maxime ducimus rem debitis placeat quidem, hic similique cumque dolor ex sapiente dignissimos.</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-1">
                                <span className="text-[9px] font-medium">Data Validated</span>
                            </div>
                            <p className="text-[8px] text-gray-400 leading-tight">AI-generated insights verified against core datasets.</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 ">
                                <span className="text-[9px] font-medium">Summary Extracted</span>
                            </div>
                            <p className="text-[8px] text-gray-400 leading-tight">AI-generated insights verified against core datasets.</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-1">
                                <span className="text-[9px] font-medium">Key Insight Identified</span>
                            </div>
                            <p className="text-[8px] text-gray-400 leading-tight">AI-generated insights verified against core datasets.</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 ">
                                <span className="text-[9px] font-medium">Next Action Generated</span>
                            </div>
                            <p className="text-[8px] text-gray-400 leading-tight">AI-generated insights verified against core datasets.</p>
                        </div>
                        
                    </div>
                    <div className="w-10 h-10 absolute -bottom-5 left-1/2 -translate-x-1/2 shadow-lg rounded-xl overflow-hidden">
                        <img src={logoBlack} alt="logo" className='w-full h-full object-cover bg-white' />
                    </div>
                </div>
            </div>

            <div className='self-start mt-8 px-10 w-full text-center lg:text-left'>
                <h2 className="text-3xl font-semibold textGredient">Instant Creation</h2>
                <p className="mt-2 text-gray-400 text-lg">Creates content instantly.</p>
            </div>
        </div>
    );
}

export default InstantCreation;