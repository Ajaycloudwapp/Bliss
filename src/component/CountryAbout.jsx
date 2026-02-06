
import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'

import AboutPics from '/image/country.png'

const CountryAbout = () => {
    return (
        <>
            <div className='aboutus_inside'>
                <Container>

                    <Row className='align-items-center'>
                        <Col md={6}>
                            <p> Bliss Ayurveda with an international presence demonstrates stability, growth, and ample industry experience. Bliss Ayurveda products are available and sold in 30+ Countries like India, USA, Russia, Italy, Norway, Germany, San Marino, Vatican City, Denmark, Azerbaijan, Spain, Croatia, Austria, Switzerland, Slovenia, Ukraine, Latvia, Kazakhstan, Canada, Cyprus, Greece and Singapore.</p>

                            <p> Bliss Ayurveda products are formally registered by the Ministry of Health or competent authorities on Herbal Food Supplements in India, Russia, Italy, Norway, Germany, Ukraine and Russia CIS & European Union. This proves our expertise in designing product formulations according to the Laws and quality control regulations of respective countries. You can explore our products country-wise. </p>
                        </Col>
                        <Col md={6}>
                            <div className='about_pics shine-card'>
                                <img src={AboutPics} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CountryAbout

