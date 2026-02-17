
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import StarGroup from '/image/stargroup.svg'

import Review1 from "/image/review_1.png"
import Review2 from "/image/review_2.png"
import Review3 from "/image/review_3.png"
import Review4 from "/image/review_4.png"

const reviews = [
        {
            id: 1,
            image: Review1,
            text: "A great place for Ayurveda",
            name: "Ayushmaan Ayurveda Cancer Garbhasanskar",
            designation: "July 15, 2019",
        },
        {
            id: 2,
            image: Review2,
            text: "Excellent facilities and deep thorough consultation.",
            name: "Nikunj Goel",
            designation: "July 15, 2019",
        },
        {
            id: 3,
            image: Review3,
            text: "The Bliss Ayurveda Village in Great Noida is a fantastic place where it is possible to regenerate and regain a state of perfect health. Thanks to all the Staff for their kindness and competence in Ayurvedic practice. Heartfelt thanks to Dr Nitin and his wonderful family",
            name: "Giovi Ayurveda",
            designation: "June 15, 2023", 
        },
        {
            id: 4,
            image: Review4,
            text: "One of its kind health and wellness center.",
            name: "Surendra Chaudhary",
            designation: "July 15, 2019",
        },
    ];

const ClientReviews = () => {
    return (
        <>

            <div className='testimonial_inside'>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Swiper
                            className="mySwiper"
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                            slidesPerView={2}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false,
                            // }}
                            autoplay={false}
                            loop={true}
                        >
                            {reviews.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <section>
                                        <ImQuotesLeft className='leftSVG' />
                                        <h6> <img src={StarGroup} alt="" /> </h6>
                                        <p>
                                            {item.text}
                                        </p>
                                        <h5>
                                            <span>
                                                <img className='ClientPic' src={item.image} alt={item.name} />
                                            </span>
                                            <span>
                                                <strong> {item.name} </strong>
                                                <span>{item.designation}</span>
                                            </span>
                                        </h5>
                                    </section>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default ClientReviews

