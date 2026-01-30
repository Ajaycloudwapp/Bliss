import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const WhatWeOffer = () => {

    const services = [
        {
            id: 1,
            title: "Panchakarma Detoxification",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
            image:
                "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
            icon: "🛁",
            link: "#",
        },
        {
            id: 2,
            title: "Abhyanga Massage Therapy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
            image:
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
            icon: "🌿",
            link: "#",
        },
        {
            id: 3,
            title: "Shirodhara Therapy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
            image:
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
            icon: "💆",
            link: "#",
        },
        {
            id: 4,
            title: "Yoga & Meditation",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
            image:
                "https://images.unsplash.com/photo-1552058544-f2b08422138a",
            icon: "🧘",
            link: "#",
        },
    ];

    return (
        <div className="offer_inside">
            <Container>
                <section className="page_heading">
                    <h6>What We Offer</h6>
                    <h3>Discover Our Holistic Offerings</h3>
                </section>

                <Row className="g-5 mt-4">
                    {services.map((service) => (
                        <Col md={6} key={service.id}>
                            <div className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>

                                <div className="service-content">
                                    <div className="icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <a href={service.link}>Discover More</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
