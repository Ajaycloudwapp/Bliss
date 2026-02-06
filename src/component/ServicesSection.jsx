
import React from "react";
import { Container } from "react-bootstrap";
import ServicesCard from "./ServicesCard";


const ServicesSection = ({ subtitle, title, highlight, services }) => {
    return (
        <Container>
            <section className="page_heading centerText">
                <h6>{subtitle}</h6>
                <h3>
                    <span>
                        {title} <strong>{highlight}</strong>
                    </span>
                </h3>
            </section>

            <ServicesCard services={services} />
        </Container>
    );
};

export default ServicesSection;
