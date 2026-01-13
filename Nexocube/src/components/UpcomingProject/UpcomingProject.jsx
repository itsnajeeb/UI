import React, { useRef } from "react";
import Slider from "react-slick";
import image1 from '/image/project-1.png'
import image2 from '/image/project-2.png'
import image3 from '/image/project-3.png'
import image4 from '/image/project-4.png'
import image5 from '/image/project-5.png'
import image6 from '/image/project-6.png'
import image7 from '/image/project-7.png'
const UpcomingProject = () => {
    const settings = {
        variableWidth: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="slider-container">
            <h2 className="text-3xl font-bold text-center my-10">Upcoming Project</h2>

            <Slider {...settings} className="flex flex-row gap-5 mx-20">
                {[image1, image2, image3, image4, image5, image6, image7].map((img, idx) => (
                    <div key={idx}>
                        <div className="h-32 flex items-center bg-gray-900 justify-center px-14 opacity-90   transition-all duration-400 mx-2 rounded-md">
                            <img
                                src={img}
                                alt=""
                                className="max-w-[140px] object-contain cursor-pointer"
                            />
                        </div>
                    </div>
                )
                )}
            </Slider>
        </div>
    );
}

export default UpcomingProject