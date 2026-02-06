import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Featured1 from "/image/feature_prod_1.avif";
import Featured2 from "/image/feature_prod_2.avif";
import Featured3 from "/image/feature_prod_3.avif";
import Featured4 from "/image/feature_prod_4.avif";

const products = [
    {
        title: "PAURUSH GARD",
        desc:
            "Rekindle your sexual life and bring forth the real PAURUSH (MANHOOD) in you.  Rasayana for Men strengthens the entire body. Improves Vitality and Energy.",
        image: Featured1,
    },
    {
        title: "OJAS YOGA",
        desc:
            "Enhances OJAS- Immunity, Energy & Vitality",
        image: Featured2,
    },
    {
        title: "HRIDYABLISS",
        desc:
            "Good for Heart Health & Balances B. P. Helps balance Cholesterol and Triglycerides levels, Helps Improve Blood Circulation",
        image: Featured3,
    },
    {
        title: "GUGGUL MAX",
        desc:
            "Natural Detox & Fat Burner. Helps balance extra fat in the body.",
        image: Featured4,
    },
];

const FeaturedProduct = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="featured_pro_inside">
            <div className="featured_pro_inside">
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
                        const shortText = product.desc.slice(0, 80);

                        return (
                            <SwiperSlide key={index}>
                                <div className="products_card">
                                    <div className="product_header shine-card">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="product_body">
                                        <h4>{product.title}</h4>
                                        <p className={isExpanded ? "desc expanded" : "desc"}>
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
        </div>
    );
};

export default FeaturedProduct;
