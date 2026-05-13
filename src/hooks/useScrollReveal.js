"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll-reveal hook using Intersection Observer.
 * Returns a ref to attach to the element and a boolean `isVisible`.
 *
 * @param {Object} options
 * @param {number} options.threshold  – visibility ratio to trigger (0-1, default 0.15)
 * @param {string} options.rootMargin – observer root margin (default "0px 0px -50px 0px")
 * @param {boolean} options.once      – trigger only once (default true)
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
