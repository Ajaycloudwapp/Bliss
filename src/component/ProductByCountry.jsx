
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Featured1 from "/image/flag_india.avif";
import Featured2 from "/image/flag_germany.avif";
import Featured3 from "/image/flag_italy.avif";
import Featured4 from "/image/flag_russia.jpg";

const products = [
    {
        title: "India",
        image: Featured1,
    },
    {
        title: "Italy",
        image: Featured2,
    },
    {
        title: "Germany",
        image: Featured3,
    },
    {
        title: "Russia", 
        image: Featured4,
    },
];

const ProductByCountry = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className='productCountry_inside'>
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

                        return (
                            <SwiperSlide key={index}>
                                <div className="products_card">
                                    <div className="product_header">
                                        <img src={product.image} alt={product.title} />
                                        <h3 className="product_title">{product.title}</h3>
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

export default ProductByCountry

