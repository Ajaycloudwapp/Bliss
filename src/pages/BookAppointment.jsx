
import React from 'react'

import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/enquiry.avif";
import { Col, Container, Row } from 'react-bootstrap';

import AboutSection from '../component/AboutUSCard';
import AboutPics from "/image/enquiry1.avif";
import { FaEnvelopeOpenText, FaGlobeAfrica, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import { IoCall, IoHomeSharp } from 'react-icons/io5';
import { HiOfficeBuilding } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';
import { FaSquareTwitter } from 'react-icons/fa6';

const BookAppointment = () => {
    return (
        <>

            <main className='bookAppointment_page'>

                <PageBanner
                    title="Book Appointment"
                    subtitle="Just submit your imformation, We will revert to your query."
                    bgImage={AboutBanner}
                />

                <div className='businessEnquiry_sec'>
                    <Container>

                        <section class="page_heading">
                            <h6>You can book your Appointment Online with our secure Online Booking Form</h6>
                            <h3><strong>Book Appointment Online</strong></h3>
                        </section>

                        <p>BLISS AYURVEDA HEALTH VILLAGE is a complete Ayurveda Center dealing with different therapies under the same roof providing a holistic approach towards health. Bliss Ayurveda Health Village is a unique center of its kind in North India which offers an extensive menu of therapeutic and rejuvenative treatments, integrating the traditional Indian system of Ayurveda and Yoga with modern Spa facilities. These procedures strive to achieve the ultimate harmony between the physical and the mental realms of the individual.</p>

                        <div className='contact_content'>
                            <Row>
                                <Col>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56116.27026181637!2d77.481716!3d28.471508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0501df0c09%3A0x1a1e053ff10da431!2sBliss%20Ayurveda%20Health%20Village!5e0!3m2!1sen!2sin!4v1770285099084!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                                <Col>
                                    <ul className='myaddress'>
                                        <li>
                                            <span> <HiOfficeBuilding /> </span>
                                            <span>
                                                <strong> Working Office </strong>
                                                Plot No. 30/18, Knowledge Park-III, Greater Noida, Delhi NCR, India, PIN 201310
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
                                </Col>
                            </Row>

                        </div>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default BookAppointment

