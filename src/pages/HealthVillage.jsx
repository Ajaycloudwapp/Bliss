
import React, { useState } from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/courses/course_7.jpg";
import { Col, Container, Row } from 'react-bootstrap';

import Village1 from '/image/village_1.avif'
import Village2 from '/image/village_2.avif'
import Village3 from '/image/village_3.avif'
import Village4 from '/image/village_4.avif'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Course1 from '/image/courses/course_1.jpg'
import Course2 from '/image/courses/course_2.jpg'
import Course3 from '/image/courses/course_3.jpg'
import Course4 from '/image/courses/course_4.jpg'
import ClientTestimonial from '../component/ClientTestimonial';

const courses = [
    { image: Course1 },
    { image: Course2 },
    { image: Course3 },
    { image: Course4 },
];

const processProducts = [
    {
        title: "AYURVEDA",
        desc: "The Ayurvedic therapies at BLISS AYURVEDA are strongly rooted in ancient traditions while keeping in mind contemporary needs, preferences and comforts.",
        image: Village1,
    },
    {
        title: "PANCHKARMA",
        desc: "Bliss Ayurveda Health Village Team, comprised of qualified Ayurveda physicians and therapists with excellent knowledge of Ayurveda, Yoga & Panchkarma treatments.",
        image: Village2,
    },
    {
        title: "YOGA",
        desc: "Our Therapy programs are prescribed by the Vaidyas after a detailed consultation which includes Pulse reading, determination of body type & Lifestyle advice.",
        image: Village3,
    },
    {
        title: "SKIN CARE",
        desc: "Our personalized programs are designed to meet individual needs and health goals like prevention from diseases, lifestyle routines, deep relaxation, anti-ageing & beauty.",
        image: Village4,
    },
];

import {
    FaBed,
    FaUtensils,
    FaUsers,
    FaSpa,
    FaChalkboardTeacher,
    FaLeaf,
    FaHeartbeat,
    FaClinicMedical
} from "react-icons/fa";

const servicesData = [
    {
        id: 1,
        icon: <FaClinicMedical />,
        title: "8 Panchkarma Treatment Rooms",
        description:
            "Each treatment room is attached with shower and toilet of modern facilities.",
    },
    {
        id: 2,
        icon: <FaBed />,
        title: "12 In-Residence Guest Rooms",
        description:
            "We have 12 twin-sharing in-residence guest rooms.",
    },
    {
        id: 3,
        icon: <FaUtensils />,
        title: "Ayurveda Kitchen",
        description:
            "Beautiful modular kitchen where delicious Ayurveda meals are cooked.",
    },
    {
        id: 4,
        icon: <FaUsers />,
        title: "Dining Hall",
        description:
            "We have a decent dining hall where 50 – 60 people can eat comfortably.",
    },
    {
        id: 5,
        icon: <FaChalkboardTeacher />,
        title: "Conference Hall",
        description:
            "Big conference hall with 15-20 person seating capacity.",
    },
    {
        id: 6,
        icon: <FaLeaf />,
        title: "Yoga Studio",
        description:
            "Where yoga classes for in-residence as well as outpatient individuals are organized.",
    },
    {
        id: 7,
        icon: <FaSpa />,
        title: "Skin SPA & Laser Unit",
        description:
            "Skin SPA & Laser Unit with all modern machines.",
    },
    {
        id: 8,
        icon: <FaHeartbeat />,
        title: "Physiotherapy Unit",
        description:
            "Physiotherapy Unit is equipped with latest physiotherapy equipment.",
    },
];

const HealthVillage = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>

            <main className='healthVillage_sec'>

                <PageBanner
                    title="Bliss Ayurveda Learning Courses"
                    subtitle="Curriculum That Ranges From Basic, Medium to Advance"
                    bgImage={AboutBanner}
                />

                <div className='ourprocess_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6> Very well equipped centrally air conditioned clinic with very nice & pleasant ambiance. </h6>
                            <h3><span> <strong> 40 Types of Panchkarma Treatments, Yoga Classes and Spa Skin Care Treatments </strong></span></h3>
                        </section>

                        <div className="ourProcess_inside">
                            <Row>
                                {processProducts.map((product, index) => {
                                    const isExpanded = expandedIndex === index;

                                    return (
                                        <Col md={3} sm={6} xs={12} key={index}>
                                            <div className="products_card">
                                                <div className="product_header shine-card">
                                                    <a href={product.image} data-fancybox="team-gallery">
                                                        <img src={product.image} alt="Quality Certificate" />
                                                    </a>
                                                </div>
                                                <div className="product_body">
                                                    <h4>{product.title}</h4>
                                                    <p className={isExpanded ? "desc2 expanded" : "desc2"}>
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
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>

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
                                    <section class="page_heading">
                                        <h6>A TRADITIONAL AYURVEDA CLINIC WITH MODERN SPA FACILITIES</h6>
                                        <h3>
                                            <strong> Bliss Ayurveda Health Village </strong>
                                        </h3>
                                    </section>
                                    <p> <b> BLISS AYURVEDA HEALTH VILLAGE is a complete Ayurveda centre dealing with different therapies under the same roof providing a holistic approach towards health </b> </p>
                                    <p> Bliss Ayurveda Health Village is a unique centre of its kind in Delhi NCR which offers an extensive menu of therapeutic and rejuvenating treatments, integratin g the traditional Indian system of Ayurveda and Yoga with modern Spa facilities. These procedures strive to achieve the ultimate harmony between the physical and the mental realms of the individual. </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='testimonials_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6> What our Customers Say </h6>
                            <h3> <span> <strong> Testimonials </strong> </span> </h3>
                        </section>

                        {/* Services Section */}
                        <ClientTestimonial page="village" />

                    </Container>
                </div>

                <div className="services_sec">
                    <Container>
                        <section className="page_heading centerText">
                            <h6> Our Top Services </h6>
                            <h3>
                                <span>
                                    Bliss Ayurveda <strong> Top services </strong>
                                </span>
                            </h3>
                        </section>
                        <div className="services_inside">

                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                loop={true}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 },
                                }}
                            >
                                {servicesData.map((service) => ( 
                                    <SwiperSlide key={service.id}>
                                        <div className="services_card">
                                            <div className="circle_img">
                                                {service.icon}
                                            </div>
                                            <h4>{service.title}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </Container>
                </div>

                

            </main>

        </>
    )
}

export default HealthVillage

