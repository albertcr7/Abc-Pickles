import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaPepperHot } from 'react-icons/fa';
import Button from '../common/Button';
import Container from '../layout/Container';

export const CTASection = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1F1F1F 0%, #C83019 60%, #961D0B 100%)',
        color: '#FFFFFF',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      <Container>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span
            style={{
              fontFamily: 'var(--font-button)',
              color: 'var(--color-gold)',
              fontWeight: '700',
              fontSize: '1rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <FaPepperHot /> SPECIAL EXPRESS DISPATCH
          </span>

          <h2
            style={{
              fontSize: '3.2rem',
              lineHeight: '1.3',
              marginBottom: '20px',
              color: '#FFFFFF'
            }}
          >
            READY TO TASTE KERALA'S BEST PICKLES?
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}
          >
            Get 10% OFF on your first order with coupon code <strong style={{ color: 'var(--color-gold)' }}>ABC10</strong>. Free express delivery across India on orders above ₹799!
          </p>

          <Link to="/products">
            <Button variant="gold" size="lg">
              Order Your Pickle Jars Now <FaShoppingBag />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
