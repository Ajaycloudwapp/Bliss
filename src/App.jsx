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
import OurTeams from './pages/OurTeams';
import Testimonials from './pages/Testimonials';
import BrowseByGallery from './pages/BrowseByGallery';
import Blogs from './pages/Blogs';
import BasicofAyurveda from './pages/BasicofAyurveda';
import QualityControl from './pages/QualityControl';
import OnlineConsultation from './pages/OnlineConsultation';
import OrderProducts from './pages/OrderProducts';
import ResidenceTariff from './pages/ResidenceTariff';
import BookAppointment from './pages/BookAppointment';
import Physiotherapy from './pages/Physiotherapy';
import YogaClasses from './pages/YogaClasses';
import LaserTreatments from './pages/LaserTreatments';
import WellnessPrograms from './pages/WellnessPrograms';
import Panchkarma from './pages/Panchkarma';



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
                    <Route path="/our-teams" element={<OurTeams />} />
                    <Route path="/quality-control" element={<QualityControl />} />
                    <Route path="/testimonials" element={<Testimonials />} />

                    <Route path="/browse-gallery" element={<BrowseByGallery />} />
                    <Route path="/order-products" element={<OrderProducts />} />
                    <Route path="/online-consultation" element={<OnlineConsultation />} />

                    <Route path='/contactus' element={<ContactUS />} />
                    <Route path='/business-enquiry' element={<BusinessEnquiry />} />
                    <Route path='/consultation-skype' element={<ConsultationSkype />} />
                    
                    <Route path='/video-gallery' element={<VideoGallery />} />
                    <Route path='/blogs' element={<Blogs />} />
                    
                    <Route path='/panchkarma' element={<Panchkarma />} />
                    <Route path='/wellness-programs' element={<WellnessPrograms />} />
                    <Route path='/laser-treatments' element={<LaserTreatments />} />
                    <Route path='/yoga-classes' element={<YogaClasses />} />
                    <Route path='/physiotherapy' element={<Physiotherapy />} />
                    <Route path='/residence-tariff' element={<ResidenceTariff />} />
                    <Route path='/book-appointment' element={<BookAppointment />} />

                    <Route path='/ayurveda-courses' element={<AyurvedaCourses />} />
                    <Route path='/basic-ayurveda' element={<BasicofAyurveda />} />
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
