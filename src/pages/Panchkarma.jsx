
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Container, Table } from 'react-bootstrap';

import Panchkarma1 from "/image/panchkarma/panchkarma_1.jpg"  
import Panchkarma2 from "/image/panchkarma/panchkarma_2.webp"  
import Panchkarma3 from "/image/panchkarma/panchkarma_3.jpg"  
import Panchkarma4 from "/image/panchkarma/panchkarma_4.jpg"  
import Panchkarma5 from "/image/panchkarma/panchkarma_5.jpg"  
import Panchkarma6 from "/image/panchkarma/panchkarma_6.jpg"  
import Panchkarma7 from "/image/panchkarma/panchkarma_7.png"  
import Panchkarma8 from "/image/panchkarma/panchkarma_8.jpg"  
import Panchkarma9 from "/image/panchkarma/panchkarma_9.jpg"  
import Panchkarma10 from "/image/panchkarma/panchkarma_10.jpg"  

const Panchkarma = () => {
    return (
        <>

            <main className='panchkarma_page'>

                <div className='aboutus_sec whiteBG'>
                    {/* About Section css */}
                    <Container>
                        <div className='aboutus_inside'>
                            <section class="page_heading">
                                <h6>Panchkarma is a Program for the Mind, Body and Consciousness.</h6>
                                <h3><strong>Panchkarma cleansing & rejuvenating program</strong></h3>
                            </section>

                            <p>These practices are extremely helpful in relieving Chronic & deep-seated disorders as well as being beneficial for maintaining and improving physical and mental health. Ancient Ayurvedic sages have mentioned Panchkarma as various Purificatory and Revitalizing measures to cleanse the micro and macro channels of the biological system which is essential to permit free flow of nutrients, energies and medicaments to the body tissues besides permitting the free passage of excreta and toxins out of the system. This unique Ayurvedic therapy is to answer the challenge in negating the detrimental effect of the changed environment and day to day stress and is known for its beneficial effects on overall health, wellness and self-healing. In Long Term It Helps To Achieve Longevity And Brings Life-Enhancing Energy thereby Increasing Vitality, Beauty, Inner Peace, Confidence And Well-Being. We Are Providing 40 Specialized Treatments As Part Of Our Panchkarma Program. Some Of The Procedures Are :</p>

                            <section className='skypeCard'>
                                <section class="page_heading">
                                    <h3><strong>We provide a range of Panchkarma treatments programs which includes main procedures pre and post Panchkarma procedures, specialized therapies and relaxing SPA treatments.</strong></h3>
                                </section>

                                <p> These treatments can be taken by following Daycare program and In Residence packages. In Long Term It Helps To Achieve Longevity And Brings Life-Enhancing Energy thereby Increasing Vitality, Beauty, Inner Peace, Confidence And Well-Being. We Are Providing 40 Specialized Treatments As Part Of Our Panchkarma Program. Some Of The Procedures Are : </p>

                                <div className='course_content'>
                                    <div class="table-responsive">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th colSpan={3}> The main Panchkarma procedures include: </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Vamana</td>
                                                    <td>Therapeutic emesis</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Virechan</td>
                                                    <td>Therapeutic purgation</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Vasti</td>
                                                    <td>Therapeutic enema with herbal decoction and oil</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Nasya</td>
                                                    <td>Therapeutic Nasal cleansing of Herbal oil</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Raktamokshna</td>
                                                    <td>Leech therapy</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                            </section>

                        </div>


                    </Container>
                </div>

                <div className='ourExpertise_sec'>
                    <Container>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Panchkarma1} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Traditional synchronized full body massage </h6>
                                        <h3><strong> Samalay Abhyanga </strong></h3>
                                    </section>
                                    <p> Traditional synchronized full body massage in a rhythmic and harmonic manner with warm medicated herbal oil. </p>
                                    <p> Benefits: Induces deep relaxation, Nourishes and rejuvenates skin, improves physical consistency, liquefies and eliminates toxins. It is helpful in Vata-related disorders, Low Energy, Stress & Muscular pain. </p>
                                    <p> Benefits: Cleanses skin and body, maintains proper flow of energy and enhances the flexibility of joints and muscles. </p>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Whole Body Herbalized Steam Treatment </h6>
                                        <h3><strong> Sarvanga Swesana </strong></h3>
                                    </section>
                                    <p> Herbalized Steam treatment of the whole body with the natural aroma of herbs opens up the clogged channels at all levels and removes mala (toxic materials with sweat) from the body. Sarwang Swedan is a process used to remove the various harmful substances left behind by illness, inadequate nutrition, and natural toxins. The body typically possesses the innate ability to effectively digest and eliminate these waste products, including the vitiated doshas. As per requirement, vaidya decide to suggest Local Swedana (Ekanga Sweda) or Full body Swedana (Sarvanga Sweda). Acharya Sushruta and Acharya Vagbhata have explained 4 types of swedana Tapa Sweda, Upanaha Sweda, Ushma Sweda and Drava Sweda. Valuka Swed, Patra Pottali Swed, Shashtik Shaali Pind Swed and Nadi Swed are a few examples of Swedana. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Panchkarma2} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Panchkarma3} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Traditional deep relaxation technique - Tail Dhara, Takra Dhara and Ksheer Dhara </h6>
                                        <h3><strong> Shirodhara </strong></h3>
                                    </section>
                                    <p> Shirodhara is a traditional deep relaxation technique by pouring 2-3 litres of herbalized oil in the form of a continuous stream, on the forehead in a rhythmic manner which pacifies and revitalizes the Mind and Body. It has an intense rejuvenating and anti-ageing, effect normalizes sleep patterns, improves memory and is so relaxing that you sleep or transcend within 5-10 minutes on the treatment table itself. </p>
                                    <p> Benefits: Enhances memory & concentration, promotes mental clarity, normalizes sleep patterns and rejuvenates the whole body. Also helpful in disorders like Anxiety, Insomnia, Overactive mind, Restlessness, Psychosomatic problems, Neurological disorders, Headaches and Hair problems. </p> 
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Fully automatic soundless machine Pizhichil which is combination of Snehana and Swedhana </h6>
                                        <h3><strong> Pizhichil “SARVANGADHARA” </strong></h3>
                                    </section>
                                    <p> Bliss Ayurveda Health Village is doing Pizhichil by using a fully automatic soundless machine which pours several streams of 10 litres of herbalized oil all over the body in a uniform manner with a simultaneous synchronized massage by two technicians which gives profound relaxing, rejuvenating and deep Vata pacifying effects. This special Pizhichil helps soothe emotions and purifies the mind and body. </p>
                                    <p> Benefits: Nourishes body tissues, Lubricates joints, enhances flexibility in the body, Promotes mental relaxation, all benefits of Abhyanga and Swedana. Helpful in muscular and neural disorders, Arthritis, Degenerative problems, Paralysis and general weakness. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Panchkarma4} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Panchkarma5} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Bliss Spa Skin Therapy (Herbalized Mud & Milk Therapy) </h6>
                                        <h3><strong> SPA Skin Treatment </strong></h3>
                                    </section>
                                    <p> SPA Skin Treatment is done by using herbalized Clay followed by cleansing with herbalized Milk then Rose petal face massage. This unique and specialized treatment of Bliss Ayurveda Health Center hat relaxes and rejuvenates whole body. </p>
                                    <p> Benefits: Nourishes and Rejuvenate skin, Enhances glow, radiance & elasticity of skin Exfoliate skin & Anti-wrinkle effect </p>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Highly Rejuvenating Treatment for Skin & Joints's Health </h6>
                                        <h3><strong> Patra Pottali </strong></h3>
                                    </section>
                                    <p> It is a highly rejuvenating treatment in which fresh herbal leaves are fried with several beneficial herbal ingredients (different herbal powders, herbal oil) and tied into cloth, dipped into warm medicated oil and used for massaging the body. </p>
                                    <p> Benefits: Cleanses up to deepest layers, and normalizes inflammation and swelling. Helpful in Stiffness and pain in muscles & joints, Spondylitis, Slipped disc, Neuritis. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Panchkarma6} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Panchkarma7} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Cleanses Accumulated Toxins from Sinuses </h6>
                                        <h3><strong> Nasya </strong></h3>
                                    </section>
                                    <p> A complete traditional Nasya involves the administration of medicated oil through the nose which is preceded by head and face massage and herbal steam inhalation. </p>
                                    <p> Benefits: It cleanses accumulated toxins from the sinuses, head and neck region. Detoxifies and rejuvenate nasal mucosa giving a glowing & healthy look to the face. Helpful in Nasal Allergies, Rhinitis, Sinusitis, Nasal Polyps, Stiffness of the neck, Neurological dysfunctions, Eye problems and Migraines. </p> 
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Corrects the flow of energy </h6>
                                        <h3><strong> Marma Abhyanga </strong></h3>
                                    </section>
                                    <p> Marmas are vital points mentioned in Ayurveda that represent the centres of Vital Energies and occupy a prominent place from the structural, functional and psychological points of view. Marma massage stimulates these points and corrects the flow of energy through these points. </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Panchkarma8} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-4">
                                    <div class="about_pics shine-card rightSidePic">
                                        <img src={Panchkarma9} />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Anti-Obesity Mmassage with Fat-Burning Herbal Paste & Oil </h6>
                                        <h3><strong> Udvartana </strong></h3>
                                    </section>
                                    <p> Udvartana is a deeply penetrating herbal paste lymphatic massage. This full-body massage uses a paste prepared from ground grains to cleanse the skin, improve circulation, and help weight loss. It is particularly good for skin care as its powerful exfoliating effect magically conditions the skin. It is almost similar to Abhyanga but more invigorating. Also, it uses herbal paste instead of oil. The paste is made with various organic grains, flours, herbs and oils and applied with upward strokes during the massage. Udvartana massage is particularly used for people having Kapha dosha. </p>
                                    <p> Udvartana helps to eliminate lymphatic toxins from the body and also improves sluggish circulation and digestion. It balances Kapha dosha and cleans the skin. It increases the metabolic rate of the body and activates the rasa Dhatu (Lymph), which in turn enables the Vayus (Gases) to flow and make the nadi system more efficient. </p> 
                                </div>
                            </div>
                        </section>
                        <section class="skypeCard">
                            <div class="align-items-center row">
                                <div class="col-md-8">
                                    <section class="page_heading">
                                        <h6> Eye cleansing and nourishing treatment </h6>
                                        <h3><strong> Netra Tarpan </strong></h3>
                                    </section>
                                    <p> Netra Tarpan is a cleansing and rejuvenating treatment for the eyes. Netra is a Sanskrit word for Eye and Tarpan or Poring of Oil means bathing or pooling eyes with medicated Oil or ghreet. A reservoir is built around the eyes with a kneaded Black gram split flour to retain the medicated Oil/Ghee. It relieves tired, achy and sore eyes and improves vision. It is an ideal treatment for people who use computers, drive long distances, operate machines and who keep long hours. </p>
                                    <p>First, a Marma (vital) point face massage is provided. Next, sterilized, warmed ghee is gently poured on the eyes while the client is led through relaxing, simple eye exercises. In addition to aiding the conditions above, this treatment aids in the gradual improvement of eye conditions and has the added benefit of improving mental clarity. </p> 
                                </div>
                                <div class="col-md-4"> 
                                    <div class="about_pics shine-card leftSidePic">
                                        <img src={Panchkarma10} />
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

export default Panchkarma

