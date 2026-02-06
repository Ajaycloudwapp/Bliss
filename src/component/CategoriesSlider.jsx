import React from "react";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 

import "swiper/css";

const categories = [
  { title: "Brain", image: "/image/icons/icon_1.svg" },
  { title: "Heart", image: "/image/icons/icon_2.svg" },
  { title: "Liver", image: "/image/icons/icon_3.svg" },
  { title: "Digestive System", image: "/image/icons/icon_4.svg" },
  { title: "Lungs", image: "/image/icons/icon_5.svg" },
  { title: "Skeleton", image: "/image/icons/icon_6.svg" },
  { title: "Kidneys", image: "/image/icons/icon_7.svg" },
  { title: "Stomach", image: "/image/icons/icon_8.svg" },
  { title: "Immunity System", image: "/image/icons/icon_9.svg" },
//   { title: "Male Reproductive System", image: "/image/icons/icon_10.avif" },
//   { title: "Mother & Child", image: "/image/icons/icon_11.jpg" },
];

const CategoriesSlider = () => {
    return (
        <div className="category_inside">
            <Container>
                <Swiper
                    dir="ltr"              // 👈 makes autoplay move left → right
                    slidesPerView={8}
                    spaceBetween={15}
                    speed={5000}
                    // autoplay={{
                    //     delay: 0,
                    //     disableOnInteraction: false,
                    // }}
                    autoplay={false}
                    loop
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{ 
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        576: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        992: { slidesPerView: 4, spaceBetween: 20 },
                        1200: { slidesPerView: 6, spaceBetween: 20 },
                        1400: { slidesPerView: 8, spaceBetween: 20 },
                    }}
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="category_card"
                            >
                                <img src={cat.image} alt="" />
                                <span>{cat.title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default CategoriesSlider;
