
import React from 'react'

import { Container } from 'react-bootstrap'

import Service1 from "/image/service/icon_1.avif";
import Service2 from "/image/service/icon_2.jpg";
import Service3 from "/image/service/icon_3.avif";
import Service4 from "/image/service/icon_4.jpg";

import ServicesSection from '../component/ServicesSection'
import AboutSection from '../component/AboutUSCard'

import AboutPics from "/image/aboutPic.jpg";
import OurVision from "/image/our_vision.avif"  
import OurMission from "/image/our_mission.avif" 
import OurGoals from "/image/our_goals.avif"
import OurEffective from "/image/our_effective.avif"

const homeServices = [
    {
        icon: Service1,
        title: "Sound Company Background",
        description:
            "Bliss Ayurveda is a company with a proven track record worldwide. While there are other companies that claim to offer similar opportunities.",
    },
    {
        icon: Service2,
        title: "International Presence",
        description:
            "Bliss Ayurveda with an international presence demonstrates stability, growth, and ample industry experience.",
    },
    {
        icon: Service3,
        title: "Extensive Support Network",
        description:
            "As a good company, we offer excellent training, seminars, incentives, and support to our distributors.",
    },
    {
        icon: Service4,
        title: "Knowledge of Ayurveda",
        description:
            "We Organize Seminars, Health & Wellness consultations & other awareness programs all over the World.",
    },
];

import AboutBanner from "/image/banner1.avif";
import PageBanner from '../component/PageBanner';
import ExpertSection from '../component/ExpertSection';

const About = () => {
    return (
        <>
            <main className='aboutPage'> 


                <PageBanner
                    title="About Bliss Ayurveda"
                    subtitle="Manufacturing & Export of Herbal Food Supplements & Ayurveda Medicines Since 2006"
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec'>
                    {/* About Section css */}
                    <AboutSection
                        image={AboutPics}
                        subtitle="Manufacturing & Export of Herbal Food Supplements & Ayurveda Medicines Since 2006"
                        title="Bliss Ayurveda Private Limited"
                        description={[
                            "The word “BLISS” means a state of heavenly & spiritual joy or extreme happiness. To bring this joy and happiness all over the world “BLISS AYURVEDA PRIVATE LIMITED” came into existence in 2006 with its main aim to make a difference in individual’s life through the knowledge of Ayurveda, making it Healthy & Blissful, covering all the three aspects of health – Body, Mind & Consciousness.",
                            "Our herbal formulas represent the authentic wisdom from the ancient Ayurvedic texts, complemented by modern scientific research and leading edge technologies in manufacturing and quality control. You can be confident that your getting very best in herbal formulations."
                        ]}
                        reverse={true}
                    />
                </div>

                <div className='services_sec'>
                    <Container>
                        <ServicesSection
                            subtitle="Bliss Ayurveda is a company with a proven track record worldwide."
                            title="Trusted Company All Over the world"
                            highlight="Bliss Ayurveda"
                            services={homeServices}
                        />
                    </Container>
                </div>

                <div className='ourExpertise_sec'>
                    <Container>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={OurVision} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Our Vision </h6>
                                        <h3><strong> Applying the Ancient knowledge of Ayurveda in a modern context </strong></h3>
                                    </section>
                                    <p> Applying the Ancient knowledge of Ayurveda in a modern context & conveying its potent healing potential to improve the quality of health & life of an individual and society in general. Bliss Ayurveda with an international presence demonstrates stability, growth, and ample industry experience. Bliss Ayurveda products are available and sold in India, USA, Russia, Italy, Norway, Germany, San Marino, Vatican City, Denmark, Azerbaijan, Spain, Croatia, Austria, Switzerland, Slovenia, Ukraine, Latvia, Kazakhstan, Canada, Cyprus, Greece and Papua New Guinea. As a good company, we offer excellent training, seminars, incentives, and support to our distributors. Bliss Ayurveda is a company with a proven track record worldwide. While there are other companies that claim to offer similar opportunities. </p> 
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Our Mission </h6>
                                        <h3><strong> To Help healthy people maintain and promote their health </strong></h3>
                                    </section>
                                    <p> To develop a team of dedicated persons including Vaidyas (Ayurveda Doctors), Health professionals, distributors etc. who are willing to fulfil our vision and ready to spread this beautiful knowledge of Ayurveda all over the world. And To Help healthy people maintain and promote their health i.e. “Swasthasya Swasthya Rakshanam” and to manage imbalances and disorders following the principles of Ayurveda i.e. “Aturasya vikar prashamanam cha”. Bliss Ayurveda products are formally registered by Ministry of Health or competent authorities on Herbal Food Supplements in Italy, Norway, Germany, Ukraine and Russia. This proves our expertise in designing product formulations according to the Laws and quality control regulations of respective countries. </p> 
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={OurMission} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={OurGoals} /> 
                                    </div>
                                </div> 
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Our Goals </h6>
                                        <h3><strong> To provide high-quality Herbal Products passed through rigorous standardization </strong></h3>
                                    </section>
                                    <p> To provide high-quality Herbal Products passed through rigorous standardization, research and lab tests for the well-being of our consumers all over the world. To conduct Ayurveda Courses for promoting the knowledge of Ayurveda, to train people in Ayurveda massage, Panchakarma therapy and other advance courses of Ayurveda. To help people by providing personalized Ayurveda Consultation along with pulse reading, herbal supplements, and dietary and lifestyle advice. To open Panchkarma Clinics and Ayurveda Wellness Centers all over the world and thus help people get the benefits of Ayurveda. To become a Central Knowledge Server and Sourcing Station known for standardized cultivation, and harvesting at source for the benefit of manufacturers. We firmly believe that we are well ahead of the Industry Standards in all of these areas and we intend to stay ahead. </p> 
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Quick Acting, Effective Productive </h6>
                                        <h3><strong> Bliss Ayurveda products are quick acting & effective. </strong></h3>
                                    </section>
                                    <p> The Tablet size of 1000 mg is kept to provide an optimum dosage of Herbs according to classical Ayurveda texts instead of inadequate doses of 300 mg to 500mg which many companies are doing to reduce cost. This makes Bliss Ayurveda products quick acting and effective. Our herbal formulas represent the authentic wisdom from the ancient Ayurvedic texts, complemented by modern scientific research and leading-edge technologies in manufacturing and quality control. You can be confident that you are getting the very best in herbal formulations. – A True fusion of the Ancient and Modern. </p> 
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card">
                                        <img src={OurEffective} />
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

export default About

