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

// Mosaic tile spans by image position (12 images fill a 2-column grid on mobile and 4 columns on desktop exactly).
const MOSAIC = {
  0: 'col-span-2 row-span-2',
  5: 'row-span-2',
  6: 'col-span-2',
  9: 'col-span-2 row-span-2',
};

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: img1.src,
      title: 'Velvet sofa and cream carpet after cleaning',
    },
    {
      id: 2,
      src: img2.src,
      title: 'Bay-window living room carpet',
    },
    {
      id: 3,
      src: img3.src,
      title: 'Cream carpet with fresh extraction lines',
    },
    {
      id: 4,
      src: img4.src,
      title: 'Grey carpet mid-clean',
    },
    {
      id: 5,
      src: img5.src,
      title: 'Bedroom carpet after cleaning',
    },
    {
      id: 6,
      src: img6.src,
      title: 'Hot water extraction in a hallway',
    },
    {
      id: 7,
      src: img7.src,
      title: 'Dining area carpet after spot treatment',
    },
    {
      id: 8,
      src: img8.src,
      title: 'Living room carpet after deep clean',
    },
    {
      id: 9,
      src: img9.src,
      title: 'Dining room carpet after cleaning',
    },
    {
      id: 10,
      src: img10.src,
      title: 'Grey stair carpet cleaned',
    },
    {
      id: 11,
      src: img11.src,
      title: 'Extraction wand on living room carpet',
    },
    {
      id: 12,
      src: img12.src,
      title: 'Stair carpet treads after cleaning',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 lg:pb-2 lg:border-l-2 lg:border-gold-300 lg:pl-8">
            Real photos from recent carpet and upholstery cleaning jobs in London
          </p>
        </div>

        {/* Mosaic: a few tiles span extra rows/columns; tile sizes are fixed by the grid rows, so nothing shifts while images load. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl ring-1 ring-navy-100 hover:ring-2 hover:ring-gold-400 transition-all duration-300 cursor-pointer ${MOSAIC[index] || ''}`}
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base sm:text-xl font-semibold mb-1">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-gold-400 text-navy-950 rounded-full p-2 hover:bg-gold-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white bg-navy-950/80 border-l-4 border-gold-400 rounded-lg p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

