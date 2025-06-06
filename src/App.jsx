// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import WebDesign from './pages/WebDesign';
import ContactPage from './pages/ContactPage';

import AboutPage from './pages/AboutPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<WebDesign />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;