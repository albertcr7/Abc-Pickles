import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPepperHot, FaStar, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import Container from '../layout/Container';
import heroBannerImg from '../../assets/images/hero-banner.jpg';
import logoImg from '../../assets/images/logo.png';

export const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 84px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px',
        paddingBottom: '40px',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 2
          }}
          className="hero-grid"
        >
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ gridColumn: 'span 7', width: '100%', boxSizing: 'border-box' }}
            className="hero-left"
          >
            {/* Top Banner Image Card on Mobile (with official logo overlaid in top-left parchment space) */}
            <div className="hero-mobile-image-wrapper" style={{ display: 'none', width: '100%', marginBottom: '24px' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-medium)',
                  border: '2px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                {/* Official Logo Overlay in top-left parchment space */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <img
                    src={logoImg}
                    alt="ABC Pickles Logo"
                    style={{ height: '34px', width: 'auto', display: 'block', objectFit: 'contain' }}
                  />
                </div>

                <img
                  src={heroBannerImg}
                  alt="ABC Pickle Banner"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(200, 48, 25, 0.12)',
                color: 'var(--color-primary)',
                fontWeight: '700',
                fontFamily: 'var(--font-button)',
                letterSpacing: '0.8px',
                fontSize: '0.85rem',
                marginBottom: '20px',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
              className="hero-tagline"
            >
              <FaPepperHot style={{ fontSize: '0.9rem', flexShrink: 0 }} />
              <span>Kerala's #1 Artisanal Pickle Brand</span>
            </div>

            {/* Responsive Heading */}
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                color: 'var(--color-dark)',
                lineHeight: '1.15',
                marginBottom: '20px',
                letterSpacing: '0.5px',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                maxWidth: '100%',
                textTransform: 'capitalize'
              }}
              className="hero-title"
            >
              Bold Flavours.
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Real Tradition.</span>
              <br />
              ABC Pickle
            </h1>

            {/* Paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#333333',
                marginBottom: '32px',
                maxWidth: '540px',
                lineHeight: '1.65',
                wordBreak: 'break-word',
                fontWeight: '500'
              }}
              className="hero-desc"
            >
              Handcrafted small-batch non-veg and veg pickles cured with cold-pressed gingelly oil, fresh Malabar garlic, wild red chilies, and 100-year-old family recipes.
            </p>

            {/* Action Buttons */}
            <div
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', width: '100%' }}
              className="hero-buttons"
            >
              <Link to="/products" className="hero-btn-link">
                <Button variant="primary" size="md" className="hero-btn">
                  Shop Now <FaShoppingBag />
                </Button>
              </Link>
              <Link to="/about" className="hero-btn-link">
                <Button variant="secondary" size="md" className="hero-btn">
                  Explore Flavours <FaArrowRight />
                </Button>
              </Link>
            </div>

            {/* Social Trust Ratings */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '36px', maxWidth: '100%' }}
              className="hero-trust"
            >
              <div style={{ display: 'flex', color: 'var(--color-primary)', fontSize: '1.1rem', flexShrink: 0 }}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--color-dark)', lineHeight: '1.4' }} className="hero-trust-text">
                4.9/5 Rating from 5,000+ Happy Foodies Across India
              </span>
            </div>
          </motion.div>

          {/* Right Column Spacer (Desktop background shows the official jar bottle & bowl visual) */}
          <div style={{ gridColumn: 'span 5' }} className="hero-right-spacer" />
        </div>
      </Container>

      {/* Breakpoint Responsive Styles */}
      <style>{`
        @media (min-width: 993px) {
          .hero-section {
            min-height: calc(100vh - 84px) !important;
            background-image: url(${heroBannerImg}) !important;
            background-size: cover !important;
            background-position: center right !important;
            background-repeat: no-repeat !important;
          }
          .hero-mobile-image-wrapper {
            display: none !important;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 30px !important;
            padding-bottom: 50px !important;
            background-image: none !important;
            background-color: var(--color-bg) !important;
          }
          .hero-grid {
            gap: 20px !important;
          }
          .hero-left {
            grid-column: span 12 !important;
            width: 100% !important;
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-desc {
            max-width: 100% !important;
          }
          .hero-buttons {
            justify-content: center !important;
            width: 100%;
          }
          .hero-trust {
            justify-content: center !important;
            flex-wrap: wrap;
            text-align: center;
          }
          .hero-right-spacer {
            display: none !important;
          }
          .hero-mobile-image-wrapper {
            display: block !important;
            order: -1;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 20px !important;
            padding-bottom: 40px !important;
          }
          .hero-mobile-image-wrapper {
            margin-bottom: 20px !important;
          }
          .hero-tagline {
            font-size: 0.75rem !important;
            padding: 6px 12px !important;
            letter-spacing: 0.5px !important;
          }
          .hero-title {
            font-size: 1.65rem !important;
            line-height: 1.2 !important;
            letter-spacing: 0px !important;
          }
          .hero-desc {
            font-size: 0.92rem !important;
            margin-bottom: 24px !important;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: 12px !important;
          }
          .hero-btn-link {
            width: 100%;
          }
          .hero-btn {
            width: 100% !important;
            padding: 10px 18px !important;
            font-size: 0.9rem !important;
          }
          .hero-trust {
            flex-direction: column !important;
            gap: 6px !important;
            text-align: center !important;
          }
          .hero-trust-text {
            font-size: 0.8rem !important;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .hero-title {
            font-size: 1.45rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
