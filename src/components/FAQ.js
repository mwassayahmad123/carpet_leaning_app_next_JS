import React from 'react';
import FaqAccordion from './FaqAccordion';

// Broad homepage questions. Service-specific FAQs live on each service page.
export const faqs = [
  {
    question: 'Is it worth getting carpets professionally cleaned?',
    answer:
      'Yes. Professional carpet cleaning helps remove embedded dirt, tackle suitable stains, and reduce unwanted odours. It can also help maintain your carpet when combined with regular vacuuming and everyday care.',
  },
  {
    question: 'Which carpet cleaning company is the best in London?',
    answer:
      'Look for a reliable carpet cleaning company in London with genuine customer reviews, clear pricing, and suitable cleaning methods. Five Star Carpet Cleaning serves homes and businesses across London, with cleaning methods chosen to suit the carpet or fabric.',
  },
  {
    question: 'What is the average carpet cleaning price in London?',
    answer:
      'Carpet washing price depends on the number of rooms, carpet condition, stains, and the cleaning required. Contact us with details of your carpets to discuss your needs and request a quote before booking.',
  },
  {
    question: 'What is the best time of year to clean carpets?',
    answer:
      'Carpets can be cleaned throughout the year. Choose a time when you can ventilate the room and allow enough time for drying. Regular cleaning can also help manage dirt in busy homes and workplaces.',
  },
  {
    question: 'How can I find carpet cleaning services near me?',
    answer:
      "Check the company's service area, customer reviews, and available services. If you're looking for carpet cleaners near me in London, contact Five Star Carpet Cleaning with your postcode to check availability.",
  },
  {
    question: 'Do you provide residential and commercial carpet cleaning?',
    answer:
      'Yes. We provide residential carpet cleaning for homes and commercial carpet cleaning for suitable business premises. The cleaning approach depends on the carpet type, level of use, and condition.',
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
      </div>
      <FaqAccordion faqs={faqs} />
    </div>
  </section>
);

export default FAQ;
