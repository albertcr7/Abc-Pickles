import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, dark, gold
  size = 'md', // sm, md, lg
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: 'var(--radius-sm)',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: '2px solid transparent',
    width: fullWidth ? '100%' : 'auto',
  };

  const sizes = {
    sm: { padding: '8px 18px', fontSize: '0.9rem' },
    md: { padding: '14px 28px', fontSize: '1.05rem' },
    lg: { padding: '18px 40px', fontSize: '1.2rem' }
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-primary)',
      boxShadow: '0 4px 18px rgba(166, 29, 27, 0.35)'
    },
    secondary: {
      backgroundColor: 'var(--color-cream)',
      color: 'var(--color-dark)',
      borderColor: 'var(--color-cream)',
      boxShadow: 'var(--shadow-soft)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)'
    },
    dark: {
      backgroundColor: 'var(--color-dark)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-dark)',
      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)'
    },
    gold: {
      backgroundColor: 'var(--color-gold)',
      color: 'var(--color-dark)',
      borderColor: 'var(--color-gold)',
      fontWeight: '700'
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`btn-shine ${className}`}
      style={{
        ...baseStyles,
        ...sizes[size],
        ...variants[variant],
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
