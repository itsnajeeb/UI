import React from 'react'

export const Card = ({ data }) => {
    // console.log(`bg[${data[0].cardBgColor}]`);

    return (
        <div className='flex  justify-between bg-white p-8 rounded-xl shadow overflow-hidden overflow-x-scroll gap-8 lg:overflow-x-hidden lg:gap-5'>
            {
                data.map((d, index) => (
                    <>
                        <div key={index} className={`rounded-lg flex flex-col items-center py-6 gap-4 min-w-36 md:min-w-48`}
                            style={{ background: d.cardBgColor }}>
                            <div className={` w-fit p-3 rounded-xl `} style={{ background: d.iconBgColor }}>
                                {d.icon}
                            </div>
                            <div className=' flex flex-col text-center'>
                                <h2 className='text-[#29343d] text-sm font-normal manrope-fontFamliy'>{d.title}</h2>
                                <h1 className='text-[#29343d] font-semibold manrope-fontFamliy text-[22px]'>{d.NumericValue}</h1>
                            </div>
                            <div className='bg-white px-3 cursor-pointer py-2 text-sm shadow-md text-blue-500 rounded-lg hover:bg-[linear-gradient(180deg,#635bff1f_0%,#635bff08_100%)]'>
                                <a href="#" target='black'>View Details</a>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>

    )
}
