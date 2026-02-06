import React from 'react'
import { useParams } from 'react-router-dom'
import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/skype.avif";
import { Col, Container, Row } from 'react-bootstrap';

import Herbs1 from '/image/herbs_1.avif'
import Herbs2 from '/image/herbs_2.jpg'
import Herbs3 from '/image/herbs_3.jpg'
import Herbs4 from '/image/herbs_4.jpg'

const herbsData = [
    {
        id: "acacia-catechu",
        bannerTitle: "Acacia Catechu",
        image: Herbs1,
        title: "Acacia Catechu",
        latinName: "Acacia catechu",
        englishName: "Cutch Tree",
        hindiName: "Khadir",
        partUsed: "Skin wood",
        shortDesc: "Acacia catechu is a moderate sized, deciduous tree with a light feathery crown, occurring throughout India in dry types of mixed forests on a variety of geological formations and soils. The most important product obtained from this plant is Catechu. This is obtained from heartwood of 20-30 year old trees. In India two types of catechu are marketed: Pale catechu (Katha) and dark catechu (cutch). Katha is an indispensable ingredient of pan preparation. In combination with lime, it gives the characteristic red coloration, resulting from chewing of Pan. Cutch is used for printing and dyeing purpose.",
        para1: "Catechu has long been used in Indian medicine. It is astringent, cooling and digestive, used in relaxed condition of the throat, mouth and gums, also in cough and diarrhea. The bark is astringent, the decoction of bark is useful for scabies and other chronic skin troubles. It is given in childbirth, diarrhea, haemoptysis and leucorrhoea. The plant is used for asthma, bronchitis, pain in chest, sores in mouth, colic and cancer. The leaves are used in dysentery and flowers for gonorrhea. The heartwood is inhaled to check bleeding from nose. Root is used for rheumatism and toothache, its extract shows anti-bacterial and fungicidal activity. The gum from the tree is of very good quality and is regarded as good substitutes for true gum arabic. The chief constituents of the heartwood are catechin and catechutannic acid. The saline extract of seeds shows leukoagglutinating activity against leukemic cells. It agglutinates white blood cells from patients with different types of leukemia.",
        para2: "A study conducted to show immunomodulatory activity of Acacia catechu concluded that aqueous extract of Acacia catechu has a significant effect on both cell mediated and humoral immunity. Acacia catechu heartwood contains significant amounts of polyphenolic compounds that exhibit chemopreventive activity against squamous cell carcinoma by acting as a powerful antioxidant.",
        references: [
            "The Wealth of India, Raw Materials, Vol. 1, 24-30, 2005",
            "The Wealth of India, First Supplement Series (Raw Materials) Vol. 1: A-Ci, page 11, 2004",
            "PMID: 19810573, Indian J Physiol Pharmacol. 2009 Jan-Mar;53(1):25-33.",
            "PMID: 21988428, J Pharm Pharmacol. 2011 Nov;63(11):1470-82. doi: 10.1111/j.2042 7158.2011.01354.x. Epub 2011 Sep 19"
        ]
    },

    {
        id: "achillea-millefolium",
        bannerTitle: "Achillea Millefolium",
        image: Herbs2,
        title: "Achillea Millefolium",
        latinName: "Achillea millefolium",
        englishName: "Brinjasif",
        hindiName: "Khadir",
        partUsed: "Whole Plant",
        shortDesc: "Yarrow is a very hardy perennial that’s native to Eurasia, but is widely naturalized in the United States. Yarrow has been used as a medicine for ages. The genus name, Achillea, honors the Greek hero Achilles, who is said to have used yarrow on the battlefield to staunch the bleeding of his men’s wounds. Yarrow is also a traditional women’s herb, used to ease menstruation.",
        para1: "Externally, yarrow is styptic (stops bleeding), astringent (makes tissue contract), antiseptic (inhibits bacterial growth), vulnerary (helps tissue heal), anti-inflammatory, and possibly anesthetic. For external use, generally either the fresh or dried plant material is used as a poultice, or a tea made from the plant is used in compresses or as a wash. It’s also sometimes used in ointments. Modern science has identified well over a hundred active biological compounds in this plant. Among the more notable are achilleine (hemostatic), apigenin, azulene (anti-inflammatory), camphor, coumarin, inulin, menthol, quercetin, rutin, salicylic acid, and thujone.",
        para2: "Yarrow has also been used as food. The tea is consumed as a beverage, and the plant has been used to flavor beer, wine, and soft drinks. Internally, the tea is a very good diaphoretic (raises the body temperature and makes you sweat). It also makes a bitter tonic which stimulates digestion. Additionally, it’s expectorant, carminative (dispels gas), hemostatic (another way of saying it stops bleeding), astringent, antibiotic, anti-inflammatory, antispasmodic, analgesic, stimulant, and emmenagogue. Yarrow is a general tonic for the cardio-vascular system, lowers blood pressure, and slows heartbeat.",
        references: []
    },

    {
        id: "aegle-marmelos",
        bannerTitle: "Aegle Marmelos",
        image: Herbs3,
        title: "Aegle Marmelos",
        latinName: "Aegle marmelos",
        englishName: "Bael",
        hindiName: "Bael",
        partUsed: "Fruit Pulp",
        shortDesc: "Bael fruit is Sweet, aromatic, cooling and nutritive. The Various parts of the bael plant are used in Ayurveda for treatment of a variety of diseases, including treatment of diarrhea, dysentery and diabetes. Dried fruit pulp is used traditionally in many parts of India in preparation of summer drinks, which helps overcome sunstrokes.",
        para1: "It contains tannin and mucilaginous substances which` have been clinically proven to help patients suffering from diarrhea-predominant irritable bowel syndrome. Marmelosin, isolated from the bael plant, has been reported to have anti-helminthes and anti-bacterial activity. Further gastroenterological interest in bael comes from the finding that oral administration of luvangetin, a pyranocoumarin isolated from the seeds of Aegle marmelos, protected against multiple models of G.I.T ulceration.",
        para2: "It exhibit anti diabetic, anti hyperlipidaemic and antioxidant properties. According to one research oral administration of Aegle marmelos fruit increases the weight of pancreas, improved functional state of the pancreatic ß-cells and balance insulin levels, thus significantly balancing blood glucose levels.", 
        references: []
    },

    {
        id: "allium-sativum",
        bannerTitle: "Allium Sativum", 
        image: Herbs4,
        title: "Allium Sativum",
        latinName: "Allium sativum",
        englishName: "Garlic",
        hindiName: "Lahsuna",
        partUsed: "Bulb",
        shortDesc: "Garlic bulb is used as medicinal spice or herb since the creation of a mankind – consists of numerous “bulb lets” or individual cloves grouped together and enclosed in a thin white skin. It is Cultivated throughout the world, Native to Mediterranean regions of Europe & Africa, Origin in central Asia, used extensively in Italian & Greek dishes. Steamed distillation of crushed fresh bulbs yields 0.1-3.6% of a volatile oil.",
        para1: "1Garlic reduces the blood sugar levels.In rabbits with mild alloxan diabetes orally given garlic extract exhibited hypoglycemic activity comparable to that of tolutamide. It improves the glucose tolerance significantly and increase serum insulin. Garlic is an effective long term preventive treatment for all rheumatic and catarrhal conditions. It produces anti-inflammatory activity against formalin induced arthritis in albino rats. A concentrate containing the active principle, allicin and allinase proved effective in the treatment of rheumatoid arthritis. Garlic juice containing allicin has been used in the laboratory experiments to stop the growth of cancer in mice.",
        para2: "2Ajoene is one of the main compounds formed from heating crushed garlic as a mixture of E- and Zisomers (E- and Z-4,5,9-trithiadodeca-1,6,11-triene 9-oxide). Ajoene possesses a broad spectrum of biological activities that include anticancer activity. 3A study shows Potential of garlic and its active constituent, S-allyl cysteine, as antihypertensive and cardioprotective in presence of captopril (hypertensive medicine). 4Results of a study suggest that aged garlic extract is potentially protective against doxorubicininduced cardiotoxicity.",
        references: [
            "The Wealth of India, Raw Materials, Vol. 1, 181-185, 2005", 
            "PMID: 20108330, Biofactors. 2010 Jan-Feb;36(1):78-85.",
            "PMID: 20739164, Phytomedicine. 2010 Nov;17(13):1016-26. Epub 2010 Aug 23.",
            "PMID: 20060872, Food Chem Toxicol. 2010 Mar;48(3):951-6. Epub 2010 Jan 12."
        ]
    }
];

const GlossaryDetail = () => {
    const { id } = useParams();
    const herb = herbsData.find(item => item.id === id);

    if (!herb) {
        return <h2 style={{ textAlign: "center" }}>Herb not found</h2>;
    }

    return (
        <>
            <main className='glossaryDetail'>
                <PageBanner
                    title={herb.bannerTitle}
                    bgImage={AboutBanner}
                />

                <div className='consultationSkype_sec'>
                    <div className='aboutus_inside'>
                        <Container>
                            <section className='skypeCard'>
                                <Row className='align-items-center'>
                                    <Col md={4}>
                                        <div className='about_pics shine-card'>
                                            <img src={herb.image} alt={herb.title} />
                                        </div>
                                    </Col>

                                    <Col md={8}>
                                        <section className="page_heading">
                                            <h3><strong>{herb.title}</strong></h3>
                                        </section>

                                        <ul>
                                            <li><b>Latin Name</b> : {herb.latinName}</li>
                                            <li><b>English Name</b> : {herb.englishName}</li>
                                            <li><b>Hindi Name</b> : {herb.hindiName}</li>
                                            <li><b>Part Used</b> : {herb.partUsed}</li>
                                        </ul>

                                        <p>{herb.shortDesc}</p>
                                    </Col>
                                </Row>
                            </section>

                            <p>{herb.para1}</p>
                            <p>{herb.para2}</p>

                            <ul className='width100'>
                                {herb.references.map((ref, index) => (
                                    <li key={index}>{ref}</li>
                                ))}
                            </ul>

                        </Container>
                    </div>
                </div>
            </main>
        </>
    );
};

export default GlossaryDetail;
