"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are you really the best carpet cleaners in London?",
      answer: "That's a fair question to ask, and we'd rather let the results speak than just say yes. Our team uses professional-grade hot water extraction equipment, not the kind you can rent from a supermarket. We've built our reputation entirely through word of mouth and genuine reviews from happy customers across London. Whether you're in East London or further out, we're confident you won't need to search for 'carpet cleaning near me' again after your first clean with us."
    },
    {
      question: "Looking for affordable carpet cleaning London without compromising on quality?",
      answer: "Absolutely! We pride ourselves on offering affordable carpet cleaning London residents can rely on. While you might find cheap carpet cleaning London services out there, they often leave chemical residues or soak your carpets. We offer transparent and highly competitive carpet cleaning prices London, ensuring you get premium, lasting results at a great value."
    },
    {
      question: "How long until we can walk on the carpets after you've cleaned them?",
      answer: "It really depends on the fabric and how warm your house is. But honestly, if you're looking for the best steam carpet cleaning service that won't leave your floors soaking wet for days, we've got you covered. Usually, your carpets will be dry to the touch in about 4 to 6 hours. Pro tip: just cracking a window or turning on the heating speeds things up a lot!"
    },
    {
      question: "Are the cleaning products you use safe for my kids and pets?",
      answer: "100%, yes. Being a family-focused team, we know exactly why folks search for an 'eco-friendly carpet cleaning near me'. We strictly use high-quality, biodegradable solutions that skip the nasty, harsh chemicals. Our products are totally safe for little ones crawling around and furry friends rolling on the floor."
    },
    {
      question: "Can you actually get rid of those stubborn pet smells and really old stains?",
      answer: "We would love to promise miracles, but sometimes really old, acidic stains can dye the carpet fibers permanently. That said, as one of the top-rated carpet cleaners near me in the London area, our success rate is incredibly high. We use specialized enzyme treatments that break down the bacteria causing the smell, tackling the root of the problem."
    },
    {
      question: "Honestly, how often should I be getting my carpets and mattresses professionally cleaned?",
      answer: "For a typical household, getting the best carpet cleaning London has to offer about once a year (or every 12 to 18 months) is a solid rule of thumb. If you have dogs, cats, kids, or bad seasonal allergies, you might want to bump that up to every 6 to 8 months. Deep cleaning your mattress once a year also makes a huge difference by getting rid of hidden dust mites."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Review our detailed, expert answers regarding professional carpet and upholstery care in London to ensure you make the best decision for your home.
          </p>
        </div>

        <div className="space-y-4">
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
