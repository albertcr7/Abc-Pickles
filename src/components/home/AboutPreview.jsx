import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBullseye, FaEye } from 'react-icons/fa';
import Button from '../common/Button';
import Container from '../layout/Container';
import mangoPickleImg from '../../assets/images/pickle-mango.png';

export const AboutPreview = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Food Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ gridColumn: 'span 6', position: 'relative' }}
            className="about-left"
          >
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                backgroundColor: 'var(--color-cream)',
                padding: '24px',
                border: '1px solid var(--color-border)'
              }}
            >
              <img
                src={mangoPickleImg}
                alt="ABC Pickle Heritage"
                style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '480px', objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          {/* Right Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ gridColumn: 'span 6' }}
            className="about-right"
          >
            <span
              style={{
                fontFamily: 'var(--font-button)',
                color: 'var(--color-primary)',
                fontWeight: '700',
                fontSize: '0.95rem',
                letterSpacing: '2px'
              }}
            >
              OUR HERITAGE STORY
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
                color: 'var(--color-dark)',
                margin: '8px 0 20px 0',
                lineHeight: '1.2'
              }}
            >
              PRESERVING KERALA'S RICH CULINARY TRADITION
            </h2>

            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Founded in the heart of Kottayam, ABC Pickles started in a small family kitchen where recipes were crafted with passion and preserved using 100% natural cold-pressed Gingelly oil and freshly ground native spices.
            </p>

            {/* Mission & Vision cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div
                style={{
                  backgroundColor: '#FFF',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    color: '#FFF',
                    backgroundColor: 'var(--color-primary)',
                    fontSize: '1.2rem',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 10px rgba(200, 48, 25, 0.25)'
                  }}
                >
                  <FaBullseye />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-dark)', marginBottom: '4px', fontFamily: 'var(--font-helvetica)' }}>
                    OUR MISSION
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.5' }}>
                    To deliver pure, preservative-free authentic pickles to spice lovers across the globe.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFF',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    color: '#FFF',
                    backgroundColor: 'var(--color-primary)',
                    fontSize: '1.2rem',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 10px rgba(200, 48, 25, 0.25)'
                  }}
                >
                  <FaEye />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-dark)', marginBottom: '4px', fontFamily: 'var(--font-helvetica)' }}>
                    OUR VISION
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.5' }}>
                    To become India's most trusted household brand for premium non-veg & veg pickles.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="primary" size="md">
                Read Full Story <FaArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .about-left, .about-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;
