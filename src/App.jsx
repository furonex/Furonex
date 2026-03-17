import React, { useState, useEffect } from "react";

import NavBar from "./components/Layout/NavBar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Loader from "./Loader";
import Contact from "./Pages/Contact";

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
      <Hero/>
      <Services/>
      <Process/>
      <Contact/>
    </div>
  );
};

export default App;