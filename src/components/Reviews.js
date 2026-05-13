"use client";

import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Oliver Thompson',
      rating: 5,
      text: 'Absolutely the best carpet cleaning in London. They removed stains I thought were permanent. Highly professional and efficient service.',
    },
    {
      id: 2,
      name: 'Amelia Jones',
      rating: 5,
      text: 'I needed a professional upholstery cleaning in London for my velvet sofa. The team did a fantastic job, and it looks brand new. 10/10!',
    },
    {
      id: 3,
      name: 'Muhammad Khan',
      rating: 5,
      text: 'As a business owner, I highly recommend their commercial carpet cleaning in London. They worked around our schedule and delivered a deep clean that exceeded expectations.',
    },
    {
      id: 4,
      name: 'Olivia Smith',
      rating: 5,
      text: 'Found the best deep steam cleaning in London! Eco-friendly products and great results. My house feels so much fresher now.',
    },
    {
      id: 5,
      name: 'George Williams',
      rating: 5,
      text: 'Excellent affordable rug cleaning service London. They handled my Persian rugs with extreme care. The best value for money in the city.',
    },
    {
      id: 6,
      name: 'Charlotte Brown',
      rating: 5,
      text: 'Definitely the top-rated carpet cleaners London. Every step from booking to the actual cleaning was seamless. Five-star service!',
    },
    {
      id: 7,
      name: 'Arthur Taylor',
      rating: 5,
      text: 'Fast, reliable, and truly the best service in London for any deep cleaning needs. The technicians are polite and very thorough.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + reviews.length) % reviews.length;
      visible.push({ ...reviews[index], position: i });
    }
    return visible;
  };

  const heading = useScrollReveal();
  const carousel = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 reveal-fade-up ${heading.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            London Customer Reviews
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what local customers say about our carpet, rug and upholstery cleaning services
          </p>
        </div>

        <div ref={carousel.ref} className={`relative max-w-5xl mx-auto reveal-scale ${carousel.isVisible ? 'revealed' : ''}`}>
          {/* 3D Carousel Container */}
          <div className="relative h-96 perspective-1000">
            {getVisibleReviews().map((review) => {
              const isCenter = review.position === 0;
              const isLeft = review.position === -1;
              const isRight = review.position === 1;

              let transform = '';
              let opacity = '';
              let zIndex = '';

              if (isCenter) {
                transform = 'translateX(0) translateZ(0) scale(1) rotateY(0deg)';
                opacity = '1';
                zIndex = '10';
              } else if (isLeft) {
                transform = 'translateX(-60%) translateZ(-200px) scale(0.85) rotateY(25deg)';
                opacity = '0.5';
                zIndex = '5';
              } else if (isRight) {
                transform = 'translateX(60%) translateZ(-200px) scale(0.85) rotateY(-25deg)';
                opacity = '0.5';
                zIndex = '5';
              }

              return (
                <div
                  key={review.id}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center text-center border-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{review.name}</h3>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20 bg-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20 bg-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

