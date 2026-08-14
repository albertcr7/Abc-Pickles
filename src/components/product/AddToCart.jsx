import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaBolt } from 'react-icons/fa';
import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';

export const AddToCart = ({ product, quantity }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
      <Button
        variant="primary"
        size="lg"
        onClick={() => addToCart(product, quantity)}
        style={{ flex: '1 1 200px' }}
      >
        Add To Cart <FaShoppingBag />
      </Button>

      <Button
        variant="gold"
        size="lg"
        onClick={handleBuyNow}
        style={{ flex: '1 1 200px' }}
      >
        Buy Now <FaBolt />
      </Button>
    </div>
  );
};

export default AddToCart;
