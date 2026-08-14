import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ProductGallery = ({ image, name }) => {
  const [activeImage, setActiveImage] = useState(image);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Main Image Container */}
      <div
        style={{
          width: '100%',
          height: '420px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          boxShadow: 'var(--shadow-soft)',
          overflow: 'hidden'
        }}
      >
        <motion.img
          key={activeImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={activeImage}
          alt={name}
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
