import React from 'react';

const SERVICE_VIDEO_SRC = '/videos/vid.webm';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Deep Steam Carpet Cleaning London',
      description: 'Revitalize your home with our premium hot water extraction carpet cleaning across London. We utilize high-powered, eco-friendly steam techniques to deeply penetrate fibres, dissolving entrenched dirt, stubborn allergens, and bacteria. Fast-drying and safe for family and pets, our five-star service leaves your carpets looking immaculate without harmful chemical residues.',
    },
    {
      icon: '🛋️',
      title: 'Professional Upholstery Cleaning',
      description: 'Breathe new life into your furniture with our bespoke sofa and upholstery cleaning services in London. Whether dealing with delicate velvet or durable synthetics, our certified technicians carefully lift deep-seated body oils, pet dander, and tough stains. We restore your couch\'s original vibrancy and hygiene, ensuring a much healthier environment.',
    },
    {
      icon: '🧶',
      title: 'Specialist Rug Cleaning Services',
      description: 'Protect your valuable investments with our expert rug cleaning serving the Greater London area. From antique Persian and delicate Oriental rugs to modern blends, our meticulous fringe-to-fringe washing process safely eliminates embedded dust, pet odours, and harsh stains. Experience a gentle, restorative clean that maintains colour integrity and fabric softness.',
    },
    {
      icon: '🐾',
      title: 'Pet Stain & Odour Removal',
      description: 'Accidents happen, but our advanced pet stain and odour removal treatments permanently eradicate the evidence. Utilizing specialized enzymatic cleaners, we actively break down urine crystals and bacteria at a microscopic level rather than just masking smells. Safe for your furry companions, our targeted London service guarantees a sanitized, odour-free home.',
    },
    {
      icon: '🛏️',
      title: 'Deep Mattress Sanitization',
      description: 'The average mattress harbours millions of microscopic dust mites. Our professional mattress deep cleaning in London effectively extracts dead skin cells, potent sweat stains, and allergens that degrade your sleep quality. Using advanced moisture extraction methods, we thoroughly sanitize your bed, promoting better respiratory health and a truly restful night\'s sleep.',
    },
    {
      icon: '🪟',
      title: 'On-Site Curtain Cleaning',
      description: 'Curtains act as massive air filters, trapping pollen, city pollution, and dust. Our hassle-free curtain cleaning service in London safely rejuvenates your window dressings, effectively removing years of buildup without the risk of fabric shrinkage. Improve your indoor air quality and bring back the vibrant colours of your drapes with our expert care.',
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

