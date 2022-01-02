import React, { useState, useEffect } from 'react';
import productStyles from '../styles/Product.module.css';

function ProductCategory({ productName, data }) {
  const [productItems, setProductItems] = useState();

  useEffect(() => {
    const products = data.map(product => {
      if (product.product_name === productName) return product;
    });
    setProductItems(products);
  }, []);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}></div>
    </div>
  );
}

export default ProductCategory;
