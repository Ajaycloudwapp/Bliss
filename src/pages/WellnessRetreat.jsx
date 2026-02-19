
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/courses/course_7.jpg";
import { Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import Accordion from "react-bootstrap/Accordion";

import Product1 from '/image/panchkarma/panchkarma_1.jpg'
import Product2 from '/image/panchkarma/panchkarma_3.jpg'

const products = [
    { image: Product1 },
    { image: Product2 },
];

import Food1 from '/image/food_1.jpg'
import Food2 from '/image/food_2.jpg'
import Food3 from '/image/food_3.jpg'

const foodlist = [
    {image: Food3},
    {image: Food2},
    {image: Food1}
]

import "swiper/css";
import "swiper/css/pagination";
import { HiOfficeBuilding } from 'react-icons/hi';
import { FaEnvelopeOpenText, FaTwitter } from 'react-icons/fa';
import { IoCall, IoHomeSharp } from 'react-icons/io5';
import { ImFacebook2 } from 'react-icons/im';

const WellnessRetreat = () => {
    return (
        <>

            <main className='retreat_page'>

                <PageBanner
                    title="Wellness Retreat"
                    subtitle="Health Retreat at Greater Noida"
                    bgImage={AboutBanner}
                />

                <div className='consultationSkype_sec'>
                    <Container>
                        <div className='aboutus_inside'>


                            <section className="page_heading">
                                <h6>Find a little time for yourself to nourish your body, mind & spirit with deep-rooted</h6>
                                <h3><strong> “Wisdom of Ayurveda” </strong></h3>
                            </section>

                            <p>We provide a range of Panchkarma treatment programs which include main procedures pre and post Panchkarma procedures, specialized therapies and Relaxing SPA treatments. These treatments can be taken by following the Daycare program and In Residence Packages.</p>
                            <p> In the Long Term, It Helps To Achieve Longevity And Brings Life-Enhancing Energy thereby Increasing Vitality, Beauty, Inner Peace, Confidence And Well-Being. We Are Providing 40+ Specialized Treatments As Part Of Our Panchkarma Program </p>

                            <div className='physiotherapy_inside'>
                                <section className="skypeCard">
                                    <Row className='align-items-center'>
                                        <Col md={6}>
                                            <section className="page_heading">
                                                <h6> Abhyanga and Shirodharda & Feel the body light & Stree-free </h6>
                                                <h3>Get a powerful Abhyanga and Shirodharda & Feel the body light & Stree-free. Warm Sesame Oil simply balances all the doshas.</h3>
                                            </section>
                                            <p> We know you’re looking for a place to Relax & Rejuvenate and let your soul free. </p>
                                            <p> Ignite your passion for good Health. </p>
                                            <p> Spend a day or two at Bliss Ayurveda Health Village. </p>
                                        </Col>
                                        <Col md={6}>
                                            <div className='courses_swiper'>
                                                <Swiper
                                                    className="mySwiper"
                                                    loop
                                                    modules={[Pagination]}
                                                    pagination={{ clickable: true }}
                                                >
                                                    {products.map((product, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div className="course_card">
                                                                <img src={product.image} alt={`Course ${index + 1}`} />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                            </div>

                        </div>
                    </Container>
                </div>

                <div className='aboutus_sec'>
                    {/* About Section css */}
                    <Container>

                        <section class="page_heading leftText">
                            <h3> <span> <strong> Heal & Restore your body by activating your brain weaves </strong> </span> </h3>
                        </section>

                        <p> During a Yoga Nidra session, the practitioner is guided through a systematic process of progressively relaxing the body and mind. This typically involves focusing on breath awareness, bodily sensations, and visualizations, which lead the practitioner into a state of profound relaxation and inner awareness. The practice can be done in various ways, including guided by an instructor or through recorded audio sessions. </p>
                        
                        <div class="mypara">
                            <h6> Yoga Nidra, often referred to as “yogic sleep,” is a powerful relaxation and meditation technique that originates from the ancient Indian tradition of Yoga. Despite its name, Yoga Nidra is not actually sleep; rather, it is a state of conscious deep relaxation where the body is in a resting state, but the mind remains alert and aware. </h6>
                        </div>
                        
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className='courses_swiper'>
                                    <Swiper
                                        className="mySwiper"
                                        loop
                                        modules={[Pagination]}
                                        pagination={{ clickable: true }}
                                    >
                                        {foodlist.map((foods, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="course_card">
                                                    <img src={foods.image} alt={`Course ${index + 1}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='contact_content'>
                                    <ul className='myaddress'>
                                        <li>
                                            <span> <HiOfficeBuilding /> </span>
                                            <span>
                                                <strong> BLISS AYURVEDA HEALTH VILLAGE </strong>
                                                Plot No. 30/18, Knowledge Park-3
                                                Greater Noida – 201310
                                                District: Gautam Buddha Nagar, NCR Delhi, India
                                            </span>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span> <FaEnvelopeOpenText /> </span>
                                            <span> info@blissayurveda.com </span>
                                        </li>
                                        <li>
                                            <span> <IoHomeSharp /> </span>
                                            <span> +91 (120) 3112267 </span>
                                        </li>
                                        <li>
                                            <span> <IoCall /> </span>
                                            <span> +91 9711133683 </span>
                                        </li>
                                        <li>
                                            <span> <ImFacebook2 /> </span>
                                            <span> blissayurveda.facebook </span>
                                        </li>
                                        <li>
                                            <span> <FaTwitter /> </span>
                                            <span> @blissayurveda </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </main>

        </>
    )
}

export default WellnessRetreat

