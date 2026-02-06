import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

import Client1 from "/image/client_1.jpg"
import Client2 from "/image/client_2.jpg"
import Client3 from "/image/client_3.jpg"

const testimonials = [
    {
        id: 1,
        image: Client1,
        text: "As always we were surrounded by love and care both during Panchkarma treatments and delicious Ayurveda food. Thanks cordially Dr. Nitin and Bliss Ayurveda Team.",
        name: "Dr. Issa Salomi",
        designation: "Medical Doctor and Celebrity Speaker, Bagdad, Iraq",
    },
    {
        id: 2,
        image: Client2,
        text: "The Panchkarma treatments were wonderful and Ayurveda herbs are really effective. I have been using them since several years. Thank you for the help and stay here. It was a very nice and impressive time.",
        name: "Dr. Robby Schlund",
        designation: "Medical Doctor & Member of Parliament, Germany, Berlin, Germany",
    },
    {
        id: 3,
        image: Client3,
        text: "I am very grateful to everybody. Thank you all from the deepest heart. The treatments were really great. My special thanks to the technicians who work from heart. I had a very good room and wonderful food.",
        name: "Dr. Martina Hoisl",
        designation: "Medical Doctor and Psychiatrist, Zurich, Switzerland",
    },
];

const ClientTestimonial = () => {
    return (
        <div className='testimonial_inside'>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Swiper
                        className="mySwiper"
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        autoplay={false}
                        loop={true}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <section>
                                    <img className='ClientPic' src={item.image} alt={item.name} />
                                    <p>
                                        <ImQuotesLeft className='leftSVG' />
                                        {item.text}
                                        <ImQuotesRight className='rightSVG' />
                                    </p>
                                    <h5>
                                        {item.name} <span>{item.designation}</span>
                                    </h5>
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </div>
    )
}

export default ClientTestimonial;
