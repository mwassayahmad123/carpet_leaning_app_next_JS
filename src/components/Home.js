import React from 'react';
import Image from 'next/image';
import heroBg from './img/2.webp';
import Link from 'next/link';
import CtaButtons from './CtaButtons';
import { inlineLinkClass } from './LinkedText';
import { StarIcon } from './Icons';

const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-16">
      {/* Soft gold glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,174,67,0.18),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold-300 mb-6">
              <span className="flex gap-0.5 text-gold-400" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </span>
              Five Star Carpet Cleaning
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
              Professional Carpet Cleaning{' '}
              <span className="block mt-2 text-gold-400">
                London
              </span>
            </h1>

            <span className="block h-1 w-20 rounded-full bg-gold-400 mb-6 mx-auto lg:mx-0" aria-hidden="true" />

            <p className="text-base sm:text-lg text-navy-100 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Five Star Carpet Cleaning is a reliable{' '}
              <Link href="/about/" className={inlineLinkClass.dark}>carpet cleaning company in London</Link>, helping refresh tired carpets and
              upholstery by removing built-up dirt, everyday stains, and unwanted odours. Whether you need one room cleaned
              or several items refreshed, we’ll assess the material and choose a suitable cleaning method for your home or
              workplace.
            </p>

            <CtaButtons showQuote className="justify-center lg:justify-start" />
          </div>

          {/* Framed photo */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] border border-gold-400/40" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={heroBg}
                  alt="Freshly cleaned cream carpet in a London living room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 100vw"
                  className="object-cover object-center"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
