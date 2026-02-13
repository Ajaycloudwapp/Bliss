
import React, { useState } from 'react';
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/yogaBG.jpg";
import { Col, Container, Row } from 'react-bootstrap';

import Manage1 from "/image/manage_1.avif"  
import Manage2 from "/image/manage_2.avif" 
import Manage3 from "/image/manage_3.avif" 
import Manage4 from "/image/manage_4.avif" 
import Manage5 from "/image/manage_5.avif" 
import Manage6 from "/image/manage_6.avif" 
import Manage7 from "/image/manage_7.avif" 
import Manage8 from "/image/manage_8.avif" 


const WellnessPrograms = () => {

    return (
        <>

            <main className='wellness_page'>

                <PageBanner
                    title="Wellness Programs"
                    subtitle="Offers a Range of Wellness and Spa Package"
                    bgImage={AboutBanner}
                />

                <div className='consultationSkype_sec'>
                    <Container>
                        <div className='aboutus_inside'>

                            <section className="page_heading">
                                <h6>Bliss Ayurveda Health Village Offers a range of Wellness and SPA Packages</h6>
                                <h3><strong> Wellness Programs </strong></h3>
                            </section>

                            <p>Bliss Ayurveda Health Center offers a range of Wellness and SPA Packages designed specifically to manage some common chronic problems as well as for maintaining good health, enhancing beauty, uplifting Vitality and youthfulness. These program raises your physical and mental threshold and you will find yourself peaceful and confident even under stressful situation. It is strongly advisable in stress, anxiety, depression and other related disorders. Designed on an individual basis and addresses the physiological and emotional challenges responsible for weight gain. Weight management program includes anti-cellulite massage (Udvartana), detoxification, regular physical activity, stress management, healthy eating practices and special Yoga program that bring about healthy weight loss and a lifelong maintenance approach.</p>

                            <div className='physiotherapy_inside'>
                                <section className="skypeCard">
                                    <section className="page_heading">
                                        <h3>You can avail one of these packages and enjoy their benefits in a serene cool environment :</h3>
                                    </section>
                                    <p> These Programs, help to relieve pain in short span of time of few days. At the same time, it removes the root cause of pain from our physiology and restores the healthy function of involved parts like joints, muscles and nerves. These Programs provides a very deep and tissue level of cleansing. The accumulated toxins in tissues (Ama) is released and expelled out of body. It gives way for healthier tissues by allowing proper circulation of nutrients and reflects in better energy level, boosted immunity, relief of stiffness, lightness in body and clarity of mind. </p>
                                    <ul>
                                        <li> Stress Management </li>
                                        <li> Weight Management </li>
                                        <li> Pain Management </li>
                                        <li> Allergy Management </li>
                                        <li> Body Detox Program </li>
                                        <li> Rejuvenation & Vitality Program </li>
                                        <li> Anti Ageing Program </li>
                                        <li> Skin Care Program </li>
                                    </ul>
                                </section>
                            </div>

                        </div>
                    </Container>
                </div>

                <div className='ourExpertise_sec'>
                    <Container>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Manage1} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> This program raises your physical and mental threshold </h6>
                                        <h3><strong> Stress Management Program </strong></h3>
                                    </section>
                                    <p> Stress is the Epidemic of modern times. It affects every person and every system of our body in a negative manner. Studies suggest that most of the chronic disorders have a definite element of stress. The powerful combination of quality herbs, Panchakarma and Yoga nourishes the whole body including the brain and nerves. This program raises your physical and mental threshold and you will find yourself peaceful and confident even under stressful situations. It is strongly advisable in stress, anxiety, depression and other related disorders. </p>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> A Tailor-Made Program for The Weight Loss </h6>
                                        <h3><strong> Weight Management Program </strong></h3>
                                    </section>
                                    <p> This program is designed on an individual basis and addresses the physiological and emotional challenges responsible for weight gain. The weight management program includes anti-cellulite massage (Udvartana), detoxification, regular physical activity, stress management, healthy eating practices and a special Yoga program that bring about healthy weight loss and a lifelong maintenance approach. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Manage2} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Manage4} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Boost Natural Defence Mechanism of the Body </h6>
                                        <h3><strong> Allergy Management Program </strong></h3>
                                    </section>
                                    <p> The allergy management program focuses on route cause of allergy that involves the cleansing of toxins (Ama) from the body as well as improving natural defence mechanisms in the Epidemic of modern times. It affects every person and every system of our body in a negative manner. Studies suggest that most chronic disorders have a definite element of stress. </p>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Ayurvedic Pain Management Program </h6>
                                        <h3><strong> Pain Management Program </strong></h3>
                                    </section>
                                    <p> Ayurvedic pain management through Panchakarma offers two benefits. It helps to relieve pain in a short span of time of few days. At the same time, it removes the root cause of pain from our physiology and restores the healthy function of involved parts like joints, muscles and nerves. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Manage3} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Manage5} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Whole Body Detox through Ayurveda </h6>
                                        <h3><strong> Body Detox Program </strong></h3>
                                    </section>
                                    <p> Body Detox Program utilizes the purificatory procedures of detox. It provides a very deep tissue level of cleansing. The accumulated toxins in tissues (Ama) are released and expelled out of the body. It gives way to healthier tissues by allowing proper circulation of nutrients and reflects in better energy levels, boosting immunity, relief of stiffness, lightness in the body and clarity of mind. </p>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Rejuvenation Program for Self Healing Mechanism of Body </h6>
                                        <h3><strong> Rejuvenation & Vitality Program </strong></h3>
                                    </section>
                                    <p> Ayurvedic Rejuvenation Program focuses on prevention, maintenance and the improvement of one’s health and overall sense of well-being. It helps to keep the body young and agile and enhances one’s energy. Whether you are looking to reduce your stress, improve your health, address common ailments or simply delay the ageing process, this program is ideal for you. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Manage6} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Manage7} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> The Kayakalp - Anti-aging Program in Ayurveda </h6>
                                        <h3><strong> Anti Aging Program </strong></h3>
                                    </section>
                                    <p> The anti-ageing program addresses how to slow or reverse the effects of ageing and help people live longer, healthier and happier. This program cleanses cellular toxins, improves nutritional status & quality of Dhatus (body tissues) and rejuvenates the body and mind which leads to a series of secondary attributes such as longevity, immunity against diseases, and improved mental and intellectual competence. </p>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Skin Care Naturally </h6>
                                        <h3><strong> Skin Care Program </strong></h3>
                                    </section>
                                    <p> Skin care program focuses on the maintenance and rejuvenation of skin that includes external and internal care of the body. Its texture and complexion are primarily influenced by inner physiological processes. This program detoxifies the skin layers and improves circulation and nutrition. The radiance, suppleness and elasticity of skin are restored to a youthful level. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Manage8} />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default WellnessPrograms

