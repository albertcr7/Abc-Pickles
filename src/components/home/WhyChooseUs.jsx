import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUtensils, FaBan, FaShippingFast, FaHeart, FaAward } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Container from '../layout/Container';

export const WhyChooseUs = () => {
  const cards = [
    { icon: <FaLeaf />, title: 'PREMIUM INGREDIENTS', desc: 'Directly sourced organic spices from Wayanad & Idukki gardens.' },
    { icon: <FaUtensils />, title: 'TRADITIONAL RECIPE', desc: 'Heritage Kerala family recipes passed down over three generations.' },
    { icon: <FaBan />, title: 'NO ARTIFICIAL COLORS', desc: 'Zero synthetic preservatives, chemical vinegar, or MSG.' },
    { icon: <FaShippingFast />, title: 'FAST DELIVERY', desc: 'Pan-India express shipping in tamper-proof leak-resistant packaging.' },
    { icon: <FaHeart />, title: 'HOMEMADE TASTE', desc: 'Hand cut fruits & meats cooked in small artisanal batches.' },
    { icon: <FaAward />, title: 'QUALITY GUARANTEED', desc: 'FSSAI certified facility with rigorous multi-stage quality checks.' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Container>
        <SectionTitle subtitle="WHY ABC PICKLES" title="UNCOMPROMISING QUALITY IN EVERY JAR" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px 26px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div
                style={{
                  fontSize: '1.6rem',
                  color: '#FFFFFF',
                  backgroundColor: 'var(--color-primary)',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(200, 48, 25, 0.3)'
                }}
              >
                {card.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-dark)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-helvetica)'
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', margin: 0, lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
