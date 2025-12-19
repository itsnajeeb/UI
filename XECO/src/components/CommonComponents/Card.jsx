import img1 from "/assets/images/features_img01.png"; // apna coin / bitcoin image

export default function Card({ title, description, img }) {
    return (
        <div
            className="
        relative w-full max-w-[650px] 
        rounded-2xl overflow-hidden
        bg-linear-to-br from-[#0b0f1d] via-[#0a0d1a] to-[#050814]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        px-14 py-10
        flex items-center justify-between
      "
        >
            {/* LEFT CONTENT */}
            <div className="z-10 max-w-[300px] ">
                <h2 className="text-3xl font-semibold text-white leading-tight">
                    {title}
                </h2>

                <p className="mt-4 text-white/60 text-base leading-relaxed">
                    {description}
                </p>
            </div>

            {/* RIGHT COINS */}
            <div className="relative  w-56  flex items-center justify-end">
                <img
                    src={img}
                    alt="coin"
                    className=" w-45  opacity-100"
                />
            </div>

            {/* KEYFRAMES */}
            {/* <style>
                {`
          @keyframes float1 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes float2 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(14px); }
          }
          @keyframes float3 {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
            </style> */}
        </div>
    );
}
