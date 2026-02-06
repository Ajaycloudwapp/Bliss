
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaEnvelopeOpen, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaPhoneSquareAlt, FaSkype, FaTwitter } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

import Logo from '../../public/image/logo.png' 

const FooterContent = () => {
    return (
        <>
            <div className='footer_linksInside'>
                <Row>
                    <Col md={3}>
                        <div className='footer_card'>
                            <h4> Navigation </h4>
                            <ul>
                                <li> Order Products </li>
                                <li> Browse By Category </li>
                                <li> Online Consultation </li>
                                <li> Bliss Ayurveda Health Village </li>
                                <li> In- residence Tariff </li>
                                <li> Business Enquiry </li>
                                <li> Ayurveda Courses </li>
                                <li> Know Your Body Type </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='footer_card'>
                            <h4> Useful Links </h4>
                            <ul>
                                <li> Home </li>
                                <li> Our Profile </li>
                                <li> Our Products </li>
                                <li> Wellness Health Village </li>
                                <li> Ayurveda & Yoga Courses </li>
                                <li> News & Updates </li>
                                <li> Contact Us </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='footer_card'>
                            <h4> Contact us </h4>
                            <ul className='address_card'>
                                <li>
                                    <IoHome />
                                    <span>
                                        Plot No. 30/18, Knowledge Park-III
                                        Greater Noida – 201310,
                                        Delhi NCR, India
                                    </span>
                                </li>
                                <li>
                                    <FaPhoneAlt />
                                    <span>
                                        +91-120-3112267 
                                    </span>
                                    <span>
                                        +91-9711133683
                                    </span>
                                </li>
                                <li>
                                    <FaEnvelopeOpen />
                                    <span>
                                        info@blissayurveda.com
                                    </span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>
                                        Find us on map
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <section>
                            <div className='footer_card'>
                                <h4> Social Icons </h4>
                                <ul className='socialIcon'>
                                    <li>
                                        <FaFacebookF />
                                    </li>
                                    <li>
                                        <FaTwitter />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <FaSkype />
                                    </li>
                                </ul>
                            </div>
                            <div className='footer_logo'>
                                <img src={Logo} alt="" />
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
            <div className='footer_down'>
                <p> All Right Reserved. All information, data and pictures are exclusive property of Bliss Ayurveda </p>
            </div>
        </>
    )
}

export default FooterContent

