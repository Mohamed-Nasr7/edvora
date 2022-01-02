import React, { useState, useEffect } from 'react';
import productStyles from '../styles/Product.module.css';

function ProductCategory({ productName, data }) {
  const [productItems, setProductItems] = useState();
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    const products = data.filter(product => {
      return product.product_name === productName;
    });
    setProductItems(products);
    setProductsCount(products.length);
  }, []);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}></div>
    </div>
  );
}

export default ProductCategory;
