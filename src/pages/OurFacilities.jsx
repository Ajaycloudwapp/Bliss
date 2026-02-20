
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/courses/course_7.jpg";
import { Col, Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Facility1 from '/image/facility/facility_1.jpg'
import Facility2 from '/image/facility/facility_2.jpg'
import Facility3 from '/image/facility/facility_3.jpg'
import Facility4 from '/image/facility/facility_4.jpg'
import Facility5 from '/image/facility/facility_5.jpg'
import Facility6 from '/image/facility/facility_6.jpg'
import Facility7 from '/image/facility/facility_7.jpg'
import Facility8 from '/image/facility/facility_8.jpg'
import Facility9 from '/image/facility/facility_9.jpg'
import Facility10 from '/image/facility/facility_10.jpg'
import Facility11 from '/image/facility/facility_11.jpg'

const courses = [
    { image: Facility1 },
    { image: Facility2 },
    { image: Facility3 },
    { image: Facility4 },
    { image: Facility5 },
    { image: Facility6 },
    { image: Facility7 },
    { image: Facility8 },
    { image: Facility9 },
    { image: Facility10 },
];

import Manage2 from "/image/manage_2.avif"

const OurFacilities = () => {
    return (
        <>

            <main className='ourfacility_page'>

                <PageBanner
                    title="Facilities and Services"
                    subtitle="Bliss Ayurveda Health Village"
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>

                        <div className='aboutus_inside'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <div className='courses_swiper'>
                                        <Swiper
                                            className="mySwiper"
                                            loop={true}
                                            modules={[Pagination, Autoplay]}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
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
                                    <section className="page_heading">
                                        <h6>WE ARE OFFERING THE FOLLOWING FACILITIES AT BLISS AYURVEDA HEALTH VILLAGE</h6>
                                        <h3>
                                            <strong> Very well equipped centrally air-conditioned clinic with very nice & pleasant ambience. </strong>
                                        </h3>
                                    </section>
                                    <p> <b>BLISS AYURVEDA HEALTH VILLAGE</b> is a complete Ayurveda Center dealing with different therapies under the same roof providing a holistic approach towards health. Bliss Ayurveda Health Village is a unique centre of its kind in North India which offers an extensive menu of therapeutic and rejuvenating treatments, integrating the traditional Indian system of Ayurveda and Yoga with modern Spa facilities. These procedures strive to achieve the ultimate harmony between the physical and the mental realms of the individual. </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className="ourExpertise_sec">
                    <Container>

                        {/* Section 1 */}
                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h6>12 IN-RESIDENCE GUEST ROOMS</h6>
                                        <h3>
                                            <strong>12 Twin Sharing In-Residence Guest Rooms</strong>
                                        </h3>
                                    </section>
                                    <p>
                                        We have 12 Twin sharing in-residence Guest Rooms. All Guest rooms
                                        have attached Bathrooms and Private balconies. All rooms are
                                        equipped with an air conditioning system and they are connected to
                                        a high-speed internet facility. Guest Rooms are fully supplied with
                                        all basic amenities like Towels, Bath towels, Slippers, Shampoo,
                                        Conditioner, Body Soap, Shower gel etc.
                                    </p>
                                </Col>

                                <Col md={4}>
                                    <div className="about_pics shine-card">
                                        <img src={Facility1} alt="Guest Rooms" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </section>

                        {/* Section 2 */}
                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={4}>
                                    <div className="about_pics shine-card">
                                        <img src={Facility3} alt="Panchkarma Rooms" className="img-fluid" />
                                    </div>
                                </Col>

                                <Col md={8}>
                                    <section className="page_heading">
                                        <h6>8 PANCHKARMA TREATMENT ROOMS</h6>
                                        <h3>
                                            <strong>
                                                Equipped with Traditional and Modern Panchkarma Equipment
                                            </strong>
                                        </h3>
                                    </section>
                                    <p>
                                        We have 8 Panchkarma treatment rooms that are equipped with Natural
                                        Wood Traditional Massage tables, Wooden Shirodhara tables,
                                        Herbalized Steam systems and beautiful bowls and Aroma Pots filled
                                        with Herbal Aromatic Oils. Each treatment room is attached to
                                        modern shower and toilet facilities.
                                    </p>
                                </Col>
                            </Row>
                        </section>

                        {/* Section 3 */}
                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h6>AYURVEDA CAFÉ & TERRACE GARDEN</h6>
                                        <h3>
                                            <strong>
                                                Delicious & Organic Ayurveda Meals with Herbal Drinks/Tea
                                            </strong>
                                        </h3>
                                    </section>
                                    <p>
                                        We have a Beautiful Ayurveda Café where Fresh & Delicious Ayurveda
                                        Meals and Healthy Snacks are served. This cafe opens up to a
                                        beautiful Rooftop Terrace Garden where you can enrich the
                                        experience of Delicious Food, Fresh Air and Nice Surroundings.
                                        Moreover, intake of fresh air helps digestion too.
                                    </p>
                                </Col>

                                <Col md={4}>
                                    <div className="about_pics shine-card">
                                        <img src={Facility4} alt="Ayurveda Cafe" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </section>

                    </Container>
                </div>

                <div className='ourfacility_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6>  Beautiful Places of Ayurveda Services </h6>
                            <h3> <span> <strong> Top Facilities Service </strong> </span> </h3>
                        </section>

                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={4}>
                                    <div className="about_pics shine-card leftSidePic">
                                        <img src={Facility10} />
                                    </div>
                                </Col> 
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h3><strong> RECREATIONAL AREA </strong></h3>
                                    </section>
                                    <p> We have a large recreational area on the rooftop of the building where you can spend quality time in the Fresh Air Relaxing and Readings books in our Library. Here 50-60 people can do Yoga together and evening Cultural Programs are organised. </p>
                                </Col>
                            </Row>
                        </section>

                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h3><strong> CONFERENCE CUM LECTURE HALLS </strong></h3>
                                    </section>
                                    <p> We have two conference cum lecture halls with a seating capacity of 25 people and 50 people respectively for Ayurveda Courses, Lectures and Seminars. </p>
                                </Col>
                                <Col md={4}>
                                    <div className="about_pics shine-card rightSidePic">
                                        <img src={Facility9} />
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={4}>
                                    <div className="about_pics shine-card leftSidePic">
                                        <img src={Facility4} />
                                    </div>
                                </Col> 
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h3><strong> YOGA STUDIO </strong></h3>
                                    </section>
                                    <p> We have a Yoga Studio where Yoga and Meditation classes for In-residence as well as out patient individuals are organized. </p>
                                </Col>
                            </Row>
                        </section>

                        <section className="skypeCard">
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <section className="page_heading">
                                        <h3><strong> MEDICAL JYOTISH & YAGYA </strong></h3>
                                    </section>
                                    <p> We do arrange Medical Jyotish Consultation and Yagyas on demand in our facility as part of Mind, Body & Conciseness Program. </p>
                                </Col>
                                <Col md={4}>
                                    <div className="about_pics shine-card rightSidePic">
                                        <img src={Facility11} />
                                    </div>
                                </Col>
                            </Row>
                        </section>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default OurFacilities

