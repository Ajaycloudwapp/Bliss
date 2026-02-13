import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

import Client1 from "/image/client_1.jpg"
import Client2 from "/image/client_2.jpg"
import Client3 from "/image/client_3.jpg"

import Team1 from "/image/team/team_1.jpg"
import Team2 from "/image/team/team_2.jpg"
import Team3 from "/image/team/team_3.jpg"
import Team4 from "/image/team/team_4.jpg"
import Team5 from "/image/team/team_5.jpg"
import Team6 from "/image/team/team_6.jpg"


const ClientTestimonial = ({ page }) => {

    const homeTestimonials = [
        {
            id: 1,
            image: Client1,
            text: "As always we were surrounded by love and care both during Panchkarma treatments and delicious Ayurveda food. Thanks cordially Dr. Nitin and Bliss Ayurveda Team.",
            name: "Dr. Issa Salomi",
            designation: "Medical Doctor and Celebrity Speaker, Bagdad, Iraq",
        },
        {
            id: 2,
            image: Client2,
            text: "The Panchkarma treatments were wonderful and Ayurveda herbs are really effective. I have been using them since several years. Thank you for the help and stay here. It was a very nice and impressive time.",
            name: "Dr. Robby Schlund",
            designation: "Medical Doctor & Member of Parliament, Germany, Berlin, Germany",
        },
        {
            id: 3,
            image: Client3,
            text: "I am very grateful to everybody. Thank you all from the deepest heart. The treatments were really great. My special thanks to the technicians who work from heart. I had a very good room and wonderful food.",
            name: "Dr. Martina Hoisl",
            designation: "Medical Doctor and Psychiatrist, Zurich, Switzerland",
        },
    ];

    const teamTestimonials = [
        {
            id: 1,
            image: Team1,
            text: "Vaidya Kshemendra Gupta is an Ayurveda doctor practicing Ayurvedic medicine for more than 50 years. He is the patron Vaidya of Bliss Ayurveda family who nurture and blessed Bliss Ayurveda with his huge experience and in depth knowledge. The 78 Years old member of Bliss Ayurveda India Team, veteran has shared some of his precious and experienced Herbal formulations with us and that has helped us develop and design some of our current range of products. He now Lives in Rishikesh, in the foothills of Himalayas. Mastering the art of selecting most powerful herbs from Himalayas and specialized remedy formulation is his strength.",
            name: "Vaidya Kshemendra Gupta",
            designation: "Consultant Vaidya",
        },
        {
            id: 2,
            image: Team2,
            text: "One of the most experienced and prominently known experts of Ayurveda Herbs in India. He has traveled all over the country for the identification of herbs and has been working with the Government of India and many Ayurveda companies & Institutions to standardize, Identify and cultivate Ayurvedic herbs. As one of Bliss Ayurveda India Team members, he is also working as a Consultant for Bliss Ayurveda and helps us in the physical examination of herbs used in our products. He has also helped us to identify the Natural and Organic sources of herbs for our Products.",
            name: "Dr. Maya Ram Uniyal",
            designation: "Consultant Vaidya",
        },
        {
            id: 3,
            image: Team3,
            text: "A qualified company secretary (Corporate lawyer) by education, she developed a passion for Ayurveda after her marriage to Dr Nitin Agrawal. She is instrumental in writing articles on the holistic approach of Ayurveda towards health, diet routines and Ayurvedic food recipes. She is an expert in Ayurveda cooking and is currently writing a book on Vedic cooking.",
            name: "Mrs. Smita Aggrawal",
            designation: "She is currently the Director (Finance) of the company.",
        },
        {
            id: 4,
            image: Team4,
            text: "He dives to such depth in his speeches that anyone interested in expanding their understanding of Wellness and Health science will easily get motivated. He practices what he preaches. He has six years of degree course in Ayurveda Medicine & Surgery and expertise in Panchkarma therapy. He has worked as a Clinical Lecturer in holistic health management and has experience in research on thousands of patients across the world. He is currently heading Bliss Ayurveda Health Center, a traditional Ayurveda and Panchkarma Center serving people from different countries. He is highly responsible & enthusiastic and always looking for new and innovative ways to accomplish his company’s vision under all challenging conditions.",
            name: "Dr. Ravi Raghuvanshi",
            designation: "Internationally Acclaimed Senior Wellness Consultant and Dean of Alliance Ayurveda Research and Training Institute",
        },
        {
            id: 5,
            image: Team5,
            text: "Mr. Awadhesh Karn joined Bliss Ayurveda as M.I.S. Executive. He was working for a social organization helping the cause of establishing Primary Schools for underprivileged and tribal children all over India. He has been extensively traveling the length and breadth of the country for this purpose. He got inspired by Dr. Nitin Agrawal and became a member of the Bliss Ayurveda team to promote Ayurveda.",
            name: "Mr. Awadhesh Karn",
            designation: "Senior Manager MIS & Operations",
        },
        {
            id: 6,
            image: Team6,
            text: "Mr. Achint Sirohi is the Senior Manager of Finance and HR at Bliss Ayurveda. His 13-year association itself shows his integrity, ability, and commitment towards the organization. He is taking care of administration, recruitment, and hiring and heading the finance department. He is also responsible for export, logistics and operations.",
            name: "Mr. Achint Sirohi",
            designation: "Senior Manager Finance & HR",
        },
    ];

    const testimonials = page === "home" ? homeTestimonials : teamTestimonials;

    return (
        <div className='testimonial_inside'>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Swiper
                        className="mySwiper"
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <section>
                                    <ImQuotesLeft className='leftSVG' />
                                    <p>
                                        {item.text}
                                    </p>
                                    <h5>
                                        <span>
                                            <img className='ClientPic' src={item.image} alt={item.name} />
                                        </span>
                                        <span>
                                            <strong> {item.name} </strong>
                                            <span>{item.designation}</span>
                                        </span>
                                    </h5>
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </div>
    )
}

export default ClientTestimonial;
