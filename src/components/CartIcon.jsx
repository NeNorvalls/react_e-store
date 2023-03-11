import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  return (
    <div>
      <FaShoppingCart size={20} />
      <span>0</span>
    </div>
  );
};

export default CartIcon;
