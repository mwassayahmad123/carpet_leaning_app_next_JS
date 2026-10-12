"use client";

import React, { useEffect, useRef, useState } from 'react';

// The service video is ~11 MB, so it is only attached (and downloaded) once the
// viewer scrolls near it. Until then only the lightweight poster image loads.
const LazyVideo = ({ src, poster, label }) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-video bg-black">
      <video
        className="w-full h-full object-cover"
        poster={poster}
        aria-label={label}
        controls
        autoPlay={inView}
        muted
        loop
        playsInline
        preload="none"
        src={inView ? src : undefined}
      />
    </div>
  );
};

export default LazyVideo;
