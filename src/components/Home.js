"use client";

import React from 'react';
import Image from 'next/image';
import heroBg from './img/2.webp';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const whatsappNumber = '447871062227';
    const message = encodeURIComponent('Hello! I would like to book a free consultation for carpet cleaning services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Professional Carpet Cleaning London background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-800/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Five Star Carpet Cleaning Service
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Top-rated, Best Carpet and upholstery deep cleaning across London. Fast, eco-friendly, and five-star reliable.
          </p>

          {/* Two Separate Frosted Glass Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Book Free Consultation — solid gradient frosted */}
            <button
              onClick={openWhatsApp}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base sm:text-lg text-white whitespace-nowrap bg-gradient-to-r from-blue-600/85 to-purple-600/85 border border-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 will-change-transform"
            >
              Book Free Consultation
              <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
            </button>

            {/* Contact Us — clear frosted glass */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base sm:text-lg text-white whitespace-nowrap bg-white/10 border border-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:bg-white/20 hover:shadow-[0_6px_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 will-change-transform"
            >
              Contact Us
              <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
            </button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home;


