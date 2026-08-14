import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { FaHome } from 'react-icons/fa';

export const NotFound = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <h1 style={{ fontSize: '7rem', color: 'var(--color-primary)', lineHeight: '1', fontFamily: 'var(--font-heading)' }}>
            404
          </h1>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '16px' }}>
            PAGE NOT FOUND
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '32px' }}>
            The page you are looking for might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Return To Home Page <FaHome />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
