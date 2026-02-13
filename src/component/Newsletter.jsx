
import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap'

import NewsImg from "/image/newsletter.svg"

const Newsletter = () => {

    const [checked, setChecked] = useState(false); 
    
    return (
        <>
            <section>
                <Row>
                    <Col md={6}>
                        <section className="page_heading centerText">
                            <h3> <span> <strong> Stay up </strong> to date </span> </h3>
                            <p> Enter your email address to receive updates on new product previews, ad promotions, special offers and latest know-how on skincare routines. </p>
                        </section>
                        <div className='newsletter_form'>
                            <div className='inputOuterField'>
                                <input type='text' className='form-control' placeholder='Email' />
                                <Button> Subscribe </Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <img src={NewsImg} alt="" />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Newsletter

