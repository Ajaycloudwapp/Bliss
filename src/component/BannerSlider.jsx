import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import Banner1 from "/image/banner1.avif";
import Banner2 from "/image/banner2.jpg";

const slides = [
    {
        titleSmall: "Welcome to Bliss Ayurveda",
        titleMain: (
            <>
                <span> Bliss </span> Ayurveda
            </>
        ),
        desc:
            "India's Leading Manufacturing and Export of Ayurveda Products, Herbal Food Supplements & Ayurveda medicines.",
        image: Banner1,
    },
    {
        titleSmall: "Natural Healing Solutions",
        titleMain: (
            <>
                <span> Natural </span> Wellness
            </>
        ),
        desc:
            "Experience holistic healing with authentic Ayurveda therapies and herbal medicines.",
        image: Banner2, 
    }
];

const BannerSlider = () => {
    return (
        <div className="banner_inside">
            <Swiper
                loop
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1200} // smooth transition like your video
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <section
                            className="banner-slide"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                minHeight: "600px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Container>
                                <Row className="align-items-center"> 
                                    <Col md={6}>
                                        <div className="bannerContent">
                                            <h6>{slide.titleSmall}</h6>
                                            <h2>{slide.titleMain}</h2>
                                            <p>{slide.desc}</p>
                                            <Button>Learn More</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
