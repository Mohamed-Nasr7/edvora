import React from 'react';
import productStyles from '../styles/Product.module.css';

function Product({ productName, data }) {
  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}></div>
    </div>
  );
}

export default Product;
