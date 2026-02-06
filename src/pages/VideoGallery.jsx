
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/videoBG.png";
import { Col, Container, Row } from 'react-bootstrap';
import DiseaseManagement from '../component/videos/DiseaseManagement';
import MenufacturingQuality from '../component/videos/MenufacturingQuality';

const VideoGallery = () => {
    return (
        <>

            <main className='video_outer'>

                <PageBanner
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec'>
                    {/* About Section css */}
                    <Container>
                        <div className='aboutus_inside'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <iframe
                                        src="https://www.youtube.com/embed/BlBpYcDRjfw"
                                        title="Bliss Ayurveda Health Village"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        className='video100Width'
                                        allowFullScreen
                                    ></iframe>
                                </Col>
                                <Col md={6}>
                                    <section class="page_heading leftAlign">
                                        <h6>A Word class Ayurveda Center For Panchkarma, Naturopathy & Yoga</h6>
                                        <h3><strong>Bliss Ayurveda Health Village</strong></h3>
                                    </section>

                                    <p>BLISS AYURVEDA HEALTH VILLAGE is a unique Ayurveda Center with In-residence Panchkarma Clinic, Ayurveda Research & Training Institute, Bliss Ayurveda Corporate Office, Fitness Center, Yoga & Meditation Hall, Swimming Pool, Terrace Garden & Ayurveda Cafe all in one Building Premise. We offer an extensive menu of therapeutic and rejuvenative treatments, integrating the traditional Indian systems of Ayurveda and Yoga with modern Spa facilities. Our personalised therapy and various other programs are designed to meet individual needs and health goals like De-Stressing, Detoxification, Pain Management, Anti-Ageing, Weight loss etc. while also offering guidance in the areas of Healthy Nutrition and Exercise routines.</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='diseaseManagement_sec'>
                    <Container>
                        <section className="page_heading leftText">
                            <h6> Subscribe Bliss Ayurveda's YouTube Channel for more informative videos on Ayurveda Segment </h6>
                            <h3> <span> <strong> Disease management </strong> through Ayurveda </span> </h3>
                        </section>

                        {/* Disease Management */}
                        <DiseaseManagement />

                    </Container>
                </div>

                <div className='menufacturService_sec'>
                    <Container>
                        <section className="page_heading leftText"> 
                            <h6> Subscribe Bliss Ayurveda's YouTube Channel for more informative videos on Wellness Segment </h6>
                            <h3> <span> Bliss Ayurveda <strong> Manufacturing, Quality and Wellness Services </strong> </span> </h3> 
                        </section>

                        {/* Disease Management */}
                        <MenufacturingQuality />

                    </Container>
                </div>

            </main>

        </>
    )
}

export default VideoGallery

