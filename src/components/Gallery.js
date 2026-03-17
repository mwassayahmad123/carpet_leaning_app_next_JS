"use client";

import React, { useState } from 'react';
import img1 from "./img/1.jpeg"; 
import img2 from "./img/2.jpeg"; 
import img3 from "./img/3.jpeg"; 
import img4 from "./img/4.jpeg"; 
import img5 from "./img/5.jpeg"; 
import img6 from "./img/6.jpeg"; 
import img7 from "./img/7.jpeg"; 
import img8 from "./img/8.jpeg"; 
import img9 from "./img/9.jpeg"; 
import img10 from "./img/10.jpeg"; 
import img11 from "./img/11.jpeg"; 
import img12 from "./img/12.jpeg"; 

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

  const [selectedImage, setSelectedImage] = useState(null);

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
              onClick={() => setSelectedImage(image)}
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
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
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
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
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
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

