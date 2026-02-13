
import React from 'react'

import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/yogaBG.jpg";
import { Col, Container, Row, Table } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Course1 from '/image/spa_1.jpg'
import Course2 from '/image/spa_2.jpg'

const courses = [
    { image: Course2 },
    { image: Course1 },
];

import "swiper/css";
import "swiper/css/pagination";

const LaserTreatments = () => {
    return (
        <>

            <div className='aboutus_sec whiteBG'>
                {/* About Section css */}
                <Container>

                    <section className="page_heading centerText">
                        <h6> Helps you get a toned skin & make you look younger & beautiful </h6>
                        <h3> <span> <strong> Ayurveda Skin Spa Treatment </strong> </span> </h3>
                    </section>

                    <div className='mypara'>
                        <h6> This program helps remove Acne, Wrinkles, Age Spots, Blemishes & unwanted hairs on the face and add a glowing fairness to the skin. It will help you get a toned skin and make you look younger and beautiful. Bliss Ayurveda SPA Skin Treatment is done by using Herbalized Clay followed by cleansing with Herbalized Milk then Rose petal face massage. This unique and specialized treatment of Bliss Ayurveda Health Center hat relaxes and rejuvenates whole body. This treatment Nourishes and Rejuvenate skin, Enhances glow, radiance & elasticity of skin Exfoliate skin & Anti-wrinkle effect. </h6>
                    </div>

                    <div className='aboutus_inside'>
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className='courses_swiper'>
                                    <Swiper
                                        className="mySwiper"
                                        modules={[Pagination]}
                                        pagination={{ clickable: true }}
                                    >
                                        {courses.map((course, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="course_card">
                                                    <img src={course.image} alt={`Course ${index + 1}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p> <b> Ayurveda Face Therapy, also known as Mukhalepam or Ayurvedic Facial, is a traditional Ayurvedic treatment that focuses on enhancing the health and appearance of the face. Here are some potential benefits of Ayurveda Face Therapy: </b> </p>
                                <p> <b> Skin Nourishment: </b> Ayurvedic face therapies often involve the use of herbal pastes, oils, and masks that are specifically formulated to nourish the skin. These natural ingredients can provide essential nutrients, vitamins, and antioxidants to the skin, helping to improve its health and vitality. </p>
                                <p> <b> Deep Cleansing: </b> Ayurvedic face treatments typically include a thorough cleansing of the face to remove dirt, impurities, and dead skin cells. This deep cleansing can unclog pores, prevent acne breakouts, and promote a clearer complexion. </p>
                            </Col>
                        </Row>
                    </div>

                    <section className='laser_sec'>
                        <p> <b> Relaxation and Stress Reduction: </b> Ayurveda emphasizes the importance of holistic well-being, and face therapy is no exception. The soothing and gentle techniques used during Ayurvedic face treatments can help relax facial muscles, release tension, and reduce stress. This can contribute to an overall sense of relaxation and rejuvenation. </p>
                        <p> <b> Improved Blood Circulation: </b> During Ayurveda Face Therapy, gentle massage techniques are often employed, which can enhance blood circulation to the facial tissues. Improved blood flow can promote a healthy complexion, deliver oxygen and nutrients to the skin cells, and support natural detoxification processes. </p>
                        <p> <b> Anti-Aging Effects: </b> Many Ayurvedic face treatments incorporate herbs and oils with anti-ageing properties. These ingredients can help minimize the appearance of fine lines, wrinkles, and age spots. Ayurvedic therapies focus on restoring balance and vitality to the skin, which can contribute to a more youthful and radiant complexion. </p>
                        <p> <b> Personalized Approach: </b> Ayurveda recognizes that each individual is unique, and face therapy treatments can be tailored to specific skin types and concerns. Ayurvedic practitioners take into account an individual’s dosha (constitution) and the imbalances present to create a personalized treatment plan, which can lead to more effective results. </p>
                    </section>

                </Container>
            </div>

        </>
    )
}

export default LaserTreatments

