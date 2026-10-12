"use client";

import React, { useState } from 'react';

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3>
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded={activeIndex === index}
            >
              <span className="font-semibold text-lg text-gray-900 pr-8 leading-snug">{faq.question}</span>
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
          </h3>

          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-[40rem] pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed pt-3 border-t border-gray-100">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
