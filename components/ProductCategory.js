import React, { useState, useEffect } from 'react';
import productStyles from '../styles/Product.module.css';

function ProductCategory({ productName, products }) {
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    console.log(productName, products);
  }, []);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}></div>
    </div>
  );
}

export default ProductCategory;
