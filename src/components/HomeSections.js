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
  {
    title: 'Professional equipment',
    text: 'We use commercial-grade hot water extraction machines to help lift embedded dirt and remove cleaning solution from suitable carpets. The equipment and method are chosen according to the material and its condition.',
  },
  {
    title: 'Fabric-aware cleaning',
    text: 'Different fabrics need different care. We inspect and colour-test materials before cleaning, taking account of wool, synthetic fibres, velvet and delicate rugs to help reduce the risk of damage.',
  },
  {
    title: 'Transparent communication',
    text: 'We provide clear quotes before work begins and explain what to expect from the cleaning process. If a stain is unlikely to come out completely, we’ll be honest about it rather than promise results we cannot guarantee.',
  },
  {
    title: 'Convenient booking',
    text: 'Arrange your appointment by phone, WhatsApp, or online, seven days a week. Tell us what needs cleaning, and we’ll help you discuss the available options and a suitable appointment time.',
  },
  {
    title: 'Family & pet-friendly',
    text: 'We use biodegradable cleaning solutions selected with household comfort in mind. We’ll explain any necessary precautions and drying guidance so you know when the cleaned areas are ready to use.',
  },
  {
    title: 'Careful, tidy service',
    text: 'We treat your home and belongings with care, take sensible steps to protect surrounding furniture and check the results with you before we leave. We aim to leave you with a clean space and a clear understanding of the work completed.',
  },
];

export const WhyChoose = () => (
  <section id="why-choose-us" className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why choose us"
        title="Why Choose Five Star Carpet Cleaning?"
        intro="Choosing a cleaner is about more than the equipment they bring. You also want clear communication, careful work and advice you can trust. Whether you need residential or commercial carpet cleaning, we aim to make the whole process straightforward from booking to the final check."
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
      <SectionHeading
        eyebrow="How it works"
        title="How Our Cleaning Service Works"
        intro="Booking a professional clean should be simple. We guide you through each stage, from your first enquiry to the final inspection, so you know what to expect. Whether you need one carpet cleaned or several items treated, we’ll discuss your needs, explain the process, and help you prepare for your appointment."
      />
      <ProcessSteps steps={steps} />
    </div>
  </section>
);
