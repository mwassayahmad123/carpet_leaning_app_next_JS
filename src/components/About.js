import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PHOTOS, serviceHref } from '../data/services';
import { ArrowIcon } from './Icons';
import { inlineLinkClass } from './LinkedText';

// Short homepage introduction — the full story lives on /about/.
const About = () => (
  <section id="about" className="py-20 sm:py-24 bg-cream">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
        <div className="relative max-w-md mx-auto w-full lg:max-w-none">
          <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-3xl bg-gold-300/60" aria-hidden="true" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={PHOTOS.extractionHallway.src}
              alt={PHOTOS.extractionHallway.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gold-700 mb-4">
            <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
            About us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
            London Carpet Cleaners for Homes and Businesses
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Five Star Carpet Cleaning is a London-based team cleaning carpets, sofas, rugs, mattresses and curtains for
            homeowners, tenants, landlords and businesses. We’ve built our reputation through word of mouth and genuine
            customer reviews.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Every job starts with an inspection and a fabric test, so the cleaning method suits your carpet or upholstery.
            We use professional hot water extraction equipment and family and{' '}
            <Link href={serviceHref('stain-removal')} className={inlineLinkClass.light}>pet-friendly cleaning solutions</Link>.
          </p>
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-900 text-navy-900 font-semibold hover:bg-navy-900 hover:text-white transition-colors"
          >
            More about Five Star Carpet Cleaning
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default About;
