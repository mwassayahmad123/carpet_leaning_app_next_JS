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

const TITLE = 'Carpet Cleaning London | Five Star Carpet Cleaning';
const DESCRIPTION =
  'Five Star Carpet Cleaning offers professional carpet, sofa, rug, and mattress cleaning in London. Get in touch today for a free quote for your home or business.';

const serviceAreaIntro =
  'Based in East London (E11), we travel to homes and businesses across London and Greater London. If you’re searching for “carpet cleaning near me”, we can help you check whether your postcode falls within our service area. Send us your location and the items you need cleaned, and we’ll confirm availability before you book.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: { url: '/', title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
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
      <ServiceArea intro={serviceAreaIntro} />
      <Reviews />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
