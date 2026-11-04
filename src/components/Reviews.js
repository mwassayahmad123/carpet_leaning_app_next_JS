"use client";

import React, { useState, useEffect } from 'react';
import { StarIcon } from './Icons';

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
      text: 'As a business owner, I highly recommend their commercial carpet cleaners London. They worked around our schedule and delivered a deep clean that exceeded expectations.',
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

  return (
    <section id="reviews" className="relative py-20 sm:py-24 bg-navy-950 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,174,67,0.14),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-gold-400 mb-5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto">
            See what our satisfied customers have to say
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
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
                  <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center justify-center text-center border-t-4 border-gold-400">
                    <svg className="w-10 h-10 text-gold-300 mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">{review.name}</h3>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-gold-400"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20 bg-gold-400 rounded-full p-4 shadow-lg hover:bg-gold-300 transition-colors duration-300 group"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6 text-navy-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20 bg-gold-400 rounded-full p-4 shadow-lg hover:bg-gold-300 transition-colors duration-300 group"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6 text-navy-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {reviews.map((_, index) => (
              // 24px+ tap area around a small visual dot.
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className="group flex items-center justify-center min-w-[2rem] h-8 px-1"
                aria-label={`Go to review ${index + 1}`}
              >
                <span
                  className={`block h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold-400 w-8' : 'w-3 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

