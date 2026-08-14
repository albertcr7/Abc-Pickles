import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.png';

export const MobileMenu = ({ isOpen, onClose }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Pickles', path: '/products' },
    { name: 'About Brand', path: '/about' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shopping Cart', path: '/cart' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1100 }}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)'
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '380px',
              backgroundColor: 'var(--color-dark)',
              color: 'var(--color-white)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-large)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={logoImg}
                    alt="ABC Pickles"
                    style={{ height: '42px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <button
                  onClick={onClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-cream)',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--font-helvetica)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'var(--color-cream)',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      paddingBottom: '12px'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#E1306C',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  <FaInstagram />
                </a>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#888' }}>
                © 2026 ABC Pickles. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
