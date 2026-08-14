import React from 'react';
import { FaStar, FaPepperHot, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import Badge from '../common/Badge';

export const ProductInfo = ({ product }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Category & Badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Badge variant="primary">{product.category}</Badge>
        <Badge variant="gold">{product.subCategory}</Badge>
        {product.isBestseller && <Badge variant="spicy">BESTSELLER</Badge>}
      </div>

      {/* Product Title */}
      <h1
        style={{
          fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
          color: 'var(--color-dark)',
          lineHeight: '1.1'
        }}
      >
        {product.name}
      </h1>

      {/* Rating & Reviews */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)', fontSize: '1.1rem' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-dark)' }}>{product.rating}</span>
        <span style={{ color: '#888', fontSize: '0.9rem' }}>({product.reviewsCount} customer reviews)</span>
      </div>

      {/* Pricing & Weight */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
          ₹{product.price}
        </span>
        {product.originalPrice && (
          <span style={{ fontSize: '1.3rem', textDecoration: 'line-through', color: '#AAA' }}>
            ₹{product.originalPrice}
          </span>
        )}
        <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
          / Net Weight: {product.weight}
        </span>
      </div>

      {/* Spicy Level indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(166, 29, 27, 0.06)', padding: '10px 16px', borderRadius: 'var(--radius-sm)', width: 'fit-content' }}>
        <span style={{ fontFamily: 'var(--font-button)', fontSize: '0.9rem', color: 'var(--color-dark)', fontWeight: '700' }}>
          SPICE LEVEL:
        </span>
        <div style={{ display: 'flex', gap: '4px', color: 'var(--color-primary)' }}>
          {[...Array(product.spicyLevel)].map((_, i) => (
            <FaPepperHot key={i} style={{ fontSize: '1.1rem' }} />
          ))}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7' }}>
        {product.description}
      </p>

      {/* Guarantees Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: '16px 0',
          marginTop: '10px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#444' }}>
          <FaTruck style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
          <span>Express Pan-India Shipping</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#444' }}>
          <FaShieldAlt style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
          <span>100% Preservative Free</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#444' }}>
          <FaUndo style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
          <span>Leak-Proof Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
