import React from 'react'

const InputWithoutEye = ({placeholder}) => {
    return (
        <div style={{ position: "relative", }}>
            <div className="flex relative flex-col w-full mt-5 text-white">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder=" "
                    className="peer border-2 border-gray-400/80 w-full py-3 px-4 rounded-lg 
          outline-0 bg-transparent
          focus:border-[#8ac9ff] transition-all duration-300"
                />

                <label
                    htmlFor="password"
                    className="
          absolute left-3 top-3.5 px-1 bg-[#111116] text-sm text-gray-200/80
          transition-all duration-300
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2.5
          peer-focus:text-xs
          peer-focus:text-gray-100/80
          peer-not-placeholder-shown:-top-2.5
          peer-not-placeholder-shown:text-xs
        "
                >
                    {placeholder}
                </label>
            </div>

        </div>
    );
}

export default InputWithoutEye