import { ChevronRight } from 'lucide-react';
import shape01 from '/assets/images/contribution_shape01.png'
import shape02 from '/assets/images/contribution_shape02.png'
const ContributionReceive = () => {
    const progress = 65; // % raised

    return (
        <section className="relative w-full py-20 px-1 bg-linear-to-b from-[#050814] to-[#02040f] text-white manrope-fonts md:px-6 md:py-32">

            {/* LEFT FLOAT */}
            <div
                className="absolute left-10 top-[55%] -translate-y-1/2  hidden md:block"
                style={{
                    animation: "floatRight 2s ease-in-out infinite",
                }} >
                <div className="w-52 h-52 rounded-full 
          flex items-center justify-center bg-transparent text-4xl">
                    <img src={shape01} alt="" />
                </div>
            </div>

            {/* RIGHT FLOAT */}
            <div
                className="absolute right-15 top-[75%] -translate-y-1/2 hidden md:block"
                style={{
                    animation: "floatLeft 2s ease-in-out infinite",
                }}
            >
                <div className="w-52 h-52 rounded-full 
          flex items-center justify-center bg-transparent  text-4xl ">
                    <img src={shape02} alt="" />
                </div>
            </div>
            <div className="max-w-5xl mx-auto relative">

                {/* Heading */}
                <h2 className="text-center text-4xl md:text-5xl font-bold">
                    <span className="text-[#4FD1C5]">$45,256,432</span>{" "}
                    Contribution Receive
                </h2>

                {/* Progress labels */}
                <div className="relative mt-10 md:mt-20 sm:px-5 px-1">

                    <div className="flex text-sm text-white/70 mb-3 px-1  justify-between md:justify-around">
                        <span className="relative manrope-fonts font-semibold ">
                            PRE-SALE
                            <span className="block mx-auto mt-2 w-0.5 h-4 bg-white/60" />
                        </span>

                        <span className="relative">
                            SOFT CAP
                            <span className="block mx-auto mt-2 w-0.5 h-4 bg-white/60" />
                        </span>

                        <span className="relative">
                            BONUS
                            <span className="block mx-auto mt-2 w-0.5 h-4 bg-white/60" />
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-7 flex   rounded-full bg-white/20  overflow-hidden">
                        <div
                            className="mx-1 self-center absolute  h-5 rounded-full
              bg-linear-to-r from-[#050814] via-[#071a1f] to-[#4FD1C5]
              transition-all duration-700 ease-in-out"
                            style={{ width: `${progress}%` }}
                        />

                    </div>

                    {/* Bottom Info */}
                    <div className="flex justify-between text-sm text-white font-extrabold mt-4 px-2 md:text-lg gap-8 md:gap-0">
                        <span>{progress}% target raised</span>
                        <span className='text-white font-extrabold text-sm md:text-lg'>1 ETH = $1000 = 3177.38 CIC</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-16 flex justify-center gap-6 flex-wrap">
                    <button
                        className="px-10 py-2.5 rounded-full bg-white text-black font-bold cursor-pointer
            flex items-center gap-2 duration-300 hover:bg-black hover:text-white hover:border-2 text-sm md:text-base border-gray-400/60"
                    >
                        Purchase a Token
                        <span className="text-primary-color "><ChevronRight size={20}/></span>
                    </button>

                    <button
                        className="px-10 py-2.5 rounded-full bg-white/10 text-white font-medium
            flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm md:text-base"
                    >
                        Read White Paper
                        <span className="text-white text-xl">›</span>
                    </button>
                </div>

            </div>
        </section>
    );
}

export default ContributionReceive