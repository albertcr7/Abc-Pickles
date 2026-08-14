import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaHeart } from 'react-icons/fa';
import Container from '../layout/Container';
import pickleBowl from '../../assets/images/pickle-bowl.png';

export const BannerSection = () => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-primary)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0'
      }}
    >
      {/* Decorative texture overlay background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 10% 90%, rgba(220, 50, 25, 0.95) 0%, rgba(200, 48, 25, 1) 100%)',
          zIndex: 1
        }}
      />

      <Container>
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Text */}
          <div style={{ gridColumn: 'span 7' }} className="banner-left">
            <span
              style={{
                fontFamily: 'var(--font-button)',
                color: 'var(--color-cream)',
                fontWeight: '700',
                letterSpacing: '2px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}
            >
              <FaHeart style={{ color: 'var(--color-cream)' }} /> KERALA HERITAGE QUALITY
            </span>
            <h2
              style={{
                fontSize: '3.2rem',
                lineHeight: '1.3',
                marginBottom: '20px',
                color: '#FFF'
              }}
            >
              MADE WITH LOVE.
              <br />
              <span style={{ color: 'var(--color-cream)' }}>SERVED WITH PRIDE.</span>
            </h2>

            {/* Bottom 3 Badges */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '28px'
              }}
            >
              {[
                { title: 'SMALL BATCHES', text: 'Slow cooked in traditional vessels' },
                { title: 'HANDMADE', text: 'Hand sliced & stone ground spices' },
                { title: '100% AUTHENTIC', text: 'Grandmother approved Kottayam recipe' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <FaCheckCircle style={{ color: 'var(--color-cream)', fontSize: '1.3rem', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '2px', fontFamily: 'var(--font-helvetica)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image + Badge */}
          <div style={{ gridColumn: 'span 5', position: 'relative', display: 'flex', justifyContent: 'center' }} className="banner-right">
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-large)',
                border: '6px solid var(--color-cream)'
              }}
            >
              <img src={pickleBowl} alt="Authentic Pickle Bowl" style={{ width: '100%', maxHeight: '380px', objectFit: 'cover' }} />

              {/* Authentic Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  backgroundColor: 'var(--color-dark)',
                  color: 'var(--color-cream)',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                  fontFamily: 'var(--font-button)',
                  fontWeight: '700',
                  letterSpacing: '1px'
                }}
              >
                <FaAward style={{ fontSize: '1.4rem', color: 'var(--color-primary)' }} /> AUTHENTIC KERALA
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 992px) {
          .banner-left, .banner-right {
            grid-column: span 12 !important;
          }
          .banner-right {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default BannerSection;
