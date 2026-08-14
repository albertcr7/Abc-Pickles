import React, { useState } from 'react';
import Tabs from '../ui/Tabs';

export const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('ingredients');

  const tabs = [
    { id: 'ingredients', label: 'Ingredients & Spices' },
    { id: 'nutrition', label: 'Nutrition Facts' },
    { id: 'storage', label: 'Storage & Care' }
  ];

  return (
    <div
      style={{
        marginTop: '60px',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        padding: '36px',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div>
        {activeTab === 'ingredients' && (
          <div>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Handpicked Authentic Ingredients
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--color-dark)'
                  }}
                >
                  ✓ {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Nutritional Values (Approx. per 100g)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              <div style={{ backgroundColor: 'var(--color-bg)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: '#777' }}>Energy Value</span>
                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary)', margin: '4px 0 0 0' }}>
                  {product.nutrition.calories}
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: '#777' }}>Protein</span>
                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', margin: '4px 0 0 0' }}>
                  {product.nutrition.protein}
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: '#777' }}>Total Fat</span>
                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', margin: '4px 0 0 0' }}>
                  {product.nutrition.fat}
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', color: '#777' }}>Shelf Life</span>
                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-gold)', margin: '4px 0 0 0' }}>
                  {product.nutrition.shelfLife}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'storage' && (
          <div>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
              How to Store for Maximum Freshness
            </h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
              <li>Store in a cool, dry place away from direct sunlight.</li>
              <li>Always use a clean, dry spoon to scoop pickle.</li>
              <li>Ensure the oil layer stays intact over the pickle pieces to retain aroma and natural shelf life.</li>
              <li>Refrigeration after opening is recommended for non-veg pickles.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
