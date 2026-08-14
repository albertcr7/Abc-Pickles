import React, { useState } from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { Input, Textarea, Select } from '../components/ui/Input';
import { REVIEWS_DATA } from '../data/products';
import { FaStar, FaQuoteLeft, FaMapMarkerAlt, FaVideo, FaPen } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', rating: '5', comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! Your review has been submitted for verification.');
    setIsModalOpen(false);
    setFormData({ name: '', location: '', rating: '5', comment: '' });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Customer Reviews' }]} />

        {/* Overall Rating Hero Header */}
        <div
          style={{
            backgroundColor: 'var(--color-dark)',
            color: '#FFF',
            borderRadius: 'var(--radius-lg)',
            padding: '48px 32px',
            textAlign: 'center',
            marginBottom: '60px',
            boxShadow: 'var(--shadow-medium)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-button)', color: 'var(--color-gold)', fontWeight: '700', fontSize: '1rem', letterSpacing: '2px' }}>
            VERIFIED FEEDBACK
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: '#FFF', margin: '12px 0 16px 0' }}>
            WHAT OUR CUSTOMERS ARE SAYING
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '16px' }}>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              4.9 OUT OF 5.0
            </span>
          </div>
          <p style={{ color: '#AAA', maxWidth: '600px', margin: '0 auto 28px auto' }}>
            Based on 5,000+ verified customer reviews across India.
          </p>

          <Button variant="gold" size="md" onClick={() => setIsModalOpen(true)}>
            Write A Review <FaPen />
          </Button>
        </div>

        {/* Video Testimonials Section Preview */}
        <SectionTitle subtitle="VIDEO REVIEWS" title="UNBOXING & TASTE REACTION" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '80px'
          }}
        >
          {[
            { title: 'Kerala Prawn Pickle Unboxing', author: 'Foodie Vlogs Kochi', views: '24K Views' },
            { title: 'Malabar Chicken Pickle Taste Test', author: 'Bangalore Eats', views: '18K Views' },
            { title: 'Why ABC Mango Pickle Hits Different', author: 'Chef Rahul', views: '32K Views' }
          ].map((vid, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div
                style={{
                  height: '180px',
                  backgroundColor: 'var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  fontSize: '3rem',
                  cursor: 'pointer'
                }}
              >
                <FaVideo />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-dark)', marginBottom: '4px' }}>{vid.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#777' }}>
                  <span>{vid.author}</span>
                  <span>{vid.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Grid */}
        <SectionTitle subtitle="RECENT REVIEWS" title="AUTHENTIC EXPERIENCES" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)', fontSize: '1rem', marginBottom: '12px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--color-dark)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <img src={rev.avatar} alt={rev.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-dark)', marginBottom: '2px' }}>{rev.name}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#777' }}>
                    <FaMapMarkerAlt style={{ color: 'var(--color-primary)' }} />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Write A Customer Review">
          <form onSubmit={handleSubmit}>
            <Input label="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <Input label="City / State" required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            <Select
              label="Rating"
              options={[
                { value: '5', label: '5 Stars - Outstanding!' },
                { value: '4', label: '4 Stars - Very Good' },
                { value: '3', label: '3 Stars - Average' }
              ]}
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
            />
            <Textarea label="Your Feedback" required value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
            <Button variant="primary" type="submit" fullWidth>Submit Review</Button>
          </form>
        </Modal>
      </Container>
    </div>
  );
};

export default Reviews;
