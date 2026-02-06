
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Featured1 from "/image/img_ayurveda.avif";
import Featured2 from "/image/img_panchkarma.avif";
import Featured3 from "/image/img_courses.avif";
import Featured4 from "/image/img_health.avif";

const products = [
    {
        title: "Ayurveda",
        desc: "Bliss Ayurveda has a wide range of therapeutic products based on ancient Ayurvedic texts and complemented by modern scientific research and leading-edge technologies in manufacturing and quality control. You can be confident that getting the very best in herbal formulations.",
        image: Featured1,
    },
    {
        title: "Panchkarma",
        desc: "Panchkarma is a Cleansing and Rejuvenating program for the Mind, Body and Consciousness. We provide a range of Panchkarma treatment programs which include main procedures Pre and Post-Panchkarma procedures, 40+ specialized therapies and relaxing SPA treatments.",
        image: Featured2,
    },
    {
        title: "Ayurveda Courses",
        desc: "Bliss Ayurveda offers various Ayurveda Courses for persons interested in a properly planned curriculum that ranges from Basic, Medium to Advance. Besides, any person can take basic courses to enhance health and manage a specific health issue along with Ayurveda principles of diet, herbs and lifestyle.",
        image: Featured3,
    },
    {
        title: "Health Village",
        desc: "Bliss Ayurveda Health Village – World-class In-Residence Ayurveda Center for Panchkarma, Naturopathy & Yoga. Dealing with different therapies below the same roof provides a holistic approach towards health.",
        image: Featured4,
    },
];

const ProcessContent = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="ourProcess_inside">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product, index) => {
                        const isExpanded = expandedIndex === index;
                        const shortText = product.desc.slice(0, 280);

                        return (
                            <SwiperSlide key={index}>
                                <div className="products_card">
                                    <div className="product_header shine-card">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="product_body">
                                        <h4>{product.title}</h4>
                                        <p className={isExpanded ? "desc2 expanded" : "desc2"}>
                                            {product.desc}
                                        </p>

                                        <button
                                            className="read_more_btn"
                                            onClick={() => toggleReadMore(index)}
                                        >
                                            {isExpanded ? "Show Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default ProcessContent

