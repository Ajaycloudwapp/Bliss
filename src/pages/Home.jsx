
import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import BannerSlider from '../component/BannerSlider'
import CategoriesSlider from '../component/CategoriesSlider'
import AboutUSCard from '../component/AboutUSCard'
import FeaturedProduct from '../component/FeaturedProduct'
import ProductByCountry from '../component/ProductByCountry'
import ServicesCard from '../component/ServicesCard'
import ClientTestimonial from '../component/ClientTestimonial'
import ProcessContent from '../component/ProcessContent'
import CountryAbout from '../component/CountryAbout'
import Newsletter from '../component/Newsletter'

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
        title: "High-Quality Herbs",
        description:
            "To provide high-quality Herbal Products passed through rigorous standardization, research and lab tests for the well-being of our consumers all over the world.",
    },
    {
        icon: Service2,
        title: "Conduct Ayurveda Courses",
        description:
            "To conduct Ayurveda Courses for promoting the knowledge of Ayurveda, to train people in Ayurveda massage, Panchakarma therapy and other advance courses of Ayurveda.",
    },
    {
        icon: Service3,
        title: "Ayurveda Consultation",
        description:
            "To help people by providing personalized Ayurveda Consultation along with pulse reading, herbal supplements, dietary and lifestyle advice.",
    },
    {
        icon: Service4,
        title: "Ayurveda Wellness Centers",
        description:
            "To open Panchkarma Clinics and Ayurveda Wellness Centers all over the world and thus help people get the benefits of Ayurveda.",
    },
];

const Home = () => {
    return (
        <>
            <div className='banner_sec'>
                {/* Banner Section */}
                <BannerSlider />
            </div>

            <div className='services_sec'>
                <Container>
                    <ServicesSection
                        subtitle="A True fusion of the Ancient and Modern"
                        title="Goals of"
                        highlight="Bliss Ayurveda"
                        services={homeServices}
                    />

                </Container>
            </div>

            <div className='aboutus_sec'>
                {/* About Section css */}
                <AboutSection
                    image={AboutPics}
                    subtitle="About Bliss Ayurveda"
                    title="3 Aspect of Health - Mind, Body and Consciousness"
                    description={[
                        "Bliss Ayurveda is an ISO and w-GMP-certified international organization based in New Delhi, India, involved in the manufacturing and export of herbal food supplements and Ayurvedic medicines. Bliss Ayurveda is also extensively involved in promoting the knowledge of Ayurveda by organizing seminars, health and wellness consultations, and other health awareness programs all over the world. Bliss Ayurveda has also opened a new in-residence Panchkarma Clinic with an Ayurveda Research & Training Institute, Fitness Center, Yoga & Meditation Hall, Swimming Pool, and Ayurveda Cafe, all in one building nick-named",
                        <strong key="village">BLISS AYURVEDA HEALTH VILLAGE</strong>
                    ]}
                    reverse={true}
                />
            </div>

            <div className='featured_prod_sec'>
                <Container>
                    <section className="page_heading leftText">
                        <h3> <span> <strong> Featured </strong> Products </span> <Link> View All </Link> </h3>
                    </section>

                    {/* Featured Products Section css */}
                    <FeaturedProduct />

                </Container>
            </div>

            <div className='blissAyurveda_prod_sec'>
                <Container>
                    <section className="page_heading leftText">
                        <h6> Bliss Ayurveda Products Gallery </h6>
                        <h3> <span> <strong> Bliss Ayurveda </strong> Products </span> </h3>
                        <p> Bliss Ayurveda Heigh Quality and Quick Acting Ayurveda Products range includes a whole aspect of Health and a complete therapeutic range. We have Herbal Tablets, Herbal Oil, Herbal Syrup, Herbal Paste, Herbal Candy, Softgel, Herbal Face Pack etc. </p>
                    </section>

                    {/* Product All Country */}
                    <ProductByCountry />

                    <div className='countryAboutContent'>
                        <CountryAbout />
                    </div>

                </Container>
            </div>

            {/* <div className='categories_sec'> */}
            {/* Categories Section */}
            {/* <CategoriesSlider /> */}
            {/* </div> */}

            <div className='ourprocess_sec'>
                <Container>
                    <section className="page_heading leftText">
                        <h6> Ayurveda principles of diet, herbs and lifestyle. </h6>
                        <h3> <span> Our <strong> Process </strong> </span> </h3>
                    </section>

                    {/* Our Process Section */}
                    <ProcessContent />

                </Container>
            </div>

            <div className='testimonials_sec'>
                <Container>
                    <section className="page_heading centerText">
                        <h6>  What our customers are saying about our product's  </h6>
                        <h3> <span>  Client’s  <strong>  Testimonials  </strong> </span> </h3>
                    </section>

                    {/* Services Section */}
                    <ClientTestimonial page="home" />

                </Container>
            </div>

            {/* Newsletter Section */}
            <div className='newsletter_sec'>
                <Container>

                    {/* Newsletter Component */}
                    <Newsletter />

                </Container>
            </div>

        </>
    )
}

export default Home

