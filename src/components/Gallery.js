"use client";

import React, { useState } from 'react';
import img1 from "./img/1.webp"; 
import img2 from "./img/2.webp"; 
import img3 from "./img/3.webp"; 
import img4 from "./img/4.webp"; 
import img5 from "./img/5.webp"; 
import img6 from "./img/6.webp"; 
import img7 from "./img/7.webp"; 
import img8 from "./img/8.webp"; 
import img9 from "./img/9.webp"; 
import img10 from "./img/10.webp"; 
import img11 from "./img/11.webp"; 
import img12 from "./img/12.webp"; 

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: img1.src,
      title: 'Modern Carpet Facility',
    },
    {
      id: 2,
      src: img2.src,
      title: 'State-of-the-Art Equipment',
    },
    {
      id: 3,
      src: img3.src,
      title: 'Professional Carpet Cleaning',
    },
    {
      id: 4,
      src: img4.src,
      title: 'Quality Control Area',
    },
    {
      id: 5,
      src: img5.src,
      title: 'Carpet Treatment Station',
    },
    {
      id: 6,
      src: img6.src,
      title: 'Cleaning & Maintenance Area',
    },
    {
      id: 7,
      src: img7.src,
      title: 'Premium Care Section',
    },
    {
      id: 8,
      src: img8.src,
      title: 'Storage & Organization',
    },
    {
      id: 9,
      src: img9.src,
      title: 'Professional Service Area',
    },
    {
      id: 10,
      src: img10.src,
      title: 'Advanced Carpet Care',
    },
    {
      id: 11,
      src: img11.src,
      title: 'TV Lounge',
    },
    {
      id: 12,
      src: img12.src,
      title: 'Stairs Cleaning',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  
  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our modern facilities and professional workspace
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedIndex(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button on Screen Frame */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-[110]"
            aria-label="Close"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button on Screen Frame */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(e); }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-4 transition-colors z-[110] hidden sm:block"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button on Screen Frame */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(e); }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-4 transition-colors z-[110] hidden sm:block"
            aria-label="Next"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image and Title Wrapper */}
          <div 
            className="flex flex-col items-center justify-center animate-scale-in max-w-[90vw] md:max-w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain rounded-lg select-none shadow-2xl"
            />
            
            {/* Title Below Image */}
            <div className="mt-6 text-center z-[110] text-white">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide">{images[selectedIndex].title}</h3>
              <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">{selectedIndex + 1} / {images.length}</p>
            </div>
          </div>

          {/* Mobile navigation overlays for easy swiping/tapping */}
          <div className="absolute inset-y-0 left-0 w-1/3 sm:hidden z-[105]" onClick={(e) => { e.stopPropagation(); handlePrev(e); }}></div>
          <div className="absolute inset-y-0 right-0 w-1/3 sm:hidden z-[105]" onClick={(e) => { e.stopPropagation(); handleNext(e); }}></div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

