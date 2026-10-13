import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PHOTOS, serviceHref } from '../data/services';
import { ArrowIcon } from './Icons';
import { inlineLinkClass } from './LinkedText';

// Short homepage introduction — the full story lives on /about/.
const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={PHOTOS.extractionHallway.src}
            alt={PHOTOS.extractionHallway.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">About us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
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
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-purple-600 transition-colors"
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
