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
        <div className="products-grid-filter-bar">
          {/* Veg & Non-Veg Category Filter Tabs */}
          <div className="products-grid-categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const bg = cat.activeBg || 'var(--color-primary)';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  style={{
                    border: isActive ? `2px solid ${bg}` : '1px solid var(--color-border)',
                    backgroundColor: isActive ? bg : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-dark)',
                    boxShadow: isActive ? `0 4px 14px ${bg}44` : 'var(--shadow-soft)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (3D Coverflow vs Grid) */}
          <div className="view-mode-switcher">
            <button
              onClick={() => setViewMode('coverflow')}
              style={{
                backgroundColor: viewMode === 'coverflow' ? 'var(--color-dark)' : 'transparent',
                color: viewMode === 'coverflow' ? 'var(--color-cream)' : '#666'
              }}
            >
              3D Cover Flow 🎴
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                backgroundColor: viewMode === 'grid' ? 'var(--color-dark)' : 'transparent',
                color: viewMode === 'grid' ? 'var(--color-cream)' : '#666'
              }}
            >
              Classic Grid ▦
            </button>
          </div>
        </div>

        <style>{`
          .products-grid-filter-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 32px;
          }
          .products-grid-categories {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }
          .category-tab-btn {
            padding: 10px 22px;
            border-radius: var(--radius-full);
            font-family: var(--font-button);
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .view-mode-switcher {
            display: flex;
            background-color: #FFFFFF;
            border-radius: var(--radius-full);
            padding: 4px;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-soft);
          }
          .view-mode-switcher button {
            padding: 8px 16px;
            border-radius: var(--radius-full);
            border: none;
            font-family: var(--font-button);
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          @media (max-width: 600px) {
            .products-grid-filter-bar {
              justify-content: center;
              gap: 12px;
              margin-bottom: 20px;
            }
            .products-grid-categories {
              justify-content: center;
              gap: 6px;
            }
            .category-tab-btn {
              padding: 8px 14px;
              font-size: 0.8rem;
            }
            .view-mode-switcher button {
              padding: 6px 12px;
              font-size: 0.78rem;
            }
          }
        `}</style>

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
