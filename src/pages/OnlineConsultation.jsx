
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Col, Container, Row } from 'react-bootstrap';

import AboutPics from '/image/online_consulat.jpg'
import PitaKapha from '/image/pitaKapha.png'

const OnlineConsultation = () => {
    return (
        <>

            <main className='online_consult'>

                <PageBanner
                    title="Online Consultation"
                    subtitle="India's Leading Manufacturing and Export of Ayurveda Products, Herbal Food Supplements & Ayurveda medicines. "
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>
                        <div className='aboutus_inside'>
                            <section class="page_heading">
                                <h6>Request for Free Online Ayurveda Consultation with our Qualified Doctors/Vaidyas</h6>
                                <h3><strong>Bliss Ayurveda</strong> Online Consultation</h3>
                            </section>

                            <p>Free Online Ayurveda Consultation with our Qualified Bliss Ayurveda Doctors/Vaidyas at Free Online Ayurveda Consultation. The Bliss Ayurveda Doctors/Vaidyas will suggest the Products/Supplements via email based on the details you have provided in the Online Ayurveda Consultation Form.</p>

                            <section className='skypeCard'>
                                <Row className='align-items-center'>
                                    <Col md={4}>
                                        <div className='about_pics shine-card'>
                                            <img src={AboutPics} />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <section class="page_heading">
                                            <h3><strong>Determination of Prakriti</strong></h3>
                                        </section>

                                        <p> Ayurveda reiterates that all living beings are the permutation and combination of the five basic elements <b>– Ether, Air, Fire, Water and Earth.</b></p>

                                        <p> These five elements constitute the three major biological components – the three Doshas – त्रिदोष </p>

                                        <img src={PitaKapha} className='vataPics' alt="" />

                                        <p> In Ayurveda, the concept of “Prakriti – प्रकृति ” refers to an individual’s unique constitution or inherent nature. It is determined by the balance of the three doshas: Vata, Pitta, and Kapha, which are the three fundamental energies or bio-energies in the body.  </p>

                                    </Col>
                                </Row>
                            </section>

                        </div>


                    </Container>
                </div>

                <div className='aboutus_sec'>
                    <Container >
                        <div className='aboutus_inside'>
                            <section class="page_heading">
                                <h6>Assess the “Prakriti” through “Nadi Pariksha” or pulse diagnosis</h6>
                                <h3 className='textHindi'><strong> “नाड़ी परिक्षण द्वारा प्रकृति परिक्षण” </strong></h3>
                            </section>

                            <p>In Ayurveda, the concept of “Prakriti – प्रकृति ” refers to an individual’s unique constitution or inherent nature. It is determined by the balance of the three doshas: Vata, Pitta, and Kapha, which are the three fundamental energies or bio-energies in the body. Each person has a unique combination of these doshas, which influences their physical, mental, and emotional characteristics.</p>
                            <p> “Prakriti Parikshan” is the process of determining a person’s Prakriti or constitutional type. It involves assessing various physical and behavioural traits to understand the dominant doshas in an individual. By identifying one’s Prakriti, Ayurvedic practitioners can provide personalized health recommendations, diet plans, lifestyle modifications, and even herbal treatments to maintain or restore balance and well-being. </p>
                            <p> One of the methods used in Ayurveda to assess an individual’s Prakriti is through “Nadi Pariksha” or pulse diagnosis. Pulse diagnosis involves feeling the pulse at various points on the wrist and interpreting the qualities of the pulse, such as its strength, rhythm, and various other characteristics. Ayurvedic practitioners are trained to recognize specific patterns in the pulse, which correspond to the different doshas. </p>
                            <p> Another method used for Prakriti Parikshan is a detailed consultation with an experienced Ayurvedic physician. During this consultation, the practitioner will inquire about the person’s physical attributes, personality traits, behaviour, preferences, tendencies, and medical history. By gathering this information, the practitioner can gain insight into the dominant doshas and the overall Prakriti of the individual. </p>
                            <p> Additionally, Ayurvedic experts may use a combination of other diagnostic techniques, such as visual examination, observation of physical features (e.g., facial features, body build, etc.), and questioning to assess a person’s Prakriti accurately. </p>
                            <p> It is important to note that Prakriti Parikshan is a fundamental concept in Ayurveda, and determining an individual’s Prakriti helps in tailoring a holistic approach to their health and well-being. However, Ayurveda also considers the influence of various factors like age, diet, lifestyle, and environmental changes, which can impact a person’s dosha balance over time. Therefore, the Ayurvedic treatment approach is dynamic and can be adjusted as needed to promote optimal health and balance for each individual. </p>
                        </div>
                    </Container>
                </div>

            </main>

        </>
    )
}

export default OnlineConsultation

