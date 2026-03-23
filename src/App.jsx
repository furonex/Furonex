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

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className='bg-[#141f3b] w-full min-h-screen pl-2 pr-2 pt-2 pb-2 space-y-2'>
     <NavBar/>
     <StarCursor/>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/pricing" element={<Pricing />} />
     </Routes>
       <Footer/>
    </div>
  );
};

export default App;