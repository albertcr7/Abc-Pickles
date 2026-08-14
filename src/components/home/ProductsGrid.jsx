import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import Container from '../layout/Container';
import ProductCoverFlow from './ProductCoverFlow';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../data/products';

export const ProductsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' or 'grid'

  const categories = [
    { id: 'All', label: 'All Pickles' },
    { id: 'Non-Veg', label: 'Non-Veg Pickles 🥩', activeBg: 'var(--color-primary)' },
    { id: 'Veg', label: 'Veg Pickles 🌿', activeBg: '#2E7D32' },
    { id: 'Bestsellers', label: 'Bestsellers ⭐', activeBg: 'var(--color-dark)' }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Bestsellers') return product.isBestseller;
    return product.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section style={{ backgroundColor: 'var(--color-bg)', overflow: 'visible', position: 'relative', padding: '50px 0' }}>
      <Container>
        <SectionTitle
          subtitle="OUR PICKLE COLLECTION"
          title="PICKLES THAT HIT DIFFERENT"
        />

        {/* Category Tabs & View Mode Filter Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {/* Veg & Non-Veg Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const bg = cat.activeBg || 'var(--color-primary)';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-full)',
                    border: isActive ? `2px solid ${bg}` : '1px solid var(--color-border)',
                    backgroundColor: isActive ? bg : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-dark)',
                    fontFamily: 'var(--font-button)',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 4px 14px ${bg}44` : 'var(--shadow-soft)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (3D Coverflow vs Grid) */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-full)',
              padding: '4px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <button
              onClick={() => setViewMode('coverflow')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: viewMode === 'coverflow' ? 'var(--color-dark)' : 'transparent',
                color: viewMode === 'coverflow' ? 'var(--color-cream)' : '#666',
                fontFamily: 'var(--font-button)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              3D Cover Flow 🎴
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: viewMode === 'grid' ? 'var(--color-dark)' : 'transparent',
                color: viewMode === 'grid' ? 'var(--color-cream)' : '#666',
                fontFamily: 'var(--font-button)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Classic Grid ▦
            </button>
          </div>
        </div>

        {/* Dynamic Display Component */}
        {viewMode === 'coverflow' ? (
          <ProductCoverFlow products={filteredProducts} />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '32px'
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductsGrid;
