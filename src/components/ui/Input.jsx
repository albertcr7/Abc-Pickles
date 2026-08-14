import React from 'react';

export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-button)', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-dark)' }}>
          {label}
        </label>
      )}
      <input
        className={className}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          border: error ? '2px solid #D32F2F' : '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF',
          fontSize: '1rem',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          transition: 'var(--transition-smooth)'
        }}
        {...props}
      />
      {error && <span style={{ fontSize: '0.8rem', color: '#D32F2F' }}>{error}</span>}
    </div>
  );
};

export const Textarea = ({ label, error, className = '', ...props }) => {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-button)', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-dark)' }}>
          {label}
        </label>
      )}
      <textarea
        className={className}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          border: error ? '2px solid #D32F2F' : '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF',
          fontSize: '1rem',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          minHeight: '120px',
          resize: 'vertical',
          transition: 'var(--transition-smooth)'
        }}
        {...props}
      />
      {error && <span style={{ fontSize: '0.8rem', color: '#D32F2F' }}>{error}</span>}
    </div>
  );
};

export const Select = ({ label, options = [], error, className = '', ...props }) => {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-button)', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-dark)' }}>
          {label}
        </label>
      )}
      <select
        className={className}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          border: error ? '2px solid #D32F2F' : '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF',
          fontSize: '1rem',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          cursor: 'pointer'
        }}
        {...props}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span style={{ fontSize: '0.8rem', color: '#D32F2F' }}>{error}</span>}
    </div>
  );
};
