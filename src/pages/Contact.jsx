import React, { useState } from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import Accordion from '../components/ui/Accordion';
import { Input, Textarea, Select } from '../components/ui/Input';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { submitContactForm } from '../services/api';
import toast from 'react-hot-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitContactForm(formData);
    setLoading(false);
    toast.success(res.message);
    setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
  };

  const faqItems = [
    {
      title: 'Do you deliver pickles across India?',
      content: 'Yes! We ship pan-India using express courier partners with leak-proof glass jar packaging. Standard delivery takes 3-5 business days.'
    },
    {
      title: 'Are your pickles 100% free of artificial preservatives?',
      content: 'Absolutely! We use pure cold-pressed Gingelly oil, natural rock salt, and authentic food-grade vinegar as natural preservatives, just like traditional family recipes.'
    },
    {
      title: 'What is the shelf life of Non-Veg pickles?',
      content: 'Our non-veg pickles (Prawn, Chicken, Fish) have a shelf life of 6 months. Once opened, we recommend keeping them refrigerated and using a clean, dry spoon.'
    },
    {
      title: 'Do you cater bulk orders for weddings or corporate gifts?',
      content: 'Yes! We offer customized glass jar packaging and special discounts for corporate gifting, festival packs, and wedding return gifts. Contact us via WhatsApp for custom quotes.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <SectionTitle subtitle="WE'D LOVE TO HEAR FROM YOU" title="GET IN TOUCH WITH ABC PICKLES" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            marginBottom: '80px'
          }}
        >
          {/* Contact Info Card */}
          <div style={{ gridColumn: 'span 5' }} className="contact-col">
            <div
              style={{
                backgroundColor: 'var(--color-dark)',
                color: '#FFF',
                borderRadius: 'var(--radius-lg)',
                padding: '40px',
                height: '100%',
                boxShadow: 'var(--shadow-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '24px' }}>
                  CONTACT INFORMATION
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <FaMapMarkerAlt style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '2px' }}>Factory & Outlet</h5>
                      <p style={{ color: '#AAA', fontSize: '0.9rem', margin: 0 }}>ABC Pickles Works, Main Road, Kottayam, Kerala - 686001</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <FaPhoneAlt style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
                    <div>
                      <h5 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '2px' }}>Phone Support</h5>
                      <p style={{ color: '#AAA', fontSize: '0.9rem', margin: 0 }}>+91 98765 43210 / +91 481 234567</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <FaEnvelope style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
                    <div>
                      <h5 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '2px' }}>Email Inquiry</h5>
                      <p style={{ color: '#AAA', fontSize: '0.9rem', margin: 0 }}>support@abcpickles.com</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <FaClock style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
                    <div>
                      <h5 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '2px' }}>Working Hours</h5>
                      <p style={{ color: '#AAA', fontSize: '0.9rem', margin: 0 }}>Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFF',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-button)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  marginTop: '32px'
                }}
              >
                <FaWhatsapp style={{ fontSize: '1.4rem' }} /> Chat On WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ gridColumn: 'span 7' }} className="contact-col">
            <div
              style={{
                backgroundColor: '#FFF',
                borderRadius: 'var(--radius-lg)',
                padding: '40px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <h3 style={{ fontSize: '2rem', color: 'var(--color-dark)', marginBottom: '24px' }}>
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  <Input label="Email Address" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <Select
                    label="Subject"
                    options={[
                      { value: 'General', label: 'General Inquiry' },
                      { value: 'Bulk', label: 'Bulk / Wholesale Order' },
                      { value: 'Feedback', label: 'Feedback & Suggestions' }
                    ]}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <Textarea label="Your Message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                <Button variant="primary" type="submit" size="lg" disabled={loading} fullWidth>
                  {loading ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <SectionTitle subtitle="FREQUENTLY ASKED QUESTIONS" title="GOT QUESTIONS? WE HAVE ANSWERS" />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Accordion items={faqItems} />
        </div>
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .contact-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
