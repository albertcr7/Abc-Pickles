import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../home/ProductCard';
import { PRODUCTS } from '../../data/products';

export const RelatedProducts = ({ currentId }) => {
  const related = PRODUCTS.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <div style={{ marginTop: '80px' }}>
      <SectionTitle subtitle="PAIR IT UP" title="YOU MIGHT ALSO LOVE" align="left" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}
      >
        {related.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
