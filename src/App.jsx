// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from './pages/HomePage';
import WebDesign from './pages/WebDesign';
import ContactPage from './pages/ContactPage';
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage"; // اضافه کردن OrderPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<WebDesign />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order/:planId" element={<OrderPage />} /> {/* Route جدید و صحیح برای صفحه سفارش */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;