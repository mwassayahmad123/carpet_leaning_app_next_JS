"use client";

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Reviews from './Reviews';
import Gallery from './Gallery';
import Catalog from './Catalog';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

export default function PageContent({ jsonLd }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Reviews />
        <Gallery />
        <Catalog />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
