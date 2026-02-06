import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ContactUS from './pages/ContactUS';
import BusinessEnquiry from './pages/BusinessEnquiry';
import ConsultationSkype from './pages/ConsultationSkype';
import VideoGallery from './pages/VideoGallery';
import AyurvedaCourses from './pages/AyurvedaCourses';
import PulseReading from './pages/PulseReading';
import GlossaryHerbs from './pages/GlossaryHerbs';
import GlossaryDetail from './pages/GlossaryDetail';
import ScrollToTop from './component/ScrollToTop';



function App() {
    return (
        <>
            {/* <Router> */}
            <Router basename="/AC/react/bliss-ayurveda/">
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<About />} />
                    <Route path='/contactus' element={<ContactUS />} />
                    <Route path='/business-enquiry' element={<BusinessEnquiry />} />
                    <Route path='/consultation-skype' element={<ConsultationSkype />} />
                    <Route path='/video-gallery' element={<VideoGallery />} />
                    <Route path='/ayurveda-courses' element={<AyurvedaCourses />} />
                    <Route path='/pulse-reading' element={<PulseReading />} />
                    <Route path='/glossary-herbs' element={<GlossaryHerbs />} />
                    <Route path="/glossary-detail/:id" element={<GlossaryDetail />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
