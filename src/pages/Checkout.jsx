import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import { Input, Select } from '../components/ui/Input';
import { useCart } from '../hooks/useCart';
import { submitOrder } from '../services/api';
import { FaLock, FaCreditCard, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const Checkout = () => {
  const { cart, grandTotal, subtotal, discountAmount, shippingFee, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: ''
  });

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.address || !form.pincode) {
      toast.error('Please fill in all required shipping fields');
      return;
    }

    setLoading(true);
    const orderResult = await submitOrder({
      items: cart,
      shipping: form,
      paymentMethod,
      totalAmount: grandTotal
    });
    setLoading(false);

    clearCart();
    navigate('/order-success', { state: { order: orderResult } });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Cart', link: '/cart' }, { label: 'Checkout' }]} />

        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-dark)' }}>CHECKOUT & DELIVERY</h1>
          <p style={{ color: '#666' }}>Enter your delivery address and select payment options to confirm your order.</p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '40px'
            }}
          >
            {/* Shipping Form */}
            <div style={{ gridColumn: 'span 7' }} className="checkout-col">
              <div
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-soft)',
                  marginBottom: '24px'
                }}
              >
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-dark)', marginBottom: '24px' }}>
                  1. SHIPPING ADDRESS
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="First Name *" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  <Input label="Last Name *" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <Input label="Email Address *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                <Input label="Street Address / House No / Landmark *" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <Input label="City *" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  <Input label="State *" required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
                  <Input label="Pincode *" required value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} />
                </div>
              </div>

              {/* Payment Method selection */}
              <div
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-dark)', marginBottom: '24px' }}>
                  2. PAYMENT METHOD
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { id: 'UPI', label: 'UPI / Google Pay / PhonePe / Paytm', icon: <FaCreditCard /> },
                    { id: 'Card', label: 'Credit / Debit Card (Visa, Mastercard, RuPay)', icon: <FaCreditCard /> },
                    { id: 'COD', label: 'Cash on Delivery (COD)', icon: <FaMoneyBillWave /> }
                  ].map((m) => (
                    <label
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        border: paymentMethod === m.id ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        backgroundColor: paymentMethod === m.id ? 'rgba(166, 29, 27, 0.04)' : '#FFF',
                        cursor: 'pointer'
                      }}
                    >
                      <input type="radio" name="payment" checked={paymentMethod === m.id} onChange={() => {}} />
                      <span style={{ fontSize: '1.3rem', color: 'var(--color-primary)' }}>{m.icon}</span>
                      <span style={{ fontWeight: '600', color: 'var(--color-dark)' }}>{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Right */}
            <div style={{ gridColumn: 'span 5' }} className="checkout-col">
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
                  ORDER SUMMARY ({cart.length} ITEMS)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '240px', overflowY: 'auto', marginBottom: '24px', paddingRight: '8px' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem' }}>
                      <span>{item.name} x {item.quantity}</span>
                      <span style={{ fontWeight: '700', color: 'var(--color-gold)' }}>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CCC' }}>
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-gold)' }}>
                      <span>Discount</span>
                      <span>- ₹{discountAmount}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#CCC' }}>
                    <span>Shipping</span>
                    <span>{shippingFee === 0 ? <strong style={{ color: '#25D366' }}>FREE</strong> : `₹${shippingFee}`}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#FFF', paddingTop: '12px', borderTop: '1px dashed rgba(255,255,255,0.2)' }}>
                    <span>Total Amount</span>
                    <span style={{ color: 'var(--color-gold)' }}>₹{grandTotal}</span>
                  </div>
                </div>

                <Button variant="gold" size="lg" fullWidth type="submit" disabled={loading}>
                  {loading ? 'Processing Order...' : `Confirm & Pay ₹${grandTotal}`}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .checkout-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
