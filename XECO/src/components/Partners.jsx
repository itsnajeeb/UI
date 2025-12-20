import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand_img01 from '/assets/images/brand_img01.png';
import brand_img02 from '/assets/images/brand_img02.png';
import brand_img03 from '/assets/images/brand_img03.png';
import brand_img04 from '/assets/images/brand_img04.png';
import brand_img05 from '/assets/images/brand_img05.png';
import brand_img06 from '/assets/images/brand_img06.png';
import brand_img07 from '/assets/images/brand_img07.png';

function Partners() {

  const settings = {
    variableWidth: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container relative overflow-x-hidden ">
      <div className="flex justify-center  mb-7 gap-2">
        <div className="bg-primary-color w-2 h-2 self-center rounded-full"></div>
        <h1 className="text-base text-white font-bold text-center ">OUR TOP PARTNER</h1>
        <div className="bg-primary-color w-2 h-2 self-center rounded-full"></div>
      </div>
      <div className="bg-gray-800/15 border-t-2 border-b-2 border-gray-300/50 h-32 relative overflow-hidden">
        <Slider {...settings}>
          {[brand_img01, brand_img02, brand_img03, brand_img04, brand_img05, brand_img06, brand_img07].map(
            (img, i) => (
              <div key={i}>
                <div className="h-32 flex items-center justify-center px-14 opacity-50 hover:opacity-100  transition-all duration-400">
                  <img
                    src={img}
                    alt=""
                    className="max-w-[160px] object-contain cursor-pointer"
                  />
                </div>
              </div>
            )
          )}
        </Slider>
      </div>

      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
}
export default Partners;
