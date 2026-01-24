import React from "react";
import Slider from "react-slick";
import image1 from '/image/project-1.png'
import image2 from '/image/project-2.png'
import image3 from '/image/project-3.png'
import image4 from '/image/project-4.png'
import image5 from '/image/project-5.png'
import image6 from '/image/project-6.png'
import image7 from '/image/project-7.png'
// Ensure you have slick-carousel css imported in your main file or here
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

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

    const images = [image1, image2, image3, image4, image5, image6, image7];

    return (
        <div className="upcoming-container">
            <h2 className="upcoming-title">Upcoming Project</h2>

            <div className="slider-wrapper">
                <Slider {...settings} className="custom-slider">
                    {images.map((img, idx) => (
                        <div key={idx} className="slide-item">
                            <div className="slide-card">
                                <img
                                    src={img}
                                    alt={`Project ${idx + 1}`}
                                    className="slide-img"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default UpcomingProject;