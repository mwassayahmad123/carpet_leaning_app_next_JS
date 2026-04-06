import React from 'react';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Every carpet is carefully inspected and treated with premium care.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Hygiene Standards',
      description: 'State-of-the-art facilities ensuring the highest hygiene standards.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Customer Satisfaction',
      description: '100% satisfaction guarantee with our premium service quality.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Service',
      description: 'Express service available for urgent Carpet needs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            If you are searching for the best carpet cleaning London has right now, or simply looking for reliable London carpet cleaning near me, you have found the right team. Renowned as the best steam carpet cleaning service in the area, we provide exceptional, eco-friendly deep cleaning for homes and businesses. With over a decade of expertise, we don't just stop at standard carpets. Need experts to safely clean oriental rug fibres or provide specialized persian carpet cleaning? Our skilled technicians use state-of-the-art technology to extract embedded dirt, stubborn pet stains, and allergens, leaving your home truly pristine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Us?
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed font-light">
              When it comes to premium upholstery cleaning in London and professional rug cleaning London, we deliver unmatched results. As the top-rated rug cleaning service London residents trust, we seamlessly combine traditional fabric care expertise with modern, high-powered steam extraction technology. Our fully insured team safely handles all complex fabrics—from durable synthetics to most delicate vintage velvets. We prioritize your family's health by using eco-friendly, biodegradable cleaning solutions that are 100% safe for children and pets, guaranteeing an immaculate clean and total peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25K+</div>
                <div className="text-lg opacity-90">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

