
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/skype.avif";
import { Col, Container, Row, Table } from 'react-bootstrap';
import AboutPics from '/image/userSkype.jpg'

const ConsultationSkype = () => {
    return (
        <>

            <PageBanner
                title="Consultation Through Skype"
                subtitle="Just submit your imformation, We will call you back"
                bgImage={AboutBanner}
            />

            <div className='consultationSkype_sec'>
                <Container>
                    <div className='aboutus_inside'>
                        <Container>

                            <section class="page_heading">
                                <h6>Detailed Online Consultation with our Ayurveda Doctors through Skype</h6>
                                <h3><strong>Bliss Ayurveda</strong> Consultation Through Skype</h3>
                            </section>

                            <p>Bliss Ayurveda offers you detailed online consultation with our specialized Ayurveda Doctors through Skype. This consultation is uniquely designed to provide maximum health benefit to you. You can discuss your problem point by point and our experts will satisfy your queries and recommend appropriate Ayurveda solutions through effective & safe Ayurveda supplements, Dietary recommendations and Life style advice.</p>

                            <section className='skypeCard'>
                                <Row className='align-items-center'>
                                    <Col md={4}>
                                        <div className='about_pics shine-card'>
                                            <img src={AboutPics} />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <section class="page_heading">
                                            <h6>Email for appointment with our experienced Ayurveda Doctors/Vaidyas</h6>
                                            <h3><strong>Skype Name : blissayurveda</strong></h3>
                                        </section>

                                        <p> *To avail of our specialized Skype consultation, you have to fix your appointment by email or Skype. *Skype consultations are open 6 days a week from Monday to Saturday (9:00 AM- 9:00 PM – Indian standard time, but in some special conditions we are flexible with timing).</p>

                                        <p> *Once you deposit the desirable amount, a confirmational email will be sent to you and you can avail of your Skype consultation with one of our Specialized Ayurveda Doctors as per the mutual agreement of date and time. </p>
                                    </Col>
                                </Row>
                            </section>

                        </Container>
                    </div>
                </Container>
            </div>

            <div className='weOffers_sec'>
                <Container>
                    <section className="page_heading centerText">
                        <h6> This consultation is uniquely designed to provide maximum health benefits to you </h6>
                        <h3> <span> We Offer <strong> Two Type of Cunsultation </strong> </span> </h3>
                    </section>

                    <div class="table-responsive">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Duration</th>
                                    <th>Services</th>
                                    <th className='text-center'>Price in US Dollar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>25 Minutes</td>
                                    <td>
                                        <ul>
                                            <li> Ayurveda Consultation </li>
                                            <li> Dietary and Life style advices </li>
                                            <li> Ayurveda medicines/Supplements advice </li>
                                            <li> One free follow up (20 minutes) </li>
                                        </ul> 
                                    </td>
                                    <td className='text-center'>$ 50</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>45 Minutes</td>
                                    <td>
                                        <ul>
                                            <li> Detailed Ayurveda Consultation </li>
                                            <li> Dietary and Life style advices </li>
                                            <li> Ayurveda medicines/Supplements advice </li>
                                            <li> Personalized Diet chart by email </li>
                                            <li> Two free follow ups (15 minutes each) </li> 
                                        </ul> 
                                    </td>
                                    <td className='text-center'>$ 80</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>


                </Container>
            </div>

        </>
    )
}

export default ConsultationSkype

