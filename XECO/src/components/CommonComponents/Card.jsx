
export default function Card({ title, description, img }) {
    return (
        <div
            className="
        relative w-full  
        max-w-120
        rounded-2xl overflow-hidden
        bg-linear-to-br from-[#0b0f1d] via-[#0a0d1a] to-[#050814]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        px-8 py-6 gap-5
        flex items-center justify-center  flex-col-reverse md:max-w-152.5 lg:max-w-142 md:px-8 md:py-10 lg:py-8 md:flex-row
      "
        >
            {/* LEFT CONTENT */}
            <div className="z-10 md:max-w-60 border ">
                <h2 className="text-2xl font-semibold text-white leading-tight hover:text-primary-color transition-all duration-500 cursor-pointer ">
                    {title}
                </h2>
                <p className="mt-4 text-white/60 text-base leading-relaxed">
                    {description}
                </p>
            </div>

            {/* RIGHT COINS */}
            <div className="relative w-32 md:w-42  flex items-center md:justify-end">
                <img
                    src={img}
                    alt="coin"
                    className="  w-full opacity-100"
                />
            </div>
        </div>
    );
}
