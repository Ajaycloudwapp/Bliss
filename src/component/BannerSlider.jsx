import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Banner1 from "/image/cleansing.jpg";
import Banner2 from "/image/physiotherapy.jpg";
import Banner3 from "/image/banner_1.png";
import Banner4 from "/image/yoga-learning.avif";
import Banner5 from "/image/skin-spa.avif";

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
        image: Banner3,
        showBlob: true,
    },
    {
        titleSmall: "Welcome to Bliss Ayurveda",
        titleMain: (
            <>
                <span> Cleansing </span> and <span> Rejuvenating </span>
            </>
        ),
        desc: "PANCHKARMA PROGRAM FOR THE MIND, BODY AND CONSCIOUSNESS.",
        image: Banner1,
        showBlob: false,
    },
    {
        titleSmall: "Welcome to Bliss Ayurveda",
        titleMain: (
            <>
                <span> Skin SPA </span> Treatments
            </>
        ),
        desc: "HELPS YOU GET A TONED SKIN & MAKE YOU LOOK BEAUTIFUL",
        image: Banner5,
        showBlob: false,
    },
    {
        titleSmall: "Welcome to Bliss Ayurveda",
        titleMain: (
            <>
                <span> Bliss Ayurveda </span> Learning Courses
            </>
        ),
        desc: "CURRICULUM THAT RANGES FROM BASIC, MEDIUM TO ADVANCE",
        image: Banner4,
        showBlob: false,
    },
    {
        titleSmall: "Welcome to Bliss Ayurveda",
        titleMain: (
            <>
                <span> Bliss Ayurveda </span> Physiotherapy Unit
            </>
        ),
        desc:
            "EQUIPPED WITH LATEST MACHINES & TEAM OF QUALIFIED PHYSIOTHERAPIST",
        image: Banner2,
        showBlob: false,
    },
];

const BannerSlider = () => {
    return (
        <div className="banner_inside">
            <Container>
                <Swiper
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <section>
                                <Row className="align-items-center">
                                    <Col md={6}>
                                        <h6>{slide.titleSmall}</h6>
                                        <h2>{slide.titleMain}</h2>
                                        <p>{slide.desc}</p>
                                        <Button>Learn More</Button>
                                    </Col>

                                    <Col md={6}>
                                        <div className="banner_picture floating-wrapper">
                                            {slide.showBlob && <div className="blob-layer"></div>}
                                            <img
                                                src={slide.image}
                                                alt="Banner"
                                                className="floating-image"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default BannerSlider;
