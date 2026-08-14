import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import heroBottle from '../assets/images/hero-bottle.png';
import pickleBowl from '../assets/images/pickle-bowl.png';
import mangoPickle from '../assets/images/pickle-mango.png';
import chickenPickle from '../assets/images/pickle-chicken.png';
import { FaHistory, FaAward, FaHeart, FaFlask, FaUserCheck } from 'react-icons/fa';

export const About = () => {
  const timeline = [
    { year: '1984', title: 'Home Kitchen Origins', desc: 'Grandmother Eliyama started crafting small jar batches of Cut Mango pickle in Kottayam for local family feasts.' },
    { year: '2005', title: 'Non-Veg Recipe Innovation', desc: 'Introduced the iconic Malabar Roasted Chicken & Spicy Prawn pickle recipes using natural cold-pressed Gingelly oil.' },
    { year: '2018', title: 'Modern Cleanroom Facility', desc: 'Established our FSSAI-certified modern production house while keeping 100% of the hand-crafted spice roasting steps intact.' },
    { year: '2026', title: 'Global Pan-India Favorite', desc: 'Delivering over 100,000+ jars annually to authentic spice lovers across India and overseas.' }
  ];

  const team = [
    { name: 'Mathew Varghese', role: 'Master Pickle Craftsman & Founder', bio: 'Carrying forward 40+ years of family spice blending heritage.' },
    { name: 'Rosamma Mathew', role: 'Head of Recipes & Quality Assurance', bio: 'Guarding every secret blend ratio to ensure 100% grandmother taste.' },
    { name: 'Dr. Arun Nair', role: 'Food Safety & Process Director', bio: 'Ensures absolute zero preservative standards and hygienic glass sealing.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'About ABC Pickles' }]} />

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span style={{ fontFamily: 'var(--font-button)', color: 'var(--color-primary)', fontWeight: '700', fontSize: '1rem', letterSpacing: '2px' }}>
            SINCE 1984
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--color-dark)', margin: '12px 0 20px 0' }}>
            CRAFTING KERALA'S MOST BELOVED PICKLES
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
            We believe a meal without good pickle is incomplete. At ABC Pickles, every jar is a celebration of authentic Kerala heritage, pure sesame oil, and uncompromised quality.
          </p>
        </div>

        {/* Heritage Story Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '100px'
          }}
        >
          <div style={{ gridColumn: 'span 6' }} className="about-col">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '20px' }}>
              OUR STORY & UNWAVERING PHILOSOPHY
            </h2>
            <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
              In Kerala, pickle making is not just cooking; it is an art form of patience and precision. We slice fresh raw mangoes, wild garlic, tender prawns, and boneless chicken by hand.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
              We never use artificial vinegar or synthetic food colors. The deep ruby hue in our pickles comes entirely from slow-roasted Kashmiri red chilies and native cold-pressed Gingelly oil.
            </p>
          </div>

          <div style={{ gridColumn: 'span 6' }} className="about-col">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-medium)' }}>
              <img src={heroBottle} alt="ABC Pickle Jar" style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <SectionTitle subtitle="OUR JOURNEY" title="MILESTONES OF FLAVOUR" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '100px'
          }}
        >
          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>
                {item.year}
              </span>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--color-dark)', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <SectionTitle subtitle="BEHIND THE BRAND" title="MEET OUR MASTERS OF SPICE" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {team.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-cream)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 20px auto'
                }}
              >
                <FaUserCheck />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-dark)', marginBottom: '4px' }}>{t.name}</h3>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary)', fontFamily: 'var(--font-button)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                {t.role}
              </span>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: '1.6' }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .about-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
