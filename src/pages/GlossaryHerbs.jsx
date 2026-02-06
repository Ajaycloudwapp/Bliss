import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Col, Container, Row } from 'react-bootstrap';

import Herbs1 from '/image/herbs_1.avif'
import Herbs2 from '/image/herbs_2.jpg'
import Herbs3 from '/image/herbs_3.jpg'
import Herbs4 from '/image/herbs_4.jpg'
import { Link } from 'react-router-dom';

const products = [
    { id: "acacia-catechu", image: Herbs1, title: "Acacia Catechu" },
    { id: "achillea-millefolium", image: Herbs2, title: "Achillea Millefolium" },
    { id: "aegle-marmelos", image: Herbs3, title: "Aegle Marmelos" },
    { id: "allium-sativum", image: Herbs4, title: "Allium Sativum" },
];

const GlossaryHerbs = () => {
    return (
        <>
            <main>
                <PageBanner
                    title="Glossary of Herbs"
                    subtitle="Click on each Image below, to get more Information about the Herbs"
                    bgImage={AboutBanner}
                />

                <div className='blissAyurveda_prod_sec'>
                    <Container>
                        <section className="page_heading leftText">
                            <h6>Click on each Image below, to get more Information about the Herbs</h6>
                            <h3><span><strong>Glossary of Herbs</strong></span></h3>
                        </section>

                        <div className='glossary_inside'>
                            <Row>
                                {products.map((product) => (
                                    <Col md={3} key={product.id}>
                                        <div className="products_card">
                                            <div className="product_header">
                                                <Link to={`/glossary-detail/${product.id}`}>
                                                    <img src={product.image} alt={product.title} />
                                                    <h3 className="product_title">{product.title}</h3>
                                                </Link>
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
    );
};

export default GlossaryHerbs;
