const RoadmapCard = ({ title, desc, date }) => {
    return (
        <div className="relative px-4  w-full max-w-[340px] ">


            {/* CARD */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl px-8 py-6 h-[320px] flex justify-center gap-4 flex-col  border border-white/10
                                hover:border-[#3fbfa8]/40
                                transition-all duration-300
                                md:px-12 md:py-8
                            ">


                {/* dot */}
                <div className="flex justify-left gap-4 md:gap-8 items-center">
                    <div className="">
                    {/* <div className="absolute top-10 left-20 -translate-x-1/2"> */}
                        <div className="w-5 h-5 rounded-full border border-[#3fbfa8] flex items-center justify-center bg-[#050816]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#3fbfa8]" />
                        </div>
                    </div>


                    {/* content */}
                    <h3 className="text-2xl font-semibold text-white mb-4 mt-4">
                        {title}
                    </h3>
                </div>

                <p className="text-base text-gray-400 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default RoadmapCard;
