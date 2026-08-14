import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileMenu from './components/layout/MobileMenu';
import AppRouter from './router/AppRouter';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
          <div style={{ flexGrow: 1 }}>
            <AppRouter />
          </div>
          <Footer />
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--color-dark)',
                color: '#FFF',
                fontFamily: 'var(--font-body)',
                borderRadius: 'var(--radius-sm)'
              }
            }}
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
