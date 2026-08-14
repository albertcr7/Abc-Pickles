import React from 'react';
import { motion } from 'framer-motion';

export const Tabs = ({ tabs = [], activeTab, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        borderBottom: '2px solid var(--color-border)',
        marginBottom: '28px',
        overflowX: 'auto',
        paddingBottom: '4px'
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              position: 'relative',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: '700',
              fontFamily: 'var(--font-button)',
              letterSpacing: '1px',
              color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="activeTabUnderline"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '2px'
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
