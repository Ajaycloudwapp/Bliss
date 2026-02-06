
import React from 'react'

import { Container } from 'react-bootstrap';

import FooterContent from '../component/FooterContent';

const Footer = () => {

    return (
        <>

            {/* Footer Section css */}
            <div className='footer_sec'>
                <Container>
                    
                    {/* Footer Component */}
                    <FooterContent />

                </Container>
            </div>

        </>
    )
}

export default Footer

