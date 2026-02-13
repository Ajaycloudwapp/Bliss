import React from 'react';
import PageBanner from '../component/PageBanner';
import AboutBanner from "/image/banner1.avif";
import { Container } from 'react-bootstrap';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import Testimonial1 from "/image/testimonials/testimonial_1.jpg";
import Testimonial2 from "/image/testimonials/testimonial_2.jpg";
import Testimonial3 from "/image/testimonials/testimonial_3.jpg";
import Testimonial4 from "/image/testimonials/testimonial_4.jpg";
import Testimonial5 from "/image/testimonials/testimonial_5.jpg";
import Testimonial6 from "/image/testimonials/testimonial_6.jpg";
import Testimonial7 from "/image/testimonials/testimonial_7.jpg";
import Testimonial8 from "/image/testimonials/testimonial_8.jpg";
import Testimonial9 from "/image/testimonials/testimonial_9.jpg";
import Testimonial10 from "/image/testimonials/testimonial_10.jpg";
import Testimonial11 from "/image/testimonials/testimonial_11.jpg";
import Testimonial12 from "/image/testimonials/testimonial_12.jpg";
import Testimonial13 from "/image/testimonials/testimonial_13.jpg";
import Testimonial14 from "/image/testimonials/testimonial_14.jpg";
import Testimonial15 from "/image/testimonials/testimonial_15.jpg";


import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        image: Testimonial1,
        text: `Eine erstaunliche klinik und hervorragende Einrichtungen. Deshalb besuche ich die Bliss Ayurveda Health Village jedes Jahr für mindestens 2 Wochen. Danke fur alles. (An amazing clinic and outstanding facilities. Therefore, I visit Bliss Ayurveda Health Village every year for minimum 2 weeks. Thank you for everything)`,
        name: "Dr. Stephania Lorenz",
        designation: "Ophthalmologist and Ayurveda Practitioner, Ingolstadt, Germany",
    },
    {
        image: Testimonial2,
        text: `I am very grateful to everybody. Thank you all from the deepest heart. The treatments were really great. My special thanks to the technicians who work from heart. I had a very good room and wonderful food.`,
        name: "Dr. Martina Hoisl",
        designation: "Medical Doctor and Psychiatrist, Zurich, Switzerland",
    },
    {
        image: Testimonial3,
        text: `As always we were surrounded by love and care both during Panchkarma treatments and delicious Ayurveda food. Thanks cordially Dr. Nitin and Bliss Ayurveda Team.`,
        name: "Dr. Issa Salomi",
        designation: "Medical Doctor and Celebrity Speaker, Bagdad, Iraq",
    },
    {
        image: Testimonial4,
        text: `ब्लिस आयुर्वेदा हेल्थ विलेज में पुरे एक सप्ताह का स्वस्थ्य लाभ का अवसर सुखद एवं प्रशंसनीय रहा | स्वयं डॉ . नितिन अग्गरवाल का पूरा परिवार परिसर में कौटुम्बिक अनुश्रुति देता है डॉ . रवि का परामर्श सभी टेक्निशंस एवं कर्मचारी दक्ष होने के साथ साथ सहृदय हैं | बेहतरीन अनुभव | बारम्बार यात्रा की कामना | धन्यवाद् |
        (In Bliss Ayurveda Health Village, the opportunity for health benefits of one week was pleasant and appreciable. Dr.Nitin Aggarwal’s entire family offers family like warmth and make you feel at home. Dr. Ravi’s consultancy along with all the technicians and staff being proficient in their work and very polite. Great experience. Wish to visit again and again. Thank you.)`,
        name: "Prem Shukla",
        designation: "Rashtriya Pravakta BJP, Mumbai, India",
    },
    {
        image: Testimonial5,
        text: `Chtěl bych poděkovat za příležitost navštívit Bliss Ayurveda Health Village. Příjemná atmosféra převládající na klinice je umocněna profesionálními dovednostmi a laskavou péčí o personál. Klinika je oáza v krásné lokalitě New Delhi, kterou byste zde nečekali. Relaxace a léčba je darem pro všechny, kteří pečují o své zdraví a osobní rozvoj. (I would like to thank for the opportunity to visit Bliss Ayurveda Health Village. The pleasant atmosphere prevailing in the clinic is enhanced by professional skill and kind care of the staff. The clinic is an oasis in a beautiful New Delhi location you would not expect here. Relaxation and Treatment is a gift for all who care for their health and personal development.)`,
        name: "Dr. Lenka Cadova",
        designation: "Psychologist and Ayurveda Health Care Practitioner, Prague, Czech Republic",
    },
    {
        image: Testimonial6,
        text: `Дорогие друзья, скажу честно и от всей души – мне очень нравится Клиника Панчакармы, созданная Доктором Нитином Агравалом. Я была в клинике с небольшой группой клуба любителей Аюрведы, и мы все оценили высокий профессиональный уровень – новое, современное оборудование для панчакармы и занятий фитнесом, высококлассные специалисты у которых золотые руки. Доктор Нитин говорит: «Вы приезжаете к нам и отдаёте нам своё тело, как в автосервис и затем получаете в чистом, «отремонтированном» виде. А ещё отдыхает душа, в окружении этой любви к гостям клиники, например, наша группа приехала в клинику в 2 часа ночи, и доктор Нитин лично вышел нас встречать – это так трогательно и незабываемо, так же, как и праздник, организованный в честь нашего приезда. Еще очень вкусное аюрведическое питание, немного непривычное, зато от него спокойно в животе и сытно. Красивые, удобные, функциональные гостиничные номера, кровати с ортопедическим матрасом, очень уютно. А после всех процедур великолепное состояние, которое сохраняется длительный период времени и уже дома подтверждается функциональными методами исследования, в том числе на Веда-пульсе. Большое спасибо Доктору Нитину и Доктору Рави за пульсовую диагностику и грамотные врачебные рекомендации. Спасибо всему коллективу клиники за профессионализм, гостеприимство, за верность традициям Аюрведы, за помощь всем, кто эту помощь готов принять. (Dear friends, to be honest and with all my heart, I really like the Panchakarma Clinic created by Dr. Nitin Agrawal. I was in the clinic with a small group of the club of Ayurveda fans, and we all appreciated the high professional level – new, modern equipment for panchakarma and fitness classes, highly qualified specialists with golden hands. Dr. Nitin says: “You come to us and give us your body, as in a car service and then get it in a clean,“ repaired ” form. We are surrounded by so much love for the guests of the clinic, for example, our group arrived at the clinic at 2 a.m., and Dr. Nitin personally went out to meet us – it is so moving and unforgettable, as well as a holiday organized in honor of our Arrival. Ayurvedic food is very tasty and is calm in the stomach and satisfying. Beautiful, comfortable, functional hotel rooms, beds with orthopedic mattress are very comfortable. And after all the procedures, an excellent condition that persists for a long period of time and is already at home is confirmed by functional research methods, including the Veda pulse. Many thanks to Dr. Nitin and Dr. Ravi for pulse diagnostics and competent medical advice. Thanks to the entire staff of the clinic for their professionalism, hospitality, loyalty to the traditions of Ayurveda, for helping everyone who is ready to accept this help.)`,
        name: "Dr. Galina Kostina",
        designation: "Moscow, Russia",
    },
    {
        image: Testimonial7,
        text: `The Panchkarma treatments were wonderful and Ayurveda herbs are really effective. I have been using them since several years. Thank you for the help and stay here. It was a very nice and impressive time.`,
        name: "Dr. Robby Schlund",
        designation: "Medical Doctor & Member of Parliament, Germany, Berlin, Germany",
    },
    {
        image: Testimonial8,
        text: `Man kan oppleve ordet lykke i alle tjenester, mat og anledninger. Hver ansatt er høflig, lydig og alltid klar til å gjøre mer enn sitt beste. Nitinji takker dette fantastiske konseptet og bringer menneskeheten nærmere naturen. (One can experience the word happiness in all services, food and occasions. Every employee is polite, obedient and always ready to do more than their best. Nitinji thanks this wonderful concept and brings humanity closer to nature.)`,
        name: "Anshu Jain",
        designation: "IT Entrepreneur, Oslo, Norway",
    },
    {
        image: Testimonial9,
        text: `Hay muchos lugares para hacer Panchkarma y muchos tipos de Panchkarma, pero el que yo he experimentado en “Bliss Ayurveda Health Village” con el Dr. Nitin Agrawal, el Dr. Ravi Raghuvanshi y su equipo, lo hace mas que especial, lo hace unico. En un ambiente tan calido como profesional, uno se siente al mismo tiempo tanto en un medio medico como en familia. Con los mejores cuidados y atenciones, la delicadeza se sus terapeutas, la atension de los doctores, las clases diarias de Yoga y Meditacion, las areas de esparcimiento, la piscina, las salidas, todo dentro de un ambiente tranquilo y de introspeccion, lo hace perfecto. Lo recomiendo al 100%. (There are many places to do Panchkarma and many types of Panchkarma, but the one that I have experienced in “Bliss Ayurveda Health Village” with Dr. Nitin Agrawal, Dr. Ravi Raghuvanshi and his team, makes it more than special, it makes it unique . In an environment as warm as professional, one feels at the same time both in a medical environment and in family. With the best care and attention, the delicacy of its therapists, the attention of the doctors, the daily Yoga and Meditation classes, the recreation areas, the pool, the outings, all within a calm and introspection environment, makes it perfect. I recommend it 100%.)`,
        name: "Adriana Ogliastri",
        designation: "Madrid, Spain",
    },
    {
        image: Testimonial10,
        text: `Thank you. The staff are very kind. They make you feel at ease and always smilling and ready to help. Everyone who was involved in my care the doctor, technicians, food service, housekeeping made my stay as comfortable. The therapies are amazing. A special thanks to Dr. Nitin and Smita.`,
        name: "Sunil Dobbal",
        designation: "Fashion and Interior Designer, Jodhpur, India",
    },
    {
        image: Testimonial11,
        text: `Excellent experience. In every place I felt good energy.`,
        name: "Nadia Bonetti",
        designation: "Italy",
    },
    {
        image: Testimonial12,
        text: `Thank you for opening your home, institute and spirits to us for such a wonderful experience! Incredible people, delicious Ayurveda food and amazing Panchkarma treatments!`,
        name: "Michelle Dorrance",
        designation: "Classical Dance Performer, USA",
    },
    {
        image: Testimonial13,
        text: `Most wonderful Panchkarma treatments, delicious food, very pure and effective products. Best staff team.`,
        name: "Schwarzlmuller",
        designation: "TM Teacher and Yoga Instructor, Austria",
    },
    {
        image: Testimonial14,
        text: `Thank you for your hospitality, treatment and everything. I would definitely come next year.`,
        name: "Neveser Mehmeteik",
        designation: "Business Women, Cyprus",
    },
    {
        image: Testimonial15, 
        text: `So nice of you to share your home, food and family with us all. We hope to visit again.`,
        name: "Austin McMahon",
        designation: "Classical Musician, USA",
    },
    // 👉 Add more testimonials here if needed
];

const Testimonials = () => {
    return (
        <>
            <main className="testimonial_page">

                <PageBanner
                    title="Testimonials"
                    subtitle="What our clients are saying"
                    bgImage={AboutBanner}
                />

                <div className="weOffers_sec">
                    <Container>
                        <section className="page_heading centerText">
                            <h6>Our Clients</h6>
                            <h3><span><strong>Testimonials</strong></span></h3>
                        </section>

                        {/* 🔥 Swiper Slider Starts */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={false}
                            autoplay={{ delay: 4000 }}
                            modules={[ Autoplay]}
                            className="testimonialSwiper"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <section className="skypeCard">
                                        <div className="align-items-start row">
                                            <div className="col-md-3">
                                                <div className="about_pics shine-card">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>

                                            <div className="col-md-9">
                                                <div className="testimo_para">
                                                    <RiDoubleQuotesL className="firstSVG" />
                                                    <p>
                                                        {item.text}
                                                        <RiDoubleQuotesR className="secondSVG" />
                                                    </p>

                                                    <section className="page_heading">
                                                        <h3>
                                                            <strong>{item.name}</strong> {item.designation}
                                                        </h3>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* 🔥 Swiper Slider Ends */}

                    </Container>
                </div>

            </main>
        </>
    );
};

export default Testimonials;
