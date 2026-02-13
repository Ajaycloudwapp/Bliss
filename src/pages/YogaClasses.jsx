import React from 'react'

import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Col, Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Yoga1 from '/image/yoga/yoga_1.jpeg'
import Yoga2 from '/image/yoga/yoga_2.jpeg'
import Yoga3 from '/image/yoga/yoga_3.jpeg'
import Yoga4 from '/image/yoga/yoga_4.jpeg'
import Yoga5 from '/image/yoga/yoga_5.jpeg'
import Yoga6 from '/image/yoga/yoga_6.jpeg'
import Yoga7 from '/image/yoga/yoga_7.jpeg'
import Yoga8 from '/image/yoga/yoga_8.jpeg'
import Yoga9 from '/image/yoga/yoga_9.jpg'

import "swiper/css";
import "swiper/css/pagination";

const courses = [
    { image: Yoga1 },
    { image: Yoga2 },
    { image: Yoga3 },
    { image: Yoga4 },
    { image: Yoga5 },
];

// Second slider data
const sideSlides = [
    { image: Yoga9 },
    { image: Yoga8 },
    { image: Yoga7 },
    { image: Yoga6 },
];

const YogaClasses = () => {
    return (
        <>
            <main className='yogaclasses_page'>

                <PageBanner
                    title="Online Consultation"
                    subtitle="India's Leading Manufacturing and Export of Ayurveda Products, Herbal Food Supplements & Ayurveda medicines."
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    <Container>
                        <div className='aboutus_inside'>
                            <section className="page_heading">
                                <h6>The Yoga trainer works under the guidance of Ayurveda doctors for each participant.</h6>
                                <h3>Yoga Classes for In Residence as well as outpatient Individuals</h3>
                            </section>

                            <p>
                                Bliss Ayurveda Health Center offers Yoga Classes for In-residence as well as outpatient individuals.
                                The Yoga trainer works under the guidance of Ayurveda doctors and charts a personalized plan for each participant.
                                The emphasis is given on practical session that could later be worked upon at home.
                                After the classes, participant will have a personalized yoga schedule to follow later on.
                                This schedule caters to individual health needs of participants. relaxing SPA treatments.
                                These treatments can be taken by following Daycare program and In Residence packages.
                            </p>

                            <section className='skypeCard'>
                                <p>
                                    The batch size is kept minimum so that individual attention could be given to each person.
                                    The classes can range from one week to one month for In-residence persons at Bliss Ayurveda Health Center.
                                    Outpatients can come for a longer duration.
                                </p>

                                <div className='yoga_slider'>
                                    <Row>
                                        {/* First Swiper */}
                                        <Col md={8}>
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

                                        {/* Second Swiper */}
                                        <Col md={4}>
                                            <div className='side_swiper slider2'>
                                                <Swiper
                                                    className="sideSwiper"
                                                    modules={[Pagination, Autoplay]}
                                                    pagination={{ clickable: true }}
                                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                                >
                                                    {sideSlides.map((slide, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div className="side_card">
                                                                <img src={slide.image} alt={slide.title} />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </section>

                        </div>
                    </Container>
                </div>

            </main>
        </>
    )
}

export default YogaClasses;
