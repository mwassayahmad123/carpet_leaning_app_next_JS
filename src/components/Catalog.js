"use client";

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function AreaCovered() {
  const servicePackages = [
    {
      title: "Silver Package",
      features: ["Hot Water Extraction", "Stain Spot Treatment", "Deodorising", "Basic Drying"]
    },
    {
      title: "Gold Package",
      features: ["Everything in Silver", "Eco-friendly Protection", "Advanced Stain Removal", "Deep Pile Lift"],
      featured: true
    },
    {
      title: "Platinum Package",
      features: ["Everything in Gold", "Antibacterial Treatment", "Long-term Soil Protection", "Priority Scheduling"]
    }
  ];

  const serviceAreas = [
    "Leyton & Leytonstone", "Stratford", "Wanstead", "Walthamstow", "Hackney", "Ilford", "Forest Gate", "Manor Park", "Greenwich", "Canary Wharf"
  ];

  const heading = useScrollReveal();
  const packages = useScrollReveal({ threshold: 0.1 });
  const mapArea = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="area-covered" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 reveal-fade-up ${heading.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Areas We Cover in London
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Local carpet cleaning packages for homes, landlords and businesses across East London and South East London
          </p>
        </div>

        <div ref={packages.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 reveal-stagger ${packages.isVisible ? 'revealed' : ''}`}>
          {servicePackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border ${pkg.featured ? 'border-purple-500 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-xl'} transition-all duration-300 hover:translate-y-[-10px]`}
            >
              {pkg.featured && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{pkg.title}</h3>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/447871062227?text=${encodeURIComponent(`Hello! I would like to book the ${pkg.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl font-bold transition-all text-center ${pkg.featured ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Service Areas & Map */}
        <div ref={mapArea.ref} className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] overflow-hidden shadow-2xl reveal-scale ${mapArea.isVisible ? 'revealed' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">London Service Areas</h3>
              <p className="text-blue-100 mb-8 text-lg">
                We provide professional carpet cleaning services across London, with regular appointments near E11 and surrounding UK postcodes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center text-blue-200">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] lg:h-auto min-h-[400px] relative">
              <iframe
                title="London Service Areas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4734000261!2d-0.241681476101991!3d51.52855824176122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf11f814%3A0x36165865d50694e5!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1714400000000!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
