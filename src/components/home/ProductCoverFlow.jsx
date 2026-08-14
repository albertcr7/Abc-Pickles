import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaShoppingBag, FaStar } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import { PRODUCTS } from '../../data/products';
import beefPickleImg from '../../assets/images/beef pickle.png';

// Typing Animation Helper Component
const TypingText = ({ text, start, speed = 35 }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) {
      setDisplayed('');
      setDone(false);
      return;
    }

    let i = 0;
    setDisplayed('');
    setDone(false);

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, start, speed]);

  return (
    <span>
      {displayed}
      {!done && start && <span className="typing-cursor">|</span>}
    </span>
  );
};

export const ProductCoverFlow = ({ products = PRODUCTS }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scrollProgressValue, setScrollProgressValue] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extended Scroll Driven Motion for Beef Pickle Jar behind cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Ultra-smooth spring interpolation to absorb wheel/touchpad steps and provide buttery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 24,
    mass: 1.2,
    restDelta: 0.0001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setScrollProgressValue(latest);
  });

  // Stage 1: As cards vanish, bottle stays vertically centered in viewport screen
  // Stage 2: FROZEN STILL & VERTICALLY CENTERED IN VIEWPORT while all 6 ingredient texts type out
  // Stage 3: Bottle glides downward (0 -> 480px) as section below rises UP over it
  const bottleY = useTransform(smoothProgress, [0, 0.12, 0.55, 0.80, 1], [0, 0, 0, 200, 480]);
  const bottleScale = useTransform(smoothProgress, [0, 0.12, 0.55, 0.80, 1], [1, 1.12, 1.12, 1.05, 1]);
  // Bottle stays fully visible without vanishing (opacity 1) as it moves under the next section
  const bottleOpacity = 1;

  // Fade out product title, price, and cart button as scroll animation starts
  const cardDetailsOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  // Cards vanish upwards when scrolling starts
  const cardsVanishOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const cardsVanishY = useTransform(smoothProgress, [0, 0.12], [0, -60]);

  // Ingredients text overlay appears at 0.08, stays through 0.52, and vanishes smoothly by 0.65
  const ingredientsOpacity = useTransform(smoothProgress, [0.08, 0.14, 0.52, 0.65], [0, 1, 1, 0]);
  const showPair1 = scrollProgressValue >= 0.14;
  const showPair2 = scrollProgressValue >= 0.32;
  const showPair3 = scrollProgressValue >= 0.48;

  // Auto handle bounds if products list changes
  useEffect(() => {
    if (activeIndex >= products.length) {
      setActiveIndex(Math.max(0, products.length - 1));
    }
  }, [products]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 35;
    const isRightSwipe = distance < -35;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div ref={containerRef} className="coverflow-scroll-track" style={{ width: '100%', position: 'relative', height: '2000px', overflow: 'visible' }}>
      <div
        className="coverflow-sticky-stage"
        style={{
          position: 'sticky',
          top: '70px',
          height: 'calc(100vh - 90px)',
          minHeight: '520px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          padding: '10px 0'
        }}
      >
        <div className="coverflow-wrapper" style={{ width: '100%', position: 'relative', overflow: 'visible', padding: '10px 0 20px 0' }}>
      {/* Background Beef Pickle Image completely hidden behind active coverflow card */}
      <motion.div
        className="coverflow-bottle-wrap"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          marginTop: '-155px',
          y: bottleY,
          scale: bottleScale,
          opacity: bottleOpacity,
          zIndex: 0,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={beefPickleImg}
          alt="Beef Pickle Jar Background"
          style={{
            maxHeight: '250px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 15px 35px rgba(200, 48, 25, 0.22))'
          }}
        />
      </motion.div>

      {/* Both Sides Ingredients Overlay on Centered Bottle Image */}
      <motion.div
        className="ingredients-overlay"
        style={{
          opacity: ingredientsOpacity,
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '440px',
          marginTop: '-220px',
          y: bottleY,
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {/* LEFT SIDE INGREDIENTS */}
        <div className="ingredients-column left-column">
          <div className={`ingredient-card left-card ${showPair1 ? 'active' : ''}`} style={{ top: '22%' }}>
            <div className="ingredient-badge">01</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Tender Cut Beef" start={showPair1} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Slow-cooked premium lean chunks" start={showPair1} speed={25} />
              </p>
            </div>
          </div>

          <div className={`ingredient-card left-card ${showPair2 ? 'active' : ''}`} style={{ top: '48%' }}>
            <div className="ingredient-badge">02</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Whole Roasted Garlic" start={showPair2} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Golden pods infused in spices" start={showPair2} speed={25} />
              </p>
            </div>
          </div>

          <div className={`ingredient-card left-card ${showPair3 ? 'active' : ''}`} style={{ top: '74%' }}>
            <div className="ingredient-badge">03</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Kashmiri Red Chilli" start={showPair3} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Sun-dried vibrant spice blend" start={showPair3} speed={25} />
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE INGREDIENTS */}
        <div className="ingredients-column right-column">
          <div className={`ingredient-card right-card ${showPair1 ? 'active' : ''}`} style={{ top: '22%' }}>
            <div className="ingredient-badge">04</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Gingelly Oil" start={showPair1} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Cold-pressed sesame oil base" start={showPair1} speed={25} />
              </p>
            </div>
          </div>

          <div className={`ingredient-card right-card ${showPair2 ? 'active' : ''}`} style={{ top: '48%' }}>
            <div className="ingredient-badge">05</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Kerala Masala" start={showPair2} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Hand-ground heritage recipe" start={showPair2} speed={25} />
              </p>
            </div>
          </div>

          <div className={`ingredient-card right-card ${showPair3 ? 'active' : ''}`} style={{ top: '74%' }}>
            <div className="ingredient-badge">06</div>
            <div className="ingredient-content">
              <div className="ingredient-tag">INGREDIENT</div>
              <h4 className="ingredient-title">
                <TypingText text="Aged Natural Vinegar" start={showPair3} speed={40} />
              </h4>
              <p className="ingredient-desc">
                <TypingText text="Balanced tanginess & crisp bite" start={showPair3} speed={25} />
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* 3D Cover Flow Stage with Drag & Touch Swipe Support */}
      <motion.div
        className="coverflow-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -40) {
            handleNext();
          } else if (offset.x > 40) {
            handlePrev();
          }
        }}
        style={{
          position: 'relative',
          height: '500px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          overflow: 'hidden',
          background: 'transparent',
          cursor: 'grab',
          touchAction: 'pan-y',
          opacity: cardsVanishOpacity,
          y: cardsVanishY
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {/* Navigation Arrow Left - Centered Vertically on the Product Card Image */}
        <motion.button
          onClick={handlePrev}
          aria-label="Previous Product"
          style={{
            opacity: cardDetailsOpacity,
            position: 'absolute',
            left: '10px',
            top: '155px',
            transform: 'translateY(-50%)',
            zIndex: 30,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--color-border)',
            color: 'var(--color-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease'
          }}
          className="coverflow-nav-btn"
        >
          <FaChevronLeft />
        </motion.button>

        {/* Navigation Arrow Right - Centered Vertically on the Product Card Image */}
        <motion.button
          onClick={handleNext}
          aria-label="Next Product"
          style={{
            opacity: cardDetailsOpacity,
            position: 'absolute',
            right: '10px',
            top: '155px',
            transform: 'translateY(-50%)',
            zIndex: 30,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--color-border)',
            color: 'var(--color-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease'
          }}
          className="coverflow-nav-btn"
        >
          <FaChevronRight />
        </motion.button>

        {/* Product Cards Track */}
        {products.map((product, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // Determine responsive transform & opacity based on distance from center active card & window width
          const isMobileXS = windowWidth <= 420;
          const isMobileSM = windowWidth <= 576;
          const isMobileMD = windowWidth <= 768;
          const isTablet = windowWidth <= 1024;

          let translateX = '0px';
          let translateY = '0px';
          let scale = 1;
          let opacity = 1;
          let zIndex = 1;

          const step1 = isMobileXS ? '120px' : isMobileSM ? '145px' : isMobileMD ? '175px' : isTablet ? '210px' : '240px';
          const step2 = isMobileXS ? '210px' : isMobileSM ? '250px' : isMobileMD ? '300px' : isTablet ? '360px' : '420px';
          const step3 = isMobileXS ? '300px' : isMobileSM ? '350px' : isMobileMD ? '420px' : isTablet ? '480px' : '550px';

          if (isActive) {
            translateX = '0px';
            translateY = '0px';
            scale = isMobileXS ? 1.02 : 1.08;
            opacity = 1;
            zIndex = 20;
          } else if (offset === -1) {
            translateX = `-${step1}`;
            translateY = isMobileXS ? '-15px' : '-35px';
            scale = isMobileXS ? 0.78 : 0.82;
            opacity = 0.85;
            zIndex = 10;
          } else if (offset === 1) {
            translateX = step1;
            translateY = isMobileXS ? '-15px' : '-35px';
            scale = isMobileXS ? 0.78 : 0.82;
            opacity = 0.85;
            zIndex = 10;
          } else if (offset === -2) {
            translateX = `-${step2}`;
            translateY = isMobileXS ? '-15px' : '-35px';
            scale = 0.7;
            opacity = isMobileSM ? 0.2 : 0.55;
            zIndex = 5;
          } else if (offset === 2) {
            translateX = step2;
            translateY = isMobileXS ? '-15px' : '-35px';
            scale = 0.7;
            opacity = isMobileSM ? 0.2 : 0.55;
            zIndex = 5;
          } else if (offset < -2) {
            translateX = `-${step3}`;
            translateY = '-35px';
            scale = 0.6;
            opacity = 0;
            zIndex = 1;
          } else if (offset > 2) {
            translateX = step3;
            translateY = '-35px';
            scale = 0.6;
            opacity = 0;
            zIndex = 1;
          }

          return (
            <motion.div
              key={product.id}
              onClick={() => setActiveIndex(index)}
              animate={{
                x: translateX,
                y: translateY,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex
              }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'absolute',
                width: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}
            >
              {/* Pure Product Image Card */}
              <div
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: isActive
                    ? '0 16px 36px rgba(0, 0, 0, 0.22), 0 0 20px rgba(200, 48, 25, 0.25)'
                    : '0 8px 20px rgba(0, 0, 0, 0.12)',
                  border: isActive ? '3px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {/* Product Full Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Dark Overlay exclusively on Non-Active cards for focus contrast */}
                {!isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.55) 100%)',
                      zIndex: 2,
                      pointerEvents: 'none'
                    }}
                  />
                )}

                {/* Top Card Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 3
                  }}
                >
                  <span
                    style={{
                      backgroundColor: product.category === 'Non-Veg' ? 'var(--color-primary)' : '#2E7D32',
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}
                  >
                    {product.category}
                  </span>

                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.65)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFF',
                      padding: '3px 8px',
                      borderRadius: '14px',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <FaStar style={{ color: '#FFB800' }} />
                    <span style={{ fontWeight: '700' }}>{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Details & Action Button OUTSIDE Card — ONLY FOR ACTIVE CARD */}
              {isActive && (
                <motion.div
                  style={{
                    opacity: cardDetailsOpacity,
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginTop: '4px'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--color-dark)',
                      lineHeight: '1.25',
                      margin: 0,
                      fontWeight: '800',
                      fontFamily: 'var(--font-helvetica)'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#555',
                      margin: 0,
                      fontWeight: '600'
                    }}
                  >
                    {product.weight} Jar • <span style={{ color: 'var(--color-primary)', fontWeight: '800' }}>₹{product.price}</span>
                  </p>

                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    style={{
                      width: '100%',
                      padding: '10px 18px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: addedId === product.id ? '#2E7D32' : 'var(--color-primary)',
                      border: 'none',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-button)',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      letterSpacing: '0.8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 18px rgba(200, 48, 25, 0.35)',
                      transition: 'all 0.3s ease',
                      marginTop: '4px'
                    }}
                  >
                    {addedId === product.id ? (
                      'Added to Cart ✓'
                    ) : (
                      <>
                        Add To Cart <FaShoppingBag style={{ fontSize: '0.8rem' }} />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination Dots */}
      <motion.div
        style={{
          opacity: cardDetailsOpacity,
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px'
        }}
      >
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: activeIndex === idx ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: activeIndex === idx ? 'var(--color-primary)' : 'var(--color-border)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </motion.div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .coverflow-stage {
            height: 480px !important;
          }
          .coverflow-stage > div {
            width: 230px !important;
          }
        }
        @media (max-width: 768px) {
          .coverflow-stage {
            height: 460px !important;
          }
          .coverflow-stage > div {
            width: 210px !important;
          }
          .coverflow-nav-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .coverflow-stage {
            height: 420px !important;
          }
          .coverflow-stage > div {
            width: 185px !important;
          }
        }
        @media (max-width: 360px) {
          .coverflow-stage {
            height: 400px !important;
          }
          .coverflow-stage > div {
            width: 170px !important;
          }
        }
      `}</style>
        </div>
      </div>
    </div>
  );
};

export default ProductCoverFlow;
