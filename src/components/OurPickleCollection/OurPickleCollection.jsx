import React, { useState, useEffect, useRef } from 'react';
import ScrollFrameAnimation from './ScrollFrameAnimation';
import './OurPickleCollection.css';

// Configurable scroll height length (e.g. 900vh for ultra-slow smooth rotation)
const SCROLL_LENGTH = 900;

export const OurPickleCollection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Detect user reduced motion setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Smooth lerp rendering loop to reduce scroll speed & add buttery smoothness
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId;
    const updateLerp = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0002) {
        currentProgressRef.current += diff * 0.08;
        setScrollProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setScrollProgress(currentProgressRef.current);
      }
      animId = requestAnimationFrame(updateLerp);
    };

    animId = requestAnimationFrame(updateLerp);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion]);

  // Calculate scroll progress within the sticky section
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const container = sectionRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollable = rect.height - windowHeight;

        if (totalScrollable > 0) {
          const currentScroll = -rect.top;
          const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
          targetProgressRef.current = progress;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`our-pickle-collection-section ${prefersReducedMotion ? 'reduced-motion' : ''}`}
      style={{ height: prefersReducedMotion ? 'auto' : `${SCROLL_LENGTH}vh` }}
    >
      <div className="our-pickle-collection-sticky">
        {/* Frame Animation Canvas Layer */}
        <div className="our-pickle-collection-canvas-wrap">
          <ScrollFrameAnimation scrollProgress={prefersReducedMotion ? 0.5 : scrollProgress} />
        </div>

      </div>
    </section>
  );
};

export default OurPickleCollection;
