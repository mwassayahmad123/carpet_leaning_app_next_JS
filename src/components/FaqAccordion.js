"use client";

import React, { useState } from 'react';
import LinkedText from './LinkedText';

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-gold-400 shadow-lg' : 'border-navy-100 shadow-sm hover:border-navy-200'}`}
        >
          <h3>
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-inset"
              aria-expanded={activeIndex === index}
            >
              <span className="font-semibold text-lg text-navy-900 pr-8 leading-snug">{faq.question}</span>
              <span className={`flex-shrink-0 p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-gold-400 text-navy-950' : 'bg-navy-900 text-gold-300'}`}>
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
          </h3>

          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-[40rem] pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed pt-4 border-t border-navy-100">
              <LinkedText text={faq.answer} link={faq.link} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
