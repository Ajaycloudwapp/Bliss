
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import Accordion from "react-bootstrap/Accordion";

import Product1 from '/image/product_1.jpg'
import Product2 from '/image/product_2.jpg'
import Product3 from '/image/product_3.jpg'
import Product4 from '/image/product_4.jpg'

const products = [
    { image: Product1 },
    { image: Product2 },
    { image: Product3 },
    { image: Product4 },
];

import "swiper/css";
import "swiper/css/pagination";
import { FaEnvelopeOpen, FaRegEnvelopeOpen, FaWhatsapp } from 'react-icons/fa';
import { TbBrandWhatsappFilled } from 'react-icons/tb';

import { FaEnvelopeOpenText, FaGlobeAfrica, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import { IoCall, IoHomeSharp } from 'react-icons/io5';
import { HiOfficeBuilding } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';
import { FaSquareTwitter } from 'react-icons/fa6';

const OrderProducts = () => {
    return (
        <>

            <main className='order_products'>

                {/* <PageBanner
                    bgImage={AboutBanner}
                /> */}

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>

                        <section className="page_heading leftText">
                            <h6> Just fill in the information as requested below, and we will respond to your orders as soon as possible. </h6>
                            <h3> <span> <strong> You can order products online via the form below </strong> </span> </h3>
                        </section>

                        <div className='mypara'>
                            <h2>
                                <span> <FaRegEnvelopeOpen /> </span>
                                <span>
                                    Please send us your details at the following email address:
                                    <strong>Email: info@blissayurveda.com</strong>
                                </span>
                            </h2>
                            <h2>
                                <span> <FaWhatsapp /> </span>
                                <span>
                                    You can order us our products instantly through
                                    <strong>WhatsApp No. 91-9711133683</strong>
                                </span>
                            </h2>
                            <h6> *If you would like more information about our range of products please do not hesitate to contact us by e-mail or phone, details of which are located at the “Contact Us” link. We will be delighted to answer any queries you may have. </h6>
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
                            <Col md={6}>
                                <div className='contact_content'>
                                    <section class="page_heading">
                                        <h6> Support Information : </h6>
                                        <h3> <strong> Bliss Ayurveda Pvt Ltd </strong> </h3>
                                    </section>
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
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='orderaccordian_sec'>
                    <Container>
                        <section class="page_heading centerText">
                            <h6> Bliss Ayurveda products are formally registered by Ministry of Health </h6>
                            <h3> <span> <strong> Why Bliss Ayurveda ? </strong> </span> </h3>
                        </section>

                        <div className='accordian_inside'>
                            <Row className='justify-content-center'>
                                <Col md={8}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header> <strong> 1 </strong> Quality Herbal Products</Accordion.Header>
                                            <Accordion.Body>
                                                To provide high quality Herbal Products passed through rigorous standardization, researches and lab tests for the well being of our consumers in all over the world.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header> <strong> 2 </strong> Knowledge of Ayurveda</Accordion.Header>
                                            <Accordion.Body>
                                                To conduct Ayurveda Courses for promoting the knowledge of Ayurveda, to train people into Ayurveda massage, Panchakarma therapy and other advance courses of Ayurveda.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header> <strong> 3 </strong> Personalized Ayurveda Consultation</Accordion.Header>
                                            <Accordion.Body>
                                                To help people by providing personalized Ayurveda Consultation along with pulse reading, herbal supplements, dietary and lifestyle advice.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header> <strong> 4 </strong> Ayurveda Wellness Centers</Accordion.Header>
                                            <Accordion.Body>
                                                To open Panchkarma Clinics and Ayurveda Wellness Centers all over the world and thus helping people getting the benefits of Ayurveda.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header> <strong> 5 </strong> Central Knowledge Server</Accordion.Header> 
                                            <Accordion.Body>
                                                To become a Central Knowledge Server and Sourcing Station known for standardized cultivation, harvesting at source for the benefit of manufacturers. We firmly believe that we are well ahead of the Industry Standards in all of these areas and we intend to stay ahead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default OrderProducts

