import React from 'react'
import '../../styles/Product.css'
import logoBlack from '/image/logoBlack.png'
import document1 from '/image/document1.png'
import document2 from '/image/document2.png'
import document3 from '/image/document3.png'
const HighFidelityCard = () => {
    return (
        <div className="relative w-full overflow-hidden   border-gray-300/80   bg-white px-4 cardContainer  ">

            {/* Top Section: Text */}
            <div className=" py-8 mt-5  text-center">
                <h2 className="text-3xl pb-1 font-semibold tracking-tight textGredient">
                    High-Fidelity Reasoning
                </h2>
                <p className="text-base font-medium text-color-gray">
                    Thinks through information clearly.
                </p>
            </div>


            <div className='flex gap-3 px-20 '>

                <div className='w-14'>
                    <img src={document1} alt="" />
                </div>

                <div className='w-14'>
                    <img src={document2} alt="" />
                </div>

                <div className='w-14'>
                    <img src={document3} alt="" />
                </div>
            </div>
            {/* Bottom Section: Document Summary */}
            <div className="p-8 pb-0 relative ">
                <div className=" rounded-tl-2xl rounded-tr-2xl  bg-gray-200/50 px-5 pb-4 pt-8 shadow-2xl lg:h-30 h-45 border-gray-100 overflow-hidden ">
                    <h3 className="mb-2 text-center text-sm font-bold text-dark-green uppercase tracking-tight">
                        Comparative Analysis
                    </h3>

                    <div className="space-y-3  relative    ">
                        <div className="flex justify-between text-xs font-medium flex-col">
                            <div className='flex gap-2'>
                                <input type="checkbox" checked />
                                <h2 className='text-xs font-semibold text-dark-green'>Cost Efficiency</h2>
                            </div>
                            <div className='flex flex-col gap-1 ml-5'>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier A</span>
                                    <span>$1.28 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier B</span>
                                    <span>$1.41 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span className='font-medium'>Result </span>
                                    <span className='font-medium'>Supplier A is 9.2% Cheaper</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-between text-xs font-medium flex-col">
                            <div className='flex gap-2'>
                                <input type="checkbox" checked />
                                <h2 className='text-xs font-semibold text-dark-green'>Delivery Reliability</h2>
                            </div>
                            <div className='flex flex-col gap-1 ml-5'>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier A</span>
                                    <span>$1.28 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier B</span>
                                    <span>$1.41 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span className='font-medium'>Result </span>
                                    <span className='font-medium'>Supplier A is 9.2% Cheaper</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-between text-xs font-medium flex-col">
                            <div className='flex gap-2'>
                                <input type="checkbox" checked />
                                <h2 className='text-xs font-semibold text-dark-green'>Defect Rate</h2>
                            </div>
                            <div className='flex flex-col gap-1 ml-5'>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier A</span>
                                    <span>$1.28 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span>Supplier B</span>
                                    <span>$1.41 per unit</span>
                                </div>
                                <div className='flex justify-between text-[10px] font-normal'>
                                    <span className='font-medium'>Result </span>
                                    <span className='font-medium'>Supplier A is 9.2% Cheaper</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='w-11 h-11 cardLogo top-5'>
                        <img src={logoBlack} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default HighFidelityCard