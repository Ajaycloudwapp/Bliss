
import React from 'react'

import PageBanner from '../component/PageBanner'
import AboutBanner from "/image/contact.jpg";
import ContactForm from '../component/ContactForm';

import { Container } from 'react-bootstrap';

const ContactUS = () => {
    return (
        <>
            <main>

                <PageBanner
                    title="Bliss Ayurveda Pvt Ltd"
                    subtitle="Contract Information"
                    bgImage={AboutBanner}
                />

                <div className='contactus_sec'>
                    <Container>

                        {/* <section className="page_heading centerText">
                            <h6> Forest Essentials </h6>
                            <h3> <span> <strong> Contact Us </strong> </span> </h3>
                        </section> */}
                        
                        <ContactForm />

                    </Container> 
                </div>

            </main>
        </>
    )
}

export default ContactUS

