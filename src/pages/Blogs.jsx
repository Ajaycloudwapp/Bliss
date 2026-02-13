import React, { useState } from 'react';
import PageBanner from '../component/PageBanner';
import AboutBanner from "/image/banner1.avif";
import { Col, Container, Row } from 'react-bootstrap';

import LazyImage from '../component/LazyImage'

import BlogImg1 from "/image/blog/blog_1.jpg";
import BlogImg2 from "/image/blog/blog_2.jpg";
import BlogImg3 from "/image/blog/blog_3.jpg";
import BlogImg4 from "/image/blog/blog_4.jpg";
import BlogImg5 from "/image/blog/blog_5.jpg";
import BlogImg6 from "/image/blog/blog_6.jpg";
import BlogImg7 from "/image/blog/blog_7.jpg";
import BlogImg8 from "/image/blog/blog_8.jpg";
import BlogImg9 from "/image/blog/blog_9.jpg";
import BlogImg10 from "/image/blog/blog_10.jpg";

const products = [
    {
        title: "Vaidya Kshemendra Gupta",
        desc: "Vaidya Kshemendra Gupta Consultant Vaidya Vaidya Kshemendra Gupta is an Ayurveda doctor practicing Ayurvedic medicine for more than 50 years. He is the patron Vaidya of the Bliss Ayurveda family. ",
        image: BlogImg1,
    },
    {
        title: "What is Ayurveda?",
        desc: "Ayurveda literally means “science of life and longevity” and is considered to be the traditional system of medicine in India. Ayurveda is a Sanskrit term, made up of two words “Ayu” and “Veda”. “Ayu” means life and “Veda” means knowledge or science. According to Ayurveda life or “Ayu” is defined as harmonious blending of the",
        image: BlogImg2,
    },
    {
        title: "Pachmahaboot Theory: Five Basic Elements",
        desc: "These five elements, it should be understood, derive from and are expressions of an unmanifest and undifferentiated Creative Principle, which is one. These five elements are to be understood in a material sense as well as a subtle sense. By earth we are to understand not only the terrain of our planet or the iron in",
        image: BlogImg3,
    },
    {
        title: "Concept Of Tridosha: Three Physiological Elements",
        desc: "Doshas: The most fundamental and characteristic principle of Ayurveda is called “tridosha” or the three Humors or three biological elements. Doshas are the physiological factors of the body. They are to be seen as all pervasive, subtle entities, and are categorized into –   Vata Pitta Kapha Vata, pitta and kapha are the biological elements which are",
        image: BlogImg4,
    },
    {
        title: "Physiological Elements : Vata",
        desc: "Vata dosha governs all movement in the physiology, from the subtle, fleeting movement of a thought flitting across your mind to the coursing of blood through your arteries and veins. Air and space in combination forms vata dosha. The five subtype of Vata: Prana Vata  is the  central co-coordinator of all the vata and functions in",
        image: BlogImg5,
    },
    {
        title: "Physiological Elements : Pitta",
        desc: "Pitta dosha governs all transformations in the physiology, from the digestion of food to the metabolizing of feelings, emotions and sensory perceptions. Pita consist of fire (Agni Mahabhuta). The five subdoshas of Pitta: Alochaka Pitta functions in the eye region and governs vision. Bhrajaka Pitta is located in the skin and regulates the biochemical processes that occur",
        image: BlogImg6,
    },
    {
        title: "Physiological Elements : Kapha",
        desc: "Kapha dosha is composed of earth and water. These properties make this dosha stable, and it is responsible for growth and homeostasis of the body. Kapha dosha is produced in the body as a post-digestive product (in the form of energy), and its quality and quantity depend on the substances consumed and their proper digestion. Kapha",
        image: BlogImg7,
    },
    {
        title: "Concept Of Dhatus: Basic Varieties Of Tissues",
        desc: "The Dhatus are the basic varieties of tissues which support and sustain the living body. The word “Dhatu” comes from a Sanskrit word which means “that which enters into the formation of the body”; the root Dha means “support” i.e. that which bears.  The primary Dhatus are seven in number. They are:  Rasa dhatu (Nutrient fluid) ",
        image: BlogImg8,
    },
    {
        title: "Mala: Physiological Waste Elements",
        desc: "Malas: Malas or waste materias are constituents eliminated from body during the normal course of metabolism. The three main malas are urine (mutra), faeces (purisha) and sweat (sweda). Also subtle waste materials (kleda) are eliminated from epithelial linings of the eyes, nose, mouth, ears and genital organs. Main tissue that related to kapha is plasma which produces",
        image: BlogImg9,
    },
    {
        title: "Agni: Thirteen Types Of Biological Fire",
        desc: "For the entire range of digestion, metabolism and assimilation activities in the body, there are thirteen types of biological fire (agnis) probably exhibiting enzymatic, hormonal and chemical functions at different levels from systemic to cellular level of the body. These thirteen types of agnis (biological fires) are grouped into three categories:- 1.     Jatharagni or Koshthagni or Pachakagni: for digestion of",
        image: BlogImg10,
    },
];

const Blogs = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 9;
    const totalPages = Math.ceil(products.length / cardsPerPage);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setExpandedIndex(null); // reset expanded card when page changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <main className='blogs_page'>

                <PageBanner
                    title="Bliss Ayurveda Blogs"
                    subtitle="All Content with blogs"
                    bgImage={AboutBanner}
                />

                <div className='ourprocess_sec'>
                    <Container>
                        <div className='blogs_inside'>
                            <Row>
                                {currentCards.map((product, index) => {
                                    const actualIndex = index + indexOfFirstCard;
                                    const isExpanded = expandedIndex === actualIndex;

                                    return (
                                        <Col md={4} sm={6} xs={12} key={actualIndex}>
                                            <div className="products_card">
                                                <div className="product_header shine-card">
                                                    <LazyImage src={product.image} alt={product.title} />
                                                </div>
                                                <div className="product_body">
                                                    <h4>{product.title}</h4>
                                                    <p className={isExpanded ? "desc2 expanded" : "desc2"}>
                                                        {product.desc}
                                                    </p> 
                                                    <button
                                                        className="read_more_btn"
                                                        onClick={() => toggleReadMore(actualIndex)}
                                                    >
                                                        {isExpanded ? "Show Less" : "Read More"}
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="pagination_wrapper text-center mt-4">
                                    <button
                                        className="pagination_btn"
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Prev
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            className={`pagination_btn ${currentPage === i + 1 ? "active" : ""}`}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        className="pagination_btn"
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>

            </main> 
        </>
    );
};

export default Blogs;
