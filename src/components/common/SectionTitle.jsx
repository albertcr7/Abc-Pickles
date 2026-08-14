import React from 'react';

export const SectionTitle = ({
  subtitle,
  title,
  align = 'center', // left, center, right
  dark = false,
  className = ''
}) => {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: '40px',
        maxWidth: align === 'center' ? '700px' : '100%',
        margin: align === 'center' ? '0 auto 40px auto' : '0 0 40px 0'
      }}
      className={className}
    >
      {subtitle && (
        <span
          style={{
            fontFamily: 'var(--font-button)',
            color: dark ? 'var(--color-cream)' : 'var(--color-primary)',
            fontSize: '0.88rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '6px'
          }}
        >
          {subtitle}
        </span>
      )}
      {title && (
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
            color: dark ? 'var(--color-white)' : 'var(--color-dark)',
            marginTop: '4px',
            letterSpacing: '0.5px',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionTitle;
