import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const videos = [
    {
        title: "Concept of Immunity in Ayurveda",
        src: "https://www.youtube.com/embed/450dKS4zB-8",
    },
    {
        title: "Concept of Detox (Ama Pachan) in Ayurveda",
        src: "https://www.youtube.com/embed/aVY_UACbpuo",
    },
    {
        title: "Management of Allergies in Ayurveda",
        src: "https://www.youtube.com/embed/LE3pqwIYU40",
    },
];

const DiseaseManagement = () => {
    return (
        <div className='videoGallery_inside'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className="products_card">
                            <div className="product_header">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src={video.src}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                                <h3 className="product_title">{video.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiseaseManagement;
