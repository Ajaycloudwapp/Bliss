
import React from 'react'
import BannerSlider from '../component/BannerSlider'
import { WhatWeOffer } from '../component/WhatWeOffer'

const Home = () => {
    return (
        <>
            <div className='banner_sec'>
                {/* Banner Section */}
                <BannerSlider /> 
            </div>

             <div className='what_we_offer_sec'>
                {/* WhatWeOffer Section */}
                <WhatWeOffer /> 
            </div>

        </>
    )
}

export default Home

