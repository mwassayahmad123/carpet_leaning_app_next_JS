import React from 'react';
import Link from 'next/link';
import { SERVICES, serviceHref } from '../data/services';
import LazyVideo from './LazyVideo';
import { ArrowIcon } from './Icons';
import SectionHeading from './SectionHeading';

const SERVICE_VIDEO_SRC = '/videos/vid.webm';

// Homepage services overview: one card per service, each linking to its own page.
const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Cleaning Services Across London"
          intro="From whole-house carpet cleans to a single stained sofa, choose a service to see how we work, what to expect and common questions."
        />

        {/* Video Section */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <LazyVideo
              src={SERVICE_VIDEO_SRC}
              poster="/videos/poster.webp"
              label="Five Star Carpet Cleaning team at work cleaning carpets in London"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={serviceHref(service.slug)}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group flex flex-col"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed flex-1">{service.summary}</p>
              <span className="mt-6 pt-4 border-t border-gray-200 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors flex items-center">
                View {service.name.toLowerCase()}
                <ArrowIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
