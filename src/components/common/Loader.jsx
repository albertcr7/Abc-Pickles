import React from 'react';

export const Loader = ({ size = '40px', color = 'var(--color-primary)' }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <div
        style={{
          width: size,
          height: size,
          border: `4px solid rgba(166, 29, 27, 0.1)`,
          borderTop: `4px solid ${color}`,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
