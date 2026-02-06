
import React from 'react'

import { Container } from 'react-bootstrap'

import Service1 from "/image/service/icon_1.avif";
import Service2 from "/image/service/icon_2.jpg";
import Service3 from "/image/service/icon_3.avif";
import Service4 from "/image/service/icon_4.jpg";

import ServicesSection from '../component/ServicesSection'
import AboutSection from '../component/AboutUSCard'

import AboutPics from "/image/aboutPic.png";

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
            <main>


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
                        
                        <ExpertSection />
                        
                    </Container>
                </div>

            </main>
        </>
    )
}

export default About

