"use client";

import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const heading = useScrollReveal();
  const items = useScrollReveal({ threshold: 0.1 });

  const faqs = [
    {
      question: "Do you provide carpet cleaning across London, UK?",
      answer: "Yes. We provide professional carpet cleaning across London, with regular appointments in East and South East London including Leyton, Leytonstone, Stratford, Wanstead, Walthamstow, Hackney, Ilford, Greenwich and Canary Wharf."
    },
    {
      question: "What carpet cleaning method do you use?",
      answer: "We use professional hot water extraction, often called steam carpet cleaning, with fabric-appropriate pre-treatment, stain spotting and powerful moisture extraction for a deep, hygienic clean."
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Yes. We use eco-friendly, biodegradable cleaning solutions that are safe for family homes when used as directed. Our team can also advise on drying and ventilation after cleaning."
    },
    {
      question: "How long do carpets take to dry after cleaning?",
      answer: "Most carpets are touch-dry within 4 to 6 hours, depending on carpet type, airflow and room temperature. Opening windows or using heating can help speed up drying."
    },
    {
      question: "Can you help with end of tenancy carpet cleaning in London?",
      answer: "Yes. We offer end of tenancy carpet cleaning for tenants, landlords and letting agents across London, including stain treatment and deep hot water extraction to help leave the property ready for inspection."
    },
    {
      question: "Do you clean sofas, rugs and mattresses as well as carpets?",
      answer: "Yes. We provide upholstery cleaning, sofa cleaning, rug cleaning and mattress cleaning in London using methods suited to each fabric and fibre type."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div ref={heading.ref} className={`text-center mb-16 reveal-fade-up ${heading.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Carpet Cleaning London FAQs
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Helpful answers about professional carpet, upholstery, rug and mattress cleaning for London homes and businesses.
          </p>
        </div>

        <div ref={items.ref} className={`space-y-4 reveal-stagger ${items.isVisible ? 'revealed' : ''}`}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-lg text-gray-900 pr-8 leading-snug">
                  {faq.question}
                </span>
                <span className="text-blue-600 flex-shrink-0 bg-blue-50 p-2 rounded-full">
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
