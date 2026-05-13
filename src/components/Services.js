"use client";

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICE_VIDEO_SRC = '/videos/vid.webm';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Steam Carpet Cleaning London',
      description: 'Our professional carpet cleaners in London use hot water extraction and eco-friendly pre-treatment to lift deep soil, dust and allergens from domestic carpets, stairs and high-traffic areas.',
    },
    {
      icon: '🛋️',
      title: 'Upholstery & Sofa Cleaning London',
      description: 'From sofas and armchairs to dining chairs and soft furnishings, our upholstery cleaning service removes body oils, marks and everyday build-up while protecting delicate fabrics.',
    },
    {
      icon: '🧶',
      title: 'Rug Cleaning London',
      description: 'Protect your rugs with a careful cleaning process for modern, wool, Persian and Oriental-style rugs. We remove embedded dust and stains while helping maintain fibre softness.',
    },
    {
      icon: '🏢',
      title: 'Commercial Carpet Cleaning London',
      description: 'Maintain a clean working environment with office and commercial carpet cleaning across London. We can work around business hours for offices, shops and rental properties.',
    },
    {
      icon: '🛏️',
      title: 'Mattress Cleaning London',
      description: 'Improve bedroom hygiene with mattress cleaning that helps remove dust mites, sweat marks and allergens using professional extraction methods suitable for UK homes.',
    },
    {
      icon: '🔑',
      title: 'End of Tenancy Carpet Cleaning London',
      description: 'Support your move-out clean with end of tenancy carpet cleaning for tenants, landlords and letting agents, including stain treatment and deep steam extraction.',
    },
  ];

  const heading = useScrollReveal();
  const video = useScrollReveal({ threshold: 0.2 });
  const grid = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 reveal-fade-up ${heading.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Carpet Cleaning Services in London
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carpet, upholstery, rug, mattress and end of tenancy cleaning for London homes and businesses
          </p>
        </div>

        {/* Video Section */}
        <div ref={video.ref} className={`mb-20 reveal-scale ${video.isVisible ? 'revealed' : ''}`}>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={SERVICE_VIDEO_SRC} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={grid.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger ${grid.isVisible ? 'revealed' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="#contact" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

