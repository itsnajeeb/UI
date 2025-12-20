const TeamCard = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 manrope-fonts ">

      {/* Hexagon */}
      <div className="relative w-50 h-50 clip-hexagon overflow-hidden">
        <img src={image} className="w-full h-full object-cover object-fit p-3" />

        {/* LinkedIn */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
          w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#32a873] hover:text-white  hover:bg-primary-color cursor-pointer transition-all duration-300">
          <div className=" text-sm font-bold  "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></div>

        </div>
      </div>

      <h4 className="mt-4 mb-2 text-white font-semibold text-2xl">{name}</h4>
      <p className="text-xs font-bold text-gray-200/80 ">{role}</p>
    </div>
  );
};

export default TeamCard;
