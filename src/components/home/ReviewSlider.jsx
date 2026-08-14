import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Container from '../layout/Container';
import { REVIEWS_DATA } from '../../data/products';

export const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      <Container>
        <SectionTitle subtitle="TESTIMONIALS" title="WHAT OUR FOODIES SAY" />

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '48px 40px',
                boxShadow: 'var(--shadow-medium)',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <FaQuoteLeft
                style={{
                  fontSize: '3rem',
                  color: 'rgba(166, 29, 27, 0.15)',
                  position: 'absolute',
                  top: '32px',
                  left: '32px'
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '20px' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Comment */}
                <p
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark)',
                    fontStyle: 'italic',
                    lineHeight: '1.7',
                    marginBottom: '32px'
                  }}
                >
                  "{current.comment}"
                </p>

                {/* User Info Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src={current.avatar}
                    alt={current.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid var(--color-primary)'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.3rem', color: 'var(--color-dark)', marginBottom: '2px' }}>
                      {current.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#777', fontSize: '0.85rem' }}>
                      <FaMapMarkerAlt style={{ color: 'var(--color-primary)' }} />
                      <span>{current.location}</span>
                      <span style={{ margin: '0 4px' }}>•</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '32px' }}>
            <button
              onClick={prevReview}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <FaChevronLeft />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              {REVIEWS_DATA.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: idx === currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSlider;
