import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { FaCheckCircle, FaShoppingBag, FaTruck, FaReceipt } from 'react-icons/fa';

export const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order || {
    orderId: 'ABC-' + Math.floor(100000 + Math.random() * 900000),
    estimatedDelivery: '3 - 5 Business Days',
    totalAmount: 998
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh' }} className="section-padding">
      <Container>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          {/* Success Icon */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3.5rem',
              margin: '0 auto 24px auto',
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)'
            }}
          >
            <FaCheckCircle />
          </div>

          <span style={{ fontFamily: 'var(--font-button)', color: 'var(--color-primary)', fontWeight: '700', fontSize: '1rem', letterSpacing: '2px' }}>
            ORDER CONFIRMED!
          </span>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', color: 'var(--color-dark)', margin: '12px 0 16px 0' }}>
            THANK YOU FOR YOUR ORDER!
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '36px' }}>
            Your delicious ABC Pickle jars are being freshly packed and prepared for dispatch. A confirmation message has been sent to your contact number.
          </p>

          {/* Details Card */}
          <div
            style={{
              backgroundColor: '#FFF',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-medium)',
              textAlign: 'left',
              marginBottom: '36px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>Order ID:</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-primary)' }}>{order.orderId}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px', marginBottom: '16px' }}>
              <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>Estimated Delivery:</span>
              <span style={{ fontWeight: '600', color: '#25D366' }}>{order.estimatedDelivery}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>Total Paid:</span>
              <span style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-dark)' }}>₹{order.totalAmount || 998}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Continue Shopping <FaShoppingBag />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderSuccess;
