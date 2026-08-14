import React from 'react';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const styles = {
    primary: { bg: 'var(--color-primary)', color: '#fff' },
    dark: { bg: 'var(--color-dark)', color: '#fff' },
    cream: { bg: 'var(--color-cream)', color: 'var(--color-dark)' },
    gold: { bg: 'var(--color-gold)', color: 'var(--color-dark)' },
    spicy: { bg: '#D32F2F', color: '#fff' }
  };

  const selected = styles[variant] || styles.primary;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.75rem',
        fontWeight: '700',
        fontFamily: 'var(--font-button)',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        backgroundColor: selected.bg,
        color: selected.color,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
