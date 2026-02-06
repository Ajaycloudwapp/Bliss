import React, { useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Logo from "/image/logo.png";
import { RiSearchLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";

const MenusList = () => {

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleMouseEnter = (menu) => {
        if (window.innerWidth >= 992) setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 992) setActiveMenu(null);
    };

    return (
        <>
            <Navbar expand="lg" expanded={expanded} className="custom-navbar">
                <Container>
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto align-items-lg-center">
                            <Nav.Link href="#">Home</Nav.Link>

                            {/* PROFILE */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("profile")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("profile")}
                                >
                                    Profile
                                </Nav.Link>
                                {activeMenu === "profile" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                Our Profile <span> About Us </span>
                                            </h6>
                                            <section>
                                                <a href="#">About Us</a>
                                                <a href="#">Our Team</a>
                                                <a href="#">Quality Control</a>
                                                <a href="#">Testimonials</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* PRODUCTS */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("products")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("products")}
                                >
                                    Products
                                </Nav.Link>
                                {activeMenu === "products" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                Our Products <span> Bliss Ayurveda's Products </span>
                                            </h6>
                                            <section>
                                                <a href="#">Browse By Gallery</a>
                                                <a href="#">Order Products</a>
                                                <a href="#">Online Consultation</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* WELLNESS */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("wellness")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("wellness")}
                                >
                                    Wellness Health Village
                                </Nav.Link>
                                {activeMenu === "wellness" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                Wellness Health Village{" "}
                                                <span> Panchkarma & Naturopathy </span>
                                            </h6>
                                            <section className="wrapdata">
                                                <a href="#">Bliss Ayurveda Health Village</a>
                                                <a href="#">Our Facilities</a>
                                                <a href="#">Panchkarma</a>
                                                <a href="#">Wellness Programs</a>
                                                <a href="#">Skin SPA Treatments</a>
                                                <a href="#">Yoga Classes</a>
                                                <a href="#">Physiotherapy</a>
                                                <a href="#">In-Residence Tariff</a>
                                                <a href="#">Ayurveda Wellness Retreat</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* COURSES */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("courses")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("courses")}
                                >
                                    Ayurveda & Yoga Courses
                                </Nav.Link>
                                {activeMenu === "courses" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                Ayurveda & Yoga Courses{" "}
                                                <span> Learning Ayurveda & Panchkarma </span>
                                            </h6>
                                            <section className="wrapdata">
                                                <a href="#">Ayurveda Courses</a>
                                                <a href="#">Basics of Ayurveda</a>
                                                <a href="#">Pulse Reading</a>
                                                <a href="#">Glossary of Herbs</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* NEWS */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("news")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("news")}
                                >
                                    News & Updates
                                </Nav.Link>
                                {activeMenu === "news" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                News & Updates <span> Events & Information </span>
                                            </h6>
                                            <section>
                                                <a href="#">Bliss Ayurveda Video Gallery</a>
                                                <a href="#">Blog</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CONTACT */}
                            <div
                                className="mega-wrapper"
                                onMouseEnter={() => handleMouseEnter("contacts")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Nav.Link
                                    className="mega-trigger"
                                    onClick={() => handleMenuClick("contacts")}
                                >
                                    Contact Us
                                </Nav.Link>
                                {activeMenu === "contacts" && (
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h6>
                                                Contact Us <span> Reach Us </span>
                                            </h6>
                                            <section>
                                                <a href="#">Office Location</a>
                                                <a href="#">Business Enquiry</a>
                                                <a href="#">Consultation Via Skype</a>
                                            </section>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenusList

