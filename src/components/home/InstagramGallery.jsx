import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Container from '../layout/Container';
import heroBottle from '../../assets/images/hero-bottle.png';
import pickleBowl from '../../assets/images/pickle-bowl.png';
import prawnPickle from '../../assets/images/pickle-prawn.png';
import mangoPickle from '../../assets/images/pickle-mango.png';
import chickenPickle from '../../assets/images/pickle-chicken.png';

export const InstagramGallery = () => {
  const images = [
    heroBottle,
    pickleBowl,
    prawnPickle,
    mangoPickle,
    chickenPickle,
    pickleBowl
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-light)' }}>
      <Container>
        <SectionTitle
          subtitle="@ABCPICKLES"
          title="FOLLOW US ON INSTAGRAM"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px'
          }}
          className="insta-grid-layout"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                height: '220px',
                backgroundColor: 'var(--color-cream)',
                boxShadow: 'var(--shadow-soft)',
                cursor: 'pointer'
              }}
            >
              <img
                src={img}
                alt={`Instagram Post ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Hover Overlay */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(166, 29, 27, 0.85)',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <FaInstagram style={{ fontSize: '2rem', color: 'var(--color-gold)' }} />
                <span style={{ fontFamily: 'var(--font-button)', fontSize: '0.85rem', letterSpacing: '1px' }}>
                  VIEW POST
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .insta-grid-layout {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .insta-grid-layout {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramGallery;
