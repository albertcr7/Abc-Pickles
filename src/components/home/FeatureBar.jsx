import React from 'react';
import { FaDrumstickBite, FaShieldAlt, FaUtensils, FaBroom, FaLeaf, FaAward, FaHeart, FaPepperHot } from 'react-icons/fa';

export const FeatureBar = () => {
  const items = [
    { icon: <FaDrumstickBite />, title: 'Premium Non-Veg' },
    { icon: <FaShieldAlt />, title: 'No Added Preservatives' },
    { icon: <FaUtensils />, title: 'Authentic Kerala Recipes' },
    { icon: <FaLeaf />, title: 'Premium Ingredients' },
    { icon: <FaBroom />, title: 'Hygienically Made' },
    { icon: <FaAward />, title: 'Small Batch Production' },
    { icon: <FaHeart />, title: '100% Homemade Taste' },
    { icon: <FaPepperHot />, title: 'Fiery Malabar Spices' }
  ];

  // Duplicate items for infinite seamless scroll loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <section
      style={{
        backgroundColor: '#0F0F0F',
        color: '#FFFFFF',
        padding: '24px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      className="feature-ticker-section"
    >
      <div className="ticker-container">
        <div className="ticker-track">
          {tickerItems.map((item, index) => (
            <div key={index} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          width: 100%;
        }

        .ticker-track {
          display: flex;
          gap: 50px;
          align-items: center;
          white-space: nowrap;
          animation: marqueeScroll 28s linear infinite;
          will-change: transform;
        }

        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #FFFFFF;
          font-family: var(--font-helvetica);
          cursor: default;
        }

        .ticker-icon {
          font-size: 1.6rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify.content: center;
        }

        .ticker-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: capitalize;
          color: #FFFFFF;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .ticker-track {
            gap: 32px;
            animation-duration: 20s;
          }
          .ticker-icon {
            font-size: 1.3rem;
          }
          .ticker-title {
            font-size: 0.95rem;
            letter-spacing: 0.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureBar;
