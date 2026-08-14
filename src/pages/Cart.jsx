import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { Input } from '../components/ui/Input';
import { useCart } from '../hooks/useCart';
import { FaTrash, FaShoppingBag, FaArrowRight, FaTag, FaShieldAlt } from 'react-icons/fa';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, discountAmount, shippingFee, grandTotal, coupon, discountPercent, applyCoupon, removeCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode) {
      applyCoupon(couponCode);
      setCouponCode('');
    }
  };

  if (cart.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '75vh' }} className="section-padding">
        <Container>
          <Breadcrumb items={[{ label: 'Shopping Cart' }]} />
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 24px auto'
              }}
            >
              <FaShoppingBag />
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-dark)', marginBottom: '12px' }}>
              YOUR CART IS CURRENTLY EMPTY
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '32px' }}>
              Looks like you haven't added any delicious Kerala pickle jars yet!
            </p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Explore Our Pickles <FaArrowRight />
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Shopping Cart' }]} />

        <SectionTitle subtitle="YOUR PICKLE BASKET" title="REVIEW YOUR ORDER ITEMS" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px'
          }}
        >
          {/* Left: Cart Items List */}
          <div style={{ gridColumn: 'span 8' }} className="cart-col">
            <div
              style={{
                backgroundColor: '#FFF',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto auto',
                    gap: '20px',
                    alignItems: 'center',
                    paddingBottom: '24px',
                    marginBottom: '24px',
                    borderBottom: '1px solid var(--color-border)'
                  }}
                  className="cart-item-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: 'var(--color-cream-light)', borderRadius: 'var(--radius-sm)', padding: '8px' }}
                  />

                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-dark)', marginBottom: '4px' }}>
                      {item.name}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: '600' }}>
                      Weight: {item.weight} • ₹{item.price} each
                    </span>
                  </div>

                  {/* Qty Counter */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                    <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>-</button>
                    <span style={{ padding: '0 12px', fontWeight: '700' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                  </div>

                  {/* Total & Remove */}
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', display: 'block' }}>
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', color: '#D32F2F', fontSize: '0.9rem', cursor: 'pointer', marginTop: '6px' }}
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <Input
                  placeholder="Enter Coupon Code (e.g. ABC10 or FIRST20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ margin: 0, flexGrow: 1 }}
                />
                <Button variant="secondary" type="submit">Apply Coupon</Button>
              </form>

              {coupon && (
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(212, 175, 55, 0.15)', padding: '10px 16px', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ color: 'var(--color-dark)', fontWeight: '700', fontSize: '0.9rem' }}>
                    <FaTag style={{ color: 'var(--color-gold)', marginRight: '6px' }} /> Active Coupon: <strong>{coupon}</strong> ({discountPercent}% Off)
                  </span>
                  <button onClick={removeCoupon} style={{ background: 'none', border: 'none', color: '#D32F2F', fontWeight: '700', cursor: 'pointer' }}>Remove</button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div style={{ gridColumn: 'span 4' }} className="cart-col">
            <div
              style={{
                backgroundColor: 'var(--color-dark)',
                color: '#FFF',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-medium)'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '24px' }}>
                ORDER SUMMARY
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CCC' }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: '700', color: '#FFF' }}>₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-gold)' }}>
                    <span>Coupon Discount ({discountPercent}%)</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CCC' }}>
                  <span>Express Shipping</span>
                  <span>{shippingFee === 0 ? <strong style={{ color: '#25D366' }}>FREE</strong> : `₹${shippingFee}`}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px' }}>
                <span style={{ fontSize: '1.3rem', color: '#FFF' }}>Total Payable</span>
                <span style={{ fontSize: '2.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>
                  ₹{grandTotal}
                </span>
              </div>

              <Button variant="primary" size="lg" fullWidth onClick={() => navigate('/checkout')}>
                Proceed To Checkout <FaArrowRight />
              </Button>

              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#AAA', fontSize: '0.85rem' }}>
                <FaShieldAlt style={{ color: 'var(--color-gold)' }} /> 256-Bit SSL Encrypted Checkout
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .cart-col {
            grid-column: span 12 !important;
          }
          .cart-item-row {
            grid-template-columns: 60px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
