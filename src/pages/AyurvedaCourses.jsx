
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/yogaBG.jpg";
import { Col, Container, Row, Table } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Course1 from '/image/courses/course_1.jpg'
import Course2 from '/image/courses/course_2.jpg'
import Course3 from '/image/courses/course_3.jpg'
import Course4 from '/image/courses/course_4.jpg'

const courses = [
    { image: Course1 },
    { image: Course2 },
    { image: Course3 },
    { image: Course4 },
];

import "swiper/css";
import "swiper/css/pagination";

import { Tabs, Tab } from "react-bootstrap";

const AyurvedaCourses = () => {
    return (
        <>
            <main>

                <PageBanner
                    title="Bliss Ayurveda Yoga Classes"
                    subtitle="Yoga classes - Power of silence"
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
                            <h6> <b> Bliss Ayurveda Health Village offers various Ayurveda Courses </b> for persons interested in a properly planned curriculum that ranges from Basic, Medium to Advance. Besides, any person can take basic courses to enhance health and manage a specific health issue along with Ayurveda principles of diet, herbs and lifestyle. Our Ayurvedic programs provide an in-depth perspective on Ayurvedic treatment methods that is relevant for Ayurvedic practitioners as well as other individuals. We are organizing these courses on a regular basis in the USA, Italy, Norway Germany, Denmark and Russia. All courses are also conducted at Bliss Ayurveda Health Center, New Delhi, India. The courses are designed and conducted by our team of five Vaidyas headed by Dr Nitin Agrawal. </h6>
                            <h6> Dr Agrawal is a celebrated speaker who is regularly invited to speak at various international conferences & seminars. He is passionate about applying the ancient knowledge of Ayurveda to the modern context and conveying its potent healing potential to improve the quality of health & life of an individual & society in general… </h6>
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
                                    <p> All the courses provide comprehensive theory and practice sessions, interactive sessions and Question and answer sessions. Courses will be about basic knowledge of Ayurveda, Ayurvedic view to manage a certain problem or disorder, information about Ayurveda herbs and herbal food supplements and some important dietary advice and lifestyle tips. </p>
                                    <p> <b> Courses for Practitioners: There are eight courses for practitioners. Each course comprises modules and lessons. After completion of the course, students are awarded a Certificate by Bliss Ayurveda. </b> </p>
                                    <ul>
                                        <li> Basic Ayurveda Course </li>
                                        <li> Advanced Ayurveda Course </li>
                                        <li> Basic Panchkarma Therapy Course </li>
                                        <li> Advanced Panchkarma Therapy Course </li>
                                        <li> Specialized Panchkarma Treatments Course </li>
                                        <li> Marma Therapy Course </li>
                                        <li> Ayurveda Cooking Course </li>
                                        <li> Ayurveda Pulse Reading </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='practiceSession_sec'>
                    <Container>
                        <section className="page_heading leftText">
                            <h3> <span> <strong> Practice </strong> Session </span> </h3>
                        </section>
                        <p> Trainees of Panchkarma Courses will experience Panchkarma treatments themselves. They will also be able to do Panchkarma on patients and/or volunteers. So there is a double benefit as you will get Panchkarma treatment as well as hands-on practice. </p>

                        <div className='practiceTabs'>
                            <Tabs defaultActiveKey="0">
                                <Tab
                                    eventKey="0"
                                    title={<>Basic Ayurveda <span>Course</span></>}
                                >
                                    <div className='course_content'>
                                        <div class="table-responsive">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Duration</th>
                                                        <th>Location</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Weekend or 2 days, 12-14 hours total.</td>
                                                        <td>At our Health Center or any other place.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="1"
                                    title={<>Advanced Ayurveda <span>Course</span></>}
                                >
                                    <div className='course_content'>
                                        <div class="table-responsive">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Duration</th>
                                                        <th>Location</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <ul>
                                                                <li> At our Health Center: 7 Days in India; 6-7 hours per day. </li>
                                                                <li> Outside of India: 3 Weekends; One Weekend a Month; 12-14 hours per Weekend </li>
                                                            </ul> 
                                                        </td>
                                                        <td>At our Health Center or any other place.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="2"
                                    title={<>Basic Panchkarma <span>Therapy Course</span></>}
                                >
                                    <div className='course_content'>
                                        <div class="table-responsive">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Duration</th>
                                                        <th>Location</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td> 2 weeks </td>
                                                        <td>At our Health Center in India or your own Panchkarma Center/Clinic.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="3"
                                    title={<>Advanced Panchkarma <span>Therapy Course</span></>}
                                >
                                    <div className='course_content'>
                                        <div class="table-responsive">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Therapy Course</th>
                                                        <th>Duration</th>
                                                        <th>Location</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <ul>
                                                                <li> Specialized Panchkarma Treatments Course </li>
                                                                <li> Marma Therapy </li>
                                                                <li> Ayurveda Cooking Course </li>
                                                                <li> Ayurveda Pulse Reading Course </li>
                                                            </ul> 
                                                        </td>
                                                        <td>4 weeks</td>
                                                        <td>At our Health Center in India</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
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

export default AyurvedaCourses

