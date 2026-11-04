import React from 'react';
import Link from 'next/link';
import { SERVICES, serviceHref } from '../data/services';
import LazyVideo from './LazyVideo';
import { ArrowIcon, ServiceIcon } from './Icons';
import SectionHeading from './SectionHeading';
import LinkedText from './LinkedText';

const SERVICE_VIDEO_SRC = '/videos/vid.webm';

// In-text anchor for each card, as specified in the homepage SEO copy.
const CARD_ANCHORS = {
  'upholstery-sofa-cleaning': 'cleaning for sofas',
  'rug-cleaning': 'rug cleaning service',
  'mattress-cleaning': 'mattress cleaning service',
  'curtain-cleaning': 'curtain cleaning service',
};

// Homepage services overview: one card per service, each linking to its own page.
const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="split"
          eyebrow="Our services"
          title="Find the Right Cleaning Service for Your Needs"
          intro={
            <LinkedText
              text="Every home and business has different cleaning needs. From everyday dirt in busy hallways to marks on a favourite sofa, our carpet cleaning services cover a range of fabrics and surfaces. Explore each service to find the right option, understand what the cleaning involves, and see answers to common questions before booking."
              link={{ text: 'carpet cleaning services', href: serviceHref('carpet-cleaning') }}
            />
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Video — sticks beside the service list on large screens */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-gold-300/70" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <LazyVideo
                  src={SERVICE_VIDEO_SRC}
                  poster="/videos/poster.webp"
                  label="Five Star Carpet Cleaning team at work cleaning carpets in London"
                />
              </div>
            </div>
          </div>

          {/* Service list — horizontal rows */}
          <div className="lg:col-span-7 space-y-5">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="relative bg-white p-6 sm:p-7 rounded-2xl border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 group flex flex-col sm:flex-row gap-5 sm:gap-6"
              >
                <span
                  className="absolute left-0 inset-y-6 w-0.5 bg-gradient-to-b from-gold-400 to-gold-200 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
                  aria-hidden="true"
                />
                <div
                  className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 text-gold-300 group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <ServiceIcon slug={service.slug} className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <LinkedText
                      text={service.summary}
                      link={CARD_ANCHORS[service.slug] && { text: CARD_ANCHORS[service.slug], href: serviceHref(service.slug) }}
                    />
                  </p>
                  <Link
                    href={serviceHref(service.slug)}
                    className="mt-4 inline-flex items-center text-navy-900 font-semibold hover:text-gold-700 transition-colors"
                  >
                    View {service.name.toLowerCase()}
                    <ArrowIcon className="w-5 h-5 ml-2 text-gold-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
