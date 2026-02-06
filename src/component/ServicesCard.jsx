import React from "react";
import { Col, Row } from "react-bootstrap";

const ServicesCard = ({ services }) => {
    return (
        <div className="services_inside">
            <Row>
                {services.map((item, index) => (
                    <Col md={3} key={index}>
                        <div className="services_card">
                            <div className="circle_img">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ServicesCard;
