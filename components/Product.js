import React from 'react';
import productStyles from '../styles/Product.module.css';

function Product({ productName, data }) {
  return (
    <div>
      <h4>{productName}</h4>
      <div>Cards</div>
    </div>
  );
}

export default Product;
