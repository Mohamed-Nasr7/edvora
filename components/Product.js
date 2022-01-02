import React from 'react';
import productStyles from '../styles/Product.module.css';

function Product({ productName, data }) {
  return (
    <div>
      <h3 className={productStyles.title}>{productName}</h3>
      <div>Cards</div>
    </div>
  );
}

export default Product;
