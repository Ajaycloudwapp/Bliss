import React from "react";
import { Container } from "react-bootstrap";
import SectionImg from "/image/our_vision.jpg"; // replace with your image

const ExpertSection = () => {
    return (
        <div className="expert_section_wrapper">
            <Container>
                <section>
                    <div className="expert_layout">
                        <div className="expert_img_box">
                            <img src={SectionImg} alt="Construction expert" />
                        </div>

                        <div className="expert_content_box">
                            <h3>Applying the Ancient knowledge of Ayurveda in a modern context</h3>
                            <p>
                                Applying the Ancient knowledge of Ayurveda in a modern context & conveying its potent healing potential to improve the quality of health & life of an individual and society in general. Bliss Ayurveda with an international presence demonstrates stability, growth, and ample industry experience. Bliss Ayurveda products are available and sold in India, USA, Russia, Italy, Norway, Germany, San Marino, Vatican City, Denmark, Azerbaijan, Spain, Croatia, Austria, Switzerland, Slovenia, Ukraine, Latvia, Kazakhstan, Canada, Cyprus, Greece and Papua New Guinea. As a good company, we offer excellent training, seminars, incentives, and support to our distributors.
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ExpertSection;
