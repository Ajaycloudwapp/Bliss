import React, { useEffect, useState } from 'react';
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";

import { Col, Container, Row } from 'react-bootstrap';

import Quality1 from '/image/certificate/quality_1.png'
import Quality2 from '/image/certificate/quality_2.png'
import Quality3 from '/image/certificate/quality_3.png'
import Quality4 from '/image/certificate/quality_4.png'

import Certificate1 from "/image/certificate/registration_1.png";
import Certificate2 from "/image/certificate/registration_2.png";
import Certificate3 from "/image/certificate/registration_3.png";
import Certificate4 from "/image/certificate/registration_4.png";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const products = [
    { id: "acacia-catechu", image: Certificate1 },
    { id: "achillea-millefolium", image: Certificate2 },
    { id: "aegle-marmelos", image: Certificate3 }, 
    { id: "allium-sativum", image: Certificate4 },
];

const processProducts = [
    {
        title: "GMP",
        desc: "The Good Manufacturing Practices Certification is awarded for manufacturing and delivering consistently effective, safe and reliable products batch after batch.",
        image: Quality1,
    },
    {
        title: "WHO cGMP Certified",
        desc: "WHO has established detailed guidelines for the Good Manufacturing Practice which ensures that the products are consistently produced & controlled.",
        image: Quality2,
    },
    {
        title: "HACCP",
        desc: "Hazard Analysis Critical Control Points requires a close focus on achieving step-by-step process quality at all stages of production identified as critical points.",
        image: Quality3,
    },
    {
        title: "ISO 9000 Certified",
        desc: "ISO certification is the International standard for assessing management, testing and manufacturing for production companies.",
        image: Quality4, 
    },
];

const QualityControl = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,
            Toolbar: true,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <main className='quality_page'>

                <PageBanner
                    title="Stringent Quality Control "
                    subtitle="Bliss Ayurveda Quality Policy Promises Purity, Quality & Adherence"
                    bgImage={AboutBanner}
                />

                <div className='aboutus_sec whiteBG'>
                    <Container>
                        <div className='mypara'>
                            <h6>
                                Bliss Ayurveda in its quality policy has promised purity, quality and adherence to the traditional texts which means that you can be confident that you are getting the very best in herbal formulations—a True Fusion of the Ancient and Modern. Our statement logo “Silver leaf” surrounded by the text “History for a Better Life” represents our mission to join the precious ancient knowledge of Ayurveda and Vedic Medicine with a history of 5000 years with modern scientific research and parameters to improve the quality of life of a common person.
                            </h6>
                        </div>
                    </Container>
                </div>

                <div className='ourprocess_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6> Manufactured in a facility using prominent & important certificates for quality </h6>
                            <h3><span> <strong> Quality Certification </strong></span></h3>
                        </section>

                        <div className="ourProcess_inside">
                            <Row>
                                {processProducts.map((product, index) => {
                                    const isExpanded = expandedIndex === index;

                                    return (
                                        <Col md={3} sm={6} xs={12} key={index}>
                                            <div className="products_card">
                                                <div className="product_header shine-card">
                                                    <a href={product.image} data-fancybox="team-gallery">
                                                        <img src={product.image} alt="Quality Certificate" />
                                                    </a>
                                                </div>
                                                <div className="product_body">
                                                    <h4>{product.title}</h4>
                                                    <p className={isExpanded ? "desc2 expanded" : "desc2"}>
                                                        {product.desc}
                                                    </p>
                                                    <button
                                                        className="read_more_btn"
                                                        onClick={() => toggleReadMore(index)}
                                                    >
                                                        {isExpanded ? "Show Less" : "Read More"}
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className='blissAyurveda_prod_sec'>
                    <Container>
                        <section className="page_heading centerText">
                            <h6>Registration certificates from the Ministry of Health from different countries</h6>
                            <h3><span><strong>Registration Certificates</strong></span></h3>
                        </section>

                        <div className='glossary_inside'>
                            <Row>
                                {products.map((product) => (
                                    <Col md={3} sm={6} xs={12} key={product.id}>
                                        <div className="products_card">
                                            <div className="product_header">
                                                <a href={product.image} data-fancybox="team-gallery">
                                                    <img src={product.image} alt="Quality Certificate" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Container>
                </div>

            </main>
        </>
    )
}

export default QualityControl;
