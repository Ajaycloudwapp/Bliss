import React from 'react'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/banner1.avif";
import { Col, Container, Row } from 'react-bootstrap';

import Flag1 from "/image/flag/flag_1.png";
import Flag2 from "/image/flag/flag_2.png";
import Flag3 from "/image/flag/flag_3.png";
import Flag4 from "/image/flag/flag_4.png";
import Flag5 from "/image/flag/flag_5.png";
import Flag6 from "/image/flag/flag_6.png";
import Flag7 from "/image/flag/flag_7.png";
import Flag8 from "/image/flag/flag_8.png";
import Flag9 from "/image/flag/flag_9.png";
import Flag10 from "/image/flag/flag_10.png";
import Flag11 from "/image/flag/flag_11.png";
import Flag12 from "/image/flag/flag_12.png";

const products = [
    { title: "India", image: Flag1 },
    { title: "Italy", image: Flag2 },
    { title: "Russia", image: Flag3 },
    { title: "Germany", image: Flag4 },

    { title: "France", image: Flag5 },
    { title: "UAE", image: Flag6 },
    { title: "Norway", image: Flag7 },
    { title: "Azerbaijan", image: Flag8 },

    { title: "Czech Republic", image: Flag9 },
    { title: "Cyprus", image: Flag10 },
    { title: "Iraq", image: Flag11 },
    { title: "Latvia", image: Flag12 },
];

const BrowseByGallery = () => {
    return (
        <>
            <main className='gallery_page'>

                <PageBanner
                    title="Bliss Ayurveda Gallery"
                    subtitle="India's Leading Manufacturing and Export of Ayurveda Products, Herbal Food Supplements & Ayurveda medicines."
                    bgImage={AboutBanner}
                />

                <div className='blissAyurveda_prod_sec'>
                    <Container>
                        <section className="page_heading leftText">
                            <h6> Bliss Ayurveda Products Gallery </h6>
                            <h3><span><strong> Bliss Ayurveda </strong> Products</span></h3>
                            <p>
                                Bliss Ayurveda’s Products range includes a whole aspect of the Health and Therapeutic range. We have Herbal Tablets, Herbal Oil, Herbal Syrup, Herbal Paste, Herbal Candy, Softgel, Herbal Face Pack etc.
                            </p>
                        </section>

                        {/* Product All Country */}
                        <div className='gallery_inside'>
                            <Row>
                                {products.map((product, index) => (
                                    <Col md={3} key={index}>
                                        <div className="products_card">
                                            <div className="product_header">
                                                <img src={product.image} alt={product.title} />
                                                <h3 className="product_title">{product.title}</h3>
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

export default BrowseByGallery;
