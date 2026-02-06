
import React from "react";
import { Container } from "react-bootstrap";

const PageBanner = ({ title, subtitle, bgImage }) => {
    return (
        <div
            className="pageBanner_sec"
            style={{ backgroundImage: `url(${bgImage})` }} 
        >
            <div className="pageBanner_overlay">
                <Container>
                    {subtitle && <p>{subtitle}</p>}
                    <h1>{title}</h1>
                </Container>
            </div>

            

        </div>
    );
};

export default PageBanner;

