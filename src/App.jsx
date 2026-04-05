import React, { useState, useEffect } from "react";

import NavBar from "./components/Layout/NavBar";

import Services from "./components/sections/Services";
import Loader from "./Loader";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Footer from "./components/Layout/Footer";
import StarCursor from "./components/StarCursor";
import Pricing from "./Pages/Pricing";
import WhatsappButton from "./components/WhatsappButton";
import QuotePopup from "./components/QuotePopup";
import ScrollToTop from "./components/ScrollToTop ";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 AUTO POPUP AFTER 5–10 SEC
  useEffect(() => {
    const delay = Math.floor(Math.random() * 5000) + 5000;

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, delay);

    return () => clearTimeout(popupTimer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className='bg-[#141f3b] min-h-screen pl-2 pr-2 pt-2 pb-2 space-y-2'>

      <NavBar setShowPopup={setShowPopup} />
      <StarCursor />

      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing setShowPopup={setShowPopup}/>} />
      </Routes>

      <WhatsappButton />
      <Footer />

      {/* 🔥 POPUP */}
      <QuotePopup isOpen={showPopup} setIsOpen={setShowPopup} />

    </div>
  );
};

export default App;