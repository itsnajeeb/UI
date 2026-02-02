import React, { useState } from 'react';
import slider1 from '/webimg/slider-1.png'
import slider2 from '/webimg/slider-2.png'
import slider3 from '/webimg/slider-3.png'
import slider4 from '/webimg/slider-4.png'
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Carousel.css'


// import required modules
import { Navigation } from 'swiper/modules';
export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            bg: slider1,
            subTitle: "Apparently we had reached a great height in the atmoshphare, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level  ",
            title: "Organic Veggies & Foods Your Cook Healthy",
            btnText: "View All",
        },
        {
            bg: slider2,
            subTitle: "Apparently we had reached a great height in the atmoshphare, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level  ",
            title: "Organic Veggies & Foods Your Cook Healthy",
            btnText: "View All",
        },
        {
            bg: slider3,
            subTitle: "Apparently we had reached a great height in the atmoshphare, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level  ",
            title: "Organic Veggies & Foods Your Cook Healthy",
            btnText: "View All",
        },
        {
            bg: slider4,
            subTitle: "Apparently we had reached a great height in the atmoshphare, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level  ",
            title: "Organic Veggies & Foods Your Cook Healthy",
            btnText: "View All",
        },
    ];


    return (
        <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="hero-swiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="slide-bg"
                        style={{ backgroundImage: `url(${slide.bg})` }}
                    >
                        <motion.div
                            key={activeIndex}
                            className="slide-content"
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 1, ease: "easeOut" }}

                            variants={{
                                hidden: { opacity: 0, x: -1000 },
                                show: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                        >

                            <motion.h2
                                className='slide-title'
                                variants={{ hidden: { opacity: 0, x: -1000 }, show: { opacity: 1, x: 0 } }}>
                                {slide.title}</motion.h2>

                            <motion.span
                                className='slide-subtitle'
                                variants={{ hidden: { opacity: 0, x: -1000 }, show: { opacity: 1, x: 0 } }}>
                                {slide.subTitle}</motion.span>

                            <motion.button
                                className="slide-btn"
                                variants={{ hidden: { opacity: 0, x: -1000 }, show: { opacity: 1, x: 0 } }}>
                                <p className='btn-title'>{slide.btnText}</p> <span className='icon'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                                
                            </motion.button>
                        </motion.div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel