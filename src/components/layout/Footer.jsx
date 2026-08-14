import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Container from './Container';
import logoImg from '../../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark)',
        color: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '32px',
        borderTop: '4px solid var(--color-primary)'
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src={logoImg}
                alt="ABC Pickles Logo"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p style={{ color: '#AAA', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.7' }}>
              Bringing Kerala's authentic, fiery, small-batch non-veg & veg pickles straight to your dining table. Made with love, served with pride.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
                { icon: <FaWhatsapp />, href: '#' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--color-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.4rem', marginBottom: '24px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Pickle Collection', path: '/products' },
                { name: 'Our Story & Heritage', path: '/about' },
                { name: 'Customer Reviews', path: '/reviews' },
                { name: 'Contact & Bulk Orders', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} style={{ color: '#CCC', fontSize: '0.95rem' }}>
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.4rem', marginBottom: '24px' }}>
              Specialties
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Spicy Kerala Prawns Pickle',
                'Malabar Chicken Pickle',
                'Authentic Cut Mango Pickle',
                'Spicy Whole Garlic Pickle',
                'Kerala King Fish Pickle',
                'Traditional Lime Pickle'
              ].map((item, i) => (
                <li key={i}>
                  <Link to="/products" style={{ color: '#CCC', fontSize: '0.95rem' }}>
                    • {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.4rem', marginBottom: '24px' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#CCC', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <FaMapMarkerAlt style={{ color: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }} />
                <span>ABC Pickles Works, Main Road, Kottayam, Kerala - 686001</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FaPhoneAlt style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>+91 98765 43210 / +91 481 234567</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FaEnvelope style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>support@abcpickles.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            color: '#888',
            fontSize: '0.85rem'
          }}
        >
          <span>© 2026 ABC Pickles. Handcrafted in Kerala with Pride.</span>
          <span>100% Preservative-Free • FSSAI Approved</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
