
import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap'

const Newsletter = () => {

    const [checked, setChecked] = useState(false); 
    
    return (
        <>
            <section>
                <Row className='justify-content-center'>
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
                            <div className="customCheckbox">
                                <input
                                    type="checkbox"
                                    id="html"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                                <label htmlFor="html"> By proceeding ahead, I agree and accept Forest Essentials privacy policy and terms. </label>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Newsletter

