import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import { TrustBar, WhyChoose, HowItWorks } from '../components/HomeSections';
import ServiceArea from '../components/ServiceArea';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import FAQ, { faqs } from '../components/FAQ';
import Contact from '../components/Contact';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Five Star Carpet Cleaning',
  alternateName: ['Five Star Carpet & Upholstery Cleaning', 'Five Star Carpet Cleaning London'],
  url: 'https://fivestarcarpetcleaning.co.uk/',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Home />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <ServiceArea />
      <Reviews />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
