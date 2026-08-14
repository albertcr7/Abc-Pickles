import { PRODUCTS, REVIEWS_DATA } from '../data/products';

export const fetchProducts = async (category = 'All') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === 'All') {
        resolve(PRODUCTS);
      } else {
        resolve(PRODUCTS.filter((p) => p.category === category));
      }
    }, 200);
  });
};

export const fetchProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 200);
  });
};

export const fetchReviews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(REVIEWS_DATA);
    }, 200);
  });
};

export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully! We will get back to you shortly.' });
    }, 400);
  });
};

export const submitOrder = async (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: 'ABC-' + Math.floor(100000 + Math.random() * 900000),
        estimatedDelivery: '3 - 5 Business Days',
        ...orderData
      });
    }, 500);
  });
};
