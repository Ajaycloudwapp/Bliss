
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/ourTems.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import AboutPics from '/image/team_director.jpg'
import TeamMembers from '../component/TeamMembers';
import ClientTestimonial from '../component/ClientTestimonial';

const OurTeams = () => {
    return (
        <>
            <main>

                <PageBanner
                    title="Team Bliss Ayurveda"
                    subtitle="Team of Vaidyas (Ayurveda Doctors), Health Professionals, Distributors etc."
                    bgImage={AboutBanner}
                />

                <div className='consultationSkype_sec'>
                    <div className='aboutus_inside'>
                        <Container>

                            <section class="page_heading">
                                <h6> Teams of Vaidyas (Ayurveda Doctors), Health Professionals, Distributors Etc. </h6>
                                <h3><strong>Bliss Ayurveda</strong> Teams</h3>
                            </section>

                            <p> Bliss Ayurveda India products are formally registered by Ministry of Health and competent authorities on Herbal Food Supplements in Italy, Norway, Germany, Ukraine and Russia. This proves our expertise in designing product formulations according to the Laws and quality control regulations of respective countries. Mission of Bliss Ayurveda India is to Help healthy people to maintain and promote their health i.e. “Swasthasya swasthya rakshanam” and to manage imbalances and disorders following the principles of Ayurveda. </p>

                            <section className='skypeCard'>
                                <Row className='align-items-center'>
                                    <Col md={8}>
                                        <section class="page_heading">
                                            <h3><strong>Dr. Nitin Agrawal</strong></h3>
                                        </section>

                                        <div className='teams_details'>
                                            <ul>
                                                <li> <strong>Managing Director</strong> Bliss Ayurveda Private Limited, Bliss Ayurveda India Private Limited & Bliss Ayurveda Health Village </li>
                                                <li> <strong> Chairman </strong> Alliance Ayurveda Research and Training Institute (AARTI) </li>
                                                <li> <strong> Vice President </strong> Vishwa Ayurved Parishad (VAP) </li>
                                                <li> <strong> National General Secretary  </strong> Divya Prem Seva Mission (DPSM) </li>
                                                <li> <strong> President Organising Committee  </strong> AYURYOG EXPO – World Assembly of Ayurveda Yoga & Naturopathy </li>
                                            </ul>
                                        </div>

                                    </Col>
                                    <Col md={4}>
                                        <div className='about_pics shine-card'>
                                            <img src={AboutPics} />
                                        </div>
                                    </Col>
                                </Row>
                            </section>

                            <h5 className='tagline'> After completing six years of degree courses in Ayurveda Medicine and then Post-graduation in Ayurveda, he has been travelling extensively to more than 50 countries including the USA, Europe, Russia and Africa for consultations, lectures & organizing courses for Ayurveda. </h5>

                            <p> Dr. Nitin Agrawal is an Ayurveda Doctor with education and passion. He has been practising Ayurveda for over 27 years and is an expert in Pulse Diagnosis and Panchkarma Treatments. He is also known in the Ayurveda fraternity as a formulator of Herbal & Ayurveda Medicinal formulations according to International standards (European Union and US-FDA). He has travelled to more than 50 countries to promote Ayurveda worldwide. </p>

                            <p> Dr. Nitin’s outstanding ability is his strength to integrate age-old classical Ayurveda knowledge with modern scientific tools. He is among one of the leading thinkers and young leaders in the field of Ayurveda. As a celebrated speaker, he is regularly invited as a guest lecturer to speak at various International Conferences, Seminars & Webinars all over the world. </p>

                            <p> In the last two decades, he had been privy to many cases where people in the hope of better health, have literally had their lives destroyed by inaccurate health information and dependency on pharmaceutical drugs. For maintaining optimum health there is another way…the Natural way! He had proved it personally and seen what it can do, for thousands of people as well. This can be achieved by Herbal Supplements which are based on the ancient wisdom of Ayurveda. </p>

                            <p> These experiences led to the concept of Bliss Ayurveda which was founded in 2006, with the dream of creating a company that would provide the highest quality Ayurvedic herbal products to help people achieve their optimum health. He envisions Health, Wealth and Bliss for every Indian through Bliss Ayurveda India. </p>

                            <div className='teamsMembers'>
                                <TeamMembers />
                            </div>

                        </Container>
                    </div>
                </div>

                <div className='testimonials_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6>  What our customers are saying about our product's  </h6>
                            <h3> <span>  Client’s  <strong>  Testimonials  </strong> </span> </h3>
                        </section>

                        {/* Services Section */}
                        <ClientTestimonial page="team" />

                    </Container>
                </div>

            </main>
        </>
    )
}

export default OurTeams

