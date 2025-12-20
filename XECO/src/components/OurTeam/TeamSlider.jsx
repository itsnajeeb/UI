import Slider from "react-slick";
import TeamCard from "./TeamCard";
import GradientText from "../CommonComponents/GradientText";
import img1 from '/assets/images/profile/team_img01.png'
import img2 from '/assets/images/profile/team_img02.png'
import img3 from '/assets/images/profile/team_img03.png'
import img4 from '/assets/images/profile/team_img04.png'
import img5 from '/assets/images/profile/team_img05.png'
import img6 from '/assets/images/profile/team_img06.png'
import img7 from '/assets/images/profile/team_img07.png'
import img8 from '/assets/images/profile/team_img08.png'

const team = [
    { name: "Floyd Miles", role: "Marketer", image: img1 },
    { name: "Eleanor Pena", role: "Founder & CEO", image: img2 },
    { name: "Arlene McCoy", role: "Technology Officer", image: img3 },
    { name: "Robert Fox", role: "Financial Officer", image: img4 },
    { name: "Jacob Jones", role: "Head of Blockchain", image: img5 },
    { name: "Albert Flores", role: "Product Designer", image: img6 },
    { name: "Devone Lane", role: "Visual Designer", image: img7 },
    { name: "Jerome Bell", role: "Legal & Depo", image: img8 },
];

const TeamSlider = () => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,

        variableWidth: true,
        infinite: true,

        autoplay: false,
        arrows: true,
        dots: false,

        draggable: true,
        swipe: true,

        touchThreshold: 20,
        speed: 500,
        cssEase: "ease-out",

        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false, // ✅
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false, // ✅ MOST IMPORTANT
                },
            },
        ],


    };

    return (
        <div className="py-10 md:py-20 lg:py-32 manrope-fonts">
            <div className="text-center my-14">
                <GradientText title="Meet the Brick Veneers" />
            </div>

            <Slider {...settings}>
                {team.map((item, i) => (
                    <TeamCard key={i} {...item} />
                ))}
            </Slider>

            <div className="flex justify-center mt-16">
                <button className="bg-white flex items-center gap-5 text-black px-10 py-3 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#02040f] hover:text-white border-none transition-all duration-300">
                    <span>All Team Member</span> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#44A08D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>
        </div>
    );
};

export default TeamSlider;
