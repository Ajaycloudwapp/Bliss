import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "/image/logo.png";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <div className="header_sec">
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>

                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#">Home</Nav.Link>

                        {/* PROFILE */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("profile")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">Profile</Nav.Link>
                            {activeMenu === "profile" && (
                                <div className="mega-menu">
                                    <div className="mega-column">
                                        <h6> Our Profile <span> About Us </span> </h6>
                                        <section>
                                            <a href="#"> About Us </a>
                                            <a href="#"> Our Team </a>
                                            <a href="#"> Quality Control </a>
                                            <a href="#"> Testimonials </a>
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* PRODUCTS */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("products")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">Products</Nav.Link>
                            {activeMenu === "products" && (
                                <div className="mega-menu">
                                    <div className="mega-column">
                                        <h6> Our Products <span> Bliss Ayurveda's Products </span> </h6>
                                        <section>
                                            <a href="#"> Browse By Gallery </a>
                                            <a href="#"> Order Products </a>
                                            <a href="#"> Online Consultation </a>
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* WELLNESS */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("wellness")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">Wellness Health Village</Nav.Link>
                            {activeMenu === "wellness" && (
                                <div className="mega-menu"> 
                                    <div className="mega-column">
                                        <h6> Wellness Health Village <span> Panchkarma & Naturopathy </span> </h6>
                                        <section className="wrapdata">
                                            <a href="#"> Bliss Ayurveda Health Village </a>
                                            <a href="#"> Our Facilities </a>
                                            <a href="#"> Panchkarma </a>
                                            <a href="#"> Wellness Programs </a>
                                            <a href="#"> Skin SPA Treatments </a>
                                            <a href="#"> Yoga Classes </a>
                                            <a href="#"> Physiotherapy </a>
                                            <a href="#"> In-Residence Tariff </a>
                                            <a href="#"> Ayurveda Wellness Retreat </a>
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* COURSES */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("courses")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">Ayurveda & Yoga Courses</Nav.Link>
                            {activeMenu === "courses" && (
                                <div className="mega-menu">
                                    <div className="mega-column">
                                        <h6> Ayurveda & Yoga Courses <span> Learning Ayurveda & Panchkarma </span> </h6>
                                        <section  className="wrapdata">
                                            <a href="#"> Ayurveda Courses </a>
                                            <a href="#"> Basics of Ayurveda </a>
                                            <a href="#"> Pulse Reading </a>
                                            <a href="#"> Glossary of Herbs </a> 
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* NEWS */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("news")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">News & Updates</Nav.Link>
                            {activeMenu === "news" && (
                                <div className="mega-menu">
                                    <div className="mega-column">
                                        <h6> News & Updates <span> Events & Information </span> </h6>
                                        <section>
                                            <a href="#"> Bliss Ayurveda Video Gallery </a>
                                            <a href="#"> Blog </a> 
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>

                        
                        {/* Contact */}
                        <div
                            className="mega-wrapper"
                            onMouseEnter={() => setActiveMenu("contacts")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Nav.Link className="mega-trigger">Contact Us</Nav.Link>
                            {activeMenu === "contacts" && (
                                <div className="mega-menu">
                                    <div className="mega-column">
                                        <h6> Contact Us <span> Reach Us </span> </h6>
                                        <section>
                                            <a href="#"> Office Location </a>
                                            <a href="#"> Business Enquiry </a> 
                                            <a href="#"> Consultation Via Skype </a> 
                                        </section>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
