// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

<<<<<<< HEAD
import HomePage from './pages/HomePage';
import WebDesign from './pages/WebDesign';
import ContactPage from './pages/ContactPage';
=======

import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
>>>>>>> 3c46fd80dda8ecce5ed679edc9cd70fcc9d20176

import AboutPage from "./pages/AboutPage";
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
