import { Search } from 'lucide-react'

const SearchInput = ({onSearch}) => {
    return (
        <div className='bg-white  flex md:py-7 rounded-xl   manrope-fontFamliy py-5'>
            <div className='min-w-68 md:min-w-100 flex items-center  md:px-10 relative px-4'>
                <input type="text" placeholder='Search Your Referral'
                    className='border-2 border-gray-200/80 text-[15px] rounded-lg py-2 px-3 w-full outline-none focus:border-indigo-600 transition-all duration-300'
                    onChange={(e)=> onSearch(e.target.value)}
                />
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