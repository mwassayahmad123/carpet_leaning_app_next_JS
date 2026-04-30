import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import Catalog from '../components/Catalog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Five Star Carpet Cleaning',
  alternateName: ['Five Star Carpet & Upholstery Cleaning', 'Five Star Carpet Cleaning London'],
  url: 'https://fivestarcarpetcleaning.co.uk/',
};

export const metadata = {
  alternates: {
    canonical: 'https://fivestarcarpetcleaning.co.uk/',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

