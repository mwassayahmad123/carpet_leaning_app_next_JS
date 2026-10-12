import React from 'react';
import Image from 'next/image';
import heroBg from './img/2.webp';
import CtaButtons from './CtaButtons';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Freshly cleaned cream carpet in a London living room"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-800/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-blue-200 mb-4">
            Five Star Carpet Cleaning
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Carpet Cleaning{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              in London
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Deep hot water extraction for carpets, sofas, rugs, mattresses and curtains — for homes, landlords and businesses across London.
          </p>

          <CtaButtons showQuote className="justify-center" />
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
