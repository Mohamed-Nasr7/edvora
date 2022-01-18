import React, { useState, useEffect } from 'react';
import productStyles from '../styles/ProductCategory.module.css';
import ProductItem from './ProductItem';

function ProductCategory({ productName, products }) {
  const [productsCount, setProductsCount] = useState();
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    setProductsCount(products.length);
  }, []);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}>
        {products.map(item => (
          <ProductItem key={item.time} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
