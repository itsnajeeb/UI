
import downloadImage from '/assets/images/download_img01.png'
import download_btn01 from '/assets/images/download_btn01.png'
import download_btn02 from '/assets/images/download_btn02.png'
import download_shape01 from '/assets/images/download_img02.png'
import download_shape02 from '/assets/images/download_shape01.png'

export default function MobileControlHero() {
    return (
        <section className="relative overflow-hidden border border-gray-500/50 rounded-3xl bg-[#0B0F1E] manrope-fonts w-full max-w-7xl mb-20 md:pt-28  md:mx-auto  ">

            {/*  LEFT SMALL BALL */}
            <img
                src={download_shape01}
                alt=""
                className=" absolute md:-left-17.5 left-2  -bottom-20 md:-bottom-20 md:w-56 opacity-70 
                sm:-bottom-25 sm:left-10
                "
            />

            {/*  RIGHT BIG BALL */}
            <img
                src={download_shape02}
                alt=""
                className=" hidden absolute right-0 bottom-10  md:right-45 top-10 md:w-87.5 opacity-90 -scale-x-100 lg:block"
            />

            <div className="relative z-10 max-w-7xl w-full mx-auto  grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:px-7 ">

                {/* 🔹 LEFT CONTENT */}
                <div className=" py-10 px-8  flex flex-col justify-center md:min-h-full ">
                    <h1 className="text-3xl font-semibold text-white leading-tight  text-center sm:text-4xl md:text-5xl">
                        Control Application <br />
                        <span className="text-slate-300">From Your Mobile</span>
                    </h1>

                    <div className="flex items-center gap-6 mt-8 text-white flex-col md:flex-row justify-center">
                        <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-lg">1</span>
                            <p className='text-lg font-semibold'>White Paper</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-lg">2</span>
                            <p className='text-lg font-semibold'>Privacy & Policy</p>
                        </div>
                    </div>

                    {/* STORE BUTTONS */}
                    <div className="flex gap-4 mt-10 flex-col justify-center items-center md:flex-row">
                        <button className="cursor-pointer rounded-xl  w-40 md:w-50 ">
                            <img src={download_btn01} alt="" className='w-full h-full object-fit' />
                        </button>
                        <button className="cursor-pointer rounded-xl  w-40 md:w-50">
                            <img src={download_btn02} alt="" className='w-full h-full object-fit' />
                        </button>
                    </div>
                </div>

                {/*  RIGHT MOBILE MOCKUP */}
                <div className="h-full justify-center  lg:self-start flex lg:justify-center px-5   ">
                    <img
                        src={downloadImage}
                        alt="Mobile App"
                        className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[60%]   drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}
