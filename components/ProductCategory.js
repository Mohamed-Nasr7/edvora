import React, { useState, useEffect } from 'react';
import productStyles from '../styles/Product.module.css';

function ProductCategory({ productName, products }) {
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    setProductsCount(products.length);
  }, []);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}>
        {products.map(item => (
          <p>{item.product_name}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
