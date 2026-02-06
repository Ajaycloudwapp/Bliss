
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

const BusinessEnquiry = () => {
    return (
        <>

            <PageBanner
                title="For Business Enquiry "
                subtitle="Just submit your imformation, We will revert to your query."
                bgImage={AboutBanner}
            />

            <div className='aboutus_sec businessAbout'>
                {/* About Section css */}
                <div className='aboutus_inside'>
                    <Container>

                        <section class="page_heading">
                            <h6>You can avail Bliss Ayurveda Products Distribution rights in your Country</h6>
                            <h3><strong>Trade and Distributors Enquiry</strong></h3>
                        </section>

                        <p>Bliss Ayurveda products are available and sold in India, USA, Russia, Italy, Norway, Germany, San Marino, Vatican City, Denmark, Azerbaijan, Spain, Croatia, Austria, Switzerland, Slovenia, Ukraine, Latvia, Kazakhstan, Canada, Cyprus, Greece and Papua New Guinea. Our products are formally registered by Ministry of Health or competent authorities on Herbal Food Supplements in Italy, Norway, Russia, Germany, Croatia, Ukraine, Republic of Azerbaijan and are US FDA compliant.</p>

                    </Container>
                </div>
            </div>

            <div className='businessEnquiry_sec'>
                <Container>

                    <section class="page_heading">
                        <h6>Just submit your information, we will revert to your query</h6>
                        <h3><strong>For Trade / Business Enquiry</strong></h3>
                    </section>

                    <div className='contact_content'> 
                        <Row>
                            <Col>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56116.27026181637!2d77.481716!3d28.471508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0501df0c09%3A0x1a1e053ff10da431!2sBliss%20Ayurveda%20Health%20Village!5e0!3m2!1sen!2sin!4v1770285099084!5m2!1sen!2sin" width="600" height="450"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                            <Col>
                                <ul className='myaddress'>
                                    <li>
                                        <span> <HiOfficeBuilding /> </span>
                                        <span>
                                            <strong> BLISS AYURVEDA HEALTH VILLAGE </strong>
                                            Plot No. 30/18, Knowledge Park-III
                                            Greater Noida-201310, Delhi NCR
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
                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>

        </>
    )
}

export default BusinessEnquiry

