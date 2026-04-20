import React from 'react'
import { Helmet } from "react-helmet";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";

import WhyChooseUs from "../components/sections/WhyChooseUs";
import ContactSection from '../components/sections/ContactSection';
import FAQ from '../components/sections/FAQ';
import Industries from '../components/sections/Industries';
import Testimonials from '../components/sections/Testimonials';





const Home = () => {
  return (
    <>
    <Helmet>
  <title>Furonex Technologies | Home</title>
  <meta 
  name="description" 
  content="Furonex Technologies offers website development, SEO, and digital marketing services to help businesses grow online." 
/>
</Helmet>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Process/>
      <Industries/>
      <Testimonials/>
      <ContactSection/>
      <FAQ/>
    
    </>
  )
}

export default Home