import React from 'react';
import serviceVideo from './img/vid.mp4';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Deep Steam Carpet Cleaning',
      description: 'Restore your carpets with our powerful Hot Water Extraction service. We go beyond the surface, injecting pressurized heat and eco-friendly solutions to dissolve stubborn dirt, oils, and bacteria. Our high-powered suction removes 95% of moisture and grime, leaving your carpets fresh, sanitized, and soft. Safe for children and pets, it is the perfect solution for allergy sufferers and busy homes.',
    },
    {
      icon: '🛋️',
      title: 'Upholstery Cleaning Specialist',
      description: 'As upholstery cleaning specialists, we provide a deep, restorative clean for sofas, armchairs, and dining chairs. Using fabric-specific methods, we safely remove deep-seated dust, oils, and allergens that regular cleaning cannot reach. Whether it is delicate velvet or durable synthetic, our process lifts stains and neutralizes odors, leaving your furniture looking revived and smelling fresh.',
    },
    {
      icon: '🧶',
      title: 'Rugs Cleaner',
      description: 'A quality rug is an investment. Our specialist cleaning process gently removes years of built-up dust and grime while preserving the integrity of the fibers. We specialize in fringe whitening, pet stain removal, and odor neutralization. Using eco-friendly methods, we ensure your rugs return to you looking beautiful, feeling soft, and safe for your family to enjoy.',
    },
    {
      icon: '🐾',
      title: 'Pet Stain & Odor Removal',
      description: 'Love your pets, hate the mess? Our professional Pet Stain & Odor Removal goes beyond the surface to eliminate accidents at the source. We do not just mask smells—we use enzyme-based cleaners to break down stains and neutralize odors for good. Safe for your furry friends and powerful enough for the toughest messes.',
    },
    {
      icon: '🛏️',
      title: 'Mattress Cleaning',
      description: 'You spend 8 hours a day on your mattress, but when was the last time it was truly cleaned? Over time, mattresses become a playground for things you cannot see: dust mites, dead skin cells, sweat, and allergens. A standard vacuuming is not enough to reach the deep-seated bacteria that affects your health and sleep quality.',
    },
    {
      icon: '🪟',
      title: 'Curtain Cleaning',
      description: 'Breathe Fresh Air Back Into Your Home. Curtains act as a giant air filter for your home, trapping dust, pollen, smoke, and pet dander. Over time, these particles build up, causing fabrics to look dull and contributing to poor indoor air quality. Our professional cleaning service removes years of buildup, restoring the color and texture of your window treatments without the risk of shrinkage.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Carpet solutions tailored to meet all your needs
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 animate-fade-in">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster=""
              >
                <source src={serviceVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center group-hover:translate-x-2 transition-transform duration-300">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

