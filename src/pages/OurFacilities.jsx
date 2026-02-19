
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
                                    <section class="page_heading">
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

                <div className='ourExpertise_sec'>
                    <Container>
                        
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> 12 IN-RESIDENCE GUEST ROOMS </h6>
                                        <h3><strong> 12 Twin sharing In-Residence Guest Rooms </strong></h3>
                                    </section>
                                    <p> We have 12 Twin sharing in-residence Guest Rooms. All Guest rooms have attached Bathrooms and Private balconies. All rooms are equipped with an air conditioning system and they are connected to a high-speed internet facility. Guest Rooms are fully supplied with all basic amenities like Towels, Bath towels, Slippers, Shampoo, Conditioner, Body Soap, Shower gel etc. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={Facility1} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={Facility3} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> 8 PANCHKARMA TREATMENT ROOMS </h6>
                                        <h3><strong> Equipped with Traditional and Modern Panchkarma Equipment </strong></h3>
                                    </section>
                                    <p> We have 8 Panchkarma treatment rooms that are equipped with Natural Wood Traditional Massage tables, Wooden Shirodhara tables, Herbalized Steam systems and beautiful bowls and Aroma Pots filled with Herbal Aromatic Oils. Each treatment room is attached to modern shower and toilet facilities. </p>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> AYURVEDA CAFÉ & TERRACE GARDEN </h6>
                                        <h3><strong> Delicious & Organic Ayurveda Meals with Herbal Drinks/Tea </strong></h3>
                                    </section>
                                    <p> We have a Beautiful Ayurveda Café where Fresh & Delicious Ayurveda Meals and Healthy Snacks are served. This cafe opens up to a beautiful Rooftop Terrace Garden where you can enrich the experience of Delicious Food, Fresh Air and Nice Surroundings. Moreover, intake of fresh air helps digestion too. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={Facility4} />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default OurFacilities

