import React from 'react';

const SERVICE_VIDEO_SRC = '/videos/vid.webm';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Deep Steam Carpet Cleaning London',
      description: 'Our professional carpet cleaners in London utilize high-powered, eco-friendly steam techniques. Whether you need a quick refresh or deep soil extraction, we offer the best carpet cleaners in London to leave your floors immaculate and allergen-free.',
    },
    {
      icon: '🛋️',
      title: 'Upholstery Cleaning London – Sofas, Chairs & More',
      description: 'Looking for top-tier sofa cleaning London residents trust? We breathe new life into your furniture. Our certified technicians carefully lift deep-seated body oils and tough stains, restoring your couch\'s original vibrancy and ensuring a much healthier environment.',
    },
    {
      icon: '🧶',
      title: 'Expert Rug Cleaning London',
      description: 'Protect your valuable investments with our specialist rug cleaning London service. From antique Persian and delicate Oriental rugs to modern blends, our meticulous process safely eliminates embedded dust and harsh stains while maintaining fabric softness.',
    },
    {
      icon: '🏢',
      title: 'Commercial Carpet Cleaning London',
      description: 'Maintain a pristine professional environment with our commercial carpet cleaning London services. We work around your business hours to provide deep, effective cleaning for offices, retail spaces, and commercial properties without disrupting your workflow.',
    },
    {
      icon: '🛏️',
      title: 'Mattress Cleaning London',
      description: 'Improve your sleep quality with our professional mattress cleaning London service. We effectively extract dead skin cells, potent sweat stains, and allergens. Using advanced moisture extraction methods, we thoroughly sanitize your bed for better respiratory health.',
    },
    {
      icon: '🔑',
      title: 'End of Tenancy Carpet Cleaning London',
      description: 'Secure your deposit with our reliable end of tenancy carpet cleaning London service. We provide thorough, landlord-approved deep cleaning that removes stubborn stains and odours, leaving the property in pristine condition for the next tenants.',
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
              >
                <source src={SERVICE_VIDEO_SRC} type="video/webm" />
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

