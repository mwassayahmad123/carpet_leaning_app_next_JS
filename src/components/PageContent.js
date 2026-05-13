"use client";

import dynamic from 'next/dynamic';
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

// ssr: false prevents the server from rendering VacuumMan, which avoids
// the hydration mismatch caused by Turbopack injecting a <style> tag on
// the server while the client renders a <div> directly.
const VacuumMan = dynamic(() => import('./VacuumMan'), { ssr: false });

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
      <VacuumMan />
    </>
  );
}
