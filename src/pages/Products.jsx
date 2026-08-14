import React, { useState } from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import ProductCard from '../components/home/ProductCard';
import Tabs from '../components/ui/Tabs';
import { Input } from '../components/ui/Input';
import { PRODUCTS } from '../data/products';
import { FaSearch } from 'react-icons/fa';

export const Products = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'All', label: 'All Pickles' },
    { id: 'Non-Veg', label: 'Non-Veg Specialties' },
    { id: 'Veg', label: '100% Veg Pickles' }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesTab = activeTab === 'All' || p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '80vh' }} className="section-padding">
      <Container>
        <Breadcrumb items={[{ label: 'Our Pickles Catalog' }]} />

        <SectionTitle
          subtitle="AUTHENTIC HANDMADE COLLECTION"
          title="EXPLORE KERALA'S FINEST PICKLES"
        />

        {/* Filter Controls & Search */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          <Tabs tabs={filterTabs} activeTab={activeTab} onChange={setActiveTab} />

          <div style={{ position: 'relative', width: '300px' }}>
            <Input
              type="text"
              placeholder="Search pickles by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingRight: '40px', margin: 0 }}
            />
            <FaSearch
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888'
              }}
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-dark)', marginBottom: '12px' }}>No Pickles Found</h3>
            <p style={{ color: '#666' }}>Try adjusting your search query or switching category filters.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
