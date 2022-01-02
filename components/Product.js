import React from 'react';
import productStyles from '../styles/Product.module.css';

function Product({ productName, data }) {
  return (
    <div>
      <h4 className={productStyles.title}>{productName}</h4>
      <div>Cards</div>
    </div>
  );
}

export default Product;
