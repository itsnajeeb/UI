import Navbar from "./Navbar";
import ScrollDownArrow from "./CommonComponents/scrollDownArrow";
import shape01 from '/assets/images/banner_shape01.png'
import shape02 from '/assets/images/banner_shape02.png'
const Hero = () => {
    return (
        <section id="HOME" className="relative overflow-hidden 2xl:h-screen
      bg-linear-to-b from-[#050814] via-[#071a1f] to-[#2b8f82] rounded-bl-4xl rounded-br-4xl mx-3">

            <Navbar />

            <div className="md:mt-28 mt-20">
                {/* LEFT FLOAT */}
                <div
                    className="absolute left-[4%] sm:left-[6%] md:left-[10%] lg:left-[12%] top-[55%] -translate-y-1/2"
                    style={{ animation: "floatLeft 2s ease-in-out infinite" }}
                >
                    <div className="w-52 h-52 rounded-full 
          flex items-center justify-center bg-transparent text-4xl">
                        <img src={shape01} className="w-32 sm:w-40 md:w-48 lg:w-52" />
                    </div>
                </div>

                {/* RIGHT FLOAT */}
                <div
                    className="absolute right-[4%] sm:right-[6%] md:right-[10%] lg:right-[12%] top-[55%] -translate-y-1/2"
                    style={{ animation: "floatRight 2s ease-in-out infinite" }}
                >
                    <div className="w-52 h-52 rounded-full 
          flex items-center justify-center bg-transparent  text-4xl ">
                        <img src={shape02} className="w-32 sm:w-40 md:w-48 lg:w-52" />
                    </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center  manrope-fonts
        pt-5 md:pt-10 px-6 ">

                    <h1 className="text-[30px] md:text-6xl font-bold text-white ">
                        Discover the NextBig Opportunity:
                    </h1>

                    <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#4FD1C5]">
                        Our ICO is Live
                    </h2>

                    <p className="mt-10 max-w-150 text-white/90 leading-relaxed text-base md:text-xl font-semibold">
                        A new smart block chain based marketplace for trading digital
                        goods & assets accordingly.
                    </p>

                    {/* COUNTDOWN */}
                    <div className="mt-12 flex  flex-wrap justify-center gap-6">
                        {[
                            { v: "253", l: "Days" },
                            { v: "08", l: "Hours" },
                            { v: "43", l: "Minute" },
                            { v: "49", l: "Second" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="w-24 py-3 rounded-xl bg-white text-center
                        shadow-lg transition-transform duration-500 hover:-translate-y-2 md:w-32 md:py-6"
                            >
                                <div className="text-3xl font-bold text-black">{item.v}</div>
                                <div className="text-sm text-gray-500">{item.l}</div>
                            </div>
                        ))}
                    </div>
                    <div className="top-0 relative md:top-6 lg:top-10 ">
                        <a href="#">
                            <ScrollDownArrow />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero
