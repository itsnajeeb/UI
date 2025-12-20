
import downloadImage from '/assets/images/download_img01.png'
import download_btn01 from '/assets/images/download_btn01.png'
import download_btn02 from '/assets/images/download_btn02.png'
import download_shape01 from '/assets/images/download_img02.png'
import download_shape02 from '/assets/images/download_shape01.png'

export default function MobileControlHero() {
    return (
        <section className="relative overflow-hidden border border-gray-500/50 rounded-3xl bg-[#0B0F1E] manrope-fonts max-w-7xl mx-auto mb-20 pt-20">

            {/* 🔵 LEFT SMALL BALL */}
            <img
                src={download_shape01}
                alt=""
                className="absolute -left-[70px] -bottom-20 w-56 opacity-70"
            />

            {/* 🟢 RIGHT BIG BALL */}
            <img
                src={download_shape02}
                alt=""
                className="absolute right-[180px] top-10 w-[350px] opacity-90 -scale-x-100"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* 🔹 LEFT CONTENT */}
                <div className=' h-full py-10 px-10'>
                    <h1 className="text-5xl font-semibold text-white leading-tight ">
                        Control Application <br />
                        <span className="text-slate-300">From Your Mobile</span>
                    </h1>

                    <div className="flex items-center gap-6 mt-8 text-white">
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
                    <div className="flex gap-4 mt-10">
                        <button className="cursor-pointer rounded-xl  w-50 ">
                            <img src={download_btn01} alt="" className='w-full h-full object-fit' />
                        </button>
                        <button className="cursor-pointer rounded-xl  w-50 ">
                            <img src={download_btn02} alt="" className='w-full h-full object-fit' />
                        </button>
                    </div>
                </div>

                {/* 🔹 RIGHT MOBILE MOCKUP */}
                <div className="h-full  self-end flex justify-end px-5   ">
                    <img
                        src={downloadImage}
                        alt="Mobile App"
                        className="w-[80%] drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}
