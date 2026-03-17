import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

