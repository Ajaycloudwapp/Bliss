import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/pagination";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Team1 from "/image/team/team_1.jpg";
import Team2 from "/image/team/team_2.jpg";
import Team3 from "/image/team/team_3.jpg";
import Team4 from "/image/team/team_4.jpg";
import Team5 from "/image/team/team_5.jpg";
import Team6 from "/image/team/team_6.jpg";

const products = [
    { title: "V. Kshemendra Gupta", image: Team1, subtitle: "Consultant Vaidya" },
    { title: "Dr. Maya Ram Uniyal", image: Team2, subtitle: "Consultant Vaidya" },
    { title: "Mrs. Smita Aggrawal", image: Team3, subtitle: "Director of Finance" },
    { title: "Dr. Ravi Raghuvanshi", image: Team4, subtitle: "Senior Wellness Consultant and Dean of AARTI" },
    { title: "Mr. Awadhesh Karn", image: Team5, subtitle: "Senior Manager MIS & Operations" },
    { title: "Mr. Achint Sirohi", image: Team6, subtitle: "Senior Manager Finance & HR" },
];

const TeamMembers = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,
            Toolbar: true,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className='teams_inside'>
            <Swiper
                loop
                slidesPerView={6}
                spaceBetween={15}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="products_card">
                            <div className="product_header">
                                <a href={product.image} data-fancybox="team-gallery" data-caption={product.title}>
                                    <img src={product.image} alt={product.title} />
                                </a>
                                <section>
                                    <h3 className="product_title">{product.title}</h3>
                                    <p className="product_subtitle">{product.subtitle}</p>
                                </section>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamMembers;
