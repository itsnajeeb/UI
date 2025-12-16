import { Search } from 'lucide-react'

const SearchInput = ({onSearch}) => {
    return (
        <div className='bg-white  flex md:py-7 rounded-xl   manrope-fontFamliy py-5'>
            <div className='relative min-w-68 md:min-w-100 flex items-center justify-center md:px-10  px-4'>
                <input type="text" 
                    className='peer border-2 border-gray-200/80 text-[15px] rounded-lg py-2 px-4 w-full outline-none focus:border-primary-color transition-all duration-300 bg-transparent placeholder-transparent'
                    onChange={(e)=> onSearch(e.target.value)}
                />
                <label htmlFor="" className='absolute left-14 top-2.5 text-gray-700 text-sm  peer-placeholder-shown:top-3 transition-all duration-300  peer-focus:text-xs peer-focus:-top-2 peer-focus:text-indigo-600 bg-white px-1'>Search Your Referral</label>

                <div className='absolute right-7 text-gray-400/90 md:right-12'>
                    <Search size={19} />
                </div>
                {/* <button className='bg-[#635BFF] text-white px-6 py-2 cursor-pointer rounded-lg h-fit'>
                    Search
                </button> */}
            </div>
        </div>
    )
}

export default SearchInput