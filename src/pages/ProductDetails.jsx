import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Breadcrumb from '../components/common/Breadcrumb';
import Loader from '../components/common/Loader';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import QuantitySelector from '../components/product/QuantitySelector';
import AddToCart from '../components/product/AddToCart';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import { fetchProductById } from '../services/api';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader size="50px" />
      </div>
    );
  }

  if (!product) {
    return (
      <Container>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '16px' }}>Product Not Found</h2>
          <p style={{ marginBottom: '24px' }}>The pickle jar you are looking for might have been sold out.</p>
          <Link to="/products" style={{ color: 'var(--color-primary)', fontWeight: '700' }}>← Back to All Pickles</Link>
        </div>
      </Container>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Pickles', link: '/products' }, { label: product.name }]} />

        {/* Details Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            marginTop: '24px'
          }}
        >
          {/* Gallery */}
          <div style={{ gridColumn: 'span 6' }} className="details-left">
            <ProductGallery image={product.image} name={product.name} />
          </div>

          {/* Info & Purchase */}
          <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '28px' }} className="details-right">
            <ProductInfo product={product} />

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontFamily: 'var(--font-button)', fontWeight: '700', fontSize: '1rem', color: 'var(--color-dark)' }}>
                QUANTITY:
              </span>
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
            </div>

            {/* Buttons */}
            <AddToCart product={product} quantity={quantity} />
          </div>
        </div>

        {/* Tabs & Additional Info */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <RelatedProducts currentId={product.id} />
      </Container>
      <style>{`
        @media (max-width: 992px) {
          .details-left, .details-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
