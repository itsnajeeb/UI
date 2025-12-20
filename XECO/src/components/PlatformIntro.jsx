import img1 from "/assets/images/features_two_img01.png";
import img2 from "/assets/images/features_two_img02.png";
import img3 from "/assets/images/features_two_img03.png";
import titleImg1 from "/assets/images/title_img01.jpg";
import titleImg2 from "/assets/images/title_img02.jpg";

export default function PlatformIntro() {
  const data = [
    {
      title: "Lifetime free and transaction",
      img: img1,
    },
    {
      title: "Security & Control over money",
      img: img2,
    },
    {
      title: "Mobile Payment Make Easy",
      img: img3,
    },


  ]
  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-3xl
      bg-linear-to-b from-[#3f9f8f] via-[#0c4f4a] to-[#010314] px-3 py-20 md:py-28 md:px6 ">

      {/* GRID LINES */}
      {/* PERSPECTIVE GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
      linear-gradient(
        to right,
        rgba(255,255,255,0.08) 2px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.06) 2px,
        transparent 1px
      )
    `,
          backgroundSize: "160px 90px",
          transform: "perspective(800px) rotateX(55deg)",
          transformOrigin: "top",
        }}
      />


      {/* FEATURE CARDS */}
      <div className="flex max-w-7xl flex-wrap  mx-auto justify-center gap-10">

        {
          data.map((dt, idx) => (


            <div key={idx}
              className="
        relative py-3
        rounded-2xl
        bg-white/10
        w-full
        max-w-100 flex-shirink
        backdrop-blur-md
        border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        px-4 md:px-6 md:py-5
        flex items-center gap-5  "
            >
              {/* ICON */}
              <img
                src={dt.img}
                alt=""
                className="w-25 h-25 object-contain opacity-90"
              />

              {/* TEXT */}
              <h3 className="text-white text-xl font-semibold leading-snug">
                {dt.title}
              </h3>

              {/* subtle highlight */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.08), transparent 60%)",
                }}
              />
            </div>
          ))

        }
      </div>

      {/* CENTER TEXT */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto text-center">


        <div
          className=" mx-1 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center
             bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #ffffff 0%, #ffff 40%, #3fbfa8 100%)",
          }}  >
          <span>The World's 1st ICO Platform That Offers Rewards </span>

          <span className="inline-flex w-26 lg:w-32 items-center mx-2 align-middle">
            <img
              src={titleImg1}
              alt=""
              className=" rounded-full object-cover"
            />
          </span>

          <span>  is a groundbreaking platform that revolutionizes the way </span>

          <span className="inline-flex w-26 lg:w-32 items-center mx-2 align-middle">
            <img
              src={titleImg2}
              alt=""
              className="rounded-full object-cover"
            />
          </span>

          <span> Initial Coin Offerings are conducted</span>

        </div>
      </div>
      

      {/* LEFT BLUR CIRCLE */}
      {/* <div className="absolute left-[-120px] bottom-32 w-80 h-80 rounded-full
        bg-gradient-to-br from-[#3fbfa8] to-[#0b3a36]
        blur-3xl opacity-80" /> */}

      {/* RIGHT BLUR CIRCLE */}
      {/* <div className="absolute right-[-180px] bottom-16 w-[420px] h-[420px]
        rounded-full bg-gradient-to-br from-[#4fd1c5] to-[#0a2e2a]
        blur-3xl opacity-80" /> */}


      <div className="w-full absolute bottom-0 flex justify-center my-10">
        <div className="h-0.5 w-full max-w-6xl bg-linear-to-r 
    from-transparent 
    via-white 
    to-transparent
    opacity-60
  " />
      </div>


    </section >
  );
}
