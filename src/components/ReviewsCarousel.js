"use client";

import React, { useState, useEffect } from 'react';
import { StarIcon } from './Icons';

const Stars = ({ rating, className = 'w-5 h-5' }) => (
  <div className="flex gap-0.5 text-gold-400" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <StarIcon key={i} className={`${className} ${i <= rating ? '' : 'text-navy-200'}`} />
    ))}
  </div>
);

const Avatar = ({ review }) =>
  review.authorPhoto ? (
    // Google profile photos are served from googleusercontent.com; no-referrer is required for them to load.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={review.authorPhoto}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-300"
    />
  ) : (
    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-gold-300 font-display font-bold text-lg">
      {review.author.charAt(0)}
    </span>
  );

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-8 h-full flex flex-col border-t-4 border-gold-400">
    <div className="flex items-center gap-4 mb-4">
      <Avatar review={review} />
      <div className="min-w-0 text-left">
        <h3 className="font-display text-lg font-bold text-navy-900 truncate">
          {review.authorUrl ? (
            <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-700">
              {review.author}
            </a>
          ) : (
            review.author
          )}
        </h3>
        {review.relativeTime && <p className="text-sm text-gray-500">{review.relativeTime}</p>}
      </div>
    </div>
    <Stars rating={review.rating} />
    <p className="mt-4 text-gray-600 leading-relaxed text-left line-clamp-6">{review.text}</p>
    {review.url && (
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-4 text-sm font-semibold text-gold-700 hover:text-navy-900 text-left"
      >
        Read on Google
      </a>
    )}
  </div>
);

// 3D carousel of review cards (3 or more reviews); a simple grid for 1–2 reviews.
const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const count = reviews.length;

  useEffect(() => {
    if (!isAutoPlaying || count < 3) return undefined;
    const interval = setInterval(() => setCurrentIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, count]);

  if (count < 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    );
  }

  const go = (next) => {
    setIsAutoPlaying(false);
    setCurrentIndex((i) => (i + next + count) % count);
  };

  const positions = { '-1': 'translateX(-60%) translateZ(-200px) scale(0.85) rotateY(25deg)', 0: 'none', 1: 'translateX(60%) translateZ(-200px) scale(0.85) rotateY(-25deg)' };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative h-[26rem] perspective-1000">
        {[-1, 0, 1].map((offset) => {
          const review = reviews[(currentIndex + offset + count) % count];
          return (
            <div
              key={review.id}
              className="absolute inset-0 mx-auto max-w-xl transition-all duration-700 ease-in-out"
              style={{
                transform: positions[offset],
                opacity: offset === 0 ? 1 : 0.5,
                zIndex: offset === 0 ? 10 : 5,
                transformStyle: 'preserve-3d',
              }}
              aria-hidden={offset !== 0}
            >
              <ReviewCard review={review} />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => go(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 z-20 bg-gold-400 rounded-full p-4 shadow-lg hover:bg-gold-300 transition-colors"
        aria-label="Previous review"
      >
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 z-20 bg-gold-400 rounded-full p-4 shadow-lg hover:bg-gold-300 transition-colors"
        aria-label="Next review"
      >
        <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center mt-8">
        {reviews.map((review, index) => (
          <button
            key={review.id}
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
  );
};

export default ReviewsCarousel;
