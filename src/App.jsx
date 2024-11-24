import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Tittle from "./components/title/Tittle";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTitle="PROGRAM Kami" title="What We Offer" />
        <Programs />
        <About />
        <Tittle subTitle="Gallery" title="Galeri Foto" />
        <Campus />
        <Tittle subTitle="Testimonials" title="what students says" />
        <Testimonials />
        <Tittle subTitle="Kontak Kami" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
