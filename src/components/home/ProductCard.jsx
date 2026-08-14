import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingBag, FaPepperHot } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';
import Badge from '../common/Badge';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      {/* Badge Tags */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        {product.isBestseller && <Badge variant="primary">BESTSELLER</Badge>}
        {product.category === 'Non-Veg' && <Badge variant="gold">NON-VEG</Badge>}
        {product.category === 'Veg' && <Badge variant="cream">100% VEG</Badge>}
      </div>

      {/* Image Container with Zoom */}
      <Link to={`/products/${product.id}`} style={{ overflow: 'hidden', display: 'block', height: '260px', backgroundColor: 'var(--color-cream-light)', position: 'relative' }}>
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: '20px'
          }}
        />
      </Link>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-gold)', fontSize: '0.9rem' }}>
              <FaStar />
              <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{product.rating}</span>
              <span style={{ color: '#888', fontSize: '0.8rem' }}>({product.reviewsCount})</span>
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)', fontFamily: 'var(--font-button)' }}>
              {product.weight}
            </span>
          </div>

          {/* Title */}
          <Link to={`/products/${product.id}`}>
            <h3
              style={{
                fontSize: '1.45rem',
                color: 'var(--color-dark)',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}
            >
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Short description */}
          <p
            style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '20px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '40px'
            }}
          >
            {product.tagline}
          </p>
        </div>

        {/* Price & Action */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: '#AAA', fontSize: '1rem' }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <Button
            variant="primary"
            fullWidth
            onClick={() => addToCart(product, 1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            Shop Now <FaShoppingBag />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
