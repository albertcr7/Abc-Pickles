import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const QuantitySelector = ({ quantity, onChange }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        style={{
          padding: '12px 16px',
          background: 'none',
          border: 'none',
          color: 'var(--color-dark)',
          fontSize: '0.9rem',
          cursor: 'pointer'
        }}
      >
        <FaMinus />
      </button>

      <span
        style={{
          padding: '0 16px',
          fontWeight: '700',
          fontSize: '1.1rem',
          fontFamily: 'var(--font-heading)',
          minWidth: '40px',
          textAlign: 'center'
        }}
      >
        {quantity}
      </span>

      <button
        onClick={() => onChange(quantity + 1)}
        style={{
          padding: '12px 16px',
          background: 'none',
          border: 'none',
          color: 'var(--color-dark)',
          fontSize: '0.9rem',
          cursor: 'pointer'
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;
