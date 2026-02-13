
import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/yogaBG.jpg";
import { Container, Table } from 'react-bootstrap';

import OurVision from "/image/our_vision.avif"
import OurMission from "/image/our_mission.avif"

import { Tabs, Tab } from "react-bootstrap";

const Physiotherapy = () => {
    return (
        <>

            <main className='physiotherapy_page'>

                <PageBanner
                    title="Bliss Physiotherapy Unit "
                    subtitle="Equipped With Latest Machines & Team Of Qualified Physiotherapist"
                    bgImage={AboutBanner}
                />

                <div className='consultationSkype_sec'>
                    <Container>
                        <div className='aboutus_inside'>

                            <section class="page_heading">
                                <h6>Manual Therapy Skills And Team Of Qualified Physiotherapist</h6>
                                <h3><strong>Bliss Physiotherapy Unit</strong></h3>
                            </section>

                            <p>Bliss Physiotherapy Unit is equipped with latest machines, manual therapy skills and team of qualified Physiotherapist that deliver the highest quality care & rehabilitation to those suffering from pain & injury. It provides services to individuals in order to develop maintain and restore maximum movement and functional ability throughout life.</p>

                            <div className='physiotherapy_inside'>
                                <section class="skypeCard">
                                    <div class="align-items-center row">
                                        <div class="col-md-4">
                                            <div class="about_pics shine-card">
                                                <img src={OurVision} />
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <section class="page_heading">
                                                <h3><strong> Main Problems That We Cure </strong></h3>
                                            </section>
                                            <p> Our Physiotherapy unit provides a wide range of treatments for physical issues: </p>
                                            <ul>
                                                <li> Back Pain, Neck Pain & Joint Pain </li>
                                                <li> Musculoskeletal problems </li>
                                                <li> Muscle Tears & Soft Tissue Injuries </li>
                                                <li> Sports injuries </li>
                                                <li> Post-Surgical Rehabilitation </li>
                                                <li> Spinal Assessment & Stabilization </li>
                                                <li> Repetitive Strain Injuries </li>
                                                <li> Long-term disabilities </li>
                                                <li> Neurological disorders </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section class="skypeCard">
                                    <div class="align-items-center row">
                                        <div class="col-md-8">
                                            <section class="page_heading">
                                                <h3><strong> Bliss Physiotherapy Techniques </strong></h3>
                                            </section>
                                            <p> We apply different types of physiotherapy treatment techniques in our Health Center that helps provide maximum benefits to you. </p>
                                            <p>
                                                <b>Hands-on Physiotherapy Techniques</b> <br />
                                                Our team of physiotherapists is trained in hands-on physiotherapy techniques such as:
                                            </p>
                                            <ul>
                                                <li> Joint mobilization techniques </li>
                                                <li> Physiotherapy Instrument Mobilization (PIM) </li>
                                                <li> Minimal Energy Techniques (METs) </li>
                                                <li> Muscle stretching </li>
                                                <li> Neurodynamics </li>
                                                <li> Massage and soft tissue techniques </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="about_pics shine-card">
                                                <img src={OurMission} />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </Container>
                </div>

                <div className='practiceSession_sec'>
                    <Container>

                        <div className='practiceTabs'>
                            <Tabs defaultActiveKey="0">
                                <Tab
                                    eventKey="0"
                                    title={<> Physiotherapy Taping </>}
                                >
                                    <div className='course_content'>
                                        <div className='physiotherapy_card'>
                                            <h3> Strapping and taping techniques </h3>
                                            <p> We utilize strapping and taping techniques to prevent injuries. Commonly two types of taping or strapping are in practice – Rigid Strapping Tape and Elastic Strapping Tape. Rigid strapping tape is often referred to as “Sports Tape” or “Athletic Tape” and it is used when more support is required. Elastic strapping tape is used when less rigidity or support is required. We also use Kinesiology Taping which is an application of a thin, stretchy, cotton-based therapeutic tape that can benefit a wide variety of injuries and inflammatory conditions. It is almost identical to human skin in both thickness and elasticity, which allows it to be worn without binding, constricting or restriction of movement. </p>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="1"
                                    title={<> Physiotherapy Exercises </>}
                                >
                                    <div className='course_content'>
                                        <div className='physiotherapy_card'>
                                            <h3> Exercise therapy to strengthen your muscles </h3>
                                            <p> We use exercise therapy to strengthen your muscles and improve your function. Physiotherapy exercises have been scientifically proven to be one of the most effective ways that you can solve or prevent pain and injury. We are experts in the prescription of the “best exercises” for you and the most appropriate “exercise dose” for you depending on your rehabilitation status. We also incorporate essential components of Yoga and Ayurveda Massage to provide you with the best result. </p>
                                        </div>
                                    </div>
                                </Tab>

                                <Tab
                                    eventKey="2"
                                    title={<>Basic Panchkarma <span>Therapy Course</span></>}
                                >
                                    <div className='course_content'>
                                        <div className='physiotherapy_card'>
                                            <h3> Study of human motion </h3>
                                            <p> Biomechanics is the study of human motion. The study of biomechanics is important when determining what causes injuries and therefore how we can prevent them from re-occurring. Biomechanical assessment, observation and diagnostic skills are paramount to the best treatment. We have highly skilled health professionals with superb diagnostic skills to detect and ultimately avoid musculoskeletal and sports injuries. </p> 
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>

                    </Container>
                </div>

            </main>

        </>
    )
}

export default Physiotherapy

