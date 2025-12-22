import Slider from "react-slick";
import RoadmapCard from "./CommonComponents/RoadmapCard";
import GradientText from "./CommonComponents/GradientText";

const roadmapData = [
    {
        title: "App Beta Test",
        date: "END OF Q4 2021",
        desc:
            "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
    },
    {
        title: "Token Test",
        date: "END OF Q4 2021",
        desc:
            "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
    },
    {
        title: "Alpha Test",
        date: "END OF Q4 2021",
        desc:
            "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
    },
    {
        title: "Concept",
        date: "END OF Q4 2021",
        desc:
            "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
    },
];

const RoadmapSlider = () => {
    const settings = {
        infinite: true,
        speed: 6000,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div id="ROADMAP" className="md:min-h-screen scroll-mt-10 bg-lienar-to-b  h-auto from-[#050816] to-[#02040f] pt-20  overflow-hidden manrope-fonts md:pt-28 ">
            <div className="text-center mb-10 md:mb-16">
                <GradientText title="Our Roadmap"/>
            </div>
            <Slider {...settings} className="">
                {roadmapData.map((item, i) => (
                    <RoadmapCard key={i} {...item} />
                ))}
            </Slider>
        </div>
    );
};

export default RoadmapSlider;
