import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Header from './layouts/Header';


function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
