
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";

import { Button, Col, Container, Row, Table } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Residence1 from '/image/residence_1.jpg'
import Residence2 from '/image/residence_2.jpg'
import Residence3 from '/image/residence_3.jpeg'
import Residence4 from '/image/residence_4.jpg'
import Residence5 from '/image/residence_5.jpg'
import Residence6 from '/image/residence_6.jpg'

const courses = [
    { image: Residence1 },
    { image: Residence2 },
    { image: Residence3 },
    { image: Residence4 },
    { image: Residence5 },
    { image: Residence6 },
];

import "swiper/css";
import "swiper/css/pagination";

import { Tabs, Tab } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ResidenceTariff = () => {
    return (
        <>

            <main className='residenceTariff_page'>

                <PageBanner
                    title="Bliss In Residence Panchkarma Package Tariff"
                    subtitle="Enjoy all facilities of the premises including all meals except Panchkarma Treatments etc."
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>

                        <section className="page_heading centerText">
                            <h6> Planned curriculum that ranges from Basic, Medium to Advance </h6>
                            <h3> <span> Bliss Ayurveda <strong> Offers Various Arurveda </strong> Courses </span> </h3>
                        </section>

                        <div className='mypara'>
                            <h6> Bliss Ayurveda Health Village welcomes you for a complete Ayurveda Treatment and Health management through our In-residence Panchakarma Program under direct supervision of an experienced Ayurveda Physicians, technicians and supporting staff. </h6>
                        </div>

                        <div className='aboutus_inside'>
                            <Row className='align-items-center'>
                                <Col md={4}>
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
                                <Col md={8}>
                                    <p> <b> In-residence Panchkarma Program Package Comprises of: </b> </p>
                                    <ul>
                                        <li> Quality accommodation with Air-conditioned rooms with private balconies for the entire treatment period </li>
                                        <li> Freshly cooked delicious Ayurveda Meals (breakfast/ lunch/ dinner) for the entire treatment period </li>
                                        <li> Ayurveda Consultation and Pulse Reading with Experienced Ayurveda Doctor (Vaidya) </li>
                                        <li> Dietary and Lifestyle Advice </li>
                                        <li> 2-3 hours of Traditional, Powerful and Effective Panchkarma Treatments under the guidance of Ayurveda doctors </li>
                                        <li> 3-5 Panchkarma treatments every day </li>
                                        <li> Personalized attention – each patient will be assigned an Ayurveda Doctor for direct supervision </li>
                                        <li> Ayurveda Herbal Supplements and Medicines during the program </li>
                                        <li> Yoga classes with the practice of Pranayama (Breathing Exercises) and Mind Body Relaxation techniques </li>
                                        <li> Complimentary use of Swimming Pool, Fitness Center and Library facilities </li>
                                        <li> High-Speed internet during the stay </li>
                                        <li> Evening knowledge programs twice a week </li>
                                        <li> Airport Pickup and Drop </li>
                                        <li> Local Sightseeing and shopping facility can be arranged on request </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='practiceSession_sec'>
                    <Container>

                        <div className='practiceTabs'>
                            <Tabs defaultActiveKey="0">
                                <Tab
                                    eventKey="0"
                                    title={<>In-Residence Panchkarma Price - € Euro</>}
                                >
                                    <div className='course_content'>
                                        <h2> Bliss Ayurveda In-Residence Panchkarma Package Tariff Euro </h2>
                                        <div class="table-responsive">
                                            <h4> Cost in Euro, Per Day Per Person </h4>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Duration of Package</th>
                                                        <th>Guest Person without Sharing Room</th>
                                                        <th>2 Guests Sharing Room</th>
                                                        <th>Attendant* without Sharing Room</th>
                                                        <th>Attendant* Sharing Room</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td> Per Day Per Person </td>
                                                        <td>€160</td>
                                                        <td>€160</td>
                                                        <td>€80</td>
                                                        <td>€60</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="1"
                                    title={<>In-Residence Panchkarma Price - $ USD</>}
                                >
                                    <div className='course_content'>
                                        <h2> Bliss Ayurveda In-Residence Panchkarma Package Tariff USD </h2>
                                        <div class="table-responsive">
                                            <h4> Cost in USD, Per Day Per Person </h4>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Duration of Package</th>
                                                        <th>Guest Person without Sharing Room</th>
                                                        <th>2 Guests Sharing Room</th>
                                                        <th>Attendant* without Sharing Room</th>
                                                        <th>Attendant* Sharing Room</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td> Per Day Per Person </td>
                                                        <td>€160</td>
                                                        <td>€160</td>
                                                        <td>€80</td>
                                                        <td>€60</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="2"
                                    title={<>Book your In-Residence Panchkarma Treatment Slots Online</>}
                                >
                                    <div className='course_content'>
                                        <h2> Book Your Slots Online </h2>
                                        <p> You can book your <b>In-Residence Program</b> Slots Online with our secure online booking form. </p>
                                        <Link to="/book-appointment"> <Button> Book Now </Button> </Link>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default ResidenceTariff

