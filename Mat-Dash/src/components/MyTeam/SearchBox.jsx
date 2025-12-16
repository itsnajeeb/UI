import React from 'react'

const SearchBox = ({ bgColor, icon, text, total, filterClick }) => {
    
    return (
        <div className={` px-8 py-8 flex gap-3 rounded-xl w-full cursor-pointer`} style={{ backgroundColor: bgColor }} onClick={filterClick}>
            <div className='bg-[#635BFF] w-fit text-white p-2 rounded-lg flex justify-center items-center'>
                <img src={`/Images/icon/${icon}`} alt="icon" className='w-full h-full' />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-list-icon lucide-layout-list"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /><path d="M14 4h7" /><path d="M14 9h7" /><path d="M14 15h7" /><path d="M14 20h7" /></svg> */}
            </div>
            <div className='manrope-fontFamliy '>
                <h3 className='text-sm font-normal text-[#29343d]'>{text}</h3>
                <p className='text-sm font-medium text-[#29343d] '>{total }</p>
            </div>
        </div>
    )
}

export default SearchBox