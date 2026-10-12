import FeatureGrid from './FeatureGrid';
import ProcessSteps from './ProcessSteps';
import SectionHeading from './SectionHeading';

// TODO: keep these to claims the business can back up (insurance, years trading, etc.).
const trustPoints = [
  { value: '10+', label: 'Years of experience' },
  { value: '7 days', label: 'A week, 8am – 8pm' },
  { value: '5★', label: 'Rated by our customers' },
  { value: 'Free', label: 'No-obligation quotes' },
];

export const TrustBar = () => (
  <section aria-label="Why customers trust us" className="bg-white border-b border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {trustPoints.map((point) => (
          <li key={point.label}>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {point.value}
            </p>
            <p className="text-gray-600 mt-1">{point.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const differentiators = [
  { title: 'Professional equipment', text: 'Commercial-grade hot water extraction machines that remove more dirt and moisture than rental machines.' },
  { title: 'Fabric-aware cleaning', text: 'We inspect and colour-test first, then choose the right method for wool, synthetics, velvet and delicate rugs.' },
  { title: 'Transparent communication', text: 'Clear quotes up front and honest advice about which stains will and won’t come out.' },
  { title: 'Convenient booking', text: 'Book by phone, WhatsApp or online, seven days a week, at a time that suits you.' },
  { title: 'Family & pet-friendly', text: 'Biodegradable cleaning solutions without overpowering chemical smells.' },
  { title: 'Careful, tidy service', text: 'We respect your home, protect your furniture and walk through the result with you before we leave.' },
];

export const WhyChoose = () => (
  <section id="why-choose-us" className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why choose us"
        title="Why Choose Five Star Carpet Cleaning"
        intro="What you can expect every time you book with us."
      />
      <FeatureGrid items={differentiators} />
    </div>
  </section>
);

const steps = [
  { title: 'Enquire', text: 'Call, WhatsApp or use the booking form. Photos help us quote accurately.' },
  { title: 'Free quote', text: 'We confirm the price and book a date and time that suits you.' },
  { title: 'Inspect & pre-treat', text: 'We check the fabric, test colours and pre-treat stains and traffic areas.' },
  { title: 'Deep clean', text: 'Hot water extraction or a fabric-appropriate method, with maximum moisture removed.' },
  { title: 'Final check', text: 'We walk through the result with you and leave simple aftercare advice.' },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="How it works" title="How Our Cleaning Service Works" intro="From first message to final check in five simple steps." />
      <ProcessSteps steps={steps} />
    </div>
  </section>
);
