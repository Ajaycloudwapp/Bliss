
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Container } from 'react-bootstrap';

const BasicofAyurveda = () => {
    return (
        <>

            <main className='basicAyurveda_page'>

                <PageBanner
                    title="Basics of Ayurveda"
                    subtitle="Ayurveda literally means “science of life and longevity” and is considered to be the traditional system of medicine in India."
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>

                        <section className="page_heading leftText">
                            <h3> <span> What is <strong> Arurveda ?</strong> </span> </h3>
                        </section>

                        <p> Ayurveda literally means “science of life and longevity” and is considered to be the traditional system of medicine in India. Ayurveda is a Sanskrit term, made up of two words “Ayu” and “Veda”. “Ayu” means life and “Veda” means knowledge or science. According to Ayurveda life or “Ayu” is defined as harmonious blending of the body, sense organ, mind and soul and health is defined as state of enjoying uninterrupted physical, mental and spiritual happiness. </p>

                        <div className='mypara'>
                            <h6> Ayurveda is a holistic system of healing which evolved among the sages of ancient India more than 5000 years ago. Ayurveda is a complete medical system which recognizes that ultimately all intelligence and wisdom flows from one Absolute Source (Paramatman). Health manifests by the grace of the Absolute Source acting through the laws of nature (Prakriti). Ayurveda assists Nature by promoting harmony between the individual and Nature by living a life of balance according to her laws. </h6>
                        </div>

                        <div className='aboutus_inside'>
                            <p> Ayurveda describes three fundamental universal energies which regulate all natural processes on both the macrocosmic and microcosmic levels. That is, the same energies which produce effects in the various galaxies and star systems are operating at the level of the human physiology. These three universal energies are known as the Tridosha. Finally, the ancient Ayurvedic physicians realized the need for preserving the alliance of the mind and body and offered mankind tools for remembering and nurturing the subtler aspects of our humanity. Ayurveda seeks to heal the fragmentation and disorder of the mind-body complex and restore wholeness and harmony to all people. Ayurveda is more life and health oriented than disease and treatment oriented. It presents a total life science and visualizes the total health in a holistic way. Ayurveda is one of the most ancient medical sciences of the world. </p>

                            <div className='threebook_sec'>
                                <h2> It is survived through two sets of original authentic texts each consisting of three books: </h2>
                                <section>
                                    <h4> Vrihattrayi (the three big books) </h4>
                                    <ul>
                                        <li> Charaka Samhita (3000 B.C.) </li>
                                        <li> Susruta Samhita (2000 B.C.) </li>
                                        <li> agbhatta </li>
                                    </ul>
                                </section>
                                <section>
                                    <h4> Laghutrayi (the three small books) </h4>
                                    <ul>
                                        <li> Madhav Nidana </li>
                                        <li> Sharangadhara Samhita </li>
                                        <li> Bhava Prakash </li>
                                    </ul>
                                </section>
                                <p className='mt-3'> All these texts are originally written in Sanskrit and are in the form of encyclopedia dealing with all aspects of life, health, disease and treatments. </p>
                            </div>

                            <div className='threebook_sec'>
                                <h2> Ayurveda has eight major clinical specialties since ancient time: </h2>

                                <section>
                                    <ul>
                                        <li> Kayackikitsa (Medicine) </li>
                                        <li> Shalya Tantra (Surgery) </li>
                                        <li> Shalakya Tantra (Branch of Eye, Ear, Nose and Throat.) </li>
                                        <li> Kaumarabhritya (Paediatrics, Obstetrics and Gynaecology.) </li>
                                        <li> Graha chikitsa or Bhoot Vidya (Psychiatry) </li>
                                        <li> Agada Tantra (Toxicology) </li>
                                        <li> Rasayana (Nutrition, Rejuvenation and Geriatrics.) </li>
                                        <li> Vajikarana (Aphrodisiacs) </li>
                                    </ul>
                                </section> 
                                <p className='mt-3'> Now Ayurveda has several other new branches like Dravyaguna (Materia Medica of Ayurveda), Rasa shastra (Science of minerals & Vedic Chemistry) and Panchkarma etc. dealing all the aspects of life from grass level to subtle level. Ayurveda deals with two objects – first, to preserve the health of healthy individual (preventive) and other to alleviate the disorders in diseased individual (curative). Thus preventive measures get first position in Ayurveda which indicates the priority of following proper life style and food habits. </p>
                                <p className='mt-3'> There are several aspects of this oldest system of medicine which distinguish it from other approaches to health care. It focuses on establishing and maintaining balance of the life energies within us, rather than focusing on individual symptoms. </p>

                            </div>

                        </div>
                    </Container>
                </div>

            </main>

        </>
    )
}

export default BasicofAyurveda

