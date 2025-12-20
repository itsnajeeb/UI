import GradientText from "../CommonComponents/GradientText";

export default function GetInTouchForm() {
    return (
        <section id="CONTACT" className=" scroll-mt-10 flex justify-center  items-center  bg-[#050714] rounded-3xl flex-col mt-40">
            <div className='text-center mb-14'>
                <GradientText title={"Have Any Questions?"} />
            </div>
            <div
                className="
          w-full max-w-4xl  rounded-3xl overflow-hidden 
          bg-gradient-to-b from-[#141728] to-[#0a0d1c]
          px-5 py-7 shadow-[0_40px_80px_rgba(0,0,0,0.6)]
          md-p-12
        "
            >
                {/* TITLE */}
                <h2 className="text-center text-3xl font-semibold text-white mb-7 md:mb-10">
                    Get In Touch Now
                </h2>

                {/* INPUT ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="
              w-full rounded-full px-6 py-4
              bg-[#1e2235] text-white
              placeholder:text-slate-400
              outline-none focus:ring-2 focus:ring-emerald-400/40
            "
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="
              w-full rounded-full px-6 py-4
              bg-[#1e2235] text-white
              placeholder:text-slate-400
              outline-none focus:ring-2 focus:ring-emerald-400/40
            "
                    />
                </div>

                <textarea
                    rows={6}
                    placeholder="Enter you message....."
                    className="
            w-full rounded-3xl px-6 py-5 mb-5
            bg-[#1e2235] text-white
            placeholder:text-slate-400
            outline-none resize-none
            focus:ring-2 focus:ring-emerald-400/40
          "
                />

                <div className="flex justify-center">
                    <button
                        className="
              flex items-center gap-3
              bg-white text-primary-color
              px-8 py-3 rounded-full cursor-pointer
              font-medium transition-all duration-300
              hover:bg-primary-color text-sm  hover:text-white 
            "
                    >
                        Send Message
                        <span className=" text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                    </button>
                </div>
            </div>



        </section>
    );
}
