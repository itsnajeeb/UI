const TeamBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden">

      {/* BASE GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-linear-to-b
          from-[#02040f]
          via-[#06242a]
          to-[#3a8f7a]
        "
      />

      {/* GRID LAYER (RECTANGLE + CLEAR) */}
      <div
        className="
          absolute inset-[-20%]
          opacity-30
          transform
        //   rotate-[-5deg]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '200px 120px', // 👈 rectangle grid
        }}
      />

      {/* DEPTH FADE (TOP BLEND) */}
      <div
        className="
          absolute inset-0
          bg-linear-to-b
          from-[#02040f]
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TeamBackground;
