import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '/Images/image-1.png'
import img2 from '/Images/image-2.png'
import img3 from '/Images/image-3.png'
import img4 from '/Images/image-4.png'
import img5 from '/Images/image-5.png'
import img6 from '/Images/image-6.png'
import img7 from '/Images/image-7.png'
import img8 from '/Images/image-8.png'
import img9 from '/Images/image-9.png'


const slides = [
    {
        img: img1,
        title: 'FORTNITE',
        description: 'Time to choose sides',
        bgColor: '#67D1E2'
    },
    {
        img: img2,
        title: 'LEAGUE OF LEGENDS',
        description: 'Find Your Role',
        bgColor: '#e267da'
    },
    {
        img: img3,
        title: 'DOTA 2',
        description: 'Be a Legend!',
        bgColor: '#d8e267'
    },
    {
        img: img4,
        title: 'VALORANT',
        description: 'Precision Meets Strategy',
        bgColor: '#67e28e'
    },
    {
        img: img5,
        title: 'APEX LEGENDS',
        description: 'Rise Above the Rest',
        bgColor: '#676fe2'
    },
    {
        img: img6,
        title: 'CALL OF DUTY',
        description: 'Enter the Battlefield',
        bgColor: '#e26767'
    },
    {
        img: img7,
        title: 'OVERWATCH 2',
        description: 'Heroes Never Die',
        bgColor: '#e2ad67'
    },
    {
        img: img8,
        title: 'PUBG',
        description: 'Survive to Win',
        bgColor: '#67e2de'
    },
    {
        img: img9,
        title: 'CS:GO',
        description: 'Master the Tactical Play',
        bgColor: '#b767e2'
    }
];


function Crousel() {
    const settings = {
        // dots: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <div className="slider-container relative w-full h-62.5 ">
            <div className="absolute inset-0  h-68 overflow-hidden">
                <Slider {...settings}>
                    {slides.map((sld, idx) => (
                        <div key={idx} className=" ">
                            <div
                                className="mx-auto max-w-55 w-full h-full  rounded-3xl flex flex-col overflow-hidden"
                                style={{ backgroundColor: sld.bgColor }}
                            >
                                {/* IMAGE */}
                                <div className="flex-1 h-[50%] w-full flex items-center justify-center">
                                    <img
                                        src={sld.img}
                                        alt=""
                                        className="block w-full  h-full object-cover"
                                    />
                                </div>

                                {/* TEXT */}
                                <div className="py-6 text-center h-[50%] ">
                                    <h1 className="text-white font-semibold text-xl">
                                        {sld.title}
                                    </h1>
                                    <p className="text-sm text-white/80">
                                        {sld.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default Crousel;
