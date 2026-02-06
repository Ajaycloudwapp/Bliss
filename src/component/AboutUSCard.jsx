import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const AboutSection = ({
    image,
    subtitle,
    title,
    description,
    buttonText,
    reverse = false,
}) => {
    return (
        <div className="aboutus_inside">
            <Container>
                <Row className={`align-items-center`}>
                    <Col md={6}>
                        <div className="about_pics shine-card">
                            <img src={image} alt={title} />
                        </div>
                    </Col>

                    <Col md={6}>
                        <section className="page_heading">
                            <h6>{subtitle}</h6> 
                            <h3>
                                <strong>{title}</strong>
                            </h3>
                        </section>

                        {Array.isArray(description)
                            ? description.map((para, index) => <p key={index}>{para}</p>)
                            : <p>{description}</p>}

                        {buttonText && <Button>{buttonText}</Button>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutSection;
