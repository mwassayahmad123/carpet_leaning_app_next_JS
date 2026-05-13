"use client";

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Premium Carpet Care',
      description: 'Every carpet is carefully inspected and treated with premium care.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Hygiene Standards',
      description: 'Professional hot water extraction and hygienic cleaning standards.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Customer Satisfaction',
      description: 'Reliable service with careful attention to your home and furniture.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Service',
      description: 'Fast appointments available for urgent carpet cleaning needs.',
    },
  ];

  const heading = useScrollReveal();
  const cards = useScrollReveal({ threshold: 0.1 });
  const banner = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 reveal-fade-up ${heading.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Five Star Carpet Cleaning London
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five Star Carpet Cleaning is a local London carpet cleaning company based in E11, serving homes, landlords and businesses across East and South East London. We provide eco-friendly hot water extraction for carpets, rugs, upholstery and mattresses, helping remove everyday dirt, allergens, pet odours and stubborn stains from busy UK homes.
          </p>
        </div>

        <div ref={cards.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger ${cards.isVisible ? 'revealed' : ''}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div ref={banner.ref} className={`mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white reveal-scale ${banner.isVisible ? 'revealed' : ''}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Our London Carpet Cleaners?
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed font-light">
              When you need carpet cleaning in London, we combine careful fabric care with modern steam extraction technology. Our team handles everyday carpets, stairs, sofas, rugs and end of tenancy cleans with biodegradable solutions that are safe for family homes, children and pets when used as directed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25K+</div>
                <div className="text-lg opacity-90">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

