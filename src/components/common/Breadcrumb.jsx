import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav style={{ padding: '16px 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
          Home
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <FaChevronRight style={{ fontSize: '0.7rem', color: '#aaa' }} />
            {item.link ? (
              <Link to={item.link} style={{ color: 'var(--color-primary)', fontWeight: '500' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--color-dark)', fontWeight: '600' }}>{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
