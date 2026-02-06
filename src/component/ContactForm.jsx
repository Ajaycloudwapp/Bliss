
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FaEnvelopeOpenText, FaGlobeAfrica, FaHome } from 'react-icons/fa'
import { HiOfficeBuilding } from 'react-icons/hi'
import { IoCall, IoHomeSharp } from 'react-icons/io5'

const ContactForm = () => {
    return (
        <>
            <div className='contactForm_inside'>
                <Row>
                    <Col md={6} > 
                        <div className='contact_field'>
                            <h4> Contact Us </h4>

                            <Row>
                                <Col md={6} > 
                                    <div className='form-group'>
                                        <label> Your name </label>
                                        <input type='text' className='form-control' placeholder='Enter your name' />
                                    </div>
                                </Col>
                                <Col md={6} > 
                                    <div className='form-group'>
                                        <label> Your Email </label>
                                        <input type='text' className='form-control' placeholder='Enter your email' />
                                    </div> 
                                </Col>
                            </Row>

                            <div className='form-group'>
                                <label> Your Subject </label>
                                <input type='text' className='form-control' placeholder='Enter your subject' />
                            </div> 

                            <div className='form-group'>
                                <label> Messages </label>
                                <textarea rows={3} className='form-control' placeholder='Enter Message'></textarea>
                            </div> 

                            <Button> Send Email </Button>

                        </div> 
                    </Col>
                    <Col md={6}>
                        <div className='contact_content'>
                            <h3>  <strong> Let's Talk  </strong> on somthing great together </h3>

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
                                    <span> +91 9711133683 (WhatsApp No.) </span>
                                </li> 
                            </ul>

                            <ul className='myaddress'>
                                <li>
                                    <span> <HiOfficeBuilding /> </span>
                                    <span> 
                                        <strong> Working Office Address </strong>
                                        Plot No. 30/18, Knowledge Park-III
                                        Greater Noida-201310, Delhi NCR
                                        India 
                                    </span>
                                </li> 
                                <li>
                                    <span> <FaGlobeAfrica /> </span>
                                    <span> 
                                        <strong> Registered Office Address </strong>
                                        136, Surya Niketan, New Delhi,
                                        India, PIN 110092 
                                    </span>
                                </li> 
                            </ul>

                        </div>
                    </Col>
                </Row>
            </div> 
        </>
    )
}

export default ContactForm

 