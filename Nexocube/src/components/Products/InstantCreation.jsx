import logoBlack from '/image/logoBlack.png'
const InstantCreation = () => {
    return (
        <div className="w-full flex h-full flex-col items-center bg-white pt-10 px-10 min-w-md border border-gray-300/80  ">

            {/* ===== TOP STEPS ===== */}


            <div className="relative flex items-center justify-center py-20 bg-white">

                {/* OUTER CIRCLE */}
                <div className="absolute w-[370px] h-[370px] rounded-full bg-[radial-gradient(circle,rgba(220,252,140,0.7)_0%,rgba(220,252,140,0.4)_70%,transparent_72%)]"></div>

                {/* BORDER RING */}
                {/* <div className="absolute w-[380px] h-[380px] rounded-full border border-lime-300"></div> */}

                {/* INNER CIRCLE */}
                <div className="absolute w-[300px] h-[300px] rounded-full bg-lime-300/60"></div>

                {/* CARD */}
                <div className="relative z-10 w-57 rounded-xl bg-white shadow-xl px-4 py-4">
                    <h3 className="text-xs font-semibold text-dark-green text-center mb-2">
                        Market Research Report
                    </h3>
                    <div className="flex flex-col gap-0.5">
                        <h2 className="text-dark-green font-semibold text-xs">Beverage Launch Study</h2>
                        <p className="text-[9px] text-gray-500 font-medium text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugit natus libero odio blanditiis ut quos, necessitatibus.
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-1 mb-5">
                        <div>
                            <div className="flex gap-2">
                                <input type="checkbox" checked />
                                <h3 className="text-dark-green font-medium text-[10px]">Data Validated</h3>
                            </div>
                            <p className="text-[9px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga voluptatem</p>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <input type="checkbox" checked />
                                <h3 className="text-dark-green font-medium text-[9px]">Data Validated</h3>
                            </div>
                            <p className="text-[9px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga voluptatem</p>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <input type="checkbox" checked />
                                <h3 className="text-dark-green font-medium text-[9px]">Data Validated</h3>
                            </div>
                            <p className="text-[9px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga voluptatem</p>
                        </div>


                    </div>
                    {/* ICON */}
                    <div className="w-12 h-12 absolute cardLogo -bottom-5">
                        <img src={logoBlack} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>


            </div>



            {/* ===== TEXT ===== */}
            <div className='self-start mb-5'>
                <h2 className="mt-16 text-3xl font-semibold textGredient">
                    Instant Creation
                </h2>
                <p className="mt-2 text-gray-400 text-lg">
                    Creates content instantly.
                </p>
            </div>
        </div>
    );
}

/* ===== STEP CHIP ===== */
function Step({ label }) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
            <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                ✓
            </span>
            {label}
        </div>
    );
}


export default InstantCreation