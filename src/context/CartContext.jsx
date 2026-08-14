import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('abc_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [coupon, setCoupon] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    localStorage.setItem('abc_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        toast.success(`Updated ${product.name} quantity in cart!`);
        return updated;
      } else {
        toast.success(`Added ${product.name} to cart!`);
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === productId);
      if (item) {
        toast.success(`Removed ${item.name} from cart.`);
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
    setDiscountPercent(0);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ABC10' || cleanCode === 'KERALA10') {
      setCoupon(cleanCode);
      setDiscountPercent(10);
      toast.success('Coupon applied! 10% discount added.');
      return true;
    } else if (cleanCode === 'FIRST20') {
      setCoupon(cleanCode);
      setDiscountPercent(20);
      toast.success('Awesome! 20% First Order discount applied!');
      return true;
    } else {
      toast.error('Invalid coupon code. Try ABC10 or FIRST20');
      return false;
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
    setDiscountPercent(0);
    toast.success('Coupon removed');
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal > 799 || cart.length === 0 ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);
  const totalItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        discountAmount,
        shippingFee,
        grandTotal,
        totalItemsCount,
        coupon,
        discountPercent,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
