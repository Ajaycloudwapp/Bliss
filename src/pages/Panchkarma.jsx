
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Container, Table } from 'react-bootstrap';

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

            </main>

        </>
    )
}

export default Panchkarma

